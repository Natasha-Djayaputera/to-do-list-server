import { Op, Sequelize } from "sequelize";
import { DeleteTaskRequestData } from "../handlers/delete-task";
import { GetFilteredTaskListRequestPathParameter } from "../handlers/get-filtered-task-list";
import { ModifyTaskListRequestData } from "../handlers/modify-task-details";
import TaskList, { CreateTaskListModelAttributes } from "../models/TaskList";

export class DatabaseService {
  private connection!: Sequelize;

  private static service: DatabaseService;

  private constructor() {
    try {
      this.connection = new Sequelize({
        dialect: "postgres",
        storage: "", //! gimana caranya lupa WKKW
      });
      this.connection.authenticate();
      this.initializeModels();

      console.log("DB connection success");
    } catch {
      console.error("DB connection failure");
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
    });
  }

  public async insertNewTask(
    data: CreateTaskListModelAttributes
  ): Promise<TaskList> {
    return TaskList.create(data);
  }

  public async getTaskList(): Promise<TaskList[]> {
    return TaskList.findAll();
  }

  public async getFilteredTaskList(
    data: GetFilteredTaskListRequestPathParameter
  ): Promise<TaskList[]> {
    let conditions = { limit: 10, where: {} };

    if (data.task) {
      conditions.where = {
        task: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("task")),
          "LIKE",
          "%" + data.task + "%"
        ),
      };
    }

    if (data.listName) {
      conditions.where = { listName: data.listName };
    }

    if (data.tagNames) {
      conditions.where = { tagNames: data.tagNames };
    }

    if (data.dueDate) {
      conditions.where = { dueDate: data.dueDate };
    }

    if (data.startDate && data.endDate) {
      conditions.where = {
        duedate: { [Op.between]: [data.startDate, data.endDate] },
      };
    }

    if (data.startDate && !data.endDate) {
      conditions.where = { duedate: { [Op.gte]: data.startDate } };
    }
    if (!data.startDate && data.endDate) {
      conditions.where = { duedate: { [Op.lte]: data.endDate } };
    }

    return TaskList.findAll(conditions);
  }

  public async searchTaskList(lookupValue: string): Promise<TaskList[]> {
    return TaskList.findAll({
      limit: 10,
      where: {
        task: Sequelize.where(
          Sequelize.fn("LOWER", Sequelize.col("task")),
          "LIKE",
          "%" + lookupValue + "%"
        ),
      },
    });
  }

  public async modifyTask(
    data: ModifyTaskListRequestData
  ): Promise<[affectedCount: number]> {
    return TaskList.update(data, { where: { id: data.id } });
  }

  public async deleteTask(data: DeleteTaskRequestData): Promise<number> {
    return TaskList.destroy({ where: { id: data.id } });
  }
}
