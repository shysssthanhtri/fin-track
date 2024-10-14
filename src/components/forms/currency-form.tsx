import { zodResolver } from "@hookform/resolvers/zod";
import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Currency } from "@/config/currency";
import { UserSettingDto } from "@/dtos/user-setting.dto";
import { getCurrencySymbol } from "@/utils/currency";

interface CurrencyFormProps {
  isPending?: boolean;
  onSubmit?: (value: FormSchema) => void;
}
export type CurrencyFormRef = {
  submit: () => void;
};
export const CurrencyForm = forwardRef<CurrencyFormRef, CurrencyFormProps>(
  (props, ref) => {
    const { isPending, onSubmit } = props;

    const form = useForm<FormSchema>({
      resolver: zodResolver(formSchema),
    });

    const handleSubmit = useCallback(
      (value: FormSchema) => {
        onSubmit?.(value);
      },
      [onSubmit],
    );

    useImperativeHandle(
      ref,
      () => ({
        submit: () => {
          void form.handleSubmit(handleSubmit)();
        },
      }),
      [form, handleSubmit],
    );

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Currency</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your currency" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(Currency).map((currency) => (
                      <SelectItem key={currency} value={currency}>
                        {currency} ({getCurrencySymbol(currency)})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    );
  },
);

CurrencyForm.displayName = "CurrencyForm";

const formSchema = z.object(UserSettingDto.shape).pick({
  currency: true,
});
type FormSchema = z.infer<typeof formSchema>;
