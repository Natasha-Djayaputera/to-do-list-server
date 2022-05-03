import { FindOptions, Op, QueryTypes, Sequelize } from 'sequelize';
import { List } from '../handlers/get-all-list-name';
import { Tags } from '../handlers/get-all-tag-names';
import { RenameListRequestBody } from '../handlers/rename-list';
import { SortParameter } from '../helpers/sort';
import TaskList, {
  CreateTaskListModelAttributes,
  GetTaskListModelAttributes,
  ModifyTaskListModelAttributes,
  TaskListModelAttributes,
} from '../models/TaskList';

export class DatabaseService {
  private connection!: Sequelize;

  private static service: DatabaseService;

  private constructor() {
    try {
      this.connection = new Sequelize(process.env.POSTGRES_CREDENTIALS!);
      this.connection.authenticate();
      this.initializeModels();

      console.log('DB connection success');
    } catch (e) {
      console.error('DB connection failure', e);
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
      modelName: 'tasklists',
    });
  }

  public async insertNewTask(
    data: CreateTaskListModelAttributes
  ): Promise<TaskListModelAttributes> {
    return (await TaskList.create(data)).get({ plain: true });
  }

  public async getTaskList(
    sort: SortParameter[],
    offset: number,
    limit: number | undefined
  ): Promise<TaskList[]> {
    let conditions: FindOptions<TaskListModelAttributes> = {
      raw: true,
      order: sort,
      offset: offset,
      limit: limit,
    };

    return TaskList.findAll(conditions);
  }

  public async getFilteredTaskList(
    data: GetTaskListModelAttributes,
    sort: SortParameter[],
    offset: number,
    limit: number | undefined
  ): Promise<TaskList[]> {
    let conditions: FindOptions<TaskListModelAttributes> = {
      raw: true,
      where: {},
      order: sort,
      offset: offset,
      limit: limit,
    };

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
          [Op.between]: [data.startDate, data.endDate],
        },
      };
    }

    if (data.startDate && !data.endDate) {
      conditions.where = {
        ...conditions.where,
        dueDate: { [Op.gte]: data.startDate },
      };
    }

    if (!data.startDate && data.endDate) {
      conditions.where = {
        ...conditions.where,
        dueDate: { [Op.lte]: data.endDate },
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
      order: [['id', 'ASC']],
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

  public async findAllList(): Promise<List[]> {
    return await TaskList.sequelize!.query(
      'SELECT ARRAY(SELECT DISTINCT "listName" FROM tasklists WHERE "isDone" = false AND "listName" IS NOT NULL ORDER BY 1 ASC) AS list;',
      {
        type: QueryTypes.SELECT,
      }
    );
  }

  public async renameList(listName: string, data: RenameListRequestBody) {
    return TaskList.update(data, { where: { listName } });
  }

  public async deleteList(listName: string): Promise<number> {
    return TaskList.destroy({ where: { listName } });
  }

  public async findAllTags(): Promise<Tags[]> {
    return await TaskList.sequelize!.query(
      'SELECT ARRAY(SELECT DISTINCT UNNEST("tagNames") FROM tasklists WHERE "isDone" = false ORDER BY 1 ASC) AS tags;',
      {
        type: QueryTypes.SELECT,
      }
    );
  }

  public async deleteTag(tagNames: string[]): Promise<string> {
    await TaskList.sequelize!.query(
      'UPDATE tasklists SET "tagNames" = array_remove("tagNames", :tagNames);',
      {
        replacements: { tagNames },
        type: QueryTypes.UPDATE,
      }
    );

    await TaskList.sequelize!.query(
      'UPDATE tasklists SET "tagNames" = NULLIF("tagNames", \'{}\');'
    );
    return `tag-'${tagNames}'-deleted`;
  }
}
