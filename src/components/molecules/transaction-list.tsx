import React from "react";

import { TransactionItem } from "@/components/molecules/transaction-item";
import { type TTransactionDto } from "@/dtos/transaction.dto";

interface TransactionListProps {
  transactions: TTransactionDto[];
}
export const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <ul className="space-y-2">
      {transactions.map((t) => (
        <TransactionItem transaction={t} key={t.id} />
      ))}
    </ul>
  );
};
