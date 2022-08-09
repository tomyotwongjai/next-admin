import {prisma} from '../../../db/prisma';

export default async (req, res) => {
	  const {id} = req.body;
	try {
		const deleteStudent = await prisma.courseEnrollment.deleteMany({
			where: {
				studentId: id
			},
		});
		const studentToDelete = await prisma.student.delete({
			where: {
				id: id,
			},
		});
		res.status(200).json(studentToDelete);
		res.status(200).json(deleteStudent);
	} catch (error) {
		res.status(500).json(error);
		console.log(error);
	}
};
