import type { NewsHubContent } from "../types";

export const newsHubContent: NewsHubContent = {
  routeKey: "news",
  meta: {
    title: "Novice | Flexido",
    description:
      "Pregled projektov, sejmov, razvoja rešitev in pomembnih mejnikov v podjetju Flexido.",
  },
  hero: {
    eyebrow: "Novice",
    heading: "Aktualno in projekti",
    body: "Pregled projektov, sejmov, razvoja rešitev in pomembnih mejnikov v podjetju Flexido.",
    aside:
      "Objave prikazujejo, kako se rešitve razvijajo, predstavljajo in uporabljajo v realnem proizvodnem okolju.",
  },
  featuredEyebrow: "Izpostavljeno",
  featuredFallbackBody:
    "Najnovejša objava iz pregleda aktualnih projektov, sodelovanj in predstavitev podjetja Flexido.",
  readMoreLabel: "Preberi več →",
  grid: {
    eyebrow: "Vse objave",
    heading: "Projekti, sejmi in razvoj",
    body: "Izbrani zapisi iz razvoja, predstavitev, sejmov in projektov, ki kažejo širši kontekst dela podjetja Flexido.",
    cardLabel: "Objava",
  },
  cta: {
    eyebrow: "Naslednji korak",
    heading: "Iščete rešitev za svoj proces?",
    body: "Če se v vašem procesu ponavljajo zastoji, ročni koraki ali čakanje med fazami, lahko skupaj preverimo, katera rešitev ima največ smisla.",
    primaryLabel: "Poglej rešitve →",
    primaryRouteKey: "solutions",
    secondaryLabel: "Pošljite povpraševanje →",
    mailto: "info@flexido.eu",
  },
  chrome: {
    backLabel: "← Nazaj na novice",
    prevLabel: "← Prejšnja",
    nextLabel: "Naslednja →",
    detailsLabel: "Podrobnosti",
  },
};
