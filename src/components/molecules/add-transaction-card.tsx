import { Plus } from "lucide-react";
import React, { useRef } from "react";

import {
  TransactionForm,
  type TransactionFormRef,
} from "@/components/forms/transaction-form";
import { ButtonLoading } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useApplicationContext } from "@/contexts/application-context";
import { toast } from "@/hooks/use-toast";
import { api } from "@/utils/api";

export const AddTransactionCard = () => {
  const ref = useRef<TransactionFormRef>(null);
  const utils = api.useUtils();
  const { setting } = useApplicationContext();

  const { mutate, isPending } = api.transaction.create.useMutation({
    onSuccess: () => {
      toast({
        title: "Saved",
      });
      ref.current?.reset();
      void utils.transaction.list.refetch();
    },
    onError: (err) => {
      toast({
        title: "Something went wrong",
        variant: "destructive",
        description: err.message,
      });
    },
  });

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <TransactionForm
          ref={ref}
          onSubmit={mutate}
          isPending={isPending}
          currency={setting?.data?.currency}
        />
        <ButtonLoading
          className="w-full"
          type="submit"
          onClick={() => {
            ref.current?.submit();
          }}
          isLoading={isPending}
        >
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </ButtonLoading>
      </CardContent>
    </Card>
  );
};
