import type { CompanyVideoContent } from "../types";

export const videoContent: CompanyVideoContent = {
  routeKey: "video",
  meta: {
    title: "Video | Flexido",
    description:
      "Oglejte si predstavitveni video podjetja Flexido — avtomatizacija proizvodnje, robotske celice in rešitve za stabilnejši tok dela.",
  },
  hero: {
    eyebrow: "Video",
    heading: "Flexido v gibanju.",
    subhead:
      "Oglejte si predstavitveni video podjetja Flexido — avtomatizacija proizvodnje, robotske celice in rešitve za stabilnejši tok dela.",
  },
  player: {
    src: "/video/flexido-predstavitev.mp4",
    poster: "/images/flexido/video/flexido-predstavitev-poster.jpg",
    fallback: "Vaš brskalnik ne podpira predvajanja videa.",
    bridgeLead: "Od razvoja do zagona v proizvodnji.",
    bridgeBody: "Poglejte, kako Flexido razvija, testira in integrira avtomatizacijske rešitve v praksi.",
  },
  intro: {
    eyebrow: "Predstavitev",
    heading: "Avtomatizacija, prikazana skozi proces.",
    paragraphs: [
      "Video prikazuje Flexido pristop k avtomatizaciji proizvodnje: od robotskih celic in standardnih rešitev do prilagojenih sistemov za različne industrijske procese.",
      "Na kratko pokaže, kako Flexido razmišlja o avtomatizaciji: najprej proces, potem rešitev, ki mora delovati v realni proizvodnji.",
    ],
  },
  cta: {
    label: "Poglejmo vaš proces →",
    mailto: "info@flexido.eu",
    aside: "Trajanje: približno 2 minuti.",
  },
};
