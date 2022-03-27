import { Request, Response } from "express";
import {
  FailResponseBody,
  TaskListResponseData,
  SuccessResponseBody,
} from "../dto/response";
import { DatabaseService } from "../services/database";

interface GetTaskListRequestBody {}

type GetTaskListResponseBody =
  | SuccessResponseBody<TaskListResponseData>
  | FailResponseBody;

export default async function getTaskListHandler(
  req: Request<
    Record<never, never>,
    GetTaskListResponseBody,
    GetTaskListRequestBody
  >,
  res: Response<GetTaskListResponseBody>
) {
  try {
    const TaskList = await DatabaseService.instance.getTaskList();
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
