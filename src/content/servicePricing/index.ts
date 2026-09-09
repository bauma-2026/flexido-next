import type { Locale } from "@/i18n/config";
import type { ServicePricingContent } from "./types";

import { servicePricingContent as sl } from "./sl";
import { servicePricingContent as en } from "./en";
import { servicePricingContent as de } from "./de";

const byLocale: Record<Locale, ServicePricingContent> = { sl, en, de };

export function getServicePricingContent(locale: Locale): ServicePricingContent {
  return byLocale[locale];
}
