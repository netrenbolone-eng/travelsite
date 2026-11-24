import { en } from "@/i18n/en";
import { ru } from "@/i18n/ru";
import { vi } from "@/i18n/vi";
import type { Dictionary, Locale } from "@/i18n/types";

export const dictionaries: Record<Locale, Dictionary> = { ru, en, vi };
export const getDictionary = (locale: Locale) => dictionaries[locale];
