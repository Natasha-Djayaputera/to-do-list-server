import { Request, Response } from "express";
import { FailResponseBody, SuccessResponseBody } from "../dto/response";
import { DatabaseService } from "../services/database";

export interface DeleteTaskRequestData {
  id: number;
}

type DeleteTaskResponseBody = SuccessResponseBody<any> | FailResponseBody;

export default async function deleteTaskHandler(
  req: Request<
    Record<never, never>,
    DeleteTaskResponseBody,
    DeleteTaskRequestData
  >,
  res: Response<DeleteTaskResponseBody>
) {
  try {
    await DatabaseService.instance.deleteTask(req.body);
    res.status(201).send({
      code: "success",
      data: { message: "Task Deleted" },
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
