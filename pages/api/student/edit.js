import {prisma} from '../../../db/prisma';

export default async (req, res) => {
	const { id, firstName, lastName, year, classItem } = req.body;
	try {
		const updateStudent = await prisma.student.update({
			where: {
				id,
			},
			data: {
				firstName,
				lastName,
				year,
				classes: {
					create: {
						class: {
							connect: {
								id: parseInt(classItem),
							},
						},
					},
				},
			},
		});
		res.status(200).json(updateStudent);
		console.log(updateStudent);
	} catch (error) {
		console.log(error);
	}
};
