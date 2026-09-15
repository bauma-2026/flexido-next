import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/i18n/routes";

import { getCobotsContent, getHubContent } from ".";

export type SolutionFamily = {
  routeKey: RouteKey;
  title: string;
};

/**
 * Display label for the seven families taken as a set. The individual family
 * names all come from existing content; this is the only string the set
 * itself needs, so it lives here rather than being retyped per surface.
 */
export const solutionFamiliesLabel: Record<Locale, string> = {
  sl: "Področja",
  en: "Areas",
  de: "Bereiche",
};

/**
 * The seven solution families in decision order. Titles and routes are read
 * from shipped solutions content. The hub grid is now the full set; wider-
 * approach paths and cobots are still appended only when missing, so the
 * Home offer rail stays seven unique items.
 */
export function getSolutionFamilies(locale: Locale): SolutionFamily[] {
  const hub = getHubContent(locale);
  const cobots = getCobotsContent(locale);

  const candidates: SolutionFamily[] = [
    ...hub.gridItems.map((item) => ({ routeKey: item.routeKey, title: item.title })),
    ...hub.widerApproach.paths.map((path) => ({ routeKey: path.routeKey, title: path.title })),
    { routeKey: cobots.routeKey, title: cobots.hero.eyebrow },
  ];

  const seen = new Set<RouteKey>();
  return candidates.filter((item) => {
    if (seen.has(item.routeKey)) return false;
    seen.add(item.routeKey);
    return true;
  });
}
