import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const locales = ["ru", "en", "vi"] as const;
const paths = ["", "/privacy-policy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => paths.map((suffix) => {
    const path = `/${locale}${suffix}`;
    return {
      url: `${site.origin}${path}`,
      lastModified: new Date(),
      changeFrequency: suffix ? "yearly" as const : "weekly" as const,
      priority: suffix ? 0.3 : 1,
      alternates: {
        languages: Object.fromEntries(locales.map((language) => [language, `${site.origin}/${language}${suffix}`]).concat([["x-default", `${site.origin}/ru${suffix}`]])),
      },
    };
  }));
}
