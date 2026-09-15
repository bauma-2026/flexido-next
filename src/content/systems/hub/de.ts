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
      "Das Programm vereint Standardroboterzellen, eine mobile Roboterplattform und eine Verbindungsebene zwischen Ausrüstung, Transport und Produktionssystemen.",
      "Eine Standardplattform ist der Ausgangspunkt und wird an Maschine, Werkstück, Raum und Prozess angepasst.",
      "Wenn mehrere Arbeitsschritte oder Stationen koordiniert zusammenwirken müssen, entwickeln wir ein kundenspezifisches System.",
    ],
  },
  cardsHeading: {
    eyebrow: "Systemtypen",
    heading: "Wählen Sie das System passend zur Aufgabe.",
  },
  cardLinkLabel: "System ansehen",
  cards: [
    { routeKey: "standardCellsCnc", systemSlug: "flex-7-cnc", title: "FLEX 7 CNC Slim", eyebrow: "CNC-Maschinen", desc: "Kompakte Roboterzelle für die Beschickung von CNC-Maschinen — Beladen, Entnehmen und ein stabilerer Teilefluss." },
    { routeKey: "standardCellsImm", systemSlug: "flex-7-imm", title: "FLEX 7 IMM Slim", eyebrow: "Spritzgießen", desc: "Roboterzelle für die Beschickung von Spritzgießmaschinen — Teileentnahme, Insert Moulding und Kontrolle." },
    { routeKey: "standardCellsFlex2550", systemSlug: "flex-25-50", title: "FLEX 25 / 50", eyebrow: "25 / 50 kg Traglast", desc: "Konfigurierbare Roboterzelle mit einem Roboter mit 25 oder 50 kg Traglast, wenn FLEX 7 die erforderliche Traglast, Reichweite oder Optionen nicht abdeckt." },
    { routeKey: "standardCellsTmx", systemSlug: "tmx", title: "TMX", eyebrow: "Kollaborative Roboterplattform", desc: "Kollaborativer Roboter auf mobiler Plattform für Aufgaben an bestehender Ausrüstung und an verschiedenen Arbeitsplätzen." },
    { routeKey: "standardCellsMiddleware", systemSlug: "middleware", title: "Middleware", eyebrow: "Verbindungsebene", desc: "Verbindet Ausrüstung, mobilen Transport, Lager- und Puffereinheiten sowie ERP. Tauscht Transportaufträge, Stationsstatus und Materialkontext aus." },
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
