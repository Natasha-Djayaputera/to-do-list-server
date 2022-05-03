import { Request, Response } from 'express';
import { FailResponseBody, SuccessResponseBody } from '../dto/response';
import { DatabaseService } from '../services/database';

export interface GetAllTagNamesRequestPathParameter {}
export interface Tags {
  tags: string[] | null;
}

type GetAllTagNamesResponseBody = SuccessResponseBody<Tags> | FailResponseBody;

export default async function getAllTagNamesHandler(
  req: Request<Record<never, never>, GetAllTagNamesResponseBody, never>,
  res: Response<GetAllTagNamesResponseBody>
) {
  try {
    const tags = await DatabaseService.instance.findAllTags();
    res.status(200).send({
      code: 'success',
      data: tags[0],
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
