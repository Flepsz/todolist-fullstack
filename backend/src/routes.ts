import { Router } from "express";
import taskController from "./controllers/taskController";

const routes = Router();

routes.get("/tasks", taskController.getAll);
routes.post("/tasks", taskController.createTask);

export default routes;
