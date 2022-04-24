import dotenv from "dotenv";

import { FindOptions, Op, Sequelize } from "sequelize";
import { GetFilteredTaskListRequestPathParameter } from "../handlers/get-filtered-task-list";
import { SortParameter } from "../helpers/sort";
import TaskList, {
  CreateTaskListModelAttributes,
  ModifyTaskListModelAttributes,
  TaskListModelAttributes,
} from "../models/TaskList";

dotenv.config();
export class DatabaseService {
  private connection!: Sequelize;

  private static service: DatabaseService;

  private constructor() {
    try {
      this.connection = new Sequelize(process.env.POSTGRES_CREDENTIALS!);
      this.connection.authenticate();
      this.initializeModels();

      console.log("DB connection success");
    } catch (e) {
      console.error("DB connection failure", e);
    }
  }

  public static get instance(): DatabaseService {
    if (this.service === undefined) {
      this.service = new DatabaseService();
    }

    return this.service;
  }

  private initializeModels(): void {
    TaskList.init(TaskList.getAttributes(), {
      sequelize: this.connection,
      paranoid: true,
      modelName: "tasklists",
    });
  }

  public async insertNewTask(
    data: CreateTaskListModelAttributes
  ): Promise<TaskList> {
    return TaskList.create(data);
  }

  public async getTaskList(
    sort: SortParameter[],
    page: number | undefined,
    size: number | undefined
  ): Promise<TaskList[]> {
    let conditions: FindOptions<TaskListModelAttributes> = {
      raw: true,
      order: sort,
    };

    if (size !== undefined) {
      if (page === undefined || page <= 0) page = 1;
      conditions.offset = (page - 1) * size;
      conditions.limit = size;
    }

    return TaskList.findAll(conditions);
  }

  public async getFilteredTaskList(
    data: GetFilteredTaskListRequestPathParameter,
    sort: SortParameter[],
    page: number | undefined,
    size: number | undefined
  ): Promise<TaskList[]> {
    let conditions: FindOptions<TaskListModelAttributes> = {
      raw: true,
      where: {},
      order: sort,
    };

    if (size !== undefined) {
      if (page === undefined || page <= 0) page = 1;
      conditions.offset = (page - 1) * size;
      conditions.limit = size;
    }

    if (data.task) {
      conditions.where = {
        ...conditions.where,
        task: { [Op.iLike]: `%${data.task}%` },
      };
    }

    if (data.listName) {
      conditions.where = {
        ...conditions.where,
        listName: data.listName,
      };
    }

    if (data.tagNames) {
      conditions.where = {
        ...conditions.where,
        tagNames: { [Op.contains]: data.tagNames },
      };
    }

    if (data.dueDate) {
      conditions.where = {
        ...conditions.where,
        dueDate: data.dueDate,
      };
    }

    if (data.startDate && data.endDate) {
      conditions.where = {
        ...conditions.where,
        dueDate: {
          [Op.between]: [data.startDate.toDate(), data.endDate.toDate()],
        },
      };
    }

    if (data.startDate && !data.endDate) {
      conditions.where = {
        ...conditions.where,
        dueDate: { [Op.gte]: data.startDate.toDate() },
      };
    }

    if (!data.startDate && data.endDate) {
      conditions.where = {
        ...conditions.where,
        dueDate: { [Op.lte]: data.endDate.toDate() },
      };
    }

    return TaskList.findAll(conditions);
  }

  public async searchTaskList(lookupValue: string): Promise<TaskList[]> {
    return TaskList.findAll({
      raw: true,
      where: {
        task: { [Op.iLike]: `%${lookupValue}%` },
      },
      order: [["id", "ASC"]],
    });
  }

  public async modifyTask(
    id: number,
    data: ModifyTaskListModelAttributes
  ): Promise<[number, TaskList[]]> {
    return TaskList.update(data, { where: { id } });
  }

  public async deleteTask(id: number): Promise<number> {
    return TaskList.destroy({ where: { id } });
  }
}
