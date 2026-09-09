import type { NewsHubContent } from "../types";

export const newsHubContent: NewsHubContent = {
  routeKey: "news",
  meta: {
    title: "Aktuelle Nachrichten | Flexido",
    description: "Inhalt ist in Vorbereitung.",
  },
  hero: {
    eyebrow: "Aktuelle Nachrichten",
    heading: "Aktuelles und Projekte",
    body: "Hinweise zu Messen, Produktupdates und Projekten von Flexido.",
    aside: "Die deutschen Beiträge werden noch vorbereitet.",
  },
  featuredEyebrow: "Hervorgehoben",
  featuredFallbackBody: "Der neueste Beitrag aus dem Flexido-Nachrichtenüberblick.",
  readMoreLabel: "Weiterlesen →",
  grid: {
    eyebrow: "Alle Beiträge",
    heading: "Messen, Produkte und Projekte",
    body: "Ausgewählte Hinweise aus Entwicklung, Messen und Projekten.",
    cardLabel: "Beitrag",
  },
  empty: {
    heading: "Inhalt ist in Vorbereitung.",
    body: "Die deutschen Nachrichtenbeiträge sind noch nicht veröffentlicht. Der Bereich bleibt als Nachrichten-Hub bestehen, ohne übersetzte oder übernommene Beiträge aus anderen Sprachen.",
  },
  cta: {
    eyebrow: "Nächster Schritt",
    heading: "Suchen Sie eine Lösung für Ihren Prozess?",
    body: "Wenn in Ihrem Prozess wiederkehrende Stillstände, manuelle Schritte oder Wartezeiten zwischen den Phasen auftreten, können wir gemeinsam prüfen, welche Lösung am sinnvollsten ist.",
    primaryLabel: "Lösungen ansehen →",
    primaryRouteKey: "solutions",
    secondaryLabel: "Anfrage senden →",
    mailto: "info@flexido.eu",
  },
  chrome: {
    backLabel: "← Zurück zu den Nachrichten",
    prevLabel: "← Vorheriger",
    nextLabel: "Nächster →",
    detailsLabel: "Details",
  },
};
