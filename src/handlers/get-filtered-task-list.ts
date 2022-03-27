import { Request, Response } from "express";
import {
  FailResponseBody,
  TaskListResponseData,
  SuccessResponseBody,
} from "../dto/response";
import { DatabaseService } from "../services/database";

export interface GetFilteredTaskListRequestPathParameter {
  task?: String;
  dueDate?: Date;
  startDate?: Date;
  endDate?: Date;
  tagNames?: String | String[];
  listName?: String;
}

type GetFilteredTaskListResponseBody =
  | SuccessResponseBody<TaskListResponseData>
  | FailResponseBody;

export default async function getFilteredTaskListHandler(
  req: Request<
    GetFilteredTaskListRequestPathParameter,
    GetFilteredTaskListResponseBody,
    never
  >,
  res: Response<GetFilteredTaskListResponseBody>
) {
  try {
    const data: GetFilteredTaskListRequestPathParameter = {
      task: req.query.task as String,
      dueDate: req.query.dueDate as String,
      startDate: req.query.startDate as String,
      endDate: req.query.endDate as String,
      tagNames: req.query.tagNames as String | String[],
      listName: req.query.listName as String,
    };

    const TaskList = await DatabaseService.instance.getFilteredTaskList(data);
    res.status(201).send({
      code: "success",
      data: TaskList,
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
