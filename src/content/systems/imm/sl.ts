import type { SystemPageContent } from "../types";

/** Faithful structural port of `app/(default)/standardne-celice/imm/page.tsx`. */
export const immSystemContent: SystemPageContent = {
  routeKey: "standardCellsImm",
  backLabel: "← Standardne celice",
  layoutRefresh: true,
  meta: {
    title: "IMM stroji | Flexido",
    description:
      "Standardne robotske celice za posluževanje strojev za brizganje plastike — z industrijskimi 6-osnimi roboti, dodatnimi operacijami in modularnimi postajami.",
  },
  hero: {
    eyebrow: "Standardne robotske celice",
    heading: "IMM stroji",
    subhead:
      "Standardne robotske celice za posluževanje strojev za brizganje plastike — z industrijskimi 6-osnimi roboti, dodatnimi operacijami in modularnimi postajami.",
    media: { kind: "video", src: "/video/flexido/hero-standardne-celice-imm.mp4" },
  },
  intro: {
    eyebrow: "IMM avtomatizacija",
    heading: "Alternativa tradicionalnim linearnim manipulatorjem.",
    paragraphs: [
      "Standardne celice Flexido so pri robotskem posluževanju strojev za plastiko odlična alternativa tradicionalnim rešitvam avtomatizacije z linearnimi manipulatorji.",
      "V standardnih robotskih celicah so integrirani 6-osni roboti, ki poleg osnovne funkcije odvzemanja kosov iz orodja nudijo tudi dodatne operacije.",
      "Standardne robotske celice se uporabijo tudi v primerih, ko so stroji inštalirani v proizvodnih prostorih z nizko višino.",
    ],
    image: { src: "/images/systems/raw/flexido-imm-machine-studio.png", alt: "Stroj za brizganje plastike s Flexido robotsko celico" },
  },
  product: {
    eyebrow: "Standardna celica",
    systemSlug: "flex-7-imm",
    description:
      "FLEX 7 IMM Slim je kompaktna avtomatizacijska celica za stroje za brizganje plastike. Namenjena je odvzemu kosov, insert moulding procesu, pripravi insertov in kontroli kakovosti v majhnem tlorisu.",
    showTechnical: true,
    highlights: [
      "Majhen tloris",
      "Integriran transportni trak",
      "Možnost bowl feederja",
      "Možnost vision kontrole",
    ],
  },
  itemGrids: [
    {
      eyebrow: "Aplikacije",
      heading: "Dokumentirane aplikacije FLEX 7 IMM Slim.",
      items: [
        "odvzem in izrivanje kosov",
        "kontrola kakovosti",
        "enostavno vstavljanje insertov",
        "insert moulding",
      ],
    },
    {
      eyebrow: "Dodatne operacije",
      heading: "Več kot samo odvzem kosa iz orodja.",
      items: [
        "odstranjevanje dolivka",
        "preverjanje zalitosti kosov",
        "preverjanje prisotnosti srha ali prelitij",
        "zaznavanje površinskih napak",
        "montaža brizganega kosa v celici",
        "naknadna obdelava brizganega kosa",
      ],
    },
  ],
  optionGrids: [
    {
      eyebrow: "Priprava insertov",
      heading: "Dokumentirane opcije za pripravo in dovajanje insertov.",
      items: [
        {
          image: {
            src: "/raw/flex-7-imm-bowl-feeder-1.png",
            alt: "Bowl feeder za dovajanje insertov",
          },
          title: "Bowl feeder",
          description: "Dovajanje in orientacija insertov pred vstavljanjem.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-insert-preparation-table-1.png",
            alt: "Miza za pripravo insertov",
          },
          title: "Miza za pripravo insertov",
          description: "Delovna postaja za pripravo insertov pred ciklom.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-skara-robot-1.png",
            alt: "Integrirani SCARA robot za sortiranje insertov",
          },
          title: "Integrirani SCARA robot",
          description: "Sortiranje in priprava insertov v celici, kadar je konfiguriran.",
        },
        {
          image: {
            src: "/raw/flex-7-imm-vision-system-2.png",
            alt: "Vision sistem za kontrolo kakovosti",
          },
          title: "Vision sistem",
          description: "Kontrola kakovosti kot dokumentirana celična opcija.",
        },
      ],
    },
  ],
  detailPanel: {
    eyebrow: "Integracija v celici",
    heading: "6-osni robot izvaja osnovno posluževanje stroja in vstavljanje insertov v orodje.",
    paragraphs: [
      "Integrirani SCARA robot podpira sortiranje in pripravo insertov, kadar je v celici konfiguriran. Prijemi so prilagojeni za 6-osni in SCARA robot.",
      "Vmesniki, ki morajo biti predhodno nameščeni na strojih za brizganje plastike, so Euromap 67 in Euromap 63 oziroma Euromap 77.",
      "Standardne robotske celice se pogosto uporabljajo tudi pri vstavljanju insertov v orodje pri procesu nabrizgavanja.",
    ],
    panelEyebrow: "Modulne postaje",
    panelItems: ["vhodna vibrirna postaja", "drsni paletni sistem", "sistem vrtljive mize", "Pick & Place Vision sistem"],
  },
  benefits: {
    items: [
      { title: "Cenovna dostopnost", body: "Zaradi modularne zasnove so standardne robotske celice cenovno dostopnejše." },
      { title: "Višja kakovost", body: "Celica pomaga zvišati kakovost proizvodnje in razpoložljivost strojev ter proizvodnih sredstev." },
    ],
  },
  relatedSolutions: {
    eyebrow: "Povezana rešitev",
    heading: "Ko brizganje zahteva več kot odvzem kosa.",
    linkLabel: "Poglej rešitev",
    items: [
      {
        title: "Avtomatizacija brizganja plastike",
        body: "Kadar proces zahteva inserte, posebne prijeme, dodatne postaje ali povezavo z obstoječo opremo okoli stroja za brizganje.",
        routeKey: "solutionInjectionMolding",
      },
      {
        tag: "Referenca",
        title: "Robotska celica za nabrizgavanje",
        body: "Realiziran projekt robotske celice za nabrizgavanje kosov — konkreten primer te vrste IMM avtomatizacije v praksi.",
        routeKey: "referenceOvermolding",
        linkLabel: "Oglejte si soroden projekt",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Je IMM celica prava rešitev za vaš proces?",
    body: "Skupaj pogledamo vaš stroj za brizganje plastike, kos, prostor ob stroju, način odvzema in dodatne operacije — potem ocenimo, katera konfiguracija celice ima največ smisla.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/images/systems/raw/flexido-imm-machine-studio.png",
    imageAlt: "Stroj za brizganje plastike s Flexido robotsko celico",
    captionEyebrow: "Prvi korak",
    captionText: "Kje pri brizganju plastike izgubljate čas, stabilnost ali ponovljivost procesa?",
  },
};
