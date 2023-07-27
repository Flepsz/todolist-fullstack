import { Router } from "express";
import taskController from "./controllers/taskController";
import tasksMiddleware from "./middlewares/tasksMiddleware";

const routes = Router();

routes.get("/tasks", taskController.getAll);
routes.post(
	"/tasks",
	tasksMiddleware.validadeFieldStatus,
	taskController.createTask
);
routes.delete("/tasks/:id", taskController.deleteTask);
routes.put(
	"/tasks/:id",
	tasksMiddleware.validadeFieldTitle,
	tasksMiddleware.validadeFieldStatus,
	taskController.updateTask
);

export default routes;
