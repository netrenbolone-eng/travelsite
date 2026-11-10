"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LeadForm } from "@/components/lead-form";
import type { Tour } from "@/data/tours";
import type { Locale, Dictionary } from "@/i18n/types";
import { site } from "@/config/site";

export function BookingDialog({ tour, locale, dictionary }: { tour: Tour; locale: Locale; dictionary: Dictionary }) {
  const message = locale === "ru"
    ? `Здравствуйте! Хочу узнать о туре «${tour.name.ru}» (от $${tour.price}). Подскажите, пожалуйста, даты и детали.`
    : `Hi! I'm interested in the "${tour.name.en}" tour (from $${tour.price}). Could you share dates and details?`;
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <Dialog>
      <DialogTrigger asChild><Button className="w-full">{dictionary.tours.book}</Button></DialogTrigger>
      <DialogContent closeLabel={dictionary.common.close}>
        <DialogTitle className="pr-8 font-display text-2xl font-bold uppercase">{dictionary.tours.dialogTitle}</DialogTitle>
        <DialogDescription className="mt-2 text-sm leading-6 text-secondary">{dictionary.tours.dialogDescription}</DialogDescription>
        <p className="mt-4 rounded-lg border border-border bg-surface-muted px-4 py-3 text-sm font-semibold text-ink">{tour.name[locale]} · {dictionary.tours.from} ${tour.price}</p>
        <LeadForm locale={locale} dictionary={dictionary} selectedTourId={tour.id} compact />
        <Button asChild variant="whatsapp" className="mt-3 w-full"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="size-4" />{dictionary.tours.ask}<ArrowUpRight className="ml-auto size-4" /></a></Button>
      </DialogContent>
    </Dialog>
  );
}