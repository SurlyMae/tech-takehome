import { PrismaClient } from "@prisma/client";
import { expensesData } from "./expensesData";

const db = new PrismaClient();

const seedDatabase = async () => {
  const user = await db.user.upsert({
    where: { name: "firstName lastName" },
    update: {},
    create: {
      name: "firstName lastName",
    },
  });

  await Promise.all(
    expensesData.map((expense) => {
      return db.expense.upsert({
        where: { name: expense.name },
        update: {},
        create: {
          name: expense.name,
          userId: user.id,
          amount: expense.amount,
        },
      });
    })
  );
};

seedDatabase()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect;
  });
