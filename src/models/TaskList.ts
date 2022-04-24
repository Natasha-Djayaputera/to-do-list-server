import moment from "moment";
import {
  DataTypes,
  Model,
  ModelAttributeColumnOptions,
  ModelAttributes,
  Sequelize,
} from "sequelize";

export interface TaskListModelAttributes {
  id: number;
  task: string;
  isDone: boolean;
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
        field: "is_done",
        type: DataTypes.BOOLEAN,
      },
      dueDate: {
        allowNull: true,
        defaultValue: null,
        field: "due_date",
        type: DataTypes.DATEONLY,
      },
      tagNames: {
        allowNull: true,
        defaultValue: null,
        field: "tag_names",
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      listName: {
        allowNull: true,
        defaultValue: null,
        field: "list_name",
        type: DataTypes.STRING(128),
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        field: "updated_at",
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        defaultValue: null,
        field: "deleted_at",
        type: DataTypes.DATE,
      },
    };
  }
}
