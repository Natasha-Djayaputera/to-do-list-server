import { DataTypes, Model, ModelAttributes, Sequelize } from "sequelize";

export interface TaskListModelAttributes {
  id: number;
  task: string;
  isDone: boolean | undefined;
  dueDate: Date | null;
  tagNames: string[] | null;
  listName: string | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export type CreateTaskListModelAttributes = Pick<
  TaskListModelAttributes,
  "task" | "isDone" | "dueDate" | "tagNames" | "listName"
>;

export type ModifyTaskListModelAttributes = Omit<
  TaskListModelAttributes,
  "createdAt" | "updatedAt" | "deletedAt"
>;

export interface GetTaskListModelAttributes
  extends Omit<
    TaskListModelAttributes,
    "id" | "task" | "isDone" | "createdAt" | "updatedAt" | "deletedAt"
  > {
  task?: string;
  startDate: Date | null;
  endDate: Date | null;
}
export default class TaskList
  extends Model<TaskListModelAttributes, CreateTaskListModelAttributes>
  implements TaskListModelAttributes
{
  public id!: number;
  public task!: string;
  public isDone!: boolean;
  public dueDate!: Date | null;
  public tagNames!: string[] | null;
  public listName!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
  public deletedAt!: Date | null;

  public static getAttributes(): ModelAttributes<
    TaskList,
    TaskListModelAttributes
  > {
    return {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },
      task: {
        allowNull: false,
        field: "task",
        type: DataTypes.STRING(2_048),
      },
      isDone: {
        allowNull: false,
        defaultValue: false,
        field: "isDone",
        type: DataTypes.BOOLEAN,
      },
      dueDate: {
        allowNull: true,
        defaultValue: null,
        field: "dueDate",
        type: DataTypes.DATEONLY,
      },
      tagNames: {
        allowNull: true,
        defaultValue: null,
        field: "tagNames",
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      listName: {
        allowNull: true,
        defaultValue: null,
        field: "listName",
        type: DataTypes.STRING(128),
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        field: "createdAt",
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        field: "updatedAt",
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        defaultValue: null,
        field: "deletedAt",
        type: DataTypes.DATE,
      },
    };
  }
}
