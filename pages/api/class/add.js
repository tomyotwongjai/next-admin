import { prisma } from "../../../db/prisma";

export default async (req, res) => {
  try {
    const data = req.body;
    const classes = await prisma.class.create({
      data: {
       ...data,
      }
    })
    console.log(classes);
    res.status(200).json(classes);
  } catch (error) {
    console.log(error);
  }
}