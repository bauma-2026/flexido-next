import type { HomePageContent } from "./types";

/** Faithful translation of `sl.ts` — no new claims, no repositioning. */
export const homeContent: HomePageContent = {
  meta: {
    title: "Flexido — Produktionsautomatisierung",
    description:
      "Wir gestalten und automatisieren Produktionsprozesse — von einer einzelnen Maschine bis zum verbundenen Fluss von Material, Menschen und Daten.",
  },
  hero: {
    eyebrow: "Produktionsautomatisierung",
    titleLines: [
      "Wir verbinden den Fluss zwischen Maschinen.",
      "Nicht nur ein Roboter an der Maschine.",
    ],
    subhead:
      "Wir bauen Standard-Roboterzellen und kundenspezifische Zellen — und verbinden sie zu einem stabilen Fluss zwischen Maschinen, mit weniger Wartezeit zwischen den Phasen.",
    slogan: "Bei Flexido machen wir Automatisierung einfach.",
    ctaPrimary: "Schauen wir uns Ihren Prozess an",
    ctaSecondary: "Wie ein Projekt abläuft",
  },
  trustStrip: {
    label: "Zertifizierungen",
    items: [
      {
        href: "https://www.flexido.eu/images/pdf/FLEXIDO-9001-CERT-Certificate-SLO-24092021.pdf",
        src: "/logos/trust/bureau-veritas-iso-9001.webp",
        alt: "ISO 9001 Bureau Veritas Certification",
        external: true,
      },
    ],
  },
  solutions: {
    eyebrow: "Lösungen",
    title: "Wo Automatisierung helfen kann",
    desc: "Von einer einzelnen Maschine bis zur Verbindung mehrerer Phasen — wir wählen die Lösung danach, wo der Prozess Zeit, Stabilität oder Vorhersehbarkeit verliert.",
    compactReadMoreLabel: "Mehr erfahren",
    compactItems: [
      {
        routeKey: "solutionCnc",
        title: "CNC-Maschinen",
        desc: "Be- und Entladen sowie eine bessere Maschinenauslastung.",
        icon: "cnc",
      },
      {
        routeKey: "solutionInjectionMolding",
        title: "Spritzguss",
        desc: "Ein stabiler Zyklus, Teileentnahme und weniger manuelle Arbeit.",
        icon: "imm",
      },
      {
        routeKey: "solutionManipulation",
        title: "Materialhandhabung",
        desc: "Bewegen, Wenden und Übergeben von Teilen zwischen den Phasen.",
        icon: "manipulation",
      },
      {
        routeKey: "solutionLogistics",
        title: "Palettierung und interne Logistik",
        desc: "Wenn Material nicht reibungslos durch die Produktion fließt.",
        icon: "materialFlow",
      },
    ],
  },
  productProof: {
    eyebrow: "Systeme",
    heading: "Systeme, die wir dem Prozess anpassen.",
    body:
      "Standardroboterzellen sind die Basis für Lösungen, die wir an Produktion, Teile, Raum und vorhandene Ausrüstung anpassen.",
    viewAllLabel: "Alle Systeme ansehen",
    viewAllRouteKey: "standardCells",
    viewSystemLabel: "System ansehen",
    systems: [
      {
        slug: "flex-7-cnc",
        category: "Automatisierung von CNC-Maschinen",
        shortDescription:
          "Kompakte Roboterzelle für die Beschickung von CNC-Maschinen — Beladen, Entnehmen und ein stabilerer Teilefluss.",
        routeKey: "standardCellsCnc",
      },
      {
        slug: "flex-7-imm",
        category: "IMM-Automatisierung",
        shortDescription:
          "Kompakte Roboterzelle für die Beschickung von Spritzgießmaschinen — Teileentnahme, Insert Moulding und Kontrolle.",
        routeKey: "standardCellsImm",
      },
    ],
  },
  competencies: {
    eyebrow: "Kompetenzen",
    heading: "Was wir im Projekt abdecken",
    items: [
      "Durchführung von Machbarkeitsstudien",
      "Konstruktion",
      "Elektroprojektierung",
      "Robot- und SPS-Programmierung",
      "Systeme für intelligentes Bildverarbeitung",
      "Projektleitung",
    ],
  },
  process: {
    eyebrow: "Prozess",
    title: "Von der Prozessprüfung bis zur Unterstützung nach der Inbetriebnahme",
    desc: "Wir beginnen beim Prozess und führen die Lösung bis zur Inbetriebnahme und Unterstützung in der Produktion.",
    steps: [
      {
        step: "01",
        title: "Prozessprüfung",
        desc: "Wir prüfen Maschine, Teil, Materialfluss, Raum und die Stellen, an denen der Prozess seinen Rhythmus verliert.",
      },
      {
        step: "02",
        title: "Festlegung der Lösung",
        desc: "Wir legen eine Lösung fest, die zur konkreten Maschine, dem Teil, dem Raum und zusätzlichen Vorgängen passt.",
      },
      {
        step: "03",
        title: "Umsetzung und Integration",
        desc: "Wir verbinden die Lösung mit bestehenden Maschinen, Bedienern, Raum und dem realen Arbeitsrhythmus.",
      },
      {
        step: "04",
        title: "Inbetriebnahme und Unterstützung",
        desc: "Wir nehmen das System in Betrieb, stabilisieren es in der realen Produktion und bieten Service- und After-Sales-Support.",
      },
    ],
    fullProcessLabel: "Gesamter Prozess",
  },
  finalCta: {
    eyebrow: "Kontakt",
    heading: "Schauen wir uns Ihren Prozess an",
    body:
      "Senden Sie eine kurze Beschreibung des Prozesses, der Maschine und des Teils. Wir bewerten Zeit- und Stabilitätsverluste, den Umfang manueller Arbeit und ob Automatisierung sinnvoll ist.",
    ctaLabel: "Prozessbeschreibung senden",
    imageCaptionEyebrow: "Erste Prüfung",
    imageCaption:
      "Wo verliert der Prozess Zeit, Material oder einen stabilen Rhythmus?",
  },
  showFundingTrust: false,
};

/** @deprecated Use `homeContent.hero` */
export const homeHero = homeContent.hero;
