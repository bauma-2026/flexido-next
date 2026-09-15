import type { SystemPageContent } from "../types";

/**
 * Authored from `src/data/flexido-systems.ts`, e-katalog Middleware section,
 * and legacy e-catalogue-middlewear.pdf (documented platforms — not current commercial claims).
 */
export const middlewareSystemContent: SystemPageContent = {
  routeKey: "standardCellsMiddleware",
  meta: {
    title: "Middleware | Flexido",
    description:
      "Eine Verbindungsschicht zwischen Produktionsausrüstung, Transporteinheiten, Stationen, Lagerung und ERP- bzw. Produktionssystemen.",
  },
  backLabel: "← Alle Standardzellen",
  hero: {
    eyebrow: "Verbindungsebene",
    heading: "Middleware",
    subhead:
      "Eine Verbindungsschicht zwischen Produktionsausrüstung, Transporteinheiten, Stationen, Lagerung und ERP- bzw. Produktionssystemen.",
    media: { kind: "image", src: "/raw/middleware-industrial-robot-1-1.png", alt: "Middleware-Verbindungsschicht" },
  },
  intro: {
    eyebrow: "Verbindung von Ausrüstung und Systemen",
    heading: "Verbindung von Ausrüstung, Stationen und Daten.",
    paragraphs: [
      "Middleware verbindet Automatisierungsausrüstung, mobilen Transport, Lagerung, Pufferstationen und höhere Produktions- bzw. ERP-Systeme zu einer strukturierten Kommunikationsschicht.",
      "Die Schicht ersetzt keine einzelnen Geräte — sie legt fest, wie Stationen, Transporteinheiten und höhere Systeme Transportaufträge, Stationsstatus und Materialkontext austauschen.",
    ],
    image: {
      src: "/images/systems/raw/custom-robotic-cell-studio-render.png",
      alt: "Verbundene Automatisierungsstationen und Roboterzelle in einer Produktionslinie",
    },
  },
  product: {
    eyebrow: "Verbindungsschicht",
    systemSlug: "middleware",
    description:
      "Middleware integriert Hardware-Stationen, Transportplattformen, Lagerung und mechanische Puffereinheiten mit Transportauftrags-API und Anbindung an höhere Produktionssysteme.",
  },
  itemGrids: [
    {
      role: "technical-definitions",
      eyebrow: "Integrationsschicht",
      heading: "Wie Middleware Maschinen, Transport und ERP verbindet.",
      items: [
        "Hardware Station Service — Standard-Hardware-Schnittstelle für Stationen und Transporteinheiten",
        "Transport Order Service API — JSON-Struktur oder Dateiaustausch (z. B. FTP)",
        "Backend-Service — dynamische Auftragsrouting nach Transport- und Frachttyp",
        "MWContext Broker — kontextuelle Verbindung zwischen Produktionsausrüstung und höheren Systemen",
        "ERP- / Produktionssystem-Anbindung — konfigurierbarer Datenaustausch, keine universelle ERP-Unterstützung",
      ],
    },
    {
      role: "module-class",
      media: { kind: "image", src: "/raw/middleware-transport-unit-sdv-1.png", alt: "Mobile Transportplattform SDV/AMR (dokumentierte OTTO-Linien)" },
      eyebrow: "Transportplattformen",
      heading: "Dokumentierte Klassen mobiler Transporteinheiten.",
      items: [
        "OTTO 100 — im E-Katalog dokumentierte Plattform mit geringerer Tragfähigkeit (~150 kg)",
        "OTTO 750 / 1500 — dokumentierte Plattform mit höherer Tragfähigkeit (~2000 kg)",
        "OTTO Lifter — dokumentierte Hubeinheit für Paletten und vertikale Übergaben",
        "Fast Charger — dokumentierte Schnellladestation für AMR/SDV-Flotten",
      ],
    },
    {
      role: "module-class",
      media: { kind: "video", src: "/video/flexido/hero-logistika.mp4", alt: "Automatisierte Lagerung und Transfer im Fluss." },
      eyebrow: "Lagerung und Robotertransfer",
      heading: "Automatisierte Lagerung und Transfer im Fluss.",
      items: [
        "WELAND automated storage — automatisierte Lagerung im dokumentierten System",
        "Vertical storage LIFT — Höhe 5–16 m, Tabletts mit Fixierung für Transporteinheiten",
        "ABB IRB 6700 — dokumentierte Industrie-Roboterplattform für Transfer zwischen Lift, Linear Buffer und Palettierung",
      ],
    },
    {
      role: "module-class",
      eyebrow: "Puffer und Übergabe",
      heading: "Mechanische Einheiten für Zwischenlagerung und Übergabe.",
      lead: "Linear Buffer (Ein-/Ausgang) — Servo-angetriebene Plattform, Siemens PLC, Endlagen-Sensorik",
      tiles: [
        { src: "/raw/middleware-mechanical-buffer-chute-1.png", alt: "Mechanical Buffer Chute", caption: "Mechanical Buffer Chute — LR (stückzahl) / W (gewicht), zwei integrierte Kammern" },
        { src: "/raw/middleware-mechanical-drop-off-unit-1.png", alt: "Mechanical Drop-off unit", caption: "Mechanical Drop-off — Vertikalachse und Rotation, Siemens PLC, automatische Linienzuführung" },
      ],
      items: [],
    },
  ],
  optionGroupsHeading: { eyebrow: "Verbundene Ausrüstung", heading: "Maschinen, Stationen und Transporteinheiten." },
  detailPanel: {
    placement: "related",
    paragraphs: [
      "Die praktische Integrationsfrage lautet: Wie weiß eine Station, wann eine mobile Einheit kommen soll, was sie abholen soll und wie das an ein höheres System gemeldet wird? Middleware kombiniert Hardware-Stationsschnittstelle, Transport Order Service und Backend-Logik, die Aufrufe nach Transport- und Frachttyp routet.",
      "Ein ERP- oder Produktionssystem wird nicht über ein festes Modul angebunden — eine Zwischenschicht übernimmt Transportauftragsaustausch und Kontext (MWContext Broker), anpassbar an bestehende und neue Ausrüstung im selben Betrieb.",
    ],
  },
  relatedSolutions: {
    eyebrow: "Verwandte Lösung",
    heading: "Wo Middleware in den Materialfluss eintritt.",
    linkLabel: "Lösung ansehen",
    items: [
      {
        title: "Interne Logistik",
        body: "Wie Transportplattformen, Übergabestationen und Lagerung im weiteren Materialfluss zwischen Phasen wirken.",
        routeKey: "solutionLogistics",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Müssen Ausrüstung und Systeme verbunden werden?",
    body: "Gemeinsam schauen wir uns die bestehende und neue Ausrüstung, die Transporteinheiten sowie das ERP- bzw. Produktionssystem an — anschließend beurteilen wir, wie die Verbindung gestaltet werden soll.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "Verbundene Produktionsausrüstung und Transporteinheiten",
    captionEyebrow: "Erster Schritt",
    captionText: "Welche Ausrüstung und Systeme müssen verbunden werden?",
  },
};
