import type { CompanyVideoContent } from "../types";

export const videoContent: CompanyVideoContent = {
  routeKey: "video",
  meta: {
    title: "Video | Flexido",
    description:
      "Sehen Sie das Flexido-Unternehmensvideo — Produktionsautomatisierung, Robotierzellen und Lösungen für einen stabileren Arbeitsfluss.",
  },
  hero: {
    eyebrow: "Video",
    heading: "Flexido in Bewegung.",
    subhead:
      "Sehen Sie das Flexido-Unternehmensvideo — Produktionsautomatisierung, Robotierzellen und Lösungen für einen stabileren Arbeitsfluss.",
  },
  player: {
    src: "/video/flexido-predstavitev.mp4",
    poster: "/video/flexido-video-poster.webp",
    fallback: "Ihr Browser unterstützt die Videowiedergabe nicht.",
  },
  intro: {
    eyebrow: "Präsentation",
    heading: "Automatisierung, gezeigt über den Prozess.",
    paragraphs: [
      "Das Video zeigt den Flexido-Ansatz zur Produktionsautomatisierung: von Robotierzellen und Standardlösungen bis zu angepassten Systemen für unterschiedliche industrielle Prozesse.",
      "Es zeigt kurz, wie Flexido über Automatisierung denkt: zuerst der Prozess, dann eine Lösung, die in der realen Produktion funktionieren muss.",
    ],
  },
  cta: {
    label: "Sehen wir uns Ihren Prozess an →",
    mailto: "info@flexido.eu",
  },
};
