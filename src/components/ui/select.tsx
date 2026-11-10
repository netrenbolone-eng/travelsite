"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;

export function SelectTrigger({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Trigger>) {
  return <SelectPrimitive.Trigger className={cn("flex h-12 w-full items-center justify-between rounded-lg border border-border bg-surface px-3.5 text-sm text-ink outline-none focus:border-accent-text", className)} {...props}>{children}<SelectPrimitive.Icon><ChevronDown className="size-4 opacity-50" /></SelectPrimitive.Icon></SelectPrimitive.Trigger>;
}
export function SelectContent({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Content>) {
  return <SelectPrimitive.Portal><SelectPrimitive.Content position="popper" className={cn("z-[110] max-h-72 overflow-hidden rounded-lg border border-border bg-surface text-ink shadow-xl", className)} {...props}><SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport></SelectPrimitive.Content></SelectPrimitive.Portal>;
}
export function SelectItem({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Item>) {
  return <SelectPrimitive.Item className={cn("relative flex cursor-pointer select-none items-center rounded-md py-2.5 pl-8 pr-3 text-sm text-ink outline-none data-[highlighted]:bg-ink/5", className)} {...props}><span className="absolute left-2 flex size-4 items-center justify-center"><SelectPrimitive.ItemIndicator><Check className="size-4" /></SelectPrimitive.ItemIndicator></span><SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText></SelectPrimitive.Item>;
}