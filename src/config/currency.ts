export enum Currency {
  VND = "VND",
  USD = "USD", //  English (United States)
  EUR = "EUR", //  French (France), German (Germany), Spanish (Spain), Italian (Italy), Dutch (Netherlands), Finnish (Finland)
  GBP = "GBP", //  English (United Kingdom)
  CAD = "CAD", //  English (Canada)
  AUD = "AUD", //  English (Australia)
  JPY = "JPY", //  Japanese
  CNY = "CNY", //  Chinese (Simplified)
  RUB = "RUB", //  Russian
  BRL = "BRL", //  Portuguese (Brazil)
  KRW = "KRW", //  Korean
  THB = "THB", //  Thai Lan
  SAR = "SAR", //  Arabic (Saudi Arabia)
  SEK = "SEK", //  Swedish (Sweden)
}

export const mapCurrencyWithLocal: Record<Currency, string> = {
  [Currency.VND]: "vi-VN",
  [Currency.USD]: "en-US",
  [Currency.GBP]: "en-GB",
  [Currency.CAD]: "en_CA",
  [Currency.AUD]: "en-AU",
  [Currency.EUR]: "fr-FR",
  [Currency.JPY]: "ja-JP",
  [Currency.CNY]: "zh-CN",
  [Currency.RUB]: "ru-RU",
  [Currency.BRL]: "pt-BR",
  [Currency.KRW]: "ko-KR",
  [Currency.THB]: "th-TH",
  [Currency.SAR]: "ar-SA",
  [Currency.SEK]: "sv-SE",
};
