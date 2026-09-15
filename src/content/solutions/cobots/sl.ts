import type { SolutionPageContent } from "../types";

/** Faithful structural port of `app/(default)/resitve/kolaborativni-roboti/page.tsx`. */
export const cobotsContent: SolutionPageContent = {
  routeKey: "solutionCobots",
  hero: {
    backLabel: "← Vse rešitve",
    eyebrow: "Kolaborativni roboti",
    titleLines: ["Kolaborativni robot za jasno določene operacije."],
    subhead:
      "Kolaborativni robot je lahko primerna rešitev za prijemanje, vstavljanje, kontrolo ali montažo v obstoječem proizvodnem procesu.",
    ctas: [{ label: "Kdaj je cobot primeren?", anchor: "#primernost" }],
    videoSrc: "/video/flexido/hero-cobot.mp4",
  },
  wikiNav: [
    { id: "primernost", label: "Kdaj je primeren" },
    { id: "aplikacije", label: "Aplikacije" },
    { id: "integracija", label: "Integracija" },
    { id: "tmx", label: "TMX" },
    { id: "projekt", label: "Projekt" },
  ],
  sections: [
    {
      type: "problemSplit",
      id: "primernost",
      eyebrow: "Kolaborativna avtomatizacija",
      heading: "Kdaj je cobot primeren del procesa.",
      body: [
        "Ne začnemo pri robotu, ampak pri operaciji.",
        "Preverimo, ali je naloga ponovljiva, kako se navezuje na obstoječe delovno mesto in katere omejitve postavljajo kos, prostor ter oprema.",
      ],
      itemsEyebrow: "Kdaj je primeren",
      items: [
        "Ponovljiva operacija",
        "Obstoječe delovno mesto",
        "Spreminjajoče se zahteve",
        "Oprema okoli operacije",
      ],
      result: "cobot je smiseln, ko se ujema z operacijo, delovnim mestom in omejitvami procesa.",
      resultLabel: "Rezultat",
    },
    {
      type: "capabilityGroups",
      id: "aplikacije",
      eyebrow: "Aplikacije",
      heading: "Operacije, kjer lahko cobot prevzame jasno vlogo.",
      body: "Kolaborativna avtomatizacija je primerna tam, kjer je treba določeno operacijo povezati s kosom, delovnim mestom in ritmom procesa.",
      groups: [
        { title: "Pick & Place", body: "Pobiranje in odlaganje kosov v določenem zaporedju." },
        { title: "Pakiranje", body: "Zlaganje kosov, priprava za pakiranje ali odlaganje v škatle." },
        { title: "Kontrola in testiranje", body: "Podpora pri pregledovanju, sortiranju ali ponavljajoči kontroli." },
        { title: "Montaža in vijačenje", body: "Ponavljajoči montažni koraki in rokovanje s sestavnimi deli." },
        { title: "Strega pritisnih strojev", body: "Ponavljajoča strega in podpora ob pritisnih strojih." },
      ],
      trailingNote: {
        template:
          "Pri stregi strojev in širšem toku materiala so ključne zahteve posameznega procesa. Poglejte {0}, {1} in {2}.",
        links: [
          { label: "CNC avtomatizacijo", routeKey: "solutionCnc" },
          { label: "brizganje plastike", routeKey: "solutionInjectionMolding" },
          { label: "interno logistiko", routeKey: "solutionLogistics" },
        ],
      },
    },
    {
      type: "capabilityGroups",
      id: "integracija",
      eyebrow: "Integracija v proces",
      heading: "Cobot je del delovnega mesta in zaporedja dela.",
      body: "Cobot dobi pomen šele, ko je usklajen z dejansko nalogo, delovnim mestom in opremo okoli njega.",
      layout: "numberedRows",
      groups: [
        { number: "01", title: "Določitev naloge", body: "Opredelimo kos, prijem, zaporedje korakov in zahteve operacije." },
        { number: "02", title: "Vključitev v delovno mesto", body: "Določimo položaj robota, povezave z opremo in komunikacijo z okoliškimi postajami." },
        { number: "03", title: "Preveritev izvedbe", body: "Po potrebi vključimo vision, uskladimo zaporedje procesa in pripravimo varnostno zasnovo." },
        { number: "04", title: "Teach-in", body: "Pozicije in naloge lahko v določenih izvedbah učimo z vodenjem robota in zapisom referenčnih točk." },
      ],
    },
    {
      type: "crossSell",
      id: "tmx",
      eyebrow: "Kolaborativna platforma",
      heading: "TMX za mobilne kolaborativne aplikacije.",
      body: "TMX je mobilna kolaborativna robotska platforma za naloge, kjer je pomembna uporaba na različnih mestih v proizvodnji.",
      right: {
        kind: "image",
        src: "/images/systems/raw/tmx-studio.png",
        alt: "TMX kolaborativna robotska platforma",
        reversed: true,
        size: "feature",
        link: { label: "Poglej TMX", routeKey: "standardCellsTmx" },
      },
    },
    {
      type: "proofProject",
      id: "projekt",
      eyebrow: "Razvojni projekt",
      heading: "SAFEGUARD — pametna zaščitna komora.",
      tag: "Kolaborativna robotika v razvoju",
      title: "Varno sodelovanje človeka in kolaborativnega robota.",
      body: "SAFEGUARD je razvojni projekt pametne zaščitne komore za kolaborativne robote. Deluje kot pametno prijemalo, ki omogoča varno sočasno delo človeka in robota ter neprekinjeno nadzoruje proces.",
      image: { src: "/images/flexido/raw/tmx/14.jpg", alt: "Kolaborativni robot v proizvodnem procesu" },
      routeKey: "fundingProjectSafeguard",
      readMoreLabel: "Poglejte projekt SAFEGUARD",
    },
  ],
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Katero operacijo lahko prevzame cobot?",
    body: "Pošljite nam osnovne informacije o nalogi, delovnem mestu, kosu, prijemu, opremi okoli postaje in razpoložljivem prostoru. Skupaj ocenimo, ali je kolaborativna avtomatizacija primerna za vaš proces.",
    ctaLabel: "Pošljite povpraševanje",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/raw/tmx/14.jpg",
    imageAlt: "Kolaborativni robot v proizvodnem procesu",
    captionEyebrow: "Prvi korak",
    captionText: "Katera operacija, postaja in oprema določajo vašo rešitev?",
    variant: "photo",
  },
};
