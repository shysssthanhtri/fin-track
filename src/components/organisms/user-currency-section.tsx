import React, { useRef } from "react";

import {
  CurrencyForm,
  type CurrencyFormRef,
} from "@/components/forms/currency-form";
import { ButtonLoading } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useApplicationContext } from "@/contexts/application-context";
import { toast } from "@/hooks/use-toast";
import { api } from "@/utils/api";

export const UserCurrencySection = () => {
  const ref = useRef<CurrencyFormRef>(null);
  const { setting } = useApplicationContext();

  const { mutate, isPending: isProcessing } =
    api.userSetting.update.useMutation({
      onSuccess: () => {
        toast({
          title: "Saved",
        });

        void setting?.refetch();
      },
      onError: (err) => {
        toast({
          title: "Something went wrong",
          variant: "destructive",
          description: err.message,
        });
      },
    });

  if (!setting) {
    throw new Error("Setting context is not init");
  }

  return (
    <>
      {setting.isLoading && <Skeleton className="h-8 w-full" />}
      {!!setting.data && (
        <div className="space-y-2">
          <CurrencyForm
            currency={setting.data.currency}
            ref={ref}
            onSubmit={mutate}
            isPending={isProcessing}
          />
          <div className="w-full text-right">
            <ButtonLoading
              size="sm"
              isLoading={isProcessing}
              onClick={() => ref.current?.submit()}
            >
              Save
            </ButtonLoading>
          </div>
        </div>
      )}
    </>
  );
};
