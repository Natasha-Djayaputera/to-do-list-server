import { Request, Response } from 'express';
import {
  FailResponseBody,
  SerializableTaskListModelAttributes,
  SuccessResponseBody,
} from '../dto/response';
import getDate from '../helpers/date';
import getTagNames from '../helpers/tags';
import {
  isDateValid,
  isIdValid,
  isIsDoneValid,
  isListNameValid,
  isTaskValid,
} from '../helpers/validation';
import TaskList from '../models/TaskList';
import { DatabaseService } from '../services/database';

export type ModifyTaskListRequestBody = Omit<
  SerializableTaskListModelAttributes,
  'createdAt' | 'updatedAt' | 'deletedAt'
>;

export interface ModifyTaskListRequestPathParameter {
  id: number;
}

type ModifyTaskListResponseBody =
  | SuccessResponseBody<[number, TaskList[]]>
  | FailResponseBody;

export default async function modifyTaskDetailsHandler(
  req: Request<
    ModifyTaskListRequestPathParameter,
    ModifyTaskListResponseBody,
    ModifyTaskListRequestBody
  >,
  res: Response<ModifyTaskListResponseBody>
) {
  if (!isIdValid(req.params.id, res)) return;
  if (!isTaskValid(req.body.task, res)) return;
  if (!isDateValid(req.body.dueDate, res)) return;
  if (!isListNameValid(req.body.listName, res)) return;
  if (!isIsDoneValid(req.body.isDone, res)) return;

  try {
    const { id } = req.params;
    const data = {
      ...req.body,
      dueDate: getDate(req.body.dueDate),
      tagNames: getTagNames(req.body.tagNames),
    };
    const result = await DatabaseService.instance.modifyTask(id, data);
    res.status(201).send({
      code: 'success',
      data: result,
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
