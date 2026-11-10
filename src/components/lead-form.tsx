"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/config/site";
import { tours } from "@/data/tours";
import type { Dictionary, Locale } from "@/i18n/types";

function createLeadSchema(dictionary: Dictionary) {
  return z.object({
    name: z.string().trim().min(2, dictionary.form.required).max(100),
    phone: z.string().trim().regex(/^\+?[0-9()\-\s]{7,24}$/, dictionary.form.invalid),
    messenger: z.enum(["whatsapp", "telegram", "phone"]),
    tourId: z.string().max(80).optional(),
    date: z.string().max(30).optional(),
    guests: z.coerce.number().int().min(1).max(30),
    comment: z.string().trim().max(1000).optional(),
    companyWebsite: z.string().max(200),
  });
}

export function LeadForm({
  locale,
  dictionary,
  selectedTourId,
  compact = false,
}: {
  locale: Locale;
  dictionary: Dictionary;
  selectedTourId?: string;
  compact?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappMessage, setWhatsappMessage] = useState("");
  const schema = createLeadSchema(dictionary);
  const form = useForm<z.input<typeof schema>, unknown, z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      messenger: "whatsapp",
      tourId: selectedTourId ?? "",
      date: "",
      guests: 2,
      comment: "",
      companyWebsite: "",
    },
  });
  const fieldErrors = form.formState.errors;

  async function submitLead(values: z.output<typeof schema>) {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...values, locale }),
    });
    const result = await response.json().catch(() => null) as { success?: boolean } | null;
    if (!response.ok || !result?.success) {
      toast.error(locale === "ru" ? "Не удалось отправить заявку. Напишите нам в мессенджер." : "Could not send your request. Please message us directly.");
      return;
    }

    const selectedTour = tours.find((tour) => tour.id === values.tourId);
    const message = locale === "ru"
      ? `Здравствуйте! Я оставил(а) заявку на сайте ${site.name}. Имя: ${values.name}. Тур: ${selectedTour?.name.ru ?? "помогите выбрать"}. Дата: ${values.date || "не выбрана"}. Гостей: ${values.guests}.`
      : `Hi! I sent a request on the ${site.name} website. Name: ${values.name}. Tour: ${selectedTour?.name.en ?? "help me choose"}. Date: ${values.date || "not selected"}. Guests: ${values.guests}.`;
    setWhatsappMessage(message);
    setSubmitted(true);
    toast.success(dictionary.form.success);
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 className="size-9 text-[color:var(--color-green-link)]" />
        <p>{dictionary.form.success}</p>
        <Button asChild variant="whatsapp" className="w-full"><a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noreferrer">{dictionary.form.continueWhatsApp}<ArrowUpRight className="size-4" /></a></Button>
      </div>
    );
  }

  return (
    <Form form={form} onSubmit={form.handleSubmit(submitLead)} className={`lead-form${compact ? " lead-form-compact" : ""}`}>
      <div className="honeypot" aria-hidden="true"><label htmlFor="companyWebsite">{dictionary.form.spam}</label><input id="companyWebsite" tabIndex={-1} autoComplete="off" {...form.register("companyWebsite")} /></div>
      <FormItem><FormLabel htmlFor="lead-name">{dictionary.form.name} *</FormLabel><Input id="lead-name" autoComplete="name" aria-invalid={Boolean(fieldErrors.name)} {...form.register("name")} /><FormMessage>{fieldErrors.name?.message}</FormMessage></FormItem>
      <FormItem><FormLabel htmlFor="lead-phone">{dictionary.form.contact} *</FormLabel><Input id="lead-phone" type="tel" autoComplete="tel" inputMode="tel" aria-invalid={Boolean(fieldErrors.phone)} {...form.register("phone")} /><FormMessage>{fieldErrors.phone?.message}</FormMessage></FormItem>
      <FormItem><FormLabel htmlFor="lead-messenger">{dictionary.form.messenger}</FormLabel><Select value={form.watch("messenger")} onValueChange={(value) => form.setValue("messenger", value as "whatsapp" | "telegram" | "phone", { shouldValidate: true })}><SelectTrigger id="lead-messenger"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="whatsapp">{dictionary.form.whatsapp}</SelectItem><SelectItem value="telegram">{dictionary.form.telegram}</SelectItem><SelectItem value="phone">{dictionary.form.phone}</SelectItem></SelectContent></Select></FormItem>
      <FormItem><FormLabel htmlFor="lead-tour">{dictionary.form.tour}</FormLabel><Select value={form.watch("tourId") || "none"} onValueChange={(value) => form.setValue("tourId", value === "none" ? "" : value)}><SelectTrigger id="lead-tour"><SelectValue placeholder={dictionary.form.chooseTour} /></SelectTrigger><SelectContent><SelectItem value="none">{dictionary.form.chooseTour}</SelectItem>{tours.map((tour) => <SelectItem value={tour.id} key={tour.id}>{tour.name[locale]} · ${tour.price}</SelectItem>)}</SelectContent></Select></FormItem>
      <FormItem><FormLabel htmlFor="lead-date">{dictionary.form.date}</FormLabel><Input id="lead-date" type="date" min={new Date().toISOString().slice(0, 10)} {...form.register("date")} /></FormItem>
      <FormItem><FormLabel htmlFor="lead-guests">{dictionary.form.guests}</FormLabel><Input id="lead-guests" type="number" min="1" max="30" {...form.register("guests")} /><FormMessage>{fieldErrors.guests?.message}</FormMessage></FormItem>
      <FormItem className="lead-comment"><FormLabel htmlFor="lead-comment">{dictionary.form.comment}</FormLabel><Textarea id="lead-comment" maxLength={1000} {...form.register("comment")} /></FormItem>
      <Button type="submit" disabled={form.formState.isSubmitting} className="lead-submit">{form.formState.isSubmitting ? dictionary.form.sending : dictionary.form.submit}</Button>
      <p className="privacy-consent">{dictionary.form.privacy} <a href={`/${locale}/privacy-policy`}>{dictionary.footer.privacy}</a></p>
    </Form>
  );
}