import type { Locale } from "@/i18n/config";
import type { ServicePageContent } from "./types";

import { serviceContent as sl } from "./sl";
import { serviceContent as en } from "./en";
import { serviceContent as de } from "./de";

const byLocale: Record<Locale, ServicePageContent> = { sl, en, de };

export function getServiceContent(locale: Locale): ServicePageContent {
  return byLocale[locale];
}
