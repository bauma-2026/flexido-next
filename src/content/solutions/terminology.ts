import type { Locale } from "@/i18n/config";

/**
 * House terms for recurring Solutions-family business concepts, one stable
 * translation per locale. Content modules import these instead of retyping
 * the phrase inline, so terminology can't drift page-to-page. Sourced from
 * the current SL V1 site (primary) and cross-checked against the live
 * flexido.eu EN/DE site (terminology-continuity reference) — see the
 * migration report for exactly where each was preserved vs. translated.
 */
export const TERMS = {
  productionAutomation: {
    sl: "avtomatizacija proizvodnje",
    en: "production automation",
    de: "Produktionsautomatisierung",
  },
  standardCells: {
    sl: "standardne robotske celice",
    en: "standard robot cells",
    de: "Standardroboterzellen",
  },
  /** "celice po naročilu" — kept concrete ("cells"), not consulting-speak. See plan §5. */
  customCells: {
    sl: "celice po naročilu / namenski sistemi",
    en: "custom-built robotic cells",
    de: "Zellen in Auftragsfertigung / kundenspezifische Automatisierungssysteme",
  },
  cncAutomation: {
    sl: "CNC avtomatizacija",
    en: "CNC machine automation",
    de: "Automatisierung von CNC-Maschinen",
  },
  imMAutomation: {
    sl: "avtomatizacija brizganja plastike",
    en: "injection molding automation",
    de: "Automatisierung von Spritzgießmaschinen",
  },
  cobots: {
    sl: "kolaborativni roboti",
    en: "collaborative robots",
    de: "kollaborative Roboter",
  },
  materialHandling: {
    sl: "manipulacija materiala",
    en: "material handling",
    de: "Materialhandhabung",
  },
  internalLogistics: {
    sl: "interna logistika",
    en: "internal logistics",
    de: "interne Logistik",
  },
  integration: {
    sl: "integracija",
    en: "integration",
    de: "Integration",
  },
  postCommissioningSupport: {
    sl: "podpora po zagonu",
    en: "post-commissioning support",
    de: "Betreuung nach der Inbetriebnahme",
  },
} as const satisfies Record<string, Record<Locale, string>>;

export type TermKey = keyof typeof TERMS;
