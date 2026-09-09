import type { Locale } from "@/i18n/config";
import type { CompanyAboutContent, CompanyVideoContent } from "./types";

import { aboutContent as aboutSl } from "./about/sl";
import { aboutContent as aboutEn } from "./about/en";
import { aboutContent as aboutDe } from "./about/de";

import { videoContent as videoSl } from "./video/sl";
import { videoContent as videoEn } from "./video/en";
import { videoContent as videoDe } from "./video/de";

const aboutByLocale: Record<Locale, CompanyAboutContent> = {
  sl: aboutSl,
  en: aboutEn,
  de: aboutDe,
};

const videoByLocale: Record<Locale, CompanyVideoContent> = {
  sl: videoSl,
  en: videoEn,
  de: videoDe,
};

export function getAboutContent(locale: Locale): CompanyAboutContent {
  return aboutByLocale[locale];
}

export function getVideoContent(locale: Locale): CompanyVideoContent {
  return videoByLocale[locale];
}
