import type { ReferencesHubContent } from "../types";

export const referencesHubContent: ReferencesHubContent = {
  routeKey: "references",
  meta: {
    title: "Referenzen | Flexido",
    description:
      "Automatisierung hat erst dann Wert, wenn sie in der Praxis den Arbeitsfluss verbessert, manuelle Unterbrechungen reduziert und den Prozess stabiler macht.",
  },
  hero: {
    eyebrow: "Referenzen",
    heading: "Lösungen aus der realen Produktion.",
    subhead:
      "Automatisierung hat erst dann Wert, wenn sie in der Praxis den Arbeitsfluss verbessert, manuelle Unterbrechungen reduziert und den Prozess stabiler macht.",
    primaryCta: { label: "Lösungen ansehen →", href: "/resitve" },
    secondaryCta: { label: "Sehen wir uns Ihren Prozess an →", href: "#kontakt" },
    videoSrc: "/video/flexido/hero-home.mp4",
  },
  projects: {
    eyebrow: "Umgesetzte Projekte",
    heading: "Konkrete Beispiele aus der Produktion.",
    body: "Drei Umsetzungen, die in den Flexido-Inhalten bereits dokumentiert sind.",
    readMoreLabel: "Projekt lesen",
  },
  areas: {
    eyebrow: "Bereiche",
    heading: "Wo sich Lösungen in der Praxis am häufigsten zeigen",
    body: "Referenzen versteht man am besten über den Teil des Prozesses, in dem die Wirkung entsteht — nicht nur über die eingesetzte Technologie.",
    linkLabel: "Mehr lesen →",
    items: [
      { title: "CNC-Automatisierung", body: "Beladen, Entladen und ein stabilerer Teilefluss um CNC-Maschinen.", routeKey: "solutionCnc" },
      { title: "Spritzgießen", body: "Entnahme, Ablage und Teilefluss nach dem Spritzzyklus.", routeKey: "solutionInjectionMolding" },
      { title: "Materialhandhabung", body: "Greifen, Versetzen, Drehen, Positionieren und Ablegen von Teilen.", routeKey: "solutionManipulation" },
      { title: "Interne Logistik", body: "Organisation des Materialflusses zwischen Phasen, Maschinen und Stationen.", routeKey: "solutionLogistics" },
      { title: "Kollaborative Roboter", body: "Übernahme wiederkehrender Aufgaben, während der Bediener die Kontrolle über den Prozess behält.", routeKey: "solutionCobots" },
      { title: "Kundenspezifische Systeme", body: "Lösungen nach Maß für Prozess, Raum, Teile und bestehende Maschinen.", routeKey: "solutionCustomSystems" },
    ],
  },
  principles: {
    eyebrow: "Was als Referenz zählt",
    heading: "Die Lösung muss in der Praxis funktionieren.",
    items: [
      { title: "Reale Produktion", desc: "Lösungen müssen in tatsächlichen Produktionsbedingungen funktionieren, nicht nur in der Präsentation." },
      { title: "Der gesamte Prozess", desc: "Wichtig ist nicht nur eine Maschine, sondern der Fluss zwischen Phasen, Material und Menschen." },
      { title: "Unterstützung nach der Inbetriebnahme", desc: "Das System muss nach der Übergabe und bei Änderungen in der Produktion nutzbar bleiben." },
    ],
  },
  cta: {
    id: "kontakt",
    eyebrow: "Kontakt",
    heading: "Sehen wir uns Ihren Prozess an",
    body: "Wenn Sie wissen, wo der Prozess stockt, können wir gemeinsam prüfen, welche Lösung für den nächsten Schritt am sinnvollsten ist.",
    label: "Anfrage senden →",
    mailto: "info@flexido.eu",
  },
};
