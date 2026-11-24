import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/site-chrome";
import { SiteFooter } from "@/components/landing-sections";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/types";
import { site } from "@/config/site";

const supportedLocales: Locale[] = ["ru", "en", "vi"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) return {};
  const dictionary = getDictionary(locale as Locale);
  return {
    title: dictionary.footer.policyTitle,
    description: dictionary.footer.policyBody[0],
    alternates: { canonical: `/${locale}/privacy-policy`, languages: { ru: "/ru/privacy-policy", en: "/en/privacy-policy", vi: "/vi/privacy-policy", "x-default": "/ru/privacy-policy" } },
  };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) notFound();
  const activeLocale = locale as Locale;
  const dictionary = getDictionary(activeLocale);

  return <><SiteChrome locale={activeLocale} hasHero={false} /><main className="privacy-page container"><Link href={`/${locale}`} className="text-link">← {dictionary.footer.home}</Link><p className="section-number">{site.name.toUpperCase()}</p><h1 className="display-heading">{dictionary.footer.policyTitle}</h1>{dictionary.footer.policyBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</main><SiteFooter locale={activeLocale} dictionary={dictionary} /></>;
}
