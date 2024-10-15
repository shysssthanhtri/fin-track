import React, { useMemo } from "react";

import { TransactionList } from "@/components/molecules/transaction-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/utils/api";

export const TransactionHistory = () => {
  const { data: transactions = [], isPending } =
    api.transaction.list.useQuery();

  const transactionListSkeleton = useMemo(
    () => (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="h-16 w-full" />
        ))}
      </div>
    ),
    [],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        {!isPending && <TransactionList transactions={transactions} />}
        {isPending && transactionListSkeleton}
      </CardContent>
    </Card>
  );
};
