import { Request, Response } from 'express';
import { FailResponseBody, SuccessResponseBody } from '../dto/response';
import { isListNameValid } from '../helpers/validation';
import { DatabaseService } from '../services/database';

export interface DeleteListNameRequestPathParameter {
  listName: string;
}

type DeleteListNameResponseBody = SuccessResponseBody<any> | FailResponseBody;

export default async function deleteListNameHandler(
  req: Request<
    DeleteListNameRequestPathParameter,
    DeleteListNameResponseBody,
    never
  >,
  res: Response<DeleteListNameResponseBody>
) {
  if (!isListNameValid(req.params.listName, res)) return;

  try {
    const { listName } = req.params;

    await DatabaseService.instance.deleteList(listName);
    res.status(201).send({
      code: 'success',
      data: { message: 'list-deleted' },
    });
    return;
  } catch (e) {
    if (e === 'NOT FOUND') {
      res.status(404).send({
        code: 'fail',
        error: {
          message: 'list-not-found',
        },
      });
    }

    res.status(500).send({
      code: 'fail',
      error: {
        message: e instanceof Error ? e.message : 'unhandled-exception',
      },
    });
    return;
  }
}
