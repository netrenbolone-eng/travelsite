import Link from "next/link";
import { ArrowDown, ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/config/site";
import { ru } from "@/i18n/ru";
import { en } from "@/i18n/en";
import { HeroVideo } from "@/components/hero-video";

export function Hero({ locale }: { locale: "ru" | "en" }) {
  const isRu = locale === "ru";
  const dictionary = isRu ? ru : en;
  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(dictionary.hero.description)}`;
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <HeroVideo />
      <span className="hero-art-label">DA LAT · VIETNAM</span>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-content container">
        <p className="eyebrow">{dictionary.hero.eyebrow}</p>
        <h1 id="hero-title">{dictionary.hero.title}</h1>
        <p className="hero-lede">{dictionary.hero.description}</p>
        <div className="hero-actions">
          <Button asChild variant="whatsapp" className="min-h-14 px-6 text-base">
            <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="size-5" />{dictionary.hero.whatsapp}<ArrowUpRight className="ml-1 size-4" /></a>
          </Button>
          <Button asChild variant="outline" className="min-h-14 border-white/60 bg-white/10 px-6 text-base text-white hover:bg-white hover:text-ink">
            <Link href="#tours">{dictionary.hero.tours}<ArrowDown className="size-4" /></Link>
          </Button>
        </div>
        <div className="hero-proof">
          <span><Star className="size-4 fill-brand-orange text-brand-orange" /> <b>{site.demoRating}</b> {dictionary.trust.demo} {dictionary.trust.rating}</span>
          <span>{site.demoGuestCount} {dictionary.trust.guests}</span>
          <span>{dictionary.trust.guides}</span>
          <span>{dictionary.trust.payments}</span>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true"><span />{dictionary.hero.scroll}</div>
    </section>
  );
}