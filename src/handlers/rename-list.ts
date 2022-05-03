import { Request, Response } from 'express';
import {
  FailResponseBody,
  SerializableTaskListModelAttributes,
  SuccessResponseBody,
} from '../dto/response';
import getListName from '../helpers/list';
import { isListNameValid } from '../helpers/validation';
import TaskList from '../models/TaskList';
import { DatabaseService } from '../services/database';

export type RenameListRequestBody = Pick<
  SerializableTaskListModelAttributes,
  'listName'
>;

export interface RenameListRequestPathParameter {
  listName: string;
}

type RenameListResponseBody =
  | SuccessResponseBody<[number, TaskList[]]>
  | FailResponseBody;

export default async function renameListNameHandler(
  req: Request<
    RenameListRequestPathParameter,
    RenameListResponseBody,
    RenameListRequestBody
  >,
  res: Response<RenameListResponseBody>
) {
  if (!isListNameValid(req.params.listName, res)) return;
  if (!isListNameValid(req.body.listName, res)) return;

  try {
    const { listName } = req.params;
    const data: RenameListRequestBody = {
      ...req.body,
      listName: getListName(req.body.listName),
    };

    const result = await DatabaseService.instance.renameList(listName, data);
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
