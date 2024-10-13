import { z } from "zod";

import TransactionSchema from "@/schemas/modelSchema/TransactionSchema";

export const TransactionDto = z.object(TransactionSchema.shape).extend({
  description: z.string().min(3).max(50),
  amount: z.number().min(0),
});

export const CreateTransactionDto = z.object(TransactionDto.shape).pick({
  type: true,
  description: true,
  amount: true,
  time: true,
});
export type TCreateTransactionDto = z.infer<typeof CreateTransactionDto>;
