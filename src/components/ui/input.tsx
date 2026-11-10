import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input type={type} className={cn("flex h-12 w-full rounded-lg border border-border bg-surface px-3.5 py-2 text-sm text-ink outline-none transition placeholder:text-secondary focus:border-accent-text focus:ring-2 focus:ring-accent-text/15 disabled:cursor-not-allowed disabled:opacity-50", className)} ref={ref} {...props} />
  ),
);
Input.displayName = "Input";