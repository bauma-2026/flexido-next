import type { ServicePageContent } from "./types";

export const serviceContent: ServicePageContent = {
  routeKey: "service",
  meta: {
    title: "Servis in podpora | Flexido",
    description:
      "Za sisteme, ki jih dobavi Flexido, po zagonu nudimo podporo pri prijavljeni težavi, pregledu zahtevka in dogovorjenem servisnem ukrepu.",
  },
  wikiNav: [
    { href: "#pokritost", label: "Kaj servis pokriva" },
    { href: "#prijava", label: "Prijava težave" },
    { href: "#potek", label: "Kaj se zgodi potem" },
    { href: "#oprema", label: "Podprta oprema" },
    { href: "#cenik", label: "Cenik" },
  ],
  hero: {
    eyebrow: "Servis in podpora",
    heading: "Servis in podpora po zagonu.",
    subhead:
      "Za sisteme, ki jih dobavi Flexido, po zagonu nudimo podporo pri prijavljeni težavi, pregledu zahtevka in dogovorjenem servisnem ukrepu.",
    primaryCta: { label: "Prijavite servis →", href: "#kontakt" },
    secondaryCtaLabel: "Cenik servisa →",
    image: {
      src: "/images/systems/raw/flexido-cnc-machine-studio.png",
      alt: "Flexido CNC robotska celica",
    },
    imageCaptionEyebrow: "Servisni zahtevek",
    imageCaption: "Jasne informacije o opremi in težavi pomagajo določiti naslednji korak.",
  },
  coverage: {
    id: "pokritost",
    eyebrow: "Kaj servis pokriva",
    heading: "Podpora za sistem po predaji v proizvodnjo.",
    paragraphs: [
      "Servis se nanaša na sisteme, ki jih dobavi Flexido, po zagonu. Pri prijavljeni težavi preverimo podane informacije in uskladimo ustrezen servisni korak.",
      "Namen te strani je urediti servisno zahtevo — ne izbirati nove rešitve za proizvodni proces.",
    ],
  },
  request: {
    id: "prijava",
    eyebrow: "Prijava težave",
    heading: "Pošljite kontekst, ki ga potrebujemo za pregled zahtevka.",
    body: "Več kot je osnovnih podatkov o opremi in poteku težave, lažje je določiti ustrezen naslednji korak.",
    details: [
      "sistem ali stroj, na katerem se je pojavila težava",
      "identifikacijo celice ali opreme, če je na voljo",
      "opis napake ali simptoma",
      "kdaj se je težava pojavila",
      "trenutno stanje oziroma vpliv na proizvodnjo",
      "kontaktne podatke osebe, ki lahko poda dodatne informacije",
    ],
    ctaLabel: "Pošljite servisni zahtevek",
  },
  flow: {
    id: "potek",
    eyebrow: "Kaj se zgodi potem",
    heading: "Od prijave do naslednjega servisnega koraka.",
    items: [
      {
        step: "01",
        title: "Prijava težave",
        desc: "Pošljete informacije o opremi, težavi in trenutnem stanju proizvodnje.",
      },
      {
        step: "02",
        title: "Pregled zahtevka",
        desc: "Pregledamo prijavo in kontekst opreme ter določimo ustrezen naslednji korak.",
      },
      {
        step: "03",
        title: "Servisni ukrep",
        desc: "Sledi dogovorjena podpora, priprava ali poseg, kadar je to potrebno.",
      },
    ],
  },
  equipment: {
    id: "oprema",
    eyebrow: "Podprta oprema",
    heading: "Zahtevek se lahko nanaša na dobavljeni sistem in njegove povezane dele.",
    body: "Obseg podpore je vezan na sistem, ki ga dobavi Flexido, in dogovorjeni obseg opreme.",
    groups: [
      {
        number: "01",
        title: "Robotske celice in sistemi",
        items: ["robotske celice", "namenski sistemi"],
      },
      {
        number: "02",
        title: "Povezana oprema in krmiljenje",
        items: [
          "povezani moduli in periferna oprema",
          "transportni elementi v sklopu dobavljenega sistema",
          "krmiljenje in vmesniki v dogovorjenem obsegu sistema",
        ],
      },
    ],
  },
  pricing: {
    id: "cenik",
    eyebrow: "Cenik in pogoji",
    heading: "Cene in pogoji servisnih storitev.",
    body: "Urne postavke, dodatki, stroški poti in pogoji servisnih storitev so objavljeni v ločenem ceniku.",
    ctaLabel: "Poglej cenik servisa →",
  },
  cta: {
    id: "kontakt",
    eyebrow: "Servisni zahtevek",
    heading: "Prijavite servis.",
    body: "Pošljite podatke o sistemu ali opremi, opišite težavo in kdaj se je pojavila ter dodajte trenutno stanje proizvodnje.",
    label: "Pošljite povpraševanje →",
    mailto: "info@flexido.eu",
    image: {
      src: "/images/systems/raw/flexido-imm-machine-studio.png",
      alt: "Flexido robotska celica za brizganje plastike",
    },
    captionEyebrow: "Začetek prijave",
    caption: "Kaj se je zgodilo, na kateri opremi in kakšno je trenutno stanje?",
  },
};
