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
    eyebrow: "Povezovalni sloj",
    heading: "Middleware",
    subhead:
      "Povezovalni sloj med proizvodno opremo, transportnimi enotami, postajami, shrambo in ERP oziroma proizvodnimi sistemi.",
    media: { kind: "image", src: "/raw/middleware-industrial-robot-1-1.png", alt: "Middleware povezovalni sloj" },
  },
  intro: {
    eyebrow: "Povezava opreme in sistemov",
    heading: "Med postajami, transportom in proizvodnimi sistemi.",
    paragraphs: [
      "Middleware povezuje avtomatizacijsko opremo, mobilni transport, skladiščne in buffer enote z ERP oziroma proizvodnim sistemom.",
      "Prek njega se izmenjujejo transportna naročila, stanje postaj in kontekst materiala.",
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
      role: "technical-definitions",
      eyebrow: "Integracijski sloj",
      heading: "Kako Middleware poveže stroje, transport in ERP.",
      items: [
        "Hardware Station Service — Vmesnik med postajami, transportnimi enotami in Middlewareom.",
        "Transport order service API — Vmesnik za izmenjavo transportnih naročil v JSON strukturi ali prek datotek (npr. FTP).",
        "Backend storitev — dinamično usmerjanje naročil glede na tip transporta in tovora",
        "MWContext Broker — Povezuje kontekst materiala med proizvodno opremo in višjimi sistemi.",
        "Povezava z ERP / proizvodnim sistemom — Izmenjava transportnih naročil in konteksta z ERP oziroma proizvodnim sistemom.",
      ],
    },
    {
      role: "module-class",
      media: { kind: "image", src: "/raw/middleware-transport-unit-sdv-1.png", alt: "Mobilna transportna platforma SDV/AMR (dokumentirane linije OTTO)" },
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
      role: "module-class",
      media: { kind: "video", src: "/video/flexido/hero-logistika.mp4", alt: "Avtomatsko skladiščenje in transfer v tok." },
      eyebrow: "Shramba in robotski premik",
      heading: "Avtomatsko skladiščenje in transfer v tok.",
      items: [
        "WELAND automated storage — avtomatsko skladiščenje v dokumentiranem sistemu",
        "Vertical storage LIFT — višina 5–16 m, pladnji s fiksacijo transportnih enot",
        "ABB IRB 6700 — dokumentirana industrijska robotska platforma za premik med liftom, linear bufferjem in paletizacijo",
      ],
    },
    {
      role: "module-class",
      eyebrow: "Buffer in predaje",
      heading: "Mehanske enote za vmesno hrambo in predajo.",
      lead: "Linear Buffer (vhod/izhod) — servo pogonski podest, Siemens PLC, senzorika končne lege",
      tiles: [
        { src: "/raw/middleware-mechanical-buffer-chute-1.png", alt: "Mechanical Buffer Chute", caption: "Mechanical Buffer Chute — LR (številčno) / W (masno), dve integrirane komore" },
        { src: "/raw/middleware-mechanical-drop-off-unit-1.png", alt: "Mechanical Drop-off unit", caption: "Mechanical Drop-off — vertikalna os in rotacija, Siemens PLC, avtomatska predaja v linijo" },
      ],
      items: [],
    },
  ],
  optionGroupsHeading: { eyebrow: "Povezana oprema", heading: "Stroji, postaje in transportne enote." },
  detailPanel: {
    placement: "related",
    paragraphs: [
      "Ko je treba uskladiti postajo, mobilno enoto in višji sistem, je ključno, da se ve, kdaj enota pride, kaj prevzame in kako se to sporoči naprej.",
      "Middleware omogoča izmenjavo transportnih naročil in konteksta med obstoječo ali novo opremo ter ERP oziroma proizvodnim sistemom.",
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
