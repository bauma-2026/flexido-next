import type { Locale } from "@/i18n/config";
import type { NewsArticle, NewsArticleContent, NewsArticleId, NewsHubContent, NewsShared } from "./types";

import { newsHubContent as hubSl } from "./hub/sl";
import { newsHubContent as hubEn } from "./hub/en";
import { newsHubContent as hubDe } from "./hub/de";

import { article as fakuma2024 } from "./articles/fakuma-2024";
import { article as polydigit } from "./articles/polydigit";
import { article as fakuma2023 } from "./articles/fakuma-2023";
import { article as kltConveyor } from "./articles/klt-conveyor";
import { article as flex7Imm } from "./articles/flex-7-imm";
import { article as overmoldingCell } from "./articles/overmolding-cell";
import { article as cartonForming } from "./articles/carton-forming";
import { article as digitalTransformation } from "./articles/digital-transformation";
import { article as kraussMaffeiCell } from "./articles/krauss-maffei-cell";
import { article as celje2019 } from "./articles/celje-2019";
import { article as flex220Pro } from "./articles/flex-220-pro";
import { article as scanMe } from "./articles/scan-me";
import { article as automatica } from "./articles/automatica";

const hubByLocale: Record<Locale, NewsHubContent> = {
  sl: hubSl,
  en: hubEn,
  de: hubDe,
};

const catalog: Record<NewsArticleId, NewsArticle> = {
  "fakuma-2024": fakuma2024,
  polydigit,
  "fakuma-2023": fakuma2023,
  "klt-conveyor": kltConveyor,
  "flex-7-imm": flex7Imm,
  "overmolding-cell": overmoldingCell,
  "carton-forming": cartonForming,
  "digital-transformation": digitalTransformation,
  "krauss-maffei-cell": kraussMaffeiCell,
  "celje-2019": celje2019,
  "flex-220-pro": flex220Pro,
  "scan-me": scanMe,
  automatica,
};

/** Editorial hub order per locale. DE has no articles. */
export const newsOrderByLocale: Record<Locale, NewsArticleId[]> = {
  sl: [
    "fakuma-2024",
    "polydigit",
    "fakuma-2023",
    "klt-conveyor",
    "flex-7-imm",
    "overmolding-cell",
    "carton-forming",
    "digital-transformation",
  ],
  en: [
    "fakuma-2023",
    "krauss-maffei-cell",
    "celje-2019",
    "flex-220-pro",
    "scan-me",
    "automatica",
  ],
  de: [],
};

export function getNewsHubContent(locale: Locale): NewsHubContent {
  return hubByLocale[locale];
}

export function getNewsArticle(id: NewsArticleId): NewsArticle {
  return catalog[id];
}

export function getNewsSummaries(locale: Locale) {
  return newsOrderByLocale[locale]
    .map((id) => {
      const article = catalog[id];
      const content = article.locales[locale];
      if (!content) return null;
      return { id, shared: article.shared, content };
    })
    .filter((item): item is { id: NewsArticleId; shared: NewsShared; content: NewsArticleContent } => item !== null);
}

export function getNewsArticleBySlug(locale: Locale, slug: string) {
  for (const id of newsOrderByLocale[locale]) {
    const article = catalog[id];
    const content = article.locales[locale];
    if (content?.slug === slug) {
      return { id, shared: article.shared, content };
    }
  }
  return null;
}

export function getNewsSlugs(locale: Locale): string[] {
  return getNewsSummaries(locale).map((item) => item.content.slug);
}

export type { NewsArticleId, NewsArticleContent, NewsShared };
