import type { SystemsHubContent } from "../types";

export const hubSystemsContent: SystemsHubContent = {
  meta: {
    title: "Standardsysteme für die Automatisierung | Flexido",
    description:
      "Überblick über die Flexido-Standardsysteme für die Automatisierung — Roboterzellen, eine kollaborative Roboterplattform und eine Verbindungsschicht — für wiederkehrende Produktionsprozesse.",
  },
  hero: {
    eyebrow: "Programm",
    heading: "Standardsysteme für die Automatisierung.",
    subhead:
      "Fünf Standardausgangspunkte — Roboterzellen, eine kollaborative Roboterplattform und eine Verbindungsschicht — angepasst an Maschine, Werkstück und Produktionsprozess.",
    media: { kind: "image", src: "/images/flexido/legacy/s-1.jpg.jpeg", alt: "Flexido-Standardsysteme für die Automatisierung" },
  },
  intro: {
    eyebrow: "Angebot",
    heading: "Wir wählen das System passend zum Prozess.",
    paragraphs: [
      "Das Angebot umfasst Standardroboterzellen für die Beschickung von CNC-Maschinen und Spritzgießmaschinen, die kollaborative Roboterplattform TMX sowie die Verbindungsschicht Middleware zur Anbindung von Ausrüstung, Transport und ERP- bzw. Produktionssystemen.",
      "Das austauschbare Station System ermöglicht die Anpassung mit Modulen, Greifern und Stationen je nach Maschine, Werkstück und konkretem Produktionsablauf.",
    ],
  },
  cardsHeading: {
    eyebrow: "Systemtypen",
    heading: "Wählen Sie das System passend zur Aufgabe.",
  },
  cardLinkLabel: "System ansehen",
  cards: [
    { routeKey: "standardCellsCnc", systemSlug: "flex-7-cnc", title: "FLEX 7 CNC Slim", eyebrow: "Roboterzelle", desc: "Kompakte Roboterzelle für die Beschickung von CNC-Maschinen — Beladen, Entnehmen und ein stabilerer Teilefluss." },
    { routeKey: "standardCellsImm", systemSlug: "flex-7-imm", title: "FLEX 7 IMM Slim", eyebrow: "Roboterzelle", desc: "Roboterzelle für die Beschickung von Spritzgießmaschinen — Teileentnahme, Insert Moulding und Kontrolle." },
    { routeKey: "standardCellsFlex2550", systemSlug: "flex-25-50", title: "FLEX 25 / 50", eyebrow: "Roboterzelle", desc: "Flexible Roboterzelle für mittlere und anspruchsvollere Anwendungen mit höherer Traglast und der Möglichkeit zusätzlicher Module." },
    { routeKey: "standardCellsTmx", systemSlug: "tmx", title: "TMX", eyebrow: "Kollaborative Roboterplattform", desc: "Mobile kollaborative Roboterplattform für Pick & Place, einfache Montage, Qualitätskontrolle und Bedienerunterstützung." },
    { routeKey: "standardCellsMiddleware", systemSlug: "middleware", title: "Middleware", eyebrow: "Verbindungsschicht", desc: "Verbindungsschicht zwischen Produktionsausrüstung, Transporteinheiten, Stationen und ERP- bzw. Produktionssystemen." },
  ],
  modules: {
    eyebrow: "Module und technische Elemente",
    heading: "Das System aus den richtigen Elementen zusammenstellen.",
    paragraphs: [
      "Wir ergänzen eine Zelle oder Plattform mit den Elementen, die der konkrete Produktionsablauf erfordert.",
    ],
    groups: [
      {
        title: "Stationen und Transport",
        items: [
          "Bowl feeder",
          "Stacker",
          "Reinigungsstation",
          "Gravur",
          "Eingangssortierstation",
          "Förderband",
          "Puffer",
          "Storage lift",
        ],
      },
      {
        title: "Greifen und Prüfung",
        items: ["Greifer", "Vision-System", "3D-Sicherheitsscanner"],
      },
      {
        title: "Schnittstellen",
        items: ["Schnittstellen"],
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Sind Sie nicht sicher, welches System das richtige ist?",
    body: "Gemeinsam betrachten wir Ihre Maschine, das Werkstück, die Beladeart und den Platz an der Maschine — so lässt sich leichter bestimmen, welche Standardzelle, Plattform oder Verbindungslösung am sinnvollsten ist.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "Standardsystem für die Automatisierung in der Produktion",
    captionEyebrow: "Erster Schritt",
    captionText: "Welches System passt am besten zu Ihrer Produktionsaufgabe?",
    secondaryCta: { label: "Lösungen ansehen →", routeKey: "solutions" },
  },
};
