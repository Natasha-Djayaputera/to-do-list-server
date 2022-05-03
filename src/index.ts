import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';

import createNewTaskHandler from './handlers/create-new-task';
import deleteListNameHandler from './handlers/delete-list';
import deleteTagNamesHandler from './handlers/delete-tag';
import deleteTaskHandler from './handlers/delete-task';
import getAllListNameHandler from './handlers/get-all-list-name';
import getAllTagNamesHandler from './handlers/get-all-tag-names';
import getFilteredTaskListHandler from './handlers/get-filtered-task-list';
import getTaskListHandler from './handlers/get-task-list';
import modifyTaskDetailsHandler from './handlers/modify-task-details';
import renameListNameHandler from './handlers/rename-list';
import searchTaskListHandler from './handlers/search-task-list';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});
console.log(process.env.NODE_ENV);

export const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  next();
});

//* Tasks
app.post('/tasks', createNewTaskHandler);

app.get('/tasks/all', getTaskListHandler);

app.get('/tasks/filters', getFilteredTaskListHandler);

app.get('/tasks/:task', searchTaskListHandler);

app.patch('/tasks/:id', modifyTaskDetailsHandler);

app.delete('/tasks/:id', deleteTaskHandler);

//* ListName
app.get('/listName', getAllListNameHandler);

app.patch('/listName/:listName', renameListNameHandler);

app.delete('/listName/:listName', deleteListNameHandler);

//* TagNames
app.get('/tagNames', getAllTagNamesHandler);

app.delete('/tagNames/:tagNames', deleteTagNamesHandler);

console.log(`starting server at PORT: ${process.env.PORT}`);

app.listen(Number(process.env.PORT));
