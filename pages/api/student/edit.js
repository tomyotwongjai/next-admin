import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler (req, res) {
    try{
        const result = await prisma.student.update({
            where: {
                id: 19,
            },
            data: {
                firstName: 'Asia',
                lastName: 'Mcnarney',
            }
        })
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}