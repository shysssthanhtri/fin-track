import React from "react";

import { type TTransactionDto } from "@/dtos/transaction.dto";
import { formatDate } from "@/utils/date";

interface TransactionItemProps {
  transaction: TTransactionDto;
}
export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  return (
    <li className="flex items-center justify-between rounded bg-secondary p-2">
      <div>
        <span>{transaction.description}</span>
        <p className="text-sm text-muted-foreground">
          {formatDate(transaction.time)}
        </p>
      </div>
      <div className="text-right">
        <span
          className={
            transaction.type === "INCOME" ? "text-green-600" : "text-red-600"
          }
        >
          {transaction.amount}
        </span>
      </div>
    </li>
  );
};
