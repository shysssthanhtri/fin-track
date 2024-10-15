import React from "react";

import { useApplicationContext } from "@/contexts/application-context";
import { type TTransactionDto } from "@/dtos/transaction.dto";
import { formatCurrency } from "@/utils/currency";
import { formatDate } from "@/utils/date";

interface TransactionItemProps {
  transaction: TTransactionDto;
}
export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const { setting } = useApplicationContext();
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
          {setting?.data?.currency &&
            formatCurrency(transaction.amount, setting.data.currency)}
        </span>
      </div>
    </li>
  );
};
