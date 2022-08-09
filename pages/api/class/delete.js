import { prisma } from "../../../db/prisma";

 export default async (req, res) => {
    const {id} = req.body;
        try{
           const deleteClass = await prisma.courseEnrollment.deleteMany({
                where: {
                    classId: id,
                }
           })
           const  classToDelete = await prisma.class.delete({
                where: {
                    id: id,
                }
           })
             res.status(200).json(classToDelete);
            res.status(200).json(deleteClass);
        } catch (error) {
            console.log(error);
        } 
    }