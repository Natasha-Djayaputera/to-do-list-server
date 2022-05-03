import { Request, Response } from 'express';
import { FailResponseBody, SuccessResponseBody } from '../dto/response';
import { isIdValid } from '../helpers/validation';
import { DatabaseService } from '../services/database';

export interface DeleteTaskRequestPathParameter {
  id: number;
}

type DeleteTaskResponseBody =
  | SuccessResponseBody<{ message: string }>
  | FailResponseBody;

export default async function deleteTaskHandler(
  req: Request<DeleteTaskRequestPathParameter, DeleteTaskResponseBody, never>,
  res: Response<DeleteTaskResponseBody>
) {
  if (!isIdValid(req.params.id, res)) return;

  try {
    const { id } = req.params;

    await DatabaseService.instance.deleteTask(id);
    res.status(201).send({
      code: 'success',
      data: { message: 'task-deleted' },
    });
    return;
  } catch (e) {
    if (e === 'NOT FOUND') {
      res.status(404).send({
        code: 'fail',
        error: {
          message: 'id-not-found',
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
