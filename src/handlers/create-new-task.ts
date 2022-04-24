import { Request, Response } from "express";
import moment from "moment";
import {
  FailResponseBody,
  NewTaskResponseData,
  SuccessResponseBody,
} from "../dto/response";
import { DatabaseService } from "../services/database";

interface CreateNewTaskRequestBody {
  task: string;
  isDone: boolean;
  dueDate: string | null;
  tagNames: string[] | null;
  listName: string | null;
}

type CreateNewTaskResponseBody =
  | SuccessResponseBody<NewTaskResponseData>
  | FailResponseBody;

export default async function createNewTaskHandler(
  req: Request<
    Record<never, never>,
    CreateNewTaskResponseBody,
    CreateNewTaskRequestBody
  >,
  res: Response<CreateNewTaskResponseBody>
) {
  if (typeof req.body.task !== "string") {
    res.status(400).send({
      code: "fail",
      error: { message: "invalid-new-task" },
    });
    return;
  }

  try {
    await DatabaseService.instance.insertNewTask({
      ...req.body,
      dueDate:
        req.body.dueDate === null ? null : moment(req.body.dueDate).toDate(),
    });
    res.status(201).send({
      code: "success",
      data: {
        task: req.body.task,
        dueDate:
          req.body.dueDate === null
            ? null
            : moment(req.body.dueDate).toString(),
        tagNames: req.body.tagNames,
        listName: req.body.listName,
      },
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
