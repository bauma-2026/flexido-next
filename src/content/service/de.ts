import type { ServicePageContent } from "./types";

export const serviceContent: ServicePageContent = {
  routeKey: "service",
  meta: {
    title: "Service und Unterstützung | Flexido",
    description:
      "Für von Flexido gelieferte Systeme bieten wir nach der Inbetriebnahme Unterstützung bei einer gemeldeten Störung, der Prüfung der Anfrage und der vereinbarten Service-Maßnahme.",
  },
  wikiNav: [
    { href: "#pokritost", label: "Was der Service umfasst" },
    { href: "#prijava", label: "Störungsmeldung" },
    { href: "#potek", label: "Was danach geschieht" },
    { href: "#oprema", label: "Unterstützte Ausrüstung" },
    { href: "#cenik", label: "Preisliste" },
  ],
  hero: {
    eyebrow: "Service und Unterstützung",
    heading: "Service und Unterstützung nach der Inbetriebnahme.",
    subhead:
      "Für von Flexido gelieferte Systeme bieten wir nach der Inbetriebnahme Unterstützung bei einer gemeldeten Störung, der Prüfung der Anfrage und der vereinbarten Service-Maßnahme.",
    primaryCta: { label: "Serviceanfrage melden →", href: "#kontakt" },
    secondaryCtaLabel: "Servicepreise →",
    image: {
      src: "/images/systems/raw/flexido-cnc-machine-studio.png",
      alt: "Flexido CNC-Roboterzelle",
    },
    imageCaptionEyebrow: "Serviceanfrage",
    imageCaption: "Klare Angaben zur Ausrüstung und zur Störung helfen, den nächsten Schritt festzulegen.",
  },
  coverage: {
    id: "pokritost",
    eyebrow: "Was der Service umfasst",
    heading: "Unterstützung für ein System nach der Übergabe in die Produktion.",
    paragraphs: [
      "Der Service bezieht sich auf von Flexido gelieferte Systeme nach der Inbetriebnahme. Bei einer gemeldeten Störung prüfen wir die angegebenen Informationen und stimmen den geeigneten Serviceschritt ab.",
      "Zweck dieser Seite ist die Organisation einer Serviceanfrage — nicht die Auswahl einer neuen Lösung für den Produktionsprozess.",
    ],
  },
  request: {
    id: "prijava",
    eyebrow: "Störungsmeldung",
    heading: "Senden Sie den Kontext, den wir zur Prüfung der Anfrage brauchen.",
    body: "Je mehr grundlegende Angaben zur Ausrüstung und zum Verlauf der Störung vorliegen, desto leichter lässt sich der geeignete nächste Schritt festlegen.",
    details: [
      "das System oder die Maschine, an der die Störung aufgetreten ist",
      "Identifikation der Zelle oder der Ausrüstung, sofern verfügbar",
      "Beschreibung des Fehlers oder des Symptoms",
      "wann die Störung aufgetreten ist",
      "aktueller Zustand bzw. Auswirkung auf die Produktion",
      "Kontaktdaten einer Person, die weitere Informationen geben kann",
    ],
  },
  flow: {
    id: "potek",
    eyebrow: "Was danach geschieht",
    heading: "Von der Meldung zum nächsten Serviceschritt.",
    items: [
      {
        step: "01",
        title: "Störungsmeldung",
        desc: "Sie senden Angaben zur Ausrüstung, zur Störung und zum aktuellen Produktionszustand.",
      },
      {
        step: "02",
        title: "Prüfung der Anfrage",
        desc: "Wir prüfen die Meldung und den Kontext der Ausrüstung und legen den geeigneten nächsten Schritt fest.",
      },
      {
        step: "03",
        title: "Service-Maßnahme",
        desc: "Es folgt die vereinbarte Unterstützung, Vorbereitung oder ein Eingriff, sofern das erforderlich ist.",
      },
    ],
  },
  equipment: {
    id: "oprema",
    eyebrow: "Unterstützte Ausrüstung",
    heading: "Eine Anfrage kann sich auf das gelieferte System und seine verbundenen Teile beziehen.",
    body: "Der Umfang der Unterstützung ist an das von Flexido gelieferte System und den vereinbarten Ausrüstungsumfang gebunden.",
    groups: [
      {
        number: "01",
        title: "Roboterzellen und Systeme",
        items: ["Roboterzellen", "kundenspezifische Systeme"],
      },
      {
        number: "02",
        title: "Verbundene Ausrüstung und Steuerung",
        items: [
          "verbundene Module und Peripheriegeräte",
          "Transportelemente im Rahmen des gelieferten Systems",
          "Steuerung und Schnittstellen im vereinbarten Systemumfang",
        ],
      },
    ],
  },
  pricing: {
    id: "cenik",
    eyebrow: "Preisliste und Bedingungen",
    heading: "Preise und Bedingungen der Serviceleistungen.",
    body: "Stundensätze, Zuschläge, Fahrtkosten und Bedingungen der Serviceleistungen sind in einer gesonderten Preisliste veröffentlicht.",
    ctaLabel: "Servicepreise ansehen →",
  },
  cta: {
    id: "kontakt",
    eyebrow: "Serviceanfrage",
    heading: "Serviceanfrage melden.",
    body: "Senden Sie Angaben zum System oder zur Ausrüstung, beschreiben Sie die Störung und den Zeitpunkt sowie den aktuellen Produktionszustand.",
    label: "Serviceanfrage melden →",
    mailto: "info@flexido.eu",
    image: {
      src: "/images/systems/raw/flexido-imm-machine-studio.png",
      alt: "Flexido Roboterzelle für Spritzguss",
    },
    captionEyebrow: "Beginn der Meldung",
    caption: "Was ist geschehen, an welcher Ausrüstung und wie ist der aktuelle Zustand?",
  },
};
