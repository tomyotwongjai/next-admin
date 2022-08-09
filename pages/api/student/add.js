/** @format */
import {prisma} from '../../../db/prisma';

export default async function handler(req, res) {
  const data = req.body;
	try {
		const student = await prisma.student.create({
			data: {
				...data,
			},
		});
		console.log(student);
		res.status(200).json(student);
	} catch (error) {
		console.log(error);
	}
}
