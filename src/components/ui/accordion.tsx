"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;
export function AccordionItem({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Item>) {
  return <AccordionPrimitive.Item className={cn("border-b border-border", className)} {...props} />;
}
export function AccordionTrigger({ className, children, ...props }: ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return <AccordionPrimitive.Header><AccordionPrimitive.Trigger className={cn("group flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left font-semibold text-ink outline-none focus-visible:text-link focus-visible:ring-2 focus-visible:ring-accent-text", className)} {...props}>{children}<ChevronDown className="size-5 shrink-0 text-secondary transition-transform group-data-[state=open]:rotate-180" /></AccordionPrimitive.Trigger></AccordionPrimitive.Header>;
}
export function AccordionContent({ className, ...props }: ComponentProps<typeof AccordionPrimitive.Content>) {
  return <AccordionPrimitive.Content className={cn("overflow-hidden pb-5 text-sm leading-6 text-secondary", className)} {...props} />;
}