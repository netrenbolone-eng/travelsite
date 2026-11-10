"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;

export function DialogContent({ className, children, closeLabel = "Close", ...props }: ComponentProps<typeof DialogPrimitive.Content> & { closeLabel?: string }) {
  return <DialogPrimitive.Portal><DialogPrimitive.Overlay className="fixed inset-0 z-[90] bg-ink/55 backdrop-blur-sm" /><DialogPrimitive.Content className={cn("fixed left-1/2 top-1/2 z-[100] max-h-[90svh] w-[min(94vw,560px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-border bg-surface p-5 text-ink shadow-2xl sm:p-8", className)} {...props}>{children}<DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-2 text-secondary hover:bg-ink/5" aria-label={closeLabel}><X className="size-5" /></DialogPrimitive.Close></DialogPrimitive.Content></DialogPrimitive.Portal>;
}