import { prisma } from "../../../db/prisma";

export default async function handler(req, res){
    try{
        const result = await prisma.class.findMany({
            include: {
                members: {
                    select: {
                        student: true
                    }
                }
            },
        });
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    } 
}