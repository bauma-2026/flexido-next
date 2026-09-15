import type { SystemPageContent } from "../types";

/** Faithful structural port of `app/(default)/standardne-celice/cnc/page.tsx`. */
export const cncSystemContent: SystemPageContent = {
  routeKey: "standardCellsCnc",
  meta: {
    title: "CNC stroji | Flexido",
    description:
      "Robotske celice za posluževanje CNC strojev — za nalaganje, odvzemanje, fleksibilno menjavo kosov in dodatne operacije v proizvodnem procesu.",
  },
  backLabel: "← Standardne celice",
  hero: {
    eyebrow: "Standardne robotske celice",
    heading: "CNC stroji",
    subhead:
      "Robotske celice za posluževanje CNC strojev — za nalaganje, odvzemanje, fleksibilno menjavo kosov in dodatne operacije v proizvodnem procesu.",
    media: { kind: "video", src: "/video/flexido/hero-standardne-celice-cnc.mp4" },
  },
  intro: {
    eyebrow: "CNC avtomatizacija",
    heading: "Fleksibilno posluževanje CNC strojev z robotom.",
    paragraphs: [
      "Flexido celice ponujajo bogat nabor opcij pri robotiziranem posluževanju CNC strojev. Za nalaganje in odvzem kosov izberemo ustrezni sistem glede na kos, obdelavo in prostor.",
      "Vision sistem je možnost za odvzem kosov, kadar se oblike kosov spreminjajo.",
      "Robot lahko pri integrirani opciji Pick & Place z vhodnega traku pobira različne kose različnih oblik.",
    ],
    image: { src: "/images/systems/raw/flexido-cnc-machine-studio.png", alt: "CNC stroj s Flexido robotsko celico" },
  },
  product: {
    eyebrow: "Standardna celica",
    systemSlug: "flex-7-cnc",
    description:
      "FLEX 7 CNC Slim je kompaktna avtomatizacijska celica za posluževanje CNC strojev, z možnostmi za zalogovnike, čiščenje, graviranje in vibro sortiranje.",
    showTechnical: true,
    highlights: [
      "Kompaktna CNC robotska celica",
      "Integriran transportni trak",
      "Možnost zalogovnika",
      "Možnost čiščenja in graviranja",
    ],
  },
  itemGrids: [
    {
      role: "documented-systems",
      eyebrow: "Nalaganje in odvzem",
      heading: "Dokumentirani sistemi za nalaganje in odvzem kosov.",
      items: [
        "drsni paletni sistem",
        "sistem vrtljive mize",
        "vrtljivi paletni sistem",
      ],
    },
  ],
  optionGrids: [
    {
      eyebrow: "Dodatne operacije",
      heading: "Standardna celica lahko vključuje dodatne postaje v procesu.",
      items: [
        {
          image: {
            src: "/raw/cnc-option-storage.webp",
            alt: "Zalogovnik",
          },
          title: "Zalogovnik",
          description: "Zalogovnik za dovajanje ali odlaganje kosov v procesu.",
        },
        {
          image: {
            src: "/raw/cnc-option-cleaning-station.webp",
            alt: "Čistilna postaja",
          },
          title: "Čistilna postaja",
          description: "Postaja za pranje kosov.",
        },
        {
          image: {
            src: "/raw/cnc-option-engraving.webp",
            alt: "Graviranje",
          },
          title: "Graviranje",
          description: "Postaja za graviranje kosov.",
        },
        {
          image: {
            src: "/raw/cnc-option-vibro-sorting.webp",
            alt: "Vibro sortirna postaja",
          },
          title: "Vibro sortirna postaja",
          description: "Postaja za vibro sortiranje kosov.",
        },
      ],
    },
  ],
  benefits: {
    items: [
      { title: "Modularna zasnova", body: "Zaradi modularne zasnove so standardne robotske celice cenovno dostopne tudi manjšim podjetjem." },
      { title: "Višja razpoložljivost", body: "Integracija robotske celice pomaga zvišati kakovost proizvodnje in razpoložljivost CNC strojev." },
    ],
  },
  relatedSolutions: {
    eyebrow: "Povezana rešitev",
    heading: "Ko CNC zahteva več kot eno celico.",
    linkLabel: "Poglej rešitev",
    items: [
      {
        title: "CNC avtomatizacija",
        body: "Kadar proizvodnja zahteva več kot ponovljivo strego enega stroja — okoli strojev, kosov, postaj in toka materiala.",
        routeKey: "solutionCnc",
      },
      {
        tag: "Referenca",
        title: "Vhodno-izhodna tračna proga",
        body: "Realiziran projekt tračne proge za KLT zaboje ob CNC strojih, ki prikazuje širši kontekst CNC avtomatizacije s kolaborativnim robotom.",
        routeKey: "referenceConveyor",
        linkLabel: "Poglejte izvedbo v praksi",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Je CNC celica prava rešitev za vaš proces?",
    body: "Skupaj pogledamo vaš CNC stroj, način nalaganja, kos, razpoložljiv prostor in dodatne operacije — potem ocenimo, katera konfiguracija celice ima največ smisla.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "CNC robotska celica v proizvodnji",
    captionEyebrow: "Prvi korak",
    captionText: "Kje pri CNC procesu izgubljate čas, ritem ali razpoložljivost stroja?",
  },
};
