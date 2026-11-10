import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("inline-flex items-center rounded-full bg-brand-orange px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-ink", className)} {...props} />;
}