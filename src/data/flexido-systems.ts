export type FlexidoSystem = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  applications: string[];
  highlights: string[];
  technical?: {
    dimensions?: string;
    robot?: string;
    payload?: string;
    reach?: string;
    interface?: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
};

export const flexidoSystems: FlexidoSystem[] = [
  {
    slug: "flex-7-imm",
    name: "FLEX 7 IMM Slim",
    category: "Avtomatizacija brizganja plastike",
    shortDescription:
      "Kompaktna robotska celica za strego strojev za brizganje plastike, odvzem kosov, insert moulding in kontrolo.",
    description:
      "FLEX 7 IMM Slim je kompaktna avtomatizacijska celica za stroje za brizganje plastike. Namenjena je odvzemu kosov, insert moulding procesu, pripravi insertov in kontroli kakovosti v majhnem tlorisu.",
    image: "/images/systems/raw/flex-7-imm-slim-studio.png",
    applications: [
      "Odvzem in izrivanje kosov",
      "Kontrola kakovosti",
      "Enostavno vstavljanje insertov",
      "Insert moulding",
    ],
    highlights: [
      "Majhen tloris",
      "Integriran transportni trak",
      "Možnost bowl feederja",
      "Možnost vision kontrole",
    ],
    technical: {
      dimensions: "1660 × 720 mm",
      robot: "MZ 7L / 10FL",
      payload: "7 kg / 10 kg",
      reach: "911 mm / 1202 mm",
      interface: "E67, E78 / E73",
    },
    gallery: [
      {
        src: "/images/flexido/products/flex-7-imm/flex-7-imm-bowl-feeder.png",
        alt: "Bowl feeder za dovajanje insertov",
      },
      {
        src: "/images/flexido/products/flex-7-imm/flex-7-imm-skara-robot.jpg",
        alt: "Integriran Skara robot za sortiranje insertov",
      },
      {
        src: "/images/flexido/products/flex-7-imm/flex-7-imm-insert-preparation-table.jpg",
        alt: "Miza za pripravo insertov",
      },
      {
        src: "/images/flexido/products/flex-7-imm/flex-7-imm-vision-system.jpg",
        alt: "Vision sistem za kontrolo kakovosti",
      },
    ],
  },

  {
    slug: "flex-7-cnc",
    name: "FLEX 7 CNC Slim",
    category: "CNC avtomatizacija",
    shortDescription:
      "Kompaktna robotska celica za strego CNC strojev, nalaganje, odvzem in stabilen tok kosov.",
    description:
      "FLEX 7 CNC Slim je kompaktna avtomatizacijska celica za posluževanje CNC strojev, z možnostmi za zalogovnike, čiščenje, graviranje in vibro sortiranje.",
    image: "/images/systems/raw/flex-7-cnc-slim-studio.png",
    applications: [
      "Strega CNC strojev",
      "Kontrola kakovosti",
      "Nalaganje, odvzem in dodatne operacije",
    ],
    highlights: [
      "Kompaktna CNC robotska celica",
      "Integriran transportni trak",
      "Možnost zalogovnika",
      "Možnost čiščenja in graviranja",
    ],
    technical: {
      dimensions: "1660 × 720 mm",
      robot: "MZ 7L / 10FL",
      payload: "7 kg / 10 kg",
      reach: "911 mm / 1202 mm",
    },
    gallery: [
      {
        src: "/images/flexido/products/flex-7-cnc/flex-7-cnc-robot-cell.jpg",
        alt: "Detajl robotske celice",
      },
      {
        src: "/images/flexido/products/flex-7-cnc/flex-7-cnc-stacker.png",
        alt: "Zalogovnik",
      },
      {
        src: "/images/flexido/products/flex-7-cnc/flex-7-cnc-cleaning-station.jpg",
        alt: "Čistilna postaja",
      },
      {
        src: "/images/flexido/products/flex-7-cnc/flex-7-cnc-engraving.jpg",
        alt: "Graviranje",
      },
      {
        src: "/images/flexido/products/flex-7-cnc/flex-7-cnc-vibro-sorting-station.jpg",
        alt: "Vibro sortirna postaja",
      },
    ],
  },

  {
    slug: "flex-25-50",
    name: "FLEX 25 / 50",
    category: "Visoko fleksibilna robotska celica",
    shortDescription:
      "Fleksibilna robotska celica za srednje in zahtevnejše aplikacije z večjo nosilnostjo in možnostjo dodatnih modulov.",
    description:
      "FLEX 25 / 50 je zmogljivejša avtomatizacijska platforma za insert placing, insert moulding, kontrolo kakovosti in procesne aplikacije, kjer so potrebni večji roboti, večja nosilnost ali širši nabor opcij.",
    image: "/images/systems/raw/flex-25-50-studio.webp",
    applications: [
      "Vstavljanje insertov in insert moulding",
      "Aplikacije pred IM procesom",
      "Aplikacije po IM procesu",
      "Kontrola kakovosti",
    ],
    highlights: [
      "Srednje in zahtevnejše aplikacije",
      "Fleksibilne možnosti prijemal",
      "Infeed in outfeed sistemi",
      "Vision in senzorske opcije",
    ],
    technical: {
      dimensions: "2500 × 2360 mm + varnostna ograja",
      robot: "MZ25 / MZ50F",
      payload: "25 kg / 50 kg",
      reach: "1882 mm / 2102 mm",
    },
    gallery: [
      {
        src: "/images/flexido/products/flex-25-50/flex-25-50-gripper-insert-placing.png",
        alt: "Prijemalo za vstavljanje insertov",
      },
      {
        src: "/images/flexido/products/flex-25-50/flex-25-50-simple-gripper.jpg",
        alt: "Enostavno prijemalo",
      },
      {
        src: "/images/flexido/products/flex-25-50/flex-25-50-complex-gripper.jpg",
        alt: "Kompleksno prijemalo",
      },
      {
        src: "/images/flexido/products/flex-25-50/flex-25-50-gear.png",
        alt: "Zobnik",
      },
      {
        src: "/images/flexido/products/flex-25-50/flex-25-50-infeed-trays.png",
        alt: "Infeed pladnji",
      },
      {
        src: "/images/flexido/products/flex-25-50/flex-25-50-vibro-plate-vision.png",
        alt: "Vibro plošča z 2D vision sistemom",
      },
    ],
  },

  {
    slug: "tmx",
    name: "TMX",
    category: "Kolaborativna robotska platforma",
    shortDescription:
      "Mobilna kolaborativna robotska platforma za pick and place, enostavno montažo, kontrolo kakovosti in pomoč operaterju.",
    description:
      "TMX je kolaborativni robot na mobilni platformi, namenjen enostavnim nalogam, kjer so pomembni fleksibilnost, hitra prestavitev in uporaba na različnih mestih v proizvodnji.",
    image: "/images/systems/raw/tmx-studio.png",
    applications: [
      "Pick and place aplikacije",
      "Kontrola kakovosti",
      "Enostavne montažne aplikacije",
    ],
    highlights: [
      "Kolaborativni robot na mobilni platformi",
      "Univerzalno pnevmatsko prijemalo",
      "Integriran 2D vision sistem",
      "Možnost 3D safety scannerja",
    ],
    technical: {
      dimensions: "600 × 900 mm",
      robot: "TM 5 / TM 12",
      payload: "4 kg / 12 kg",
      reach: "900 mm / 1200 mm",
    },
    gallery: [
      {
        src: "/raw/tmx-packaging-box-holder-1.png",
        alt: "Nosilec za embalažne zaboje",
      },
      {
        src: "/raw/tmx-electro-pneumatic-interface-1.png",
        alt: "Elektro in pnevmatski vmesniki",
      },
      {
        src: "/raw/tmx-safety-scanner-1.png",
        alt: "3D safety scanner",
      },
    ],
  },

  {
    slug: "middleware",
    name: "Middleware",
    category: "Povezava opreme in sistemov",
    shortDescription:
      "Povezovalni sloj med proizvodno opremo, transportnimi enotami, postajami in ERP oziroma proizvodnimi sistemi.",
    description:
      "Middleware povezuje avtomatizacijsko opremo, materialni tok, transportne enote in ERP sisteme v strukturiran komunikacijski sloj proizvodnje.",
    image: "/images/systems/raw/middleware-system-studio.png",
    applications: [
      "Povezava strojev in postaj",
      "ERP integracija",
      "Upravljanje transportnih naročil",
      "Hardware station service",
    ],
    highlights: [
      "Povezava z ERP sistemom",
      "Standardni hardware vmesnik",
      "Transport order service API",
      "Povezava nove in obstoječe opreme",
    ],
    gallery: [
      {
        src: "/images/flexido/products/middleware/middleware-industrial-robot.png",
        alt: "Industrijska robotska postaja ABB IRB 6700",
      },
      {
        src: "/images/flexido/products/middleware/middleware-mechanical-buffer-chute.png",
        alt: "Mechanical Buffer Chute",
      },
      {
        src: "/images/flexido/products/middleware/middleware-mechanical-drop-off-unit.png",
        alt: "Mechanical Drop-off unit",
      },
      {
        src: "/images/flexido/products/middleware/middleware-transport-unit-sdv.png",
        alt: "Mobilna transportna platforma SDV/AMR (OTTO)",
      },
    ],
  },
];

export const featuredFlexidoSystems = flexidoSystems.slice(0, 5);
