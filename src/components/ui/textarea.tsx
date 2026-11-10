import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea className={cn("flex min-h-28 w-full rounded-lg border border-border bg-surface px-3.5 py-3 text-sm text-ink outline-none transition placeholder:text-secondary focus:border-accent-text focus:ring-2 focus:ring-accent-text/15 disabled:cursor-not-allowed disabled:opacity-50", className)} ref={ref} {...props} />
  ),
);
Textarea.displayName = "Textarea";