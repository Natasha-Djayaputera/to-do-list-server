import { Request, Response } from 'express';
import {
  FailResponseBody,
  SuccessResponseBody,
  TaskListResponseData,
} from '../dto/response';
import getDate from '../helpers/date';
import getListName from '../helpers/list';
import setPagination from '../helpers/pagination';
import sortQueryHelper, { SortParameter } from '../helpers/sort';
import getTagNames from '../helpers/tags';
import { GetTaskListModelAttributes } from '../models/TaskList';
import { DatabaseService } from '../services/database';

export interface GetFilteredTaskListRequestPathParameter {
  task?: string;
  dueDate?: string;
  startDate?: string;
  endDate?: string;
  tagNames?: string[];
  listName?: string;
  sort?: SortParameter[];
  page?: number;
  size?: number;
}

type GetFilteredTaskListResponseBody =
  | SuccessResponseBody<TaskListResponseData[]>
  | FailResponseBody;

export default async function getFilteredTaskListHandler(
  req: Request<
    GetFilteredTaskListRequestPathParameter,
    GetFilteredTaskListResponseBody,
    never
  >,
  res: Response<GetFilteredTaskListResponseBody>
) {
  try {
    const sort: SortParameter[] = sortQueryHelper(req.query.sort);
    const { offset, limit } = setPagination(req.query.page, req.query.size);

    const data: GetTaskListModelAttributes = {
      task: typeof req.query.task === 'string' ? req.query.task : undefined,
      dueDate: getDate(req.query.dueDate),
      startDate: getDate(req.query.startDate),
      endDate: getDate(req.query.endDate),
      tagNames: getTagNames(req.query.tagNames),
      listName: getListName(req.query.listName),
    };

    const TaskList = await DatabaseService.instance.getFilteredTaskList(
      data,
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
