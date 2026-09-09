import type { SystemPageContent } from "../types";

export const cncSystemContent: SystemPageContent = {
  routeKey: "standardCellsCnc",
  meta: {
    title: "CNC-Maschinen | Flexido",
    description:
      "Roboterzellen für die Beschickung von CNC-Maschinen — zum Beladen, Entnehmen, für den flexiblen Teilewechsel und zusätzliche Vorgänge im Produktionsprozess.",
  },
  backLabel: "← Alle Standardzellen",
  layoutRefresh: true,
  hero: {
    eyebrow: "Standardroboterzellen",
    heading: "CNC-Maschinen",
    subhead:
      "Roboterzellen für die Beschickung von CNC-Maschinen — zum Beladen, Entnehmen, für den flexiblen Teilewechsel und zusätzliche Vorgänge im Produktionsprozess.",
    media: { kind: "video", src: "/video/flexido/hero-standardne-celice-cnc.mp4" },
  },
  intro: {
    eyebrow: "Automatisierung von CNC-Maschinen",
    heading: "Flexible robotergestützte Beschickung von CNC-Maschinen.",
    paragraphs: [
      "Flexido-Zellen bieten eine breite Palette an Optionen für die robotergestützte Beschickung von CNC-Maschinen. Das Belade- und Entnahmesystem wird je nach Teil, Bearbeitung und verfügbarem Raum ausgewählt.",
      "Zunehmend wird auch die robotergestützte Teileentnahme mit dem intelligenten Bildverarbeitungssystem Vision eingesetzt, das der Roboterzelle einen höheren Grad an Flexibilität ermöglicht.",
      "Bei der integrierten Pick-&-Place-Option kann der Roboter unterschiedliche Teile unterschiedlicher Form vom Zufuhrband aufnehmen.",
    ],
    image: { src: "/images/systems/raw/flexido-cnc-machine-studio.png", alt: "CNC-Maschine mit Flexido-Roboterzelle" },
  },
  product: {
    eyebrow: "Standardzelle",
    systemSlug: "flex-7-cnc",
    description:
      "FLEX 7 CNC Slim ist eine kompakte Automatisierungszelle für die Beschickung von CNC-Maschinen, mit Optionen für Speicher, Reinigung, Gravur und Vibrosortierung.",
    showTechnical: true,
    highlights: [
      "Kompakte CNC-Roboterzelle",
      "Integriertes Förderband",
      "Option für Speicher",
      "Option für Reinigung und Gravur",
    ],
  },
  itemGrids: [
    {
      eyebrow: "Beladen und Entnehmen",
      heading: "Dokumentierte Belade- und Entnahmesysteme.",
      items: [
        "Schiebepalettensystem",
        "Drehtischsystem",
        "Drehpalettensystem",
      ],
    },
  ],
  optionGrids: [
    {
      eyebrow: "Zusätzliche Vorgänge",
      heading: "Die Standardzelle kann zusätzliche Stationen im Prozess umfassen.",
      items: [
        {
          image: {
            src: "/raw/cnc-option-storage.webp",
            alt: "Speicher",
          },
          title: "Speicher",
          description: "Speicher zum Zuführen oder Ablegen von Teilen im Prozess.",
        },
        {
          image: {
            src: "/raw/cnc-option-cleaning-station.webp",
            alt: "Reinigungsstation",
          },
          title: "Reinigungsstation",
          description: "Waschstation für Teile.",
        },
        {
          image: {
            src: "/raw/cnc-option-engraving.webp",
            alt: "Gravur",
          },
          title: "Gravur",
          description: "Gravurstation für Teile.",
        },
        {
          image: {
            src: "/raw/cnc-option-vibro-sorting.webp",
            alt: "Vibrosortierstation",
          },
          title: "Vibrosortierstation",
          description: "Vibrosortierstation für Teile.",
        },
      ],
    },
  ],
  benefits: {
    items: [
      { title: "Modulare Bauweise", body: "Aufgrund ihrer modularen Bauweise sind Standardroboterzellen auch für kleinere Unternehmen erschwinglich." },
      { title: "Höhere Verfügbarkeit", body: "Die Integration einer Roboterzelle trägt dazu bei, die Produktionsqualität und die Verfügbarkeit von CNC-Maschinen zu erhöhen." },
    ],
  },
  relatedSolutions: {
    eyebrow: "Verwandte Lösung",
    heading: "Wenn CNC mehr als eine Zelle braucht.",
    linkLabel: "Lösung ansehen",
    items: [
      {
        title: "Automatisierung von CNC-Maschinen",
        body: "Wenn die Fertigung mehr erfordert als die wiederkehrende Beschickung einer einzelnen Maschine — rund um Maschinen, Teile, Stationen und Materialfluss.",
        routeKey: "solutionCnc",
      },
      {
        tag: "Referenz",
        title: "Ein- und Ausgangs-Förderstrecke",
        body: "Ein realisiertes Projekt einer Förderstrecke für KLT-Behälter an CNC-Maschinen — zeigt den breiteren Kontext der CNC-Automatisierung mit einem kollaborativen Roboter.",
        routeKey: "referenceConveyor",
        linkLabel: "Umsetzung in der Praxis ansehen",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Ist eine CNC-Zelle die richtige Lösung für Ihren Prozess?",
    body: "Gemeinsam betrachten wir Ihre CNC-Maschine, die Beladeart, das Werkstück, den verfügbaren Platz und zusätzliche Vorgänge — so lässt sich einschätzen, welche Zellenkonfiguration am sinnvollsten ist.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "CNC-Roboterzelle in der Produktion",
    captionEyebrow: "Erster Schritt",
    captionText: "Wo verlieren Sie bei Ihrem CNC-Prozess Zeit, Takt oder Maschinenverfügbarkeit?",
  },
};
