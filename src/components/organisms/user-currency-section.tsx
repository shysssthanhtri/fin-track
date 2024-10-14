import React from "react";

import { CurrencyForm } from "@/components/forms/currency-form";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/utils/api";

export const UserCurrencySection = () => {
  const { data: userSetting, isPending: isLoading } =
    api.userSetting.get.useQuery();

  return (
    <>
      {isLoading && <Skeleton className="h-8 w-full" />}
      {!!userSetting && (
        <div className="space-y-2">
          <CurrencyForm currency={userSetting.currency} />
          <div className="w-full text-right">
            <Button size="sm">Save</Button>
          </div>
        </div>
      )}
    </>
  );
};
