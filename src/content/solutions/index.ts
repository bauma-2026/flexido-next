import type { Locale } from "@/i18n/config";
import type { HubContent, SolutionPageContent } from "./types";

import { hubContent as hubSl } from "./hub/sl";
import { hubContent as hubEn } from "./hub/en";
import { hubContent as hubDe } from "./hub/de";

import { automationContent as automationSl } from "./automation/sl";
import { automationContent as automationEn } from "./automation/en";
import { automationContent as automationDe } from "./automation/de";

import { cncContent as cncSl } from "./cnc/sl";
import { cncContent as cncEn } from "./cnc/en";
import { cncContent as cncDe } from "./cnc/de";

import { injectionMoldingContent as injectionMoldingSl } from "./injectionMolding/sl";
import { injectionMoldingContent as injectionMoldingEn } from "./injectionMolding/en";
import { injectionMoldingContent as injectionMoldingDe } from "./injectionMolding/de";

import { cobotsContent as cobotsSl } from "./cobots/sl";
import { cobotsContent as cobotsEn } from "./cobots/en";
import { cobotsContent as cobotsDe } from "./cobots/de";

import { materialHandlingContent as materialHandlingSl } from "./materialHandling/sl";
import { materialHandlingContent as materialHandlingEn } from "./materialHandling/en";
import { materialHandlingContent as materialHandlingDe } from "./materialHandling/de";

import { logisticsContent as logisticsSl } from "./logistics/sl";
import { logisticsContent as logisticsEn } from "./logistics/en";
import { logisticsContent as logisticsDe } from "./logistics/de";

import { customSystemsContent as customSystemsSl } from "./customSystems/sl";
import { customSystemsContent as customSystemsEn } from "./customSystems/en";
import { customSystemsContent as customSystemsDe } from "./customSystems/de";

const hubByLocale: Record<Locale, HubContent> = { sl: hubSl, en: hubEn, de: hubDe };
const automationByLocale: Record<Locale, SolutionPageContent> = { sl: automationSl, en: automationEn, de: automationDe };
const cncByLocale: Record<Locale, SolutionPageContent> = { sl: cncSl, en: cncEn, de: cncDe };
const injectionMoldingByLocale: Record<Locale, SolutionPageContent> = { sl: injectionMoldingSl, en: injectionMoldingEn, de: injectionMoldingDe };
const cobotsByLocale: Record<Locale, SolutionPageContent> = { sl: cobotsSl, en: cobotsEn, de: cobotsDe };
const materialHandlingByLocale: Record<Locale, SolutionPageContent> = { sl: materialHandlingSl, en: materialHandlingEn, de: materialHandlingDe };
const logisticsByLocale: Record<Locale, SolutionPageContent> = { sl: logisticsSl, en: logisticsEn, de: logisticsDe };
const customSystemsByLocale: Record<Locale, SolutionPageContent> = { sl: customSystemsSl, en: customSystemsEn, de: customSystemsDe };

export function getHubContent(locale: Locale): HubContent {
  return hubByLocale[locale];
}
export function getAutomationContent(locale: Locale): SolutionPageContent {
  return automationByLocale[locale];
}
export function getCncContent(locale: Locale): SolutionPageContent {
  return cncByLocale[locale];
}
export function getInjectionMoldingContent(locale: Locale): SolutionPageContent {
  return injectionMoldingByLocale[locale];
}
export function getCobotsContent(locale: Locale): SolutionPageContent {
  return cobotsByLocale[locale];
}
export function getMaterialHandlingContent(locale: Locale): SolutionPageContent {
  return materialHandlingByLocale[locale];
}
export function getLogisticsContent(locale: Locale): SolutionPageContent {
  return logisticsByLocale[locale];
}
export function getCustomSystemsContent(locale: Locale): SolutionPageContent {
  return customSystemsByLocale[locale];
}
