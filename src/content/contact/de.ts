import type { ContactPageContent } from "./types";

export const contactContent: ContactPageContent = {
  routeKey: "contact",
  meta: {
    title: "Kontakt | Flexido",
    description:
      "Kontaktieren Sie Flexido für ein Gespräch über die Automatisierung von Produktionsprozessen.",
  },
  hero: {
    eyebrow: "Kontakt",
    heading: "Sehen wir uns Ihren Prozess an",
    subhead:
      "Beschreiben Sie, wo in der Produktion Engpässe, manuelle Schritte oder ein unklarer Materialfluss auftreten. Gemeinsam prüfen wir, welcher Teil des Prozesses sich am sinnvollsten automatisieren lässt.",
    primaryCtaLabel: "Anfrage senden →",
    secondaryCtaLabel: "Anrufen →",
    stepsEyebrow: "Wie beginnen",
    steps: [
      {
        title: "1. Prozess beschreiben",
        desc: "Wo entstehen Wartezeiten, manuelle Arbeit oder ein instabiler Fluss?",
      },
      {
        title: "2. Kontext ergänzen",
        desc: "Welche Maschinen, Phasen, Teile oder Einschränkungen sind wichtig?",
      },
      {
        title: "3. Nächsten Schritt vereinbaren",
        desc: "Auf Basis des Prozesses beurteilen wir, was als Nächstes geprüft werden sollte.",
      },
    ],
  },
  details: {
    eyebrow: "Angaben",
    heading: "Der schnellste Weg ist eine kurze Beschreibung des Prozesses.",
    body:
      "Eine vorbereitete technische Spezifikation ist nicht erforderlich. Es genügt, das Problem, den Produktionsschritt oder den Teil des Prozesses zu beschreiben, in dem ein Engpass auftritt.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    companyLabel: "Unternehmen",
    companyNameLabel: "Unternehmen",
    registeredOfficeLabel: "Sitz",
    businessUnitLabel: "Geschäftseinheit",
    topicsLabel: "Bereiche",
    topics: [
      "Produktionsautomatisierung",
      "CNC-Automatisierung",
      "Spritzgießen",
      "Materialhandhabung",
      "interne Logistik",
      "kollaborative Roboter",
      "Service und Support",
    ],
  },
  final: {
    eyebrow: "Nächster Schritt",
    heading: "Senden Sie eine kurze Beschreibung des Prozesses.",
    body:
      "Wir prüfen, wo Engpässe, manuelle Schritte oder ein unklarer Fluss entstehen — und ob Automatisierung dort einen sinnvollen Effekt hat.",
    emailCta: "info@flexido.eu →",
    phoneCta: "0593 51100 →",
  },
};
