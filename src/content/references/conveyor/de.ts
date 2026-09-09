import type { ReferencePageContent } from "../types";

export const conveyorContent: ReferencePageContent = {
  routeKey: "referenceConveyor",
  meta: {
    title: "Ein- und Ausgangs-Förderstrecke | Referenzen | Flexido",
    description:
      "Eine Ein- und Ausgangs-Förderstrecke für standardisierte KLT-Behälter, ausgelegt für mehr Autonomie einer kollaborativen Zelle an verschiedenen CNC-Maschinen.",
  },
  backLabel: "← Zurück zu den Referenzen",
  eyebrow: "Referenz",
  title: "Ein- und Ausgangs-Förderstrecke",
  intro:
    "Um die Autonomie einer kollaborativen Zelle in Kombination mit verschiedenen CNC-Maschinen zu erhöhen, haben wir eine Ein- und Ausgangs-Förderstrecke vorbereitet, die für die Handhabung standardisierter KLT-Behälter ausgelegt ist.",
  imageAlt: "Ein- und Ausgangs-Förderstrecke",
  sections: [
    {
      heading: "Autonomer Betrieb der Zelle",
      paragraphs: [
        "In Kombination mit einer integrierten Kamera ist ein TM-Roboter eine geeignete Lösung für den selbstständigen, ununterbrochenen Betrieb mit unterschiedlichen Werkstücken.",
        "Bearbeitungsphasen können aus einer vordefinierten Abfolge angepasst werden. Die Lösung eignet sich daher für Prozesse, in denen eine stabile Materialhandhabung während der Bearbeitung wichtig ist.",
      ],
    },
    {
      heading: "Kapazität des Systems",
      paragraphs: [
        "Die Lösung ermöglicht die Nutzung von fünf Eingangs- und fünf Ausgangs-KLT-Behältern im Format 600 × 400 mm.",
      ],
    },
  ],
  result: {
    label: "Ergebnis",
    heading:
      "Selbstständiger, ununterbrochener Betrieb mit unterschiedlichen Werkstücken, kombiniert mit einer integrierten Kamera.",
  },
  related: {
    eyebrow: "Zugehörige Lösung",
    heading: "Automatisierung von CNC-Maschinen",
    body: "Sehen Sie, wie Flexido Beladen, Entladen und den Teilefluss um CNC-Maschinen angeht.",
    ctaLabel: "Lösung ansehen →",
    routeKey: "solutionCnc",
  },
  processLink: { label: "Wie läuft ein solches Projekt ab? Prozess ansehen →" },
  siblingLabel: "Weitere Referenz",
  productLink: { label: "FLEX 7 CNC Slim ansehen →", routeKey: "standardCellsCnc" },
  summary: {
    area: "CNC und Materialfluss",
    title: "Ein- und Ausgangs-Förderstrecke",
    body: "Eine Förderstrecke für KLT-Behälter an verschiedenen CNC-Maschinen, für mehr Autonomie der kollaborativen Zelle.",
    result:
      "Selbstständiger, ununterbrochener Betrieb mit unterschiedlichen Werkstücken, kombiniert mit einer integrierten Kamera.",
  },
};
