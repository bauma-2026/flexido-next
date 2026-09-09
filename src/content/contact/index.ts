import type { Locale } from "@/i18n/config";
import type { ContactPageContent } from "./types";

import { contactContent as sl } from "./sl";
import { contactContent as en } from "./en";
import { contactContent as de } from "./de";

const byLocale: Record<Locale, ContactPageContent> = { sl, en, de };

export function getContactContent(locale: Locale): ContactPageContent {
  return byLocale[locale];
}
