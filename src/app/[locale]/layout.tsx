import type { Metadata } from "next";
import localFont from "next/font/local";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import type { Locale } from "@/i18n/types";
import { ScrollChromeProvider } from "@/hooks/use-scroll-chrome";
import "./globals.css";

const supportedLocales: Locale[] = ["ru", "en", "vi"];
const oswaldLatin = localFont({ src: "../../../node_modules/@fontsource-variable/oswald/files/oswald-latin-wght-normal.woff2", weight: "200 700", variable: "--font-display-latin", display: "swap" });
const oswaldCyrillic = localFont({ src: "../../../node_modules/@fontsource-variable/oswald/files/oswald-cyrillic-wght-normal.woff2", weight: "200 700", variable: "--font-display-cyrillic", display: "swap" });
const interLatin = localFont({ src: "../../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", weight: "100 900", variable: "--font-sans-latin", display: "swap" });
const interCyrillic = localFont({ src: "../../../node_modules/@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2", weight: "100 900", variable: "--font-sans-cyrillic", display: "swap" });
const interVietnamese = localFont({ src: "../../../node_modules/@fontsource-variable/inter/files/inter-vietnamese-wght-normal.woff2", weight: "100 900", variable: "--font-sans-vietnamese", display: "swap" });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) return {};
  const activeLocale = locale as Locale;
  const dictionary = getDictionary(activeLocale);
  const canonical = `/${locale}`;

  return {
    metadataBase: new URL(site.origin),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical,
      languages: { ru: "/ru", en: "/en", vi: "/vi", "x-default": "/ru" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: canonical,
      locale: activeLocale === "ru" ? "ru_RU" : activeLocale === "vi" ? "vi_VN" : "en_US",
      alternateLocale: activeLocale === "ru" ? ["en_US", "vi_VN"] : activeLocale === "vi" ? ["ru_RU", "en_US"] : ["ru_RU", "vi_VN"],
      images: [{ url: "/videos/hero-poster.jpg", width: 1200, height: 630, alt: dictionary.hero.photoAlt }],
    },
    twitter: { card: "summary_large_image", title: dictionary.metadata.title, description: dictionary.metadata.description, images: ["/videos/hero-poster.jpg"] },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!supportedLocales.includes(locale as Locale)) notFound();

  return (
    <html lang={locale}>
      <body
        className={`${oswaldLatin.variable} ${oswaldCyrillic.variable} ${interLatin.variable} ${interCyrillic.variable} ${interVietnamese.variable} font-sans antialiased`}
        style={{ "--font-display": "var(--font-display-cyrillic), var(--font-display-latin)", "--font-sans": "var(--font-sans-vietnamese), var(--font-sans-cyrillic), var(--font-sans-latin)" } as CSSProperties}
      >
        <ScrollChromeProvider>
          {children}
          <Toaster position="top-center" richColors />
        </ScrollChromeProvider>
      </body>
    </html>
  );
}
