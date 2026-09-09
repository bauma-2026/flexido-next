import type { SystemPageContent } from "../types";

/**
 * Authored from `src/data/flexido-systems.ts`, e-katalog Middleware section,
 * and legacy e-catalogue-middlewear.pdf (documented platforms — not current commercial claims).
 */
export const middlewareSystemContent: SystemPageContent = {
  routeKey: "standardCellsMiddleware",
  meta: {
    title: "Middleware | Flexido",
    description:
      "Povezovalni sloj med proizvodno opremo, transportnimi enotami, postajami, shrambo in ERP oziroma proizvodnimi sistemi.",
  },
  backLabel: "← Standardne celice",
  hero: {
    eyebrow: "Standardne robotske celice",
    heading: "Middleware",
    subhead:
      "Povezovalni sloj med proizvodno opremo, transportnimi enotami, postajami, shrambo in ERP oziroma proizvodnimi sistemi.",
    media: { kind: "image", src: "/images/systems/raw/middleware-main.webp", alt: "Middleware povezovalni sloj" },
  },
  intro: {
    eyebrow: "Povezava opreme in sistemov",
    heading: "Povezava opreme, postaj in podatkov.",
    paragraphs: [
      "Middleware povezuje avtomatizacijsko opremo, mobilni transport, shrambo, buffer postaje in višje proizvodne oziroma ERP sisteme v en strukturiran komunikacijski sloj.",
      "Sloj ne nadomešča posameznih naprav — vzpostavi, kako postaje, transportne enote in višji sistemi izmenjajo transportna naročila, stanje postaj in kontekst materiala.",
    ],
    image: {
      src: "/images/systems/raw/custom-robotic-cell-studio-render.png",
      alt: "Povezane avtomatizacijske postaje in robotska celica v proizvodni liniji",
    },
  },
  product: {
    eyebrow: "Povezovalni sloj",
    systemSlug: "middleware",
    description:
      "Middleware integrira hardware postaje, transportne platforme, shrambo in mehanske buffer enote z API-jem transportnih naročil in povezavo na višje proizvodne sisteme.",
  },
  itemGrids: [
    {
      eyebrow: "Integracijski sloj",
      heading: "Kako Middleware poveže stroje, transport in ERP.",
      items: [
        "Hardware Station Service — standardni hardware vmesnik za postaje in transportne enote",
        "Transport order service API — JSON struktura ali datotečna izmenjava (npr. FTP)",
        "Backend storitev — dinamično usmerjanje naročil glede na tip transporta in tovora",
        "MWContext Broker — kontekstna povezava med proizvodno opremo in višjimi sistemi",
        "Povezava z ERP / proizvodnim sistemom — konfigurabilna izmenjava podatkov",
      ],
    },
    {
      eyebrow: "Transportne platforme",
      heading: "Dokumentirani razredi mobilnih transportnih enot.",
      items: [
        "OTTO 100 — v e-katalogu dokumentirana platforma manjše nosilnosti (~150 kg)",
        "OTTO 750 / 1500 — dokumentirana platforma večje nosilnosti (~2000 kg)",
        "OTTO Lifter — dokumentirana dvigalna enota za palete in višinske predaje",
        "Fast Charger — dokumentirana hitra polnilna postaja za AMR/SDV flote",
      ],
    },
    {
      eyebrow: "Shramba in robotski premik",
      heading: "Avtomatsko skladiščenje in transfer v tok.",
      items: [
        "WELAND automated storage — avtomatsko skladiščenje v dokumentiranem sistemu",
        "Vertical storage LIFT — višina 5–16 m, pladnji s fiksacijo transportnih enot",
        "ABB IRB 6700 — dokumentirana industrijska robotska platforma za premik med liftom, linear bufferjem in paletizacijo",
      ],
    },
    {
      eyebrow: "Buffer in predaje",
      heading: "Mehanske enote za vmesno hrambo in predajo.",
      items: [
        "Linear Buffer (vhod/izhod) — servo pogonski podest, Siemens PLC, senzorika končne lege",
        "Mechanical Buffer Chute — LR (številčno) / W (masno), dve integrirane komore",
        "Mechanical Drop-off — vertikalna os in rotacija, Siemens PLC, avtomatska predaja v linijo",
      ],
    },
  ],
  detailPanel: {
    paragraphs: [
      "Praktično vprašanje integracije je: kako postaja ve, kdaj naj mobilna enota pride, kaj prevzame in kako se to sporoči višjemu sistemu. Middleware združi hardware vmesnik postaj, transport order service in backend logiko, ki usmerja klice glede na tip transporta in tovora.",
      "ERP ali proizvodni sistem se ne poveže z enim fiksnim modulom — vzpostavi se vmesna plast za izmenjavo transportnih naročil in konteksta (MWContext Broker), prilagodljiva na obstoječo in novo opremo v istem obratu.",
    ],
    panelEyebrow: "Storitve v sloju",
    panelItems: [
      "Hardware Station Service",
      "Transport order service (JSON / file)",
      "Backend routing by transport & cargo type",
      "MWContext Broker",
      "ERP / production-system connection context",
    ],
  },
  gallery: {
    eyebrow: "Povezana oprema",
    heading: "Stroji, postaje in transportne enote.",
    alts: [
      "Industrijska robotska postaja ABB IRB 6700 (dokumentirana izvedba)",
      "Mechanical Buffer Chute",
      "Mechanical Drop-off unit",
      "Mobilna transportna platforma SDV/AMR (dokumentirane linije OTTO)",
    ],
  },
  relatedSolutions: {
    eyebrow: "Povezana rešitev",
    heading: "Kje Middleware vstopi v tok materiala.",
    linkLabel: "Poglej rešitev",
    items: [
      {
        title: "Interna logistika",
        body: "Kako transportne platforme, sprejemne postaje in shramba delujejo v širšem toku materiala med fazami.",
        routeKey: "solutionLogistics",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Potrebujete povezavo opreme in sistemov?",
    body: "Skupaj pogledamo obstoječo in novo opremo, transportne enote ter ERP oziroma proizvodni sistem — potem ocenimo, kako naj bo povezava zasnovana.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/s-3.jpg.jpeg",
    imageAlt: "Povezana proizvodna oprema in transportne enote",
    captionEyebrow: "Prvi korak",
    captionText: "Katero opremo in sisteme je treba povezati?",
  },
};
