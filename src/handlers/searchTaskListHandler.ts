import { Request, Response } from "express";
import {
  FailResponseBody,
  TaskListResponseData,
  SuccessResponseBody,
} from "../dto/response";
import { DatabaseService } from "../services/database";

export interface SearchTaskListRequestPathParameter {
  task: string;
}

type SearchTaskListResponseBody =
  | SuccessResponseBody<TaskListResponseData[]>
  | FailResponseBody;

export default async function searchTaskListHandler(
  req: Request<
    SearchTaskListRequestPathParameter,
    SearchTaskListResponseBody,
    never
  >,
  res: Response<SearchTaskListResponseBody>
) {
  try {
    const { task } = req.params;

    console.log(task);

    const TaskList = await DatabaseService.instance.searchTaskList(task);
    res.status(201).send({
      code: "success",
      data: TaskList.map((task) => {
        let newTask: TaskListResponseData = {
          ...task,
          dueDate: task.dueDate === null ? null : task.dueDate.toString(),
        };
        return newTask;
      }),
    });
    return;
  } catch (e) {
    res.status(500).send({
      code: "fail",
      error: {
        message: e instanceof Error ? e.message : "unhandled-exception",
      },
    });
    return;
  }
}
