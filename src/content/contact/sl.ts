import type { ContactPageContent } from "./types";

export const contactContent: ContactPageContent = {
  routeKey: "contact",
  meta: {
    title: "Kontakt | Flexido",
    description:
      "Kontaktirajte Flexido za pogovor o avtomatizaciji proizvodnih procesov.",
  },
  hero: {
    eyebrow: "Kontakt",
    heading: "Poglejmo vaš proces",
    subhead:
      "Opišite, kje se v proizvodnji pojavljajo zastoji, ročni koraki ali nejasen tok materiala. Skupaj preverimo, kateri del procesa ima največ smisla avtomatizirati.",
    primaryCtaLabel: "Pošljite povpraševanje →",
    secondaryCtaLabel: "Pokličite →",
    stepsEyebrow: "Kako začeti",
    steps: [
      {
        title: "1. Opišite proces",
        desc: "Kje nastaja čakanje, ročno delo ali nestabilen tok?",
      },
      {
        title: "2. Dodajte kontekst",
        desc: "Kateri stroji, faze, kosi ali omejitve so pomembni?",
      },
      {
        title: "3. Dogovorimo naslednji korak",
        desc: "Na osnovi procesa ocenimo, kaj ima smisel preveriti naprej.",
      },
    ],
  },
  details: {
    eyebrow: "Podatki",
    heading: "Najhitrejši način je kratek opis procesa.",
    body:
      "Ni treba imeti pripravljene tehnične specifikacije. Dovolj je, da opišete problem, proizvodni korak ali del procesa, kjer se pojavlja zastoj.",
    emailLabel: "E-pošta",
    phoneLabel: "Telefon",
    companyLabel: "Podjetje",
    companyNameLabel: "Podjetje",
    registeredOfficeLabel: "Sedež",
    businessUnitLabel: "Poslovna enota",
    topicsLabel: "Področja",
    topics: [
      "avtomatizacija proizvodnje",
      "CNC avtomatizacija",
      "brizganje plastike",
      "manipulacija materiala",
      "interna logistika",
      "kolaborativni roboti",
      "servis in podpora",
    ],
  },
  final: {
    eyebrow: "Naslednji korak",
    heading: "Pošljite kratek opis procesa.",
    body:
      "Pogledamo, kje nastajajo zastoji, ročni koraki ali nejasen tok — in ali ima avtomatizacija tam smiseln učinek.",
    emailCta: "info@flexido.eu →",
    phoneCta: "0593 51100 →",
  },
};
