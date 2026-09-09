import type { SystemPageContent } from "../types";

/**
 * New page. Authored from `src/data/flexido-systems.ts`'s `tmx` entry and
 * the framing already used in `src/content/solutions/cobots/de.ts`'s "tmx"
 * product cross-sell block.
 */
export const tmxSystemContent: SystemPageContent = {
  routeKey: "standardCellsTmx",
  meta: {
    title: "TMX | Flexido",
    description: "Eine mobile kollaborative Roboterplattform für Aufgaben, bei denen der Einsatz an verschiedenen Stellen in der Produktion wichtig ist.",
  },
  backLabel: "← Alle Standardzellen",
  hero: {
    eyebrow: "Standardroboterzellen",
    heading: "TMX",
    subhead: "Eine mobile kollaborative Roboterplattform für Aufgaben, bei denen der Einsatz an verschiedenen Stellen in der Produktion wichtig ist.",
    media: { kind: "image", src: "/images/systems/raw/tmx-studio-hero.png", alt: "TMX kollaborative Roboterplattform" },
  },
  intro: {
    eyebrow: "Mobile Automatisierung",
    heading: "Flexibilität statt fester Aufstellung.",
    paragraphs: [
      "Die Plattform eignet sich, wenn die Aufgabe keine vollständige Roboterzelle erfordert, sondern schnell umstellbare Unterstützung neben der bestehenden Ausrüstung.",
      "Im dokumentierten Umsiedlungs-Setup wird die Plattform zwischen Stationen verfahren; die Kamera liest einen Standortmarker an der Station und nutzt ihn zur Positionskalibrierung am neuen Standort.",
    ],
    image: { src: "/raw/0-tmx.png", alt: "TMX kollaborative Roboterplattform, Gesamtansicht" },
  },
  product: {
    eyebrow: "Kollaborative Plattform",
    systemSlug: "tmx",
    description:
      "TMX ist ein kollaborativer Roboter auf einer mobilen Plattform für einfache Aufgaben, bei denen Flexibilität, schnelle Umstellung und der Einsatz an verschiedenen Stellen in der Produktion wichtig sind.",
    showTechnical: true,
  },
  itemGrids: [
    {
      eyebrow: "Anwendungen",
      heading: "Wo TMX eingesetzt wird.",
      items: ["Pick-and-Place-Anwendungen", "Qualitätskontrolle", "Einfache Montageanwendungen"],
    },
    {
      eyebrow: "Vorteile",
      heading: "Warum TMX wählen.",
      items: [
        "Kollaborativer Roboter auf mobiler Plattform",
        "Universeller pneumatischer Greifer",
        "Integriertes 2D-Vision-System",
        "Optionaler 3D-Sicherheitsscanner",
        "Halterungen für Zwischenlagen",
        "Sensorik für Applikationskontrolle",
        "Elektroschrank",
      ],
    },
  ],
  gallery: {
    eyebrow: "Optionen",
    heading: "Greifer, Schnittstellen und Sicherheit.",
    alts: [
      "Halterung für Verpackungskisten",
      "Elektrische und pneumatische Schnittstellen",
      "3D-Sicherheitsscanner",
    ],
  },
  relatedSolutions: {
    eyebrow: "Verwandte Lösungen",
    heading: "Wo TMX in einen umfassenderen Prozess eintritt.",
    linkLabel: "Lösung ansehen",
    items: [
      {
        title: "Kollaborative Roboter",
        body: "TMX ist eine mobile kollaborative Plattform für Aufgaben, bei denen der Einsatz an verschiedenen Stellen in der Produktion wichtig ist.",
        routeKey: "solutionCobots",
      },
      {
        title: "Materialhandhabung",
        body: "Zu den Anwendungen gehören Pick & Place, Qualitätskontrolle und einfache Montageaufgaben neben bestehender Ausrüstung.",
        routeKey: "solutionManipulation",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Ist TMX die richtige Lösung für Ihre Aufgabe?",
    body: "Gemeinsam schauen wir uns die Aufgabe, den Arbeitsplatz und den verfügbaren Platz an — anschließend beurteilen wir, ob eine mobile kollaborative Plattform die sinnvolle Wahl ist.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/images/systems/raw/tmx-studio.png",
    imageAlt: "TMX kollaborative Roboterplattform",
    captionEyebrow: "Erster Schritt",
    captionText: "Welche Aufgabe benötigt schnell umstellbare Unterstützung?",
  },
};
