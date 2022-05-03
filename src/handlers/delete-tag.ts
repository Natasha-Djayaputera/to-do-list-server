import { Request, Response } from 'express';
import { FailResponseBody, SuccessResponseBody } from '../dto/response';
import { isTagNamesValid } from '../helpers/validation';
import { DatabaseService } from '../services/database';

export interface DeleteTagNamesRequestPathParameter {
  tagNames: string;
}

type DeleteTagNamesResponseBody = SuccessResponseBody<any> | FailResponseBody;

export default async function deleteTagNamesHandler(
  req: Request<
    DeleteTagNamesRequestPathParameter,
    DeleteTagNamesResponseBody,
    never
  >,
  res: Response<DeleteTagNamesResponseBody>
) {
  if (!isTagNamesValid(req.params.tagNames, res)) return;

  try {
    const tagNames = req.params.tagNames.toLowerCase();

    const tags = await DatabaseService.instance.findAllTags();

    if (
      tags !== null &&
      tags[0].tags !== null &&
      tags[0].tags.includes(tagNames)
    ) {
      const response = await DatabaseService.instance.deleteTag([tagNames]);
      res.status(200).send({
        code: 'success',
        data: response,
      });
    } else {
      res.status(404).send({
        code: 'fail',
        error: {
          message: `no-tag-'${tagNames}'-found`,
        },
      });
    }
    return;
  } catch (e) {
    if (e === 'NOT FOUND') {
      res.status(404).send({
        code: 'fail',
        error: {
          message: 'tag-not-found',
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
