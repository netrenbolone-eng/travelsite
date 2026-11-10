import type { Metadata } from "next";
import localFont from "next/font/local";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { site } from "@/config/site";
import { ru } from "@/i18n/ru";
import { en } from "@/i18n/en";
import { ScrollChromeProvider } from "@/hooks/use-scroll-chrome";
import "./globals.css";

const oswaldLatin = localFont({ src: "../../../node_modules/@fontsource-variable/oswald/files/oswald-latin-wght-normal.woff2", weight: "200 700", variable: "--font-display-latin", display: "swap" });
const oswaldCyrillic = localFont({ src: "../../../node_modules/@fontsource-variable/oswald/files/oswald-cyrillic-wght-normal.woff2", weight: "200 700", variable: "--font-display-cyrillic", display: "swap" });
const interLatin = localFont({ src: "../../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", weight: "100 900", variable: "--font-sans-latin", display: "swap" });
const interCyrillic = localFont({ src: "../../../node_modules/@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2", weight: "100 900", variable: "--font-sans-cyrillic", display: "swap" });

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isRu = locale === "ru";
  const dictionary = isRu ? ru : en;
  const canonical = `/${locale}`;

  return {
    metadataBase: new URL(site.origin),
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    alternates: {
      canonical,
      languages: { ru: "/ru", en: "/en", "x-default": "/ru" },
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      url: canonical,
      locale: isRu ? "ru_RU" : "en_US",
      alternateLocale: isRu ? ["en_US"] : ["ru_RU"],
      images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: dictionary.hero.photoAlt }],
    },
    twitter: { card: "summary_large_image", title: dictionary.metadata.title, description: dictionary.metadata.description, images: ["/images/hero.jpg"] },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return [{ locale: "ru" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (locale !== "ru" && locale !== "en") notFound();

  return (
    <html lang={locale}>
      <body
        className={`${oswaldLatin.variable} ${oswaldCyrillic.variable} ${interLatin.variable} ${interCyrillic.variable} font-sans antialiased`}
        style={{ "--font-display": "var(--font-display-cyrillic), var(--font-display-latin)", "--font-sans": "var(--font-sans-cyrillic), var(--font-sans-latin)" } as CSSProperties}
      >
        <ScrollChromeProvider>
          {children}
          <Toaster position="top-center" richColors />
        </ScrollChromeProvider>
      </body>
    </html>
  );
}