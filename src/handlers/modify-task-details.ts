import { Request, Response } from "express";
import {
  FailResponseBody,
  SuccessResponseBody,
  SerializableTaskListModelAttributes,
} from "../dto/response";
import { DatabaseService } from "../services/database";

export type ModifyTaskListRequestData = Omit<
  SerializableTaskListModelAttributes,
  "createdAt" | "updatedAt" | "deletedAt"
>;

type ModifyTaskListResponseBody = SuccessResponseBody<any> | FailResponseBody;

export default async function modifyTaskDetailsHandler(
  req: Request<
    Record<never, never>,
    ModifyTaskListResponseBody,
    ModifyTaskListRequestData
  >,
  res: Response<ModifyTaskListResponseBody>
) {
  try {
    const result = await DatabaseService.instance.modifyTask(req.body);
    res.status(201).send({
      code: "success",
      data: result,
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
