import type { Locale } from "@/i18n/config";

/**
 * Column headers for the `flexidoSystems[].technical` spec table. Labels
 * only — the values themselves (dimensions, robot model, payload, reach,
 * interface) are locale-agnostic and stay verbatim from
 * `src/data/flexido-systems.ts` in every language.
 */
export const TECHNICAL_LABELS: Record<Locale, Record<"dimensions" | "robot" | "payload" | "reach" | "interface", string>> = {
  sl: {
    dimensions: "Dimenzije",
    robot: "Robot",
    payload: "Nosilnost",
    reach: "Doseg",
    interface: "Vmesnik",
  },
  en: {
    dimensions: "Dimensions",
    robot: "Robot",
    payload: "Payload",
    reach: "Reach",
    interface: "Interface",
  },
  de: {
    dimensions: "Abmessungen",
    robot: "Roboter",
    payload: "Traglast",
    reach: "Reichweite",
    interface: "Schnittstelle",
  },
};
