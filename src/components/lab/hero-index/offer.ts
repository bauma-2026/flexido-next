import { getCobotsContent, getHubContent } from "@/content/solutions";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";

/** Tier is lab-local. Production homepage no longer groups the seven families. */
export type OfferTier = "area" | "wider" | "quiet";

export type OfferFamily = {
  href: string;
  title: string;
  desc: string;
  tier: OfferTier;
  /** Group label, present only on the first item of a labelled group. */
  groupLabel?: string;
};

/**
 * Area-group eyebrow — not on the solutions hub (hub labels each family, not
 * the set). Wider-group labels come from `hub.widerApproach.eyebrow`. Quiet
 * cobots have no group heading.
 */
const areaGroupLabel: Record<Locale, string> = {
  sl: "Področja",
  en: "Areas",
  de: "Bereiche",
};

/**
 * Compact cobots one-liners. Hub only footnotes cobots; the cobots page
 * subhead is too long for the hero index.
 */
const cobotsDesc: Record<Locale, string> = {
  sl: "Pomoč pri ponavljajočih se nalogah in delu z operaterjem.",
  en: "Help with repetitive tasks alongside an operator.",
  de: "Unterstützung bei sich wiederholenden Aufgaben neben dem Bediener.",
};

/**
 * Lab-only 7-family inventory, in shipped order: 4 areas, 2 wider-approach,
 * 1 quiet (cobots). Titles, descriptors, and routes come from existing
 * solutions hub / cobots content — not from homepage `solutions.groups`.
 */
export function getOfferFamilies(locale: Locale): OfferFamily[] {
  const hub = getHubContent(locale);
  const cobots = getCobotsContent(locale);

  const widerKeys = new Set(hub.widerApproach.paths.map((path) => path.routeKey));
  const areaItems = hub.gridItems.filter(
    (item) => item.routeKey !== "solutionCobots" && !widerKeys.has(item.routeKey),
  );

  const areas: OfferFamily[] = areaItems.map((item, itemIndex) => ({
    href: getPath(item.routeKey, locale) ?? "#",
    title: item.title,
    desc: item.desc,
    tier: "area",
    groupLabel: itemIndex === 0 ? areaGroupLabel[locale] : undefined,
  }));

  const wider: OfferFamily[] = hub.widerApproach.paths.map((path, itemIndex) => ({
    href: getPath(path.routeKey, locale) ?? "#",
    title: path.title,
    desc: path.body,
    tier: "wider",
    groupLabel: itemIndex === 0 ? hub.widerApproach.eyebrow : undefined,
  }));

  const quiet: OfferFamily[] = [
    {
      href: getPath("solutionCobots", locale) ?? "#",
      title: cobots.hero.eyebrow,
      desc: cobotsDesc[locale],
      tier: "quiet",
    },
  ];

  return [...areas, ...wider, ...quiet];
}
