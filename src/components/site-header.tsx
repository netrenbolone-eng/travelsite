"use client";

import Link from "next/link";
import { Flower2, Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/types";
import { site } from "@/config/site";
import { useSetMenuOpen } from "@/hooks/use-scroll-chrome";

const languages: { code: Locale; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "vi", label: "VI" },
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const labels = getDictionary(locale).header;
  const whatsappUrl = `https://wa.me/${site.whatsapp}`;
  const setMenuOpen = useSetMenuOpen();
  const handleMenuOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    setMenuOpen(nextOpen);
  };
  const links = [
    ["#explore", labels.destinations],
    ["#tours", labels.tours],
    ["#categories", labels.experiences],
    ["#how-it-works", labels.how],
    ["#contacts", labels.contacts],
  ];

  return (
    <header className="site-header">
      <Link href={`/${locale}`} className="wordmark" aria-label="Lotus Route home">
        <Flower2 aria-hidden="true" className="size-7 text-brand-orange" strokeWidth={1.7} />
        <span>{site.name.toUpperCase()}</span>
      </Link>
      <nav className="desktop-nav" aria-label={labels.destinations}>
        {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <div className="locale-switch" aria-label="Language">
          {languages.map((language) => <Link href={`/${language.code}`} key={language.code} aria-current={locale === language.code ? "page" : undefined}>{language.label}</Link>)}
        </div>
        <Button asChild variant="whatsapp" className="header-whatsapp">
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" className="size-4" />{labels.whatsapp}</a>
        </Button>
        <Sheet open={open} onOpenChange={handleMenuOpenChange}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mobile-menu-trigger" aria-label={labels.menu}>
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent aria-label={labels.menu}>
            <Link href={`/${locale}`} className="wordmark mb-10 mt-10"><Flower2 className="size-7 text-brand-orange" />{site.name.toUpperCase()}</Link>
            <nav className="mobile-nav">
              {links.map(([href, label]) => <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>)}
              <div className="locale-switch mobile-locale-switch" aria-label="Language">
                {languages.map((language) => <Link href={`/${language.code}`} key={language.code} aria-current={locale === language.code ? "page" : undefined}>{language.label}</Link>)}
              </div>
              <Button asChild variant="whatsapp" className="mt-5 w-full"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="size-4" />{labels.whatsapp}</a></Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
