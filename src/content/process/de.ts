import type { ProcessPageContent } from "./types";

export const processContent: ProcessPageContent = {
  routeKey: "process",
  meta: {
    title: "Prozess | Flexido",
    description:
      "Automatisierung wirkt am stärksten, wenn wir zuerst verstehen, wo die Produktion ihren Rhythmus verliert — erst danach wählen wir Technologie, Robotik oder System.",
  },
  hero: {
    eyebrow: "Prozess",
    heading: "Zuerst der Prozess. Dann die Lösung.",
    subhead:
      "Automatisierung wirkt am stärksten, wenn wir zuerst verstehen, wo die Produktion ihren Rhythmus verliert — erst danach wählen wir Technologie, Robotik oder System.",
    primaryCta: { label: "Sehen wir uns Ihren Prozess an →", href: "#kontakt" },
    secondaryCta: { label: "Wie ein Projekt abläuft →", href: "#koraki" },
    videoSrc: "/video/flexido/hero-proces.mp4",
  },
  intro: {
    eyebrow: "Unser Ansatz",
    heading: "Wir beginnen nicht beim Roboter.",
    paragraphs: [
      "Ein Roboter, eine Zelle oder ein Transportsystem sind kein Selbstzweck. Ziel ist ein Produktionsfluss, der stabiler, vorhersehbarer und mit weniger manueller Abstimmung läuft.",
      "Deshalb betrachten wir zuerst den Prozess als Ganzes: Maschinen, Material, Bediener, Daten, Raum und die Stellen, an denen Verzögerungen entstehen.",
    ],
  },
  steps: {
    id: "koraki",
    eyebrow: "Wie ein Projekt abläuft",
    heading: "Von der Prozessprüfung zur funktionierenden Lösung.",
    body: "Wir passen das Vorgehen dem Projekt an, die Logik bleibt gleich: zuerst verstehen wir den Prozess, dann entwerfen und setzen wir die Lösung um.",
    items: [
      {
        number: "01",
        title: "Prozessprüfung",
        desc: "Zuerst schauen wir, wo Verzögerungen, manuelle Schritte, Wartezeiten oder ein unklarer Materialfluss entstehen.",
      },
      {
        number: "02",
        title: "Lösungskonzept",
        desc: "Wir bestimmen, welcher Teil des Prozesses den größten Effekt für die Automatisierung hat — ohne unnötige Komplexität.",
      },
      {
        number: "03",
        title: "Integration in die Produktion",
        desc: "Wir verbinden die Lösung mit bestehenden Maschinen, Bedienern, Raum und dem realen Arbeitsrhythmus.",
      },
      {
        number: "04",
        title: "Inbetriebnahme und Unterstützung",
        desc: "Wir nehmen das System in Betrieb, stabilisieren es in der Praxis und passen es bei Bedarf an Änderungen in der Produktion an.",
      },
    ],
  },
  principles: {
    eyebrow: "Warum so",
    heading: "Die Lösung muss dem Prozess folgen.",
    items: [
      {
        title: "Zuerst der Prozess",
        desc: "Wir beginnen nicht mit der Auswahl eines Roboters, sondern mit dem Verständnis des Arbeitsablaufs.",
      },
      {
        title: "Weniger Improvisation",
        desc: "Ziel ist ein stabiler Prozess, in dem Bewegungen, Wartezeiten und Verantwortlichkeiten klar sind.",
      },
      {
        title: "Eine Lösung für die Praxis",
        desc: "Das System muss in der realen Produktion funktionieren, nicht nur in der Präsentation.",
      },
    ],
  },
  proof: {
    eyebrow: "Referenzen",
    heading: "Lösungen in der Praxis.",
    body: "Sehen Sie realisierte Projekte und wie dieser Prozess bereits in der realen Produktion umgesetzt wurde.",
    ctaLabel: "Referenzen ansehen →",
  },
  cta: {
    id: "kontakt",
    eyebrow: "Nächster Schritt",
    heading: "Sehen wir uns Ihren Prozess an",
    body: "Wenn Sie wissen, wo der Prozess stockt, können wir gemeinsam prüfen, welche Lösung für den nächsten Schritt am sinnvollsten ist.",
    label: "Anfrage senden →",
    mailto: "info@flexido.eu",
  },
};
