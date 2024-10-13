import { z } from "zod";

export const TransactionTypeSchema = z.enum(["INCOME", "EXPENSE"]);

export type TransactionTypeType = `${z.infer<typeof TransactionTypeSchema>}`;

export default TransactionTypeSchema;
