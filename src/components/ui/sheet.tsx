"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({ className, children, ...props }: Dialog.DialogContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/45 data-[state=open]:animate-in" />
      <Dialog.Content
        className={cn("fixed inset-y-0 right-0 z-50 flex w-[min(88vw,380px)] flex-col border-l border-border bg-surface p-6 text-ink shadow-2xl", className)}
        {...props}
      >
        {children}
        <Dialog.Close aria-label="Close menu" className="absolute right-4 top-4 rounded-full p-2 hover:bg-ink/5">
          <X className="size-5" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}