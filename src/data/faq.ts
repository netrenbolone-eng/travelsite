export const faqIds = [
  "included",
  "payment",
  "cancellation",
  "children",
  "weather",
  "transfer",
  "guide-language",
  "booking",
] as const;

export type FaqId = (typeof faqIds)[number];