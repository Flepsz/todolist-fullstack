import { Request, Response, json } from "express";

export default {
	validadeBody(req: Request, res: Response, next) {
		const { body } = req;

        if (body.title === undefined) {
            return res.status(400).json({ message: "The field title is required" })
        }

        if (body.title === "") {
            return res.status(400).json({ message: "The field title cannot be empty" })
        }
	},
};
