import type { NewsArticle } from "../types";

export const article: NewsArticle = {
  id: "flex-7-imm",
  shared: {
    id: "flex-7-imm",
    routeKey: "newsFlex7Imm",
    image: { src: "/images/systems/raw/flexido-imm-machine-studio.png" },
  },
  locales: {
    sl: {
      slug: "flex-7-imm-predstavitev",
      meta: {
        title: "FLEX 7 IMM predstavitev | Novice | Flexido",
        description:
          "FLEX 7 IMM je alternativa tradicionalnim rešitvam avtomatizacije z linearnimi manipulatorji.",
      },
      title: "FLEX 7 IMM predstavitev",
      date: "2022-03-08",
      excerpt:
        "Flex 7 IMM je alternativa tradicionalnim rešitvam avtomatizacije z linearnimi manipulatorji.",
      imageAlt: "FLEX 7 IMM",
      details: [
        { label: "Kategorija", value: "Novice" },
        { label: "Produkt", value: "FLEX 7 IMM" },
        { label: "Tip rešitve", value: "Robotska celica za IMM stroje" },
        { label: "Področje", value: "Avtomatizacija brizganja plastike" },
      ],
      blocks: [
        {
          type: "intro",
          text: "FLEX 7 IMM je alternativa tradicionalnim rešitvam avtomatizacije z linearnimi manipulatorji, saj omogoča večjo fleksibilnost in širši nabor operacij.",
        },
        {
          type: "section",
          heading: "Več kot samo odvzem kosov",
          paragraphs: [
            "Rešitev vključuje integrirane 6-osne robote, ki poleg osnovne funkcije odvzemanja kosov omogočajo tudi dodatne operacije.",
            "Med njimi so odstranjevanje odlivka, preverjanje zalitosti kosov, kontrola prisotnosti srha ter pregled prelitij na brizgancih.",
          ],
        },
        {
          type: "section",
          heading: "Nadzor kakovosti in procesov",
          paragraphs: [
            "Sistem omogoča zaznavanje površinskih napak ter zagotavlja bolj stabilen in ponovljiv proizvodni proces.",
            "Zaradi fleksibilnosti robotske celice je rešitev primerna za podjetja, ki želijo nadgraditi obstoječe procese brez kompleksnih posegov v proizvodnjo.",
          ],
        },
        {
          type: "callout",
          eyebrow: "Povezana rešitev",
          heading: "Avtomatizacija procesa brizganja plastike",
          body: "Preverite, kako Flexido pristopa k odvzemu, odlaganju, kontroli in stabilnemu toku kosov po ciklu brizganja.",
          ctaLabel: "Poglej rešitev →",
          routeKey: "solutionInjectionMolding",
        },
      ],
    },
  },
};
