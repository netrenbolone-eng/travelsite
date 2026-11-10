"use client";

import Link from "next/link";
import { Flower2, Menu, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ru } from "@/i18n/ru";
import { en } from "@/i18n/en";
import { site } from "@/config/site";
import { useSetMenuOpen } from "@/hooks/use-scroll-chrome";

export function SiteHeader({ locale }: { locale: "ru" | "en" }) {
  const [open, setOpen] = useState(false);
  const isRu = locale === "ru";
  const labels = (isRu ? ru : en).header;
  const whatsappUrl = `https://wa.me/${site.whatsapp}`;
  const setMenuOpen = useSetMenuOpen();
  const handleMenuOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
    setMenuOpen(nextOpen);
  };
  const links = [
    ["#tours", labels.tours],
    ["#how-it-works", labels.how],
    ["#reviews", labels.reviews],
    ["#faq", labels.faq],
  ];

  return (
    <header className="site-header">
      <Link href={`/${locale}`} className="wordmark" aria-label="Lotus Route home">
        <Flower2 aria-hidden="true" className="size-7 text-brand-orange" strokeWidth={1.7} />
        <span>{site.name.toUpperCase()}</span>
      </Link>
      <nav className="desktop-nav" aria-label={isRu ? "Основная навигация" : "Main navigation"}>
        {links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <div className="locale-switch" aria-label="Language">
          <Link href="/ru" aria-current={isRu ? "page" : undefined}>RU</Link>
          <span aria-hidden="true">/</span>
          <Link href="/en" aria-current={!isRu ? "page" : undefined}>EN</Link>
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
              <div className="locale-switch mt-4"><Link href="/ru">RU</Link><span>/</span><Link href="/en">EN</Link></div>
              <Button asChild variant="whatsapp" className="mt-5 w-full"><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="size-4" />{labels.whatsapp}</a></Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}