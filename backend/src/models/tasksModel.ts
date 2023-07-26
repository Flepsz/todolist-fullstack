import { connection } from "./connection";

interface Itask {
	title: string;
}

export default {
	async getAll() {
		const [tasks] = await connection.execute("SELECT * FROM tasks");
		return tasks;
	},

	async createTask(task: Itask) {
		const { title } = task;

		const dateUTC: string = new Date(Date.now()).toUTCString();

		const query: string =
			"INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)";

		const [createdTask] = await connection.execute(query, [
			title,
			"pendente",
			dateUTC,
		]);

		return { insertId: createdTask.insertId };
	},
};
