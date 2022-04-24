import { Request, Response } from "express";
import moment from "moment";
import {
  FailResponseBody,
  TaskListResponseData,
  SuccessResponseBody,
} from "../dto/response";
import sortQueryHelper, { SortParameter } from "../helpers/sort";
import { DatabaseService } from "../services/database";

export interface GetFilteredTaskListRequestPathParameter {
  task?: string;
  dueDate?: moment.Moment;
  startDate?: moment.Moment;
  endDate?: moment.Moment;
  tagNames?: string[];
  listName?: string;
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
    const page = Number.isNaN(Number(req.query.page))
      ? undefined
      : Number(req.query.page);
    const size = Number.isNaN(Number(req.query.size))
      ? undefined
      : Number(req.query.size);

    const dueDate = moment(`${req.query.dueDate}`);
    const startDate = moment(`${req.query.startDate}`);
    const endDate = moment(`${req.query.endDate}`);
    const tagNames = Array.isArray(req.query.tagNames)
      ? req.query.tagNames
      : [req.query.tagNames];
    const filteredTagNames = tagNames.filter(
      (t): t is string => typeof t === "string"
    );

    const data: GetFilteredTaskListRequestPathParameter = {
      task: typeof req.query.task === "string" ? req.query.task : undefined,
      dueDate: dueDate.isValid() ? dueDate : undefined,
      startDate: startDate.isValid() ? startDate : undefined,
      endDate: endDate.isValid() ? endDate : undefined,
      tagNames: filteredTagNames.length > 0 ? filteredTagNames : undefined,
      listName:
        typeof req.query.listName === "string" ? req.query.listName : undefined,
    };

    const TaskList = await DatabaseService.instance.getFilteredTaskList(
      data,
      sort,
      page,
      size
    );
    res.status(201).send({
      code: "success",
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
      code: "fail",
      error: {
        message: e instanceof Error ? e.message : "unhandled-exception",
      },
    });
    return;
  }
}
