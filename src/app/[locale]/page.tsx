import { Hero } from "@/components/hero";
import { SiteChrome } from "@/components/site-chrome";
import { CategoriesSection, ContactsSection, FAQSection, FloatingContact, ReviewsSection, SiteFooter, ToursSection, WorkflowSection } from "@/components/landing-sections";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/types";
import { LeadSection } from "@/components/lead-section";
import { RegionExplorer } from "@/components/region-explorer";
import { faqIds } from "@/data/faq";
import { site } from "@/config/site";

const supportedLocales: Locale[] = ["ru", "en", "vi"];

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) return null;
  const activeLocale = locale as Locale;
  const dictionary = getDictionary(activeLocale);
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: site.name,
    url: `${site.origin}/${locale}`,
    telephone: site.phone,
    email: site.email,
    address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: site.primaryCity, addressCountry: "VN" },
    areaServed: ["Da Lat", "Da Nang", "Nha Trang", "Hoi An", "Vietnam"],
    sameAs: Object.values(site.social),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqIds.map((id) => ({
      "@type": "Question",
      name: dictionary.faq.items[id].question,
      acceptedAnswer: { "@type": "Answer", text: dictionary.faq.items[id].answer },
    })),
  };
  const jsonLd = JSON.stringify([travelAgencySchema, faqSchema]).replace(/</g, "\\u003c");

  return (
    <>
      <SiteChrome locale={activeLocale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <main>
        <Hero locale={activeLocale} />
        <RegionExplorer dictionary={dictionary} />
        <CategoriesSection locale={activeLocale} dictionary={dictionary} />
        <ToursSection locale={activeLocale} dictionary={dictionary} />
        <WorkflowSection dictionary={dictionary} />
        <ReviewsSection locale={activeLocale} dictionary={dictionary} />
        <FAQSection dictionary={dictionary} />
        <LeadSection locale={activeLocale} dictionary={dictionary} />
        <ContactsSection locale={activeLocale} dictionary={dictionary} />
      </main>
      <SiteFooter locale={activeLocale} dictionary={dictionary} />
      <FloatingContact locale={activeLocale} dictionary={dictionary} />
    </>
  );
}
