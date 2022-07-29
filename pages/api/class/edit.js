import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler (req, res) {
    try{
        const result = await prisma.class.update({
            where: {
                id: 15,
            },
            data: {
                name: 'Spanish',
                courseDetails: "305",
            }
        })
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    } finally {
        await prisma.$disconnect();
    }
}