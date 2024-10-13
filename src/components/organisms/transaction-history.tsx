import React from "react";

import { TransactionList } from "@/components/molecules/transaction-list";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { api } from "@/utils/api";

export const TransactionHistory = () => {
  const { data: transactions = [] } = api.transaction.list.useQuery();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transaction History</CardTitle>
      </CardHeader>
      <CardContent>
        <TransactionList transactions={transactions} />
      </CardContent>
    </Card>
  );
};
