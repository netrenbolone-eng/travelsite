"use client";

import { FormProvider, type FieldValues, type UseFormReturn } from "react-hook-form";
import type { FormEventHandler, HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Form<T extends FieldValues>({
  form,
  onSubmit,
  className,
  children,
}: {
  form: UseFormReturn<T>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  className?: string;
  children: ReactNode;
}) {
  return <FormProvider {...form}><form noValidate onSubmit={onSubmit} className={className}>{children}</form></FormProvider>;
}

export function FormItem({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("grid gap-2", className)} {...props} />;
}

export function FormLabel({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-sm font-semibold", className)} {...props} />;
}

export function FormMessage({ children, className }: { children?: ReactNode; className?: string }) {
  if (!children) return null;
  return <p role="alert" className={cn("text-xs text-[color:var(--color-error)]", className)}>{children}</p>;
}