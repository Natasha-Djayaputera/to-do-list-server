import { Request, Response } from "express";
import { request } from "http";
import {
  FailResponseBody,
  TaskListResponseData,
  SuccessResponseBody,
} from "../dto/response";
import sortQueryHelper, { SortParameter } from "../helpers/sort";
import { DatabaseService } from "../services/database";

interface GetTaskListRequestBody {}
export interface GetTaskListRequestPathParameter {
  sort?: SortParameter[];
}

type GetTaskListResponseBody =
  | SuccessResponseBody<TaskListResponseData[]>
  | FailResponseBody;

export default async function getTaskListHandler(
  req: Request<
    GetTaskListRequestPathParameter,
    GetTaskListResponseBody,
    GetTaskListRequestBody
  >,
  res: Response<GetTaskListResponseBody>
) {
  try {
    const sort: SortParameter[] = sortQueryHelper(req.query.sort);
    const page = Number.isNaN(Number(req.query.page))
      ? undefined
      : Number(req.query.page);
    const size = Number.isNaN(Number(req.query.size))
      ? undefined
      : Number(req.query.size);

    const TaskList = await DatabaseService.instance.getTaskList(
      sort,
      page,
      size
    );
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
