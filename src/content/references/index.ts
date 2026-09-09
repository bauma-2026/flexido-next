import type { Locale } from "@/i18n/config";
import type { ReferenceId, ReferencePageContent, ReferencesHubContent } from "./types";
import { referenceOrder, referenceShared } from "./shared";

import { referencesHubContent as hubSl } from "./hub/sl";
import { referencesHubContent as hubEn } from "./hub/en";
import { referencesHubContent as hubDe } from "./hub/de";

import { overmoldingContent as overmoldingSl } from "./overmolding/sl";
import { overmoldingContent as overmoldingEn } from "./overmolding/en";
import { overmoldingContent as overmoldingDe } from "./overmolding/de";

import { conveyorContent as conveyorSl } from "./conveyor/sl";
import { conveyorContent as conveyorEn } from "./conveyor/en";
import { conveyorContent as conveyorDe } from "./conveyor/de";

import { cartonContent as cartonSl } from "./carton/sl";
import { cartonContent as cartonEn } from "./carton/en";
import { cartonContent as cartonDe } from "./carton/de";

const hubByLocale: Record<Locale, ReferencesHubContent> = {
  sl: hubSl,
  en: hubEn,
  de: hubDe,
};

const pagesById: Record<ReferenceId, Record<Locale, ReferencePageContent>> = {
  "overmolding-cell": { sl: overmoldingSl, en: overmoldingEn, de: overmoldingDe },
  "klt-conveyor": { sl: conveyorSl, en: conveyorEn, de: conveyorDe },
  "carton-forming": { sl: cartonSl, en: cartonEn, de: cartonDe },
};

export function getReferencesHubContent(locale: Locale): ReferencesHubContent {
  return hubByLocale[locale];
}

export function getReferenceContent(id: ReferenceId, locale: Locale): ReferencePageContent {
  return pagesById[id][locale];
}

export function getReferenceSummaries(locale: Locale) {
  return referenceOrder.map((id) => ({
    shared: referenceShared[id],
    content: pagesById[id][locale],
  }));
}

export { referenceOrder, referenceShared };
export type { ReferenceId };
