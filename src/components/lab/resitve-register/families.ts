import { getCobotsContent, getHubContent } from "@/content/solutions";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";

export type RegisterFamily = {
  href: string;
  title: string;
  desc: string;
};

/**
 * Cobots are the only one of the seven with no short descriptor of their own —
 * the hub footnotes them ("Za ponavljajoče naloge ob operaterju poglejte tudi
 * kolaborativne robote."), and the cobots page subhead is a full sentence too
 * long for a register row. This reuses the footnote's own wording rather than
 * writing new copy. EN/DE follow the same footnote in their hub files.
 */
const cobotsDesc: Record<Locale, string> = {
  sl: "Ponavljajoče naloge ob operaterju.",
  en: "Repetitive tasks alongside an operator.",
  de: "Sich wiederholende Aufgaben neben dem Bediener.",
};

/**
 * The seven solution families in decision order: four process areas from the
 * hub grid, two wider-approach paths, then cobots. Every title and descriptor
 * is existing approved content — nothing here is newly written.
 *
 * Deliberately separate from `lab/hero-index/offer.ts` so changes here cannot
 * move the locked hero concepts.
 */
export function getRegisterFamilies(locale: Locale): RegisterFamily[] {
  const hub = getHubContent(locale);
  const cobots = getCobotsContent(locale);

  const candidates: RegisterFamily[] = [
    ...hub.gridItems.map((item) => ({
      href: getPath(item.routeKey, locale) ?? "#",
      title: item.title,
      desc: item.desc,
    })),
    ...hub.widerApproach.paths.map((path) => ({
      href: getPath(path.routeKey, locale) ?? "#",
      title: path.title,
      desc: path.body,
    })),
    {
      href: getPath("solutionCobots", locale) ?? "#",
      title: cobots.hero.eyebrow,
      desc: cobotsDesc[locale],
    },
  ];

  const seen = new Set<string>();
  return candidates.filter((item) => {
    if (seen.has(item.href)) return false;
    seen.add(item.href);
    return true;
  });
}
