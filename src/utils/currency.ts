import { type Currency, mapCurrencyWithLocal } from "@/config/currency";

export const formatCurrency = (amount: number, currency: Currency): string => {
  return new Intl.NumberFormat(mapCurrencyWithLocal[currency], {
    style: "currency",
    currency: currency,
  }).format(amount);
};
