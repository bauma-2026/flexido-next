import type { SystemPageContent } from "../types";

export const immSystemContent: SystemPageContent = {
  routeKey: "standardCellsImm",
  backLabel: "← Alle Standardzellen",
  layoutRefresh: true,
  meta: {
    title: "Spritzgießmaschinen | Flexido",
    description:
      "Standardroboterzellen für die Beschickung von Spritzgießmaschinen — mit industriellen 6-Achs-Robotern, zusätzlichen Vorgängen und modularen Stationen.",
  },
  hero: {
    eyebrow: "Standardroboterzellen",
    heading: "Spritzgießmaschinen",
    subhead:
      "Standardroboterzellen für die Beschickung von Spritzgießmaschinen — mit industriellen 6-Achs-Robotern, zusätzlichen Vorgängen und modularen Stationen.",
    media: { kind: "video", src: "/video/flexido/hero-standardne-celice-imm.mp4" },
  },
  intro: {
    eyebrow: "IMM-Automatisierung",
    heading: "Eine Alternative zu traditionellen Linearmanipulatoren.",
    paragraphs: [
      "Flexido-Standardzellen sind bei der robotergestützten Beschickung von Kunststoffmaschinen eine ausgezeichnete Alternative zu traditionellen Automatisierungslösungen mit Linearmanipulatoren.",
      "In die Standardroboterzellen sind 6-Achs-Roboter integriert, die neben der Grundfunktion der Teileentnahme aus dem Werkzeug auch zusätzliche Vorgänge übernehmen.",
      "Standardroboterzellen werden auch in Fällen eingesetzt, in denen die Maschinen in Produktionsräumen mit geringer Deckenhöhe installiert sind.",
    ],
    image: { src: "/images/systems/raw/flexido-imm-machine-studio.png", alt: "Spritzgießmaschine mit Flexido-Roboterzelle" },
  },
  product: {
    eyebrow: "Standardzelle",
    systemSlug: "flex-7-imm",
    description:
      "FLEX 7 IMM Slim ist eine kompakte Automatisierungszelle für Spritzgießmaschinen. Sie ist für die Teileentnahme, Insert Moulding, die Vorbereitung von Inserts und die Qualitätskontrolle auf kleiner Grundfläche vorgesehen.",
    showTechnical: true,
    highlights: [
      "Kleine Grundfläche",
      "Integriertes Förderband",
      "Option für Bowl Feeder",
      "Option für Vision-System",
    ],
  },
  itemGrids: [
    {
      eyebrow: "Anwendungen",
      heading: "Dokumentierte FLEX 7 IMM Slim Anwendungen.",
      items: [
        "Be- und Entnahme sowie Ausstoß von Teilen",
        "Qualitätskontrolle",
        "einfaches Einlegen von Inserts",
        "Insert Moulding",
      ],
    },
    {
      eyebrow: "Zusätzliche Vorgänge",
      heading: "Mehr als nur die Teileentnahme aus dem Werkzeug.",
      items: [
        "Angussentfernung",
        "Prüfung der vollständigen Füllung der Teile",
        "Prüfung auf Grat oder Überspritzungen",
        "Erkennung von Oberflächenfehlern",
        "Montage des Spritzgussteils in der Zelle",
        "Nachbearbeitung des Spritzgussteils",
      ],
    },
  ],
  optionGrids: [
    {
      eyebrow: "Insert-Vorbereitung",
      heading: "Dokumentierte Optionen für Insert-Vorbereitung und Zufuhr.",
      items: [
        {
          image: {
            src: "/raw/flex-7-imm-bowl-feeder-1.png",
            alt: "Bowl feeder für Insert-Zufuhr",
          },
          title: "Bowl feeder",
          description: "Zufuhr und Orientierung von Inserts vor dem Einlegen.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-insert-preparation-table-1.png",
            alt: "Tisch zur Insert-Vorbereitung",
          },
          title: "Tisch zur Insert-Vorbereitung",
          description: "Arbeitsstation zur Vorbereitung von Inserts vor dem Zyklus.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-skara-robot-1.png",
            alt: "Integrierter SCARA-Roboter für Insert-Sortierung",
          },
          title: "Integrierter SCARA-Roboter",
          description: "Insert-Sortierung und Vorbereitung in der Zelle, sofern konfiguriert.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-vision-system-2.png",
            alt: "Vision-System für Qualitätskontrolle",
          },
          title: "Vision-System",
          description: "Qualitätsprüfung als dokumentierte Zellenoption.",
        },
      ],
    },
  ],
  detailPanel: {
    eyebrow: "Integration in der Zelle",
    heading: "Der 6-Achs-Roboter führt die grundlegende Maschinenbeschickung und das Einlegen von Inserts ins Werkzeug aus.",
    paragraphs: [
      "Ein integrierter SCARA-Roboter unterstützt Insert-Sortierung und Vorbereitung, sofern in der Zelle konfiguriert. Greifer sind für den 6-Achs- und SCARA-Roboter abgestimmt.",
      "Die Schnittstellen, die vorab an den Spritzgießmaschinen installiert sein müssen, sind Euromap 67 sowie Euromap 63 bzw. Euromap 77.",
      "Standardroboterzellen werden häufig auch beim Einlegen von Inserts in das Werkzeug beim Umspritzprozess eingesetzt.",
    ],
    panelEyebrow: "Modulare Stationen",
    panelItems: ["Vibrationszuführstation", "Schiebepalettensystem", "Drehtischsystem", "Pick & Place Vision-System"],
  },
  benefits: {
    items: [
      { title: "Erschwinglichkeit", body: "Aufgrund ihrer modularen Bauweise sind Standardroboterzellen erschwinglicher." },
      { title: "Höhere Qualität", body: "Die Zelle trägt dazu bei, die Produktionsqualität sowie die Verfügbarkeit von Maschinen und Produktionsmitteln zu erhöhen." },
    ],
  },
  relatedSolutions: {
    eyebrow: "Verwandte Lösung",
    heading: "Wenn Spritzgießen mehr als die Teileentnahme braucht.",
    linkLabel: "Lösung ansehen",
    items: [
      {
        title: "Automatisierung von Spritzgießmaschinen",
        body: "Wenn der Prozess Inserts, spezielle Greifer, zusätzliche Stationen oder die Anbindung vorhandener Ausrüstung rund um die Spritzgießmaschine erfordert.",
        routeKey: "solutionInjectionMolding",
      },
      {
        tag: "Referenz",
        title: "Roboterzelle für das Umspritzen",
        body: "Ein realisiertes Projekt einer Roboterzelle für das Umspritzen — ein konkretes Beispiel für diese Art der IMM-Automatisierung in der Praxis.",
        routeKey: "referenceOvermolding",
        linkLabel: "Verwandtes Projekt ansehen",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Ist eine IMM-Zelle die richtige Lösung für Ihren Prozess?",
    body: "Gemeinsam betrachten wir Ihre Spritzgießmaschine, das Werkstück, den Platz an der Maschine, die Entnahmeart und zusätzliche Vorgänge — so lässt sich einschätzen, welche Zellenkonfiguration am sinnvollsten ist.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/images/systems/raw/flexido-imm-machine-studio.png",
    imageAlt: "Spritzgießmaschine mit Flexido-Roboterzelle",
    captionEyebrow: "Erster Schritt",
    captionText: "Wo verlieren Sie beim Spritzgießen Zeit, Stabilität oder Prozesswiederholbarkeit?",
  },
};
