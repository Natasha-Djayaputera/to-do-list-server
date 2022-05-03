export interface FailResponseBody {
  code: 'fail';
  error: { message: string };
}

export interface SuccessResponseBody<T> {
  code: 'success';
  data: T;
}

export interface SerializableTaskListModelAttributes {
  id: number;
  task: string;
  isDone: boolean;
  dueDate: string | null;
  tagNames: string[] | null;
  listName: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export type NewTaskResponseData = Pick<
  SerializableTaskListModelAttributes,
  'task' | 'dueDate' | 'tagNames' | 'listName'
>;

export type TaskListResponseData = Omit<
  SerializableTaskListModelAttributes,
  'createdAt' | 'updatedAt' | 'deletedAt'
>;
