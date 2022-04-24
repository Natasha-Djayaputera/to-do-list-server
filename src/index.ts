import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";

import createNewTaskHandler from "./handlers/create-new-task";
import deleteTaskHandler from "./handlers/delete-task";
import getFilteredTaskListHandler from "./handlers/get-filtered-task-list";
import getTaskListHandler from "./handlers/get-task-list";
import modifyTaskDetailsHandler from "./handlers/modify-task-details";
import searchTaskListHandler from "./handlers/searchTaskListHandler";

dotenv.config();

const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});

app.post("/tasks", createNewTaskHandler);

app.get("/tasks/all", getTaskListHandler);

app.get("/tasks/filters", getFilteredTaskListHandler);

app.get("/tasks/:task", searchTaskListHandler);

app.patch("/tasks/:id", modifyTaskDetailsHandler);

app.delete("/tasks/:id", deleteTaskHandler);

console.log(`starting server at PORT: ${process.env.PORT}`);
app.listen(Number(process.env.PORT));
