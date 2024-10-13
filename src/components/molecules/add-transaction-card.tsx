import { Plus } from "lucide-react";
import React from "react";

import { TransactionForm } from "@/components/forms/transaction-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const AddTransactionCard = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <TransactionForm />
        <Button className="w-full">
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </Button>
      </CardContent>
    </Card>
  );
};
