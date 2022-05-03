import { Request, Response } from 'express';
import {
  FailResponseBody,
  SuccessResponseBody,
  TaskListResponseData,
} from '../dto/response';
import setPagination from '../helpers/pagination';
import sortQueryHelper, { SortParameter } from '../helpers/sort';
import { DatabaseService } from '../services/database';
export interface GetTaskListRequestPathParameter {
  sort?: SortParameter[];
  page?: number;
  size?: number;
}

type GetTaskListResponseBody =
  | SuccessResponseBody<TaskListResponseData[]>
  | FailResponseBody;

export default async function getTaskListHandler(
  req: Request<GetTaskListRequestPathParameter, GetTaskListResponseBody, never>,
  res: Response<GetTaskListResponseBody>
) {
  try {
    const sort: SortParameter[] = sortQueryHelper(req.query.sort);
    const { offset, limit } = setPagination(req.query.page, req.query.size);

    const TaskList = await DatabaseService.instance.getTaskList(
      sort,
      offset,
      limit
    );
    res.status(200).send({
      code: 'success',
      data: TaskList.map((task) => {
        let newTask: TaskListResponseData = {
          ...task,
          dueDate: task.dueDate === null ? null : task.dueDate.toString(),
        };
        return newTask;
      }),
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
