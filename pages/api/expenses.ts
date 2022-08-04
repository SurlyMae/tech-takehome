import { Expense } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, amount } = req.body;

  let expense: Expense | Expense[];

  try {
    switch (req.method) {
      case "DELETE":
        expense = await prisma.expense.delete({
          where: {
            name,
          },
        });
        break;
      case "POST":
        expense = await prisma.expense.create({
          data: {
            name,
            amount,
          },
        });
        break;
      default:
        expense = await prisma.expense.findMany({
          orderBy: {
            name: "asc",
          },
        });
    }
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      res.json({ error: "An expense with this name already exists" });
    }

    res.json({ error });

    return;
  }

  res.json(expense);
}
