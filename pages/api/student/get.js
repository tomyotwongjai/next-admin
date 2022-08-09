import {prisma} from '../../../db/prisma';

export default async function handler(req, res) {
	try {
		const student = await prisma.student.findMany({
			include: {
				classes: {
					include: {
						class: true,
					},
				},
			},
		});
		res.status(200).json(student);
	} catch (error) {
		res.status(500).json(error);
		console.log(error);
	}
}
