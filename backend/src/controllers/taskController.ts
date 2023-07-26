import { Request, Response } from "express";
import tasksModel from "../models/tasksModel";

export default {
	async getAll(_req: Request, res: Response) {
		const tasks = await tasksModel.getAll();
		return res.status(200).json(tasks);
	},

	async createTask(req: Request, res: Response) {
		const createdTask = await tasksModel.createTask(req.body)
		return res.status(201).json(createdTask);
	},
};
