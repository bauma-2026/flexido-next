import type { Locale } from "@/i18n/config";
import type { ProcessPageContent } from "./types";

import { processContent as sl } from "./sl";
import { processContent as en } from "./en";
import { processContent as de } from "./de";

const byLocale: Record<Locale, ProcessPageContent> = { sl, en, de };

export function getProcessContent(locale: Locale): ProcessPageContent {
  return byLocale[locale];
}
