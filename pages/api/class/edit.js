import { prisma } from "../../../db/prisma";

export default async  (req, res) => {
    const {id, name, courseDetails, assignments, studentItem} = req.body;
    try{
        const updateClass = await prisma.class.update({
            where: {
                id,
            },
            data: {
                name,
                courseDetails,
                assignments,
                members: {
					create: {
						student: {
							connect: {
								id: parseInt(studentItem),
							},
						},
					},
				},
            }
        })
        res.status(200).json(updateClass);
        console.log(updateClass);
    } catch (error) {
        console.log(error);
    } 
}