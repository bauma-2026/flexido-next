import type { Locale } from "./config";

/**
 * Semantic route-key registry.
 *
 * Each key maps to the real path per locale. A locale is simply omitted
 * when that route doesn't exist in that language yet — that omission *is*
 * the availability model (see the i18n architecture audit, §9). No route
 * here is invented: every `sl` path below is a real, currently-shipping
 * route in `app/`. `en`/`de` are only filled in where a page genuinely
 * exists for that locale today (currently just `home`, as the proof of
 * the architecture) — everything else is honestly left SL-only until it's
 * actually migrated.
 *
 * Deliberately NOT included: `/resitve/servis` and `/resitve/system-map`
 * (orphaned/duplicate routes flagged in the route-completeness audit,
 * unlinked from any navigation — not worth enshrining into the new
 * registry) and individual `/novice/*` articles (long-tail SL/EN news).
 * Funding project detail routes are registered below as SL-only compliance
 * content — no EN/DE equivalents.
 */
export const routes = {
  home: {
    sl: "/",
    en: "/en",
    de: "/de",
  },

  solutions: {
    sl: "/resitve",
    en: "/en/solutions",
    de: "/de/loesungen",
  },
  solutionProductionAutomation: {
    sl: "/resitve/avtomatizacija-proizvodnje",
    en: "/en/solutions/production-automation",
    de: "/de/loesungen/produktionsautomatisierung",
  },
  solutionCnc: {
    sl: "/resitve/avtomatizacija-cnc-strojev",
    en: "/en/solutions/cnc-machine-automation",
    de: "/de/loesungen/automatisierung-von-cnc-maschinen",
  },
  solutionInjectionMolding: {
    sl: "/resitve/brizganje-plastike",
    en: "/en/solutions/injection-molding-automation",
    de: "/de/loesungen/automatisierung-von-spritzgiessmaschinen",
  },
  solutionCobots: {
    sl: "/resitve/kolaborativni-roboti",
    en: "/en/solutions/collaborative-robots",
    de: "/de/loesungen/kollaborative-roboter",
  },
  solutionManipulation: {
    sl: "/resitve/manipulacija",
    en: "/en/solutions/material-handling",
    de: "/de/loesungen/materialhandhabung",
  },
  solutionLogistics: {
    sl: "/resitve/logistika",
    en: "/en/solutions/internal-logistics",
    de: "/de/loesungen/interne-logistik",
  },
  solutionCustomSystems: {
    sl: "/resitve/namenski-sistemi",
    en: "/en/solutions/custom-automation-systems",
    de: "/de/loesungen/kundenspezifische-automatisierungssysteme",
  },

  standardCells: {
    sl: "/standardne-celice",
    en: "/en/standard-cells",
    de: "/de/standardzellen",
  },
  standardCellsCnc: {
    sl: "/standardne-celice/cnc",
    en: "/en/standard-cells/cnc-machine",
    de: "/de/standardzellen/cnc-maschinen",
  },
  standardCellsImm: {
    sl: "/standardne-celice/imm",
    en: "/en/standard-cells/imm-machine",
    de: "/de/standardzellen/imm-maschinen",
  },
  standardCellsFlex2550: {
    sl: "/standardne-celice/flex-25-50",
    en: "/en/standard-cells/flex-25-50",
    de: "/de/standardzellen/flex-25-50",
  },
  standardCellsTmx: {
    sl: "/standardne-celice/tmx",
    en: "/en/standard-cells/tmx",
    de: "/de/standardzellen/tmx",
  },
  standardCellsMiddleware: {
    sl: "/standardne-celice/middleware",
    en: "/en/standard-cells/middleware",
    de: "/de/standardzellen/middleware",
  },

  process: {
    sl: "/proces",
    en: "/en/process",
    de: "/de/prozess",
  },
  service: {
    sl: "/servis",
    en: "/en/service",
    de: "/de/service",
  },
  servicePricing: {
    sl: "/cenik",
    en: "/en/service-pricing",
    de: "/de/servicepreise",
  },

  aboutUs: {
    sl: "/o-nas",
    en: "/en/about-us",
    de: "/de/ueber-uns",
  },
  video: {
    sl: "/video",
    en: "/en/company-video",
    de: "/de/unternehmen-video",
  },
  careers: {
    sl: "/zaposlitev",
    // EN/DE omitted on purpose: live EN currently shows no vacancies,
    // V1 SL listings are dated 26.11.2025, and live DE has no careers page.
  },
  news: {
    sl: "/novice",
    en: "/en/news",
    de: "/de/aktuelle-nachrichten",
  },
  newsFakuma2024: {
    sl: "/novice/flexido-na-sejmu-fakuma-2024",
  },
  newsPolydigit: {
    sl: "/novice/koncan-projekt-digitalne-preobrazbe-polydigit",
  },
  newsFakuma2023: {
    sl: "/novice/fakuma-2023",
    en: "/en/news/fakuma-23",
  },
  newsConveyor: {
    sl: "/novice/vhodno-izhodna-tracna-proga",
  },
  newsFlex7Imm: {
    sl: "/novice/flex-7-imm-predstavitev",
  },
  newsOvermolding: {
    sl: "/novice/robotska-celica-za-nabrizgavanje",
  },
  newsCarton: {
    sl: "/novice/avtomatsko-oblikovanje-in-lepljenje-skatel",
  },
  newsDigitalTransformation: {
    sl: "/novice/digitalna-transformacija-podjetja-flexido-d-o-o",
  },
  newsKraussMaffei: {
    en: "/en/news/next-level-efficiency-flexido-robot-cell-on-krauss-maffei-km-81-250-px",
  },
  newsCelje2019: {
    en: "/en/news/industry-fair-2019-celje",
  },
  newsFlex220Pro: {
    en: "/en/news/new-series-is-out-flex-220-pro",
  },
  newsScanMe: {
    en: "/en/news/new-application-is-released",
  },
  newsAutomatica: {
    en: "/en/news/flexido-at-automatica-trade-fair",
  },
  references: {
    sl: "/reference",
    en: "/en/references",
    de: "/de/referenzen",
  },
  referenceOvermolding: {
    sl: "/reference/robotska-celica-za-nabrizgavanje",
    en: "/en/references/overmolding-robot-cell",
    de: "/de/referenzen/roboterzelle-umspritzen",
  },
  referenceConveyor: {
    sl: "/reference/vhodno-izhodna-tracna-proga",
    en: "/en/references/inbound-outbound-conveyor",
    de: "/de/referenzen/ein-ausgang-foerderstrecke",
  },
  referenceCarton: {
    sl: "/reference/avtomatsko-oblikovanje-in-lepljenje-skatel",
    en: "/en/references/carton-forming-and-gluing",
    de: "/de/referenzen/kartonformen-und-kleben",
  },
  fundingProjects: {
    sl: "/razvojni-projekti",
  },
  fundingProjectSalesDigitalization: {
    sl: "/razvojni-projekti/sofinanciranje-stroskov-digitalizacije-prodajnih-poti",
  },
  fundingProjectPolyDigit: {
    sl: "/razvojni-projekti/digitalna-preobrazba-kljucnih-funkcij-podjetja-polycom",
  },
  fundingProjectFlexidoDigital: {
    sl: "/razvojni-projekti/digitalna-transformacija-podjetja-flexido-d-o-o",
  },
  fundingProjectSmartim: {
    sl: "/razvojni-projekti/naziv-projekta-smartim-pametna-tovarna-iskra-mehanizmi",
  },
  fundingProjectSafeguard: {
    sl: "/razvojni-projekti/spodbude-za-raziskovalno-razvojni-projekt",
  },

  contact: {
    sl: "/kontakt",
    en: "/en/contact",
    de: "/de/kontakt",
  },

  legalNotice: {
    sl: "/pravno-obvestilo",
    en: "/en/legal-notice",
    de: "/de/impressum",
  },
  salesTerms: {
    sl: "/splosni-prodajni-pogoji",
    en: "/en/terms-and-conditions",
    de: "/de/allgemeine-geschaeftsbedingungen",
  },
  privacyPolicy: {
    sl: "/varstvo-osebnih-podatkov",
    en: "/en/privacy-policy",
    de: "/de/datenschutz",
  },
} as const satisfies Record<string, Partial<Record<Locale, string>>>;

export type RouteKey = keyof typeof routes;

/** Returns the path for a route key in a given locale, or `undefined` if it doesn't exist there. */
export function getPath(key: RouteKey, locale: Locale): string | undefined {
  const entry = routes[key] as Partial<Record<Locale, string>>;
  return entry[locale];
}

/** Whether a given route key has a real page in the given locale. */
export function isAvailable(key: RouteKey, locale: Locale): boolean {
  return getPath(key, locale) !== undefined;
}

/**
 * Resolves the language-switch target for a route key: the equivalent page
 * in `targetLocale` if it exists, otherwise the nearest available parent
 * hub, otherwise the target locale's homepage. Mirrors the fallback rule
 * from the i18n architecture audit, §8 — never a dead link, never a silent
 * same-locale stay, never skipped straight to "hide the option".
 */
export function resolveLanguageSwitch(
  key: RouteKey,
  targetLocale: Locale,
  parentKey?: RouteKey
): string {
  const direct = getPath(key, targetLocale);
  if (direct) return direct;

  if (parentKey) {
    const parent = getPath(parentKey, targetLocale);
    if (parent) return parent;
  }

  return getPath("home", targetLocale) ?? "/";
}
