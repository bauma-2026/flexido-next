import type { Locale } from "@/i18n/config";
import type { HomeHeroContent, HomePageContent } from "./types";
import { homeContent as sl } from "./sl";
import { homeContent as en } from "./en";
import { homeContent as de } from "./de";

const byLocale: Record<Locale, HomePageContent> = { sl, en, de };

export function getHomeContent(locale: Locale): HomePageContent {
  return byLocale[locale];
}

/** Hero-only accessor for legacy proof-era imports. */
export function getHomeHero(locale: "en" | "de"): HomeHeroContent {
  return byLocale[locale].hero;
}
