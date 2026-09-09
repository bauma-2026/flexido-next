import type { SolutionPageContent } from "../types";

/** Faithful structural port of `app/(default)/resitve/kolaborativni-roboti/page.tsx`. */
export const cobotsContent: SolutionPageContent = {
  routeKey: "solutionCobots",
  hero: {
    backLabel: "← Alle Lösungen",
    eyebrow: "Kollaborative Roboter",
    titleLines: ["Flexible Automatisierung für bestimmte Arbeitsschritte."],
    subhead:
      "Ein kollaborativer Roboter kann für das Greifen, Einlegen, Prüfen oder Montieren innerhalb eines bestehenden Produktionsprozesses eine geeignete Lösung sein.",
    ctas: [{ label: "Wann ist ein Cobot geeignet?", anchor: "#primernost" }],
    videoSrc: "/video/flexido/hero-cobot.mp4",
  },
  wikiNav: [
    { id: "primernost", label: "Wann geeignet" },
    { id: "aplikacije", label: "Anwendungen" },
    { id: "integracija", label: "Integration" },
    { id: "tmx", label: "TMX" },
  ],
  sections: [
    {
      type: "capabilityGroups",
      id: "primernost",
      eyebrow: "Kollaborative Automatisierung",
      heading: "Wann ein Cobot der richtige Teil des Prozesses ist.",
      body: "Wir beginnen nicht beim Roboter, sondern beim Arbeitsschritt. Wir prüfen, ob die Aufgabe wiederholbar ist, wie sie sich in den bestehenden Arbeitsplatz einfügt und welche Einschränkungen Werkstück, Platz und Ausrüstung vorgeben.",
      groups: [
        { title: "Wiederholbarer Arbeitsschritt", body: "Greifen, Einlegen, Ablegen oder ein anderer Schritt mit klarer Abfolge." },
        { title: "Bestehender Arbeitsplatz", body: "Der Roboter wird in eine Station, Maschine oder einen Prozess eingebunden, der bereits Teil der Produktion ist." },
        { title: "Sich ändernde Anforderungen", body: "Aufgabe, Werkstück oder Platz erfordern eine anpassungsfähige Gestaltung des Roboterarbeitsplatzes." },
        { title: "Ausrüstung rund um den Arbeitsschritt", body: "Die Lösung kann einen Greifer, Vision oder eine Anbindung an die umliegende Ausrüstung umfassen." },
      ],
    },
    {
      type: "capabilityGroups",
      id: "aplikacije",
      eyebrow: "Anwendungen",
      heading: "Arbeitsschritte, bei denen ein Cobot eine klare Rolle übernehmen kann.",
      body: "Kollaborative Automatisierung eignet sich dort, wo ein bestimmter Arbeitsschritt mit Werkstück, Arbeitsplatz und Prozesstakt verbunden werden muss.",
      groups: [
        { title: "Pick & Place", body: "Aufnehmen und Ablegen von Werkstücken in einer festgelegten Reihenfolge." },
        { title: "Verpackung", body: "Stapeln von Werkstücken, Vorbereitung für die Verpackung oder Ablegen in Kartons." },
        { title: "Prüfung und Test", body: "Unterstützung bei Sichtprüfung, Sortierung oder wiederkehrender Kontrolle." },
        { title: "Montage und Verschrauben", body: "Wiederkehrende Montageschritte und Handhabung von Bauteilen." },
        { title: "Pressenbeschickung", body: "Wiederkehrende Beschickung und Unterstützung an Pressen." },
      ],
      trailingNote: {
        template:
          "Bei der Maschinenbeschickung und dem umfassenderen Materialfluss sind die Anforderungen des jeweiligen Prozesses entscheidend. Sehen Sie sich {0}, {1} und {2} an.",
        links: [
          { label: "die Automatisierung von CNC-Maschinen", routeKey: "solutionCnc" },
          { label: "die Automatisierung von Spritzgießmaschinen", routeKey: "solutionInjectionMolding" },
          { label: "die interne Logistik", routeKey: "solutionLogistics" },
        ],
      },
    },
    {
      type: "capabilityGroups",
      id: "integracija",
      eyebrow: "Integration in den Prozess",
      heading: "Der Roboter ist ein Element der Gesamtlösung.",
      body: "Ein Cobot gewinnt erst dann an Bedeutung, wenn er auf die tatsächliche Aufgabe, den Arbeitsplatz und die Ausrüstung ringsum abgestimmt ist.",
      layout: "numberedRows",
      groups: [
        { number: "01", title: "Festlegung der Aufgabe", body: "Wir legen Werkstück, Griff, Schrittfolge und Anforderungen des Arbeitsschritts fest." },
        { number: "02", title: "Einbindung in den Arbeitsplatz", body: "Wir bestimmen die Position des Roboters, Anbindungen an die Ausrüstung und die Kommunikation mit umliegenden Stationen." },
        { number: "03", title: "Überprüfung der Umsetzung", body: "Bei Bedarf binden wir Vision ein, stimmen die Prozessabfolge ab und bereiten das Sicherheitskonzept vor." },
        { number: "04", title: "Teach-in", body: "In bestimmten Umsetzungen können Positionen und Aufgaben durch Führung des Roboters und Speichern von Referenzpunkten gelehrt werden." },
      ],
    },
    {
      type: "crossSell",
      id: "tmx",
      eyebrow: "Kollaborative Plattform",
      heading: "TMX für mobile kollaborative Anwendungen.",
      body: "TMX ist eine mobile kollaborative Roboterplattform für Aufgaben, bei denen der Einsatz an verschiedenen Stellen in der Produktion wichtig ist.",
      right: {
        kind: "image",
        src: "/images/systems/raw/tmx-studio.png",
        alt: "TMX kollaborative Roboterplattform",
        reversed: true,
        size: "feature",
        link: { label: "TMX ansehen", routeKey: "standardCellsTmx" },
      },
    },
  ],
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Welchen Arbeitsschritt könnte ein Cobot übernehmen?",
    body: "Senden Sie uns grundlegende Informationen zu Aufgabe, Arbeitsplatz, Werkstück, Griff, Ausrüstung rund um die Station und verfügbarem Platz. Gemeinsam bewerten wir, ob kollaborative Automatisierung für Ihren Prozess geeignet ist.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/raw/tmx/14.jpg",
    imageAlt: "Kollaborativer Roboter in einem Produktionsprozess",
    captionEyebrow: "Erster Schritt",
    captionText: "Welcher Arbeitsschritt, welche Station und welche Ausrüstung bestimmen Ihre Lösung?",
    variant: "photo",
  },
};
