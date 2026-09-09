import type { CompanyAboutContent } from "../types";

export const aboutContent: CompanyAboutContent = {
  routeKey: "aboutUs",
  meta: {
    title: "O nas | Flexido",
    description:
      "V Flexidu razvijamo in integriramo robotske celice za CNC in brizganje plastike. Fokus je na stabilnem procesu, manj ročnega dela in jasnem toku med operacijami.",
  },
  hero: {
    eyebrow: "O nas",
    heading: "Avtomatizacija proizvodnje brez kompliciranja.",
    subhead:
      "V Flexidu razvijamo in integriramo robotske celice za CNC in brizganje plastike. Fokus je na stabilnem procesu, manj ročnega dela in jasnem toku med operacijami.",
    primaryCta: { label: "Poglejmo vaš proces →", href: "#kontakt" },
    secondaryCtaLabel: "Kako delamo →",
    image: {
      src: "/images/robot.jpg",
      alt: "Flexido robotska celica v proizvodnji",
    },
    imageCaptionEyebrow: "V praksi",
    imageCaption: "Razvoj, integracija in podpora za celice ter proizvodne procese.",
  },
  whatWeDo: {
    eyebrow: "Kaj delamo",
    heading: "Rešitve za stabilnejši proizvodni proces.",
    lead: "Trije principi, na katerih gradimo vsak projekt — ne glede na to, kako zahteven je proces.",
    items: [
      {
        title: "Robotske celice",
        desc: "Razvoj in integracija celic za različne proizvodne procese.",
      },
      {
        title: "Povezava procesov",
        desc: "Povežemo nalaganje, odvzem in premik materiala med operacijami.",
      },
      {
        title: "Celovit pristop",
        desc: "Od ideje do izvedbe — projekt, konstrukcija, programiranje in zagon.",
      },
    ],
  },
  team: {
    eyebrow: "Ekipa",
    heading: "Ista ekipa razvije rešitev in jo tudi integrira.",
    body: "Flexido ni samo dobavitelj robotskih celic. Konstrukcijo, programiranje, integracijo in zagon izvaja ista ekipa — zato je manj prehodov med izvajalci in jasna odgovornost od ideje do zagona v vaši proizvodnji.",
    image: {
      src: "/images/flexido/about/flexido-team.jpg",
      alt: "Ekipa Flexido",
    },
  },
  video: {
    eyebrow: "Video",
    heading: "Kako Flexido deluje v praksi.",
    body: "Kratek vpogled v celice, integracijo in proizvodni proces v realnem obratovanju — tako izgleda rešitev, ko postane del vsakodnevne proizvodnje.",
    src: "/video/flexido-company-video.mp4",
    poster: "/images/flexido/video/flexido-company-video-poster.jpg",
    ctaLabel: "Poglej še predstavitveni video →",
    aside: "Dodaten video prikazuje Flexido sisteme in avtomatizacijo v gibanju.",
  },
  approach: {
    eyebrow: "Kako pristopimo",
    heading: "Najprej proces. Potem rešitev.",
    items: [
      {
        title: "Razumemo proces",
        desc: "Najprej pogledamo, kje nastajajo zastoji in ročno delo.",
      },
      {
        title: "Predlagamo rešitev",
        desc: "Načrtujemo tok materiala in vlogo robotske celice.",
      },
      {
        title: "Izvedemo in zaženemo",
        desc: "Postavimo sistem in ga pripeljemo do stabilnega delovanja.",
      },
    ],
  },
  cta: {
    id: "kontakt",
    eyebrow: "Kontakt",
    heading: "Poglejmo vaš proces",
    body: "Če razmišljate o avtomatizaciji, ima smisel najprej pogledati, kje proces izgublja ritem.",
    label: "Pošljite povpraševanje →",
    mailto: "info@flexido.eu",
    image: {
      src: "/images/flexido/legacy/image_4.jpg.jpeg",
      alt: "Flexido oprema in procesna postaja v proizvodnji",
    },
  },
};
