import { CreateTransactionDto } from "@/dtos/transaction.dto";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const transactionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(CreateTransactionDto)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.transaction.create({
        data: {
          ...input,
          userId: ctx.session.user.id,
        },
      });
    }),

  list: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.transaction.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        time: "desc",
      },
    });
  }),
});
