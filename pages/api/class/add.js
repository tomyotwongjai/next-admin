import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try{
    const result = await prisma.class.create({
      data: {
        name: 'Spanish',
        courseDetails: "101",
        // members: {
        //   create: [
        //     {
        //       student: {create: {
        //         firstName: 'Math',
        //         lastName: 'Mcnarney'}},
        //     }
        //   ]
        // },
      },
    })
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}