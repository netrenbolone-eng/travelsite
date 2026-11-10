"use client";

import { AnnouncementBar } from "@/components/announcement-bar";
import { SiteHeader } from "@/components/site-header";
import { useScrollChrome } from "@/hooks/use-scroll-chrome";

export function SiteChrome({ locale, hasHero = true }: { locale: "ru" | "en"; hasHero?: boolean }) {
  const state = useScrollChrome();

  return (
    <div className={`site-chrome site-chrome-${hasHero ? state : "page"}`}>
      <AnnouncementBar locale={locale} />
      <SiteHeader locale={locale} />
    </div>
  );
}
