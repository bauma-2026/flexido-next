import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "polydigit",
  shared: {
    id: "polydigit",
    routeKey: "newsPolydigit",
    image: { src: "/raw/Koncan projekt digitalne preobrazbe Poly Digit.png" },
  },
  locales: {
    sl: {
      slug: "koncan-projekt-digitalne-preobrazbe-polydigit",
      meta: {
        title: "Končan projekt digitalne preobrazbe Poly Digit | Novice | Flexido",
        description:
          "Flexido je skupaj s POLYCOM d.o.o. in LOTRIČ Meroslovje d.o.o. zaključil sodelovanje na projektu digitalne preobrazbe Poly Digit.",
      },
      title: "Končan projekt digitalne preobrazbe Poly Digit",
      date: "2024-06-20",
      excerpt:
        "Naše podjetje je skupaj s konzorcijskima partnerjema POLYCOM d.o.o. in LOTRIČ Meroslovje d.o.o. uspešno zaključilo sodelovanje na projektu digitalne preobrazbe.",
      imageAlt: "Digitalna transformacija podjetja Flexido",
      details: [
        { label: "Kategorija", value: "Novice" },
        { label: "Projekt", value: "Poly Digit" },
        { label: "Partnerji", value: "POLYCOM d.o.o. / LOTRIČ Meroslovje d.o.o." },
        { label: "Področje", value: "Digitalna preobrazba" },
      ],
      blocks: [
        {
          type: "intro",
          text: "Podjetje Flexido je skupaj s konzorcijskima partnerjema POLYCOM d.o.o. in LOTRIČ Meroslovje d.o.o. uspešno zaključilo sodelovanje na projektu digitalne preobrazbe Poly Digit.",
        },
        {
          type: "section",
          heading: "Izboljšanje digitaliziranosti procesov",
          paragraphs: [
            "V okviru projekta je podjetje Polycom vpeljalo nove tehnologije in pristope v šestih poslovnih funkcijah, skupaj pa smo izboljšali stopnjo digitaliziranosti pri konzorcijskih partnerjih.",
            "Vpeljane digitalne tehnologije se medsebojno dopolnjujejo in tvorijo celovit sistem za bolj pregledno, učinkovito in povezano delovanje.",
          ],
        },
        {
          type: "section",
          heading: "Večja digitalna pismenost in boljši procesi",
          paragraphs: [
            "Z uporabo razvitih in uvedenih tehnologij smo dosegli zastavljene cilje projekta, izboljšali raven digitalizacije ter dvignili stopnjo digitalne pismenosti zaposlenih pri vseh konzorcijskih partnerjih.",
          ],
        },
        {
          type: "note",
          text: "Projekt je sofinanciran iz Načrta za okrevanje in odpornost.",
        },
      ],
    },
  },
};
