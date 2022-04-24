import { Request, Response } from "express";
import { FailResponseBody, SuccessResponseBody } from "../dto/response";
import { DatabaseService } from "../services/database";

export interface DeleteTaskRequestPathParameter {
  id: number;
}

type DeleteTaskResponseBody = SuccessResponseBody<any> | FailResponseBody;

export default async function deleteTaskHandler(
  req: Request<DeleteTaskRequestPathParameter, DeleteTaskResponseBody, never>,
  res: Response<DeleteTaskResponseBody>
) {
  try {
    const { id } = req.params;

    await DatabaseService.instance.deleteTask(id);
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
