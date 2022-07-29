import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try{
    const result = await prisma.student.create({
      data: {
        firstName: 'Noke',
        lastName: 'Mcnarney',
        classes: {
          create: [
            {
              class: {create: {name: 'English'}},
            }
          ]
        },
      },
    })
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}