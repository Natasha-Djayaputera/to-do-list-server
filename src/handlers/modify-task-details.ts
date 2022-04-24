import { Request, Response } from "express";
import moment from "moment";
import {
  FailResponseBody,
  SuccessResponseBody,
  SerializableTaskListModelAttributes,
} from "../dto/response";
import { DatabaseService } from "../services/database";

export type ModifyTaskListRequestBody = Omit<
  SerializableTaskListModelAttributes,
  "createdAt" | "updatedAt" | "deletedAt"
>;

export interface ModifyTaskListRequestPathParameter {
  id: number;
}

type ModifyTaskListResponseBody = SuccessResponseBody<any> | FailResponseBody;

export default async function modifyTaskDetailsHandler(
  req: Request<
    ModifyTaskListRequestPathParameter,
    ModifyTaskListResponseBody,
    ModifyTaskListRequestBody
  >,
  res: Response<ModifyTaskListResponseBody>
) {
  try {
    const { id } = req.params;
    const data = {
      ...req.body,
      dueDate:
        req.body.dueDate === null ? null : moment(req.body.dueDate).toDate(),
    };
    const result = await DatabaseService.instance.modifyTask(id, data);
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
