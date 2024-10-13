import { z } from "zod";

export const TransactionScalarFieldEnumSchema = z.enum([
  "id",
  "description",
  "amount",
  "type",
  "time",
  "userId",
]);

export default TransactionScalarFieldEnumSchema;
