import type { Locale } from "@/i18n/config";
import type { SystemPageContent, SystemsHubContent } from "./types";

import { hubSystemsContent as hubSl } from "./hub/sl";
import { hubSystemsContent as hubEn } from "./hub/en";
import { hubSystemsContent as hubDe } from "./hub/de";

import { cncSystemContent as cncSl } from "./cnc/sl";
import { cncSystemContent as cncEn } from "./cnc/en";
import { cncSystemContent as cncDe } from "./cnc/de";

import { immSystemContent as immSl } from "./imm/sl";
import { immSystemContent as immEn } from "./imm/en";
import { immSystemContent as immDe } from "./imm/de";

import { flex2550SystemContent as flex2550Sl } from "./flex2550/sl";
import { flex2550SystemContent as flex2550En } from "./flex2550/en";
import { flex2550SystemContent as flex2550De } from "./flex2550/de";

import { tmxSystemContent as tmxSl } from "./tmx/sl";
import { tmxSystemContent as tmxEn } from "./tmx/en";
import { tmxSystemContent as tmxDe } from "./tmx/de";

import { middlewareSystemContent as middlewareSl } from "./middleware/sl";
import { middlewareSystemContent as middlewareEn } from "./middleware/en";
import { middlewareSystemContent as middlewareDe } from "./middleware/de";

const hubByLocale: Record<Locale, SystemsHubContent> = { sl: hubSl, en: hubEn, de: hubDe };
const cncByLocale: Record<Locale, SystemPageContent> = { sl: cncSl, en: cncEn, de: cncDe };
const immByLocale: Record<Locale, SystemPageContent> = { sl: immSl, en: immEn, de: immDe };
const flex2550ByLocale: Record<Locale, SystemPageContent> = { sl: flex2550Sl, en: flex2550En, de: flex2550De };
const tmxByLocale: Record<Locale, SystemPageContent> = { sl: tmxSl, en: tmxEn, de: tmxDe };
const middlewareByLocale: Record<Locale, SystemPageContent> = { sl: middlewareSl, en: middlewareEn, de: middlewareDe };

export function getSystemsHubContent(locale: Locale): SystemsHubContent {
  return hubByLocale[locale];
}
export function getCncSystemContent(locale: Locale): SystemPageContent {
  return cncByLocale[locale];
}
export function getImmSystemContent(locale: Locale): SystemPageContent {
  return immByLocale[locale];
}
export function getFlex2550SystemContent(locale: Locale): SystemPageContent {
  return flex2550ByLocale[locale];
}
export function getTmxSystemContent(locale: Locale): SystemPageContent {
  return tmxByLocale[locale];
}
export function getMiddlewareSystemContent(locale: Locale): SystemPageContent {
  return middlewareByLocale[locale];
}
