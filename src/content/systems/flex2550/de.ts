import type { SystemPageContent } from "../types";

/**
 * Authored from `src/data/flexido-systems.ts`, legacy FLEX 25/50 e-catalog options,
 * and curated product imagery in `public/images/flexido/products/flex-25-50/`.
 */
export const flex2550SystemContent: SystemPageContent = {
  routeKey: "standardCellsFlex2550",
  meta: {
    title: "FLEX 25 / 50 | Flexido",
    description: "Hochflexible Roboterzelle für anspruchsvollere Anwendungen, höhere Traglast und ein breiteres Optionsspektrum.",
  },
  backLabel: "← Alle Standardzellen",
  layoutRefresh: true,
  hero: {
    eyebrow: "Standardroboterzellen",
    heading: "FLEX 25 / 50",
    subhead: "Hochflexible Roboterzelle für anspruchsvollere Anwendungen, höhere Traglast und ein breiteres Optionsspektrum.",
    media: { kind: "image", src: "/images/systems/raw/flex-25-50-studio-wide.webp", alt: "FLEX 25 / 50 Roboterzelle" },
  },
  intro: {
    eyebrow: "Hochflexible Zelle",
    heading: "Plattform für anspruchsvollere Anwendungen.",
    paragraphs: [
      "FLEX 25 / 50 ist eine leistungsfähigere Automatisierungsplattform für Insert Placing, Insert Moulding, Qualitätskontrolle und Prozessanwendungen, bei denen größere Roboter, höhere Traglast oder ein breiteres Optionsspektrum erforderlich sind.",
      "Bei manchen Umsetzungen ist FLEX 25 / 50 ein konfigurierbarer Ausgangspunkt — vor allem dann, wenn die Standardzelle FLEX 7 die erforderliche Traglast, Reichweite oder das Optionsspektrum nicht abdeckt.",
    ],
    image: { src: "/raw/flex-25-50-isometric-robotic-manufacturing-cell.png", alt: "Gesamtes FLEX 25 / 50 Automatisierungssystem mit Sicherheitszaun" },
  },
  product: {
    eyebrow: "Standardzelle",
    systemSlug: "flex-25-50",
    description:
      "FLEX 25 / 50 ist eine leistungsfähigere Automatisierungsplattform für Insert Placing, Insert Moulding, Qualitätskontrolle und Prozessanwendungen, bei denen größere Roboter, höhere Traglast oder ein breiteres Optionsspektrum erforderlich sind.",
    showTechnical: true,
    highlights: [
      "Mid- & High-Performance-Anwendungen",
      "Flexible Greiferoptionen",
      "Zuführ- und Abführsysteme",
      "Vision- und Sensoroptionen",
    ],
  },
  itemGrids: [
    {
      eyebrow: "Anwendungen",
      heading: "Wo FLEX 25 / 50 eingesetzt wird.",
      items: [
        "Insert Placing und Insert Moulding",
        "Laser-Reinigung von Inserts vor dem Spritzgussprozess",
        "Laser-Gravur nach dem Spritzgussprozess",
        "Qualitätskontrolle und Prozessüberwachung",
      ],
    },
  ],
  applicationSignals: {
    eyebrow: "Anwendungssignale",
    heading: "Mid- & High-Performance-Anwendungen mit minimalem Footprint.",
    items: [
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-stator.jpg", alt: "Stator" },
        label: "Stator",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-stator-segment.jpg", alt: "Statorsegment" },
        label: "Stator segment",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-rotor.png", alt: "Rotor" },
        label: "Rotor",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-connector.png", alt: "Connector" },
        label: "Connector",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-venting-flap.png", alt: "Venting flap" },
        label: "Venting flap",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-gear.png", alt: "Gear" },
        label: "Gear",
      },
    ],
  },
  optionGrids: [
    {
      eyebrow: "Greifer",
      heading: "Dokumentierte Greiferkonfigurationen.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-simple-gripper.jpg",
            alt: "Einfacher Greifer an der FLEX 25 / 50",
          },
          title: "Einfacher Handhabungsgreifer",
          description: "Für grundlegende Teilehandhabung in wiederholbaren Prozessen.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-gripper-insert-placing.png",
            alt: "Greifer für Insert Placing",
          },
          title: "Greifer für Insert Placing",
          description: "Für präzises Einlegen von Inserts in Werkzeug oder Nest.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-complex-insert-moulding-gripper.png",
            alt: "Komplexer Insert-Moulding-Greifer",
          },
          title: "Komplexer Insert-Moulding-Greifer",
          description: "Mehrere Greifpunkte und kombinierte Funktionen für anspruchsvolle Insert-Anwendungen.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-complex-gripper.jpg",
            alt: "Komplexer Insert-Moulding-Greifer (dokumentierte Ausführung 2)",
          },
          title: "Komplexer Insert-Moulding-Greifer (dokumentierte Ausführung 2)",
          description: "Zweite dokumentierte Konstruktion aus dem E-Katalog.",
        },
      ],
    },
    {
      eyebrow: "Zuführung / Abführung",
      heading: "Dokumentierte Infeed- und Outfeed-Konfigurationen.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-vibratory-bowl-feeder.png",
            alt: "Zelle mit Vibrationsdosierer und Förderer",
          },
          title: "Vibrationsdosierer + Förderer",
          description: "Teile- oder Insert-Zuführung vom Dosierer auf den Förderer in die Zelle.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-conveyor-camera.png",
            alt: "Förderer mit 2D-Kamera",
          },
          title: "Förderer + 2D-Kamera",
          description: "Geführte Zuführung oder Abführung mit 2D-Vision für Orientierung oder Prüfung.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-vibrating-feeder-plate.png",
            alt: "Vibrationsplatte und Förderer",
          },
          title: "Vibrationsplatte + Förderer",
          description: "INFEED: Vibrationsplatte — OUTFEED: Förderer im dokumentierten System.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-trays.png",
            alt: "2x Zuführung + 2x Abführung Tray",
          },
          title: "2× Infeed + 2× Outfeed trays",
          description: "Zwei Zuführ- und zwei Abführ-Tray-Stationen — getrennt vom Tray-Stacker.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-conveyor-paper-trays.jpg",
            alt: "Zuführung mit Papiertrays",
          },
          title: "Zuführung mit Papiertrays",
          description: "Förderer für Papiertrays mit Inserts oder Teilen.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-belt-inserts.jpg",
            alt: "Bandzuführung für Inserts",
          },
          title: "Bandzuführung für Inserts",
          description: "Bandförderer für Inserts in Vorbereitung oder zum Greifer.",
        },
      ],
    },
    {
      eyebrow: "Vorbereitung und Unterstützung",
      heading: "Insert-Vorbereitung, Tray-Systeme und Prozesssicht.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-tray-stacker.png",
            alt: "Tray-Stacker-System",
          },
          title: "Tray-Stacker-Systeme",
          description: "Vertikal, große Kapazität und 3+3-Konfiguration im dokumentierten System.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-preheating-hot-air.jpg",
            alt: "Vorwärmung mit Warmluft",
          },
          title: "Vorwärmung — Warmluft",
          description: "Insert-Vorbereitung vor dem Einlegen oder Spritzguss.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-preheating-induction-1.png",
            alt: "Induktionsspule zur Vorwärmung von Inserts",
          },
          title: "Vorwärmung — Induktion",
          description: "Lokale Induktionsheizung für thermisch empfindliche Inserts.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-insert-preparation-table.jpg",
            alt: "Tisch zur Insert-Vorbereitung",
          },
          title: "Tisch zur Insert-Vorbereitung",
          description: "Arbeitsplatz für manuelle oder halbautomatische Vorbereitung vor dem Prozess.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-bowl-feeder-inserts.jpg",
            alt: "Dosierer für Inserts",
          },
          title: "Dosierer / Sortierung von Inserts",
          description: "Insert-Zuführung und Orientierung vor dem Einlegen.",
        },
        {
          image: {
            src: "/raw/flex-25-50-modular-conveyor.png",
            alt: "Vision-System für Qualitätsprüfung",
          },
          title: "Vision-System für Qualitätsprüfung",
          description: "Dokumentierte Vision-Station für Qualitätsprüfung.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-vibro-plate-vision.png",
            alt: "Vibro-Platte mit 2D-Vision-System",
          },
          title: "Vibro-Platte mit 2D-Vision-System",
          description: "Dokumentierte Option aus dem E-Katalog.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-visualisation-sensor-status.jpg",
            alt: "Visualisierung des Sensorstatus",
          },
          title: "Visualisierung des Sensorstatus",
          description: "Fernanzeige von Sensorzuständen — anbindbar an höhere Produktionssysteme.",
        },
      ],
    },
  ],
  relatedSolutions: {
    eyebrow: "Verwandte Lösungen",
    heading: "Wo FLEX 25 / 50 in einen umfassenderen Prozess eintritt.",
    linkLabel: "Lösung ansehen",
    items: [
      {
        title: "Kundenspezifische Systeme",
        body: "Bei manchen Umsetzungen ist FLEX 25 / 50 ein konfigurierbarer Ausgangspunkt, wenn die Standardzelle FLEX 7 die erforderliche Traglast, Reichweite oder das Optionsspektrum nicht abdeckt.",
        routeKey: "solutionCustomSystems",
      },
      {
        title: "Spritzgussautomatisierung",
        body: "Anwendungen umfassen Insert Placing, Insert Moulding sowie Schritte vor und nach dem IM-Prozess.",
        routeKey: "solutionInjectionMolding",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Ist FLEX 25 / 50 die richtige Plattform für Ihren Prozess?",
    body: "Gemeinsam schauen wir uns Ihren Prozess, die erforderliche Traglast, die Teile und zusätzliche Arbeitsschritte an — anschließend beurteilen wir, ob FLEX 25 / 50 die gewünschte Anwendung abdeckt.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/raw/flex-25-50-cell-rear-studio.png",
    imageAlt: "FLEX 25 / 50 in der Produktion",
    captionEyebrow: "Erster Schritt",
    captionText: "Welche Anwendung erfordert höhere Traglast oder Reichweite?",
  },
};
