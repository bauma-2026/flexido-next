import type { Locale } from "@/i18n/config";
import type { LegalPageContent } from "./types";

import { legalNoticeContent as noticeSl } from "./legalNotice/sl";
import { legalNoticeContent as noticeEn } from "./legalNotice/en";
import { legalNoticeContent as noticeDe } from "./legalNotice/de";

import { salesTermsContent as salesSl } from "./salesTerms/sl";
import { salesTermsContent as salesEn } from "./salesTerms/en";
import { salesTermsContent as salesDe } from "./salesTerms/de";

import { privacyContent as privacySl } from "./privacy/sl";
import { privacyContent as privacyEn } from "./privacy/en";
import { privacyContent as privacyDe } from "./privacy/de";

const noticeByLocale: Record<Locale, LegalPageContent> = {
  sl: noticeSl,
  en: noticeEn,
  de: noticeDe,
};

const salesByLocale: Record<Locale, LegalPageContent> = {
  sl: salesSl,
  en: salesEn,
  de: salesDe,
};

const privacyByLocale: Record<Locale, LegalPageContent> = {
  sl: privacySl,
  en: privacyEn,
  de: privacyDe,
};

export function getLegalNoticeContent(locale: Locale): LegalPageContent {
  return noticeByLocale[locale];
}

export function getSalesTermsContent(locale: Locale): LegalPageContent {
  return salesByLocale[locale];
}

export function getPrivacyContent(locale: Locale): LegalPageContent {
  return privacyByLocale[locale];
}
