import { Request, Response } from 'express';
import { FailResponseBody, SuccessResponseBody } from '../dto/response';
import { DatabaseService } from '../services/database';

export interface List {
  list: string[] | null;
}

type GetAllListNameResponseBody = SuccessResponseBody<List> | FailResponseBody;

export default async function getAllListNameHandler(
  req: Request<Record<never, never>, GetAllListNameResponseBody, never>,
  res: Response<GetAllListNameResponseBody>
) {
  try {
    const list = await DatabaseService.instance.findAllList();
    res.status(200).send({
      code: 'success',
      data: list[0],
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
