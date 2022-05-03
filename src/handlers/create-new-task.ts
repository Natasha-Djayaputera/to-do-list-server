import { Request, Response } from 'express';
import {
  FailResponseBody,
  NewTaskResponseData,
  SuccessResponseBody,
} from '../dto/response';
import getDate from '../helpers/date';
import getListName from '../helpers/list';
import getTagNames from '../helpers/tags';
import {
  isDateValid,
  isListNameValid,
  isTaskValid,
} from '../helpers/validation';
import { CreateTaskListModelAttributes } from '../models/TaskList';
import { DatabaseService } from '../services/database';

export interface CreateNewTaskRequestBody {
  task: string;
  isDone?: boolean;
  dueDate?: string | null;
  tagNames?: string | string[] | null;
  listName?: string | null;
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
  if (!isTaskValid(req.body.task, res)) return;
  if (!isDateValid(req.body.dueDate, res)) return;
  if (!isListNameValid(req.body.listName, res)) return;

  try {
    const data: CreateTaskListModelAttributes = {
      task: req.body.task,
      isDone: req.body.isDone === true ?? undefined,
      dueDate: getDate(req.body.dueDate),
      tagNames: getTagNames(req.body.tagNames),
      listName: getListName(req.body.listName),
    };

    const response = await DatabaseService.instance.insertNewTask(data);
    res.status(201).send({
      code: 'success',
      data: { ...response, dueDate: response.dueDate?.toString() ?? null },
    });
    return;
  } catch (e) {
    res.status(500).send({
      code: 'fail',
      error: {
        message: e instanceof Error ? e.message : 'unhandled-exception',
      },
    });
    return;
  }
}
