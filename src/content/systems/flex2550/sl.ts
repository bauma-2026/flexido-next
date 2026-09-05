import type { SystemPageContent } from "../types";

/**
 * Authored from `src/data/flexido-systems.ts`, legacy FLEX 25/50 e-catalog options,
 * and curated product imagery in `public/images/flexido/products/flex-25-50/`.
 */
export const flex2550SystemContent: SystemPageContent = {
  routeKey: "standardCellsFlex2550",
  meta: {
    title: "FLEX 25 / 50 | Flexido",
    description: "Visoko fleksibilna robotska celica za zahtevnejše aplikacije, večjo nosilnost in širši nabor opcij.",
  },
  backLabel: "← Standardne celice",
  layoutRefresh: true,
  hero: {
    eyebrow: "Standardne robotske celice",
    heading: "FLEX 25 / 50",
    subhead: "Visoko fleksibilna robotska celica za zahtevnejše aplikacije, večjo nosilnost in širši nabor opcij.",
    media: { kind: "image", src: "/images/systems/raw/flex-25-50-studio-wide.webp", alt: "FLEX 25 / 50 robotska celica" },
  },
  intro: {
    eyebrow: "Visoko fleksibilna celica",
    heading: "Platforma za zahtevnejše aplikacije.",
    paragraphs: [
      "FLEX 25 / 50 je zmogljivejša avtomatizacijska platforma za insert placing, insert moulding, kontrolo kakovosti in procesne aplikacije, kjer so potrebni večji roboti, večja nosilnost ali širši nabor opcij.",
      "Pri nekaterih izvedbah je FLEX 25 / 50 konfigurabilno izhodišče — predvsem takrat, ko standardna celica FLEX 7 ne pokrije zahtevane nosilnosti, dosega ali nabora opcij.",
    ],
    image: { src: "/raw/flex-25-50-isometric-robotic-manufacturing-cell.png", alt: "Celoten avtomatizacijski sistem FLEX 25 / 50 z varnostno ograjo" },
  },
  product: {
    eyebrow: "Standardna celica",
    systemSlug: "flex-25-50",
    description:
      "FLEX 25 / 50 je zmogljivejša avtomatizacijska platforma za insert placing, insert moulding, kontrolo kakovosti in procesne aplikacije, kjer so potrebni večji roboti, večja nosilnost ali širši nabor opcij.",
    showTechnical: true,
    highlights: [
      "Srednje in zahtevnejše aplikacije",
      "Fleksibilne možnosti prijemal",
      "Infeed in outfeed sistemi",
      "Vision in senzorske opcije",
    ],
  },
  itemGrids: [
    {
      eyebrow: "Aplikacije",
      heading: "Kje se FLEX 25 / 50 uporablja.",
      items: [
        "Vstavljanje insertov in insert moulding",
        "Laser cleaning insertov pred brizgalnim procesom",
        "Laser graviranje po brizgalnem procesu",
        "Kontrola kakovosti in procesna kontrola",
      ],
    },
  ],
  applicationSignals: {
    eyebrow: "Signali aplikacij",
    heading: "Aplikacije srednje in visoke zmogljivosti z minimalnim tlorisom.",
    items: [
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-stator.jpg", alt: "Stator" },
        label: "Stator",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-stator-segment.jpg", alt: "Stator segment" },
        label: "Stator segment",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-rotor.png", alt: "Rotor" },
        label: "Rotor",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-connector.png", alt: "Connector" },
        label: "Connector",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-venting-flap.png", alt: "Venting flap" },
        label: "Venting flap",
      },
      {
        image: { src: "/images/flexido/products/flex-25-50/flex-25-50-gear.png", alt: "Gear" },
        label: "Gear",
      },
    ],
  },
  optionGrids: [
    {
      eyebrow: "Prijemala",
      heading: "Dokumentirane konfiguracije prijemal.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-simple-gripper.jpg",
            alt: "Enostavno prijemalo na FLEX 25 / 50",
          },
          title: "Enostavno prijemalo",
          description: "Za osnovno rokovanje s kosom v ponavljajočem procesu.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-gripper-insert-placing.png",
            alt: "Prijemalo za vstavljanje insertov",
          },
          title: "Prijemalo za vstavljanje insertov",
          description: "Za natančno vstavljanje insertov v orodje ali priprave.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-complex-insert-moulding-gripper.png",
            alt: "Kompleksno prijemalo za insert moulding",
          },
          title: "Kompleksno prijemalo za insert moulding",
          description: "Več točk prijema in kombinirane funkcije za zahtevne insert aplikacije.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-complex-gripper.jpg",
            alt: "Kompleksno prijemalo za insert moulding (dokumentirana izvedba 2)",
          },
          title: "Kompleksno prijemalo za insert moulding (dokumentirana izvedba 2)",
          description: "Druga dokumentirana konstrukcija iz e-kataloga.",
        },
      ],
    },
    {
      eyebrow: "Dovod / odvod",
      heading: "Dokumentirane infeed in outfeed konfiguracije.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-vibratory-bowl-feeder.png",
            alt: "Celica s vibro posodo in transporterom",
          },
          title: "Vibro posoda + transporter",
          description: "Dovod kosov ali insertov z vibro posode na transporter v celico.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-conveyor-camera.png",
            alt: "Transporter s 2D kamerom",
          },
          title: "Transporter + 2D kamera",
          description: "Vodeni dovod ali odvod s 2D vision za orientacijo ali kontrolu.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-cell-vibrating-feeder-plate.png",
            alt: "Vibro plošča in transporter",
          },
          title: "Vibro plošča + transporter",
          description: "INFEED: vibro plošča — OUTFEED: transporter v dokumentiranem sistemu.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-trays.png",
            alt: "2x dovod + 2x odvod pladnjev",
          },
          title: "2× infeed + 2× outfeed trays",
          description: "Dve dovodne in dve odvodne tray postaje — ločeno od tray stacker sistema.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-conveyor-paper-trays.jpg",
            alt: "Dovod s papirnatimi pladnji",
          },
          title: "Dovod s papirnatimi pladnji",
          description: "Transporter za papirnate pladnje z inserti ali kosmi.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-belt-inserts.jpg",
            alt: "Trak za dovod insertov",
          },
          title: "Trak za dovod insertov",
          description: "Belt dovod za inserte v pripravo ali prijemalo.",
        },
      ],
    },
    {
      eyebrow: "Priprava in podpora",
      heading: "Priprava insertov, pladnji in nadzor procesa.",
      items: [
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-tray-stacker.png",
            alt: "Sistem za obročanje pladnjev",
          },
          title: "Sistemi za obročanje pladnjev",
          description: "Vertikalna, velika kapaciteta in 3+3 konfiguracija v dokumentiranem sistemu.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-preheating-hot-air.jpg",
            alt: "Predgretje insertov s toplim zrakom",
          },
          title: "Predgretje — topel zrak",
          description: "Priprava insertov pred vstavljanjem ali brizganjem.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-preheating-induction-1.png",
            alt: "Indukcijska tuljava za predgretje insertov",
          },
          title: "Predgretje — indukcija",
          description: "Lokalno indukcijsko predgretje za termično občutljive inserte.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-insert-preparation-table.jpg",
            alt: "Miza za pripravo insertov",
          },
          title: "Miza za pripravo insertov",
          description: "Delovna postaja za ročno ali polavtomatsko pripravo pred procesom.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-bowl-feeder-inserts.jpg",
            alt: "Bowl feeder za inserte",
          },
          title: "Bowl feeder / sortiranje insertov",
          description: "Dovod in orientacija insertov pred vstavljanjem.",
        },
        {
          image: {
            src: "/raw/flex-25-50-modular-conveyor.png",
            alt: "Vision sistem za kontrolo kakovosti",
          },
          title: "Vision sistem za kontrolo kakovosti",
          description: "Dokumentirana vision postaja za kontrolo kakovosti.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-vibro-plate-vision.png",
            alt: "Vibro plošča z 2D vision sistemom",
          },
          title: "Vibro plošča z 2D vision sistemom",
          description: "Dokumentirana opcija iz e-kataloga.",
        },
        {
          image: {
            src: "/images/flexido/products/flex-25-50/flex-25-50-visualisation-sensor-status.jpg",
            alt: "Vizualizacija stanja senzorov",
          },
          title: "Vizualizacija stanja senzorov",
          description: "Oddaljeni prikaz stanja senzorov — povezljiv z nadrejenim proizvodnim sistemom.",
        },
      ],
    },
  ],
  relatedSolutions: {
    eyebrow: "Povezane rešitve",
    heading: "Kje FLEX 25 / 50 vstopi v širši proces.",
    linkLabel: "Poglej rešitev",
    items: [
      {
        title: "Namenski sistemi",
        body: "Pri nekaterih izvedbah je FLEX 25 / 50 konfigurabilno izhodišče, ko standardna celica FLEX 7 ne pokrije zahtevane nosilnosti, dosega ali nabora opcij.",
        routeKey: "solutionCustomSystems",
      },
      {
        title: "Avtomatizacija brizganja plastike",
        body: "Aplikacije vključujejo vstavljanje insertov, insert moulding ter korake pred in po IM procesu.",
        routeKey: "solutionInjectionMolding",
      },
    ],
  },
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Je FLEX 25 / 50 prava platforma za vaš proces?",
    body: "Skupaj pogledamo vaš proces, zahtevano nosilnost, kose in dodatne operacije — potem ocenimo, ali FLEX 25 / 50 pokrije zahtevano aplikacijo.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/raw/flex-25-50-cell-rear-studio.png",
    imageAlt: "FLEX 25 / 50 v proizvodnji",
    captionEyebrow: "Prvi korak",
    captionText: "Katera aplikacija zahteva večjo nosilnost ali doseg?",
  },
};
