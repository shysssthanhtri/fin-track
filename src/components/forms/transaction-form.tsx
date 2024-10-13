import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateTransactionDto } from "@/dtos/transaction.dto";
import { cn } from "@/lib/utils";
import TransactionTypeSchema from "@/schemas/inputTypeSchemas/TransactionTypeSchema";

interface TaskFormProps {
  isPending?: boolean;
  onSubmit?: (value: FormSchema) => void;
}
export type TransactionFormRef = {
  reset: () => void;
  submit: () => void;
};
export const TransactionForm = forwardRef<TransactionFormRef, TaskFormProps>(
  (props, ref) => {
    const { isPending, onSubmit } = props;

    const form = useForm<FormSchema>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        description: "",
        type: "INCOME",
        amount: 0,
      },
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
        reset: () => {
          form.reset();
          setTimeout(() => {
            form.setFocus("description");
          }, 1);
        },
        submit: () => {
          void form.handleSubmit(handleSubmit)();
        },
      }),
      [form, handleSubmit],
    );

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Description"
                      {...field}
                      value={field.value}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Your transaction's type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.values(TransactionTypeSchema.Values).map(
                        (type) => (
                          <SelectItem value={type} key={type}>
                            {type}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Amount"
                      {...field}
                      value={field.value}
                      disabled={isPending}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    );
  },
);

TransactionForm.displayName = "TransactionForm";

const formSchema = z.object(CreateTransactionDto.shape).extend({
  amount: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val) && val >= 0),
});
type FormSchema = z.infer<typeof formSchema>;
