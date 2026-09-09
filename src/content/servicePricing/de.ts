import type { ServicePricingContent } from "./types";

export const servicePricingContent: ServicePricingContent = {
  routeKey: "servicePricing",
  meta: {
    title: "Servicepreise | Flexido",
    description: "Stundensätze, Zuschläge, Fahrtkosten und Bedingungen der Flexido-Serviceleistungen.",
  },
  eyebrow: "Service",
  title: "Preisliste der Serviceleistungen",
  date: "2026",
  heroImage: {
    src: "/images/systems/raw/flex-7-cnc-slim-studio.png",
    alt: "Flexido CNC-Roboterzelle",
  },
  detailsLabel: "Details",
  details: [
    { label: "Kategorie", value: "Service" },
    { label: "Typ", value: "Preisliste der Serviceleistungen" },
    { label: "Gültigkeit", value: "ab 01.01.2026" },
    { label: "Gebiet", value: "Slowenien" },
  ],
  backLabel: "Zurück zum Service",
  sections: [
    {
      heading: "1. Preis pro Reparaturstunde",
      body: "Preis pro Reparaturstunde während der regulären Arbeitszeit, d. h. Montag bis Freitag, ausgenommen Feiertage, zwischen 7.00 und 16.00 Uhr:",
      rows: [
        { label: "Servicetechniker II — einfache Mechanik", value: "51,20 EUR" },
        { label: "Servicetechniker I — anspruchsvolle Mechanik, Pneumatik, Elektro", value: "58,60 EUR" },
        { label: "Elektroniktechniker II — Roboter, einfache Steuerung", value: "63,80 EUR" },
        { label: "Elektroniktechniker I — Kameras, anspruchsvolle Steuerung", value: "72,60 EUR" },
      ],
      note: "Zur Abrechnung zählt auch die Fahrzeit, die Vorbereitung der Reparatur und eine eventuelle Wartezeit.",
    },
    {
      heading: "2. Zuschläge für Arbeit außerhalb der regulären Arbeitszeit",
      rows: [
        { label: "Überstunden und Arbeit an Samstagen", value: "zusätzlich 50 %" },
        { label: "Nachtarbeit nach 20.00 Uhr sowie Arbeit an Sonn- und Feiertagen", value: "zusätzlich 100 %" },
      ],
    },
    {
      heading: "3. Fahrtkosten",
      highlight: "0,58 EUR / km",
      after:
        "Eventuelle Zusatzkosten wie Übernachtungen, Maut, andere Transportkosten und ähnliche direkte Kosten werden gesondert nach tatsächlichem Aufwand berechnet.",
      bullets: [
        "Auf die oben genannten Preise wird MwSt. berechnet.",
        "Die Zahlungsfrist für Serviceleistungen und Ersatzteile beträgt 30 Tage nach erbrachter Leistung bzw. nach Lieferung.",
        "Die Preisliste gilt auf unbestimmte Zeit und kann geändert werden, wenn Gründe für eine Änderung eintreten.",
      ],
    },
  ],
  footerNote: {
    strong: "Die Preisliste gilt ab 01.01.2026.",
    company: "Flexido d.o.o.",
  },
};
