import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/ru", "/en", "/ru/privacy-policy", "/en/privacy-policy"];
  return routes.map((path) => ({
    url: `${site.origin}${path}`,
    lastModified: new Date(),
    changeFrequency: path.includes("privacy-policy") ? "yearly" : "weekly",
    priority: path.includes("privacy-policy") ? 0.3 : 1,
    alternates: path === "/ru" || path === "/en"
      ? { languages: { ru: `${site.origin}/ru`, en: `${site.origin}/en`, "x-default": `${site.origin}/ru` } }
      : path.includes("privacy-policy")
        ? { languages: { ru: `${site.origin}/ru/privacy-policy`, en: `${site.origin}/en/privacy-policy`, "x-default": `${site.origin}/ru/privacy-policy` } }
      : undefined,
  }));
}