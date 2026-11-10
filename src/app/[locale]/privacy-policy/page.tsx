import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/site-chrome";
import { SiteFooter } from "@/components/landing-sections";
import { ru } from "@/i18n/ru";
import { en } from "@/i18n/en";
import type { Locale } from "@/i18n/types";
import { site } from "@/config/site";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = locale === "ru" ? ru : en;
  return {
    title: dictionary.footer.policyTitle,
    description: dictionary.footer.policyBody[0],
    alternates: { canonical: `/${locale}/privacy-policy`, languages: { ru: "/ru/privacy-policy", en: "/en/privacy-policy", "x-default": "/ru/privacy-policy" } },
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") return null;
  const activeLocale = locale as Locale;
  const dictionary = activeLocale === "ru" ? ru : en;

  return <><SiteChrome locale={activeLocale} hasHero={false} /><main className="privacy-page container"><Link href={`/${locale}`} className="text-link">← {locale === "ru" ? "На главную" : "Back to home"}</Link><p className="section-number">{site.name.toUpperCase()}</p><h1 className="display-heading">{dictionary.footer.policyTitle}</h1>{dictionary.footer.policyBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</main><SiteFooter locale={activeLocale} dictionary={dictionary} /></>;
}