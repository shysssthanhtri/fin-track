import React from "react";

import { CurrencyForm } from "@/components/forms/currency-form";
import { Button } from "@/components/ui/button";

export const UserCurrencySection = () => {
  return (
    <div className="space-y-2">
      <CurrencyForm />
      <div className="w-full text-right">
        <Button size="sm">Save</Button>
      </div>
    </div>
  );
};
