import { Plus } from "lucide-react";
import React, { useRef } from "react";

import {
  TransactionForm,
  type TransactionFormRef,
} from "@/components/forms/transaction-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AddTransactionCard = () => {
  const ref = useRef<TransactionFormRef>(null);

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <TransactionForm ref={ref} />
        <Button
          className="w-full"
          type="submit"
          onClick={() => {
            ref.current?.submit();
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </Button>
      </CardContent>
    </Card>
  );
};
