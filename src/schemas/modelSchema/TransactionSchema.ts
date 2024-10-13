import { z } from "zod";

import { TransactionTypeSchema } from "../inputTypeSchemas/TransactionTypeSchema";
import type { UserWithRelations } from "./UserSchema";
import { UserWithRelationsSchema } from "./UserSchema";

/////////////////////////////////////////
// TRANSACTION SCHEMA
/////////////////////////////////////////

export const TransactionSchema = z.object({
  type: TransactionTypeSchema,
  id: z.string(),
  description: z.string(),
  amount: z.number(),
  time: z.date(),
  userId: z.string(),
});

export type Transaction = z.infer<typeof TransactionSchema>;

/////////////////////////////////////////
// TRANSACTION RELATION SCHEMA
/////////////////////////////////////////

export type TransactionRelations = {
  user: UserWithRelations;
};

export type TransactionWithRelations = z.infer<typeof TransactionSchema> &
  TransactionRelations;

export const TransactionWithRelationsSchema: z.ZodType<TransactionWithRelations> =
  TransactionSchema.merge(
    z.object({
      user: z.lazy(() => UserWithRelationsSchema),
    }),
  );

export default TransactionSchema;
