/**
 * Joomla → Next permanent redirects. Destinations are live registry paths.
 * One hop only — never chain through another legacy alias.
 */
export const legacyRedirects: { source: string; destination: string }[] = [
  { source: "/cnc-stroji", destination: "/standardne-celice/cnc" },
  { source: "/imm-stroji", destination: "/standardne-celice/imm" },
  { source: "/sl-kontakt", destination: "/kontakt" },
  { source: "/en/e-catalogue", destination: "/en/standard-cells" },
  { source: "/en/imm-machine", destination: "/en/standard-cells/imm-machine" },
  { source: "/en/cnc-machine", destination: "/en/standard-cells/cnc-machine" },
  { source: "/en/standard-robot-cells", destination: "/en/standard-cells" },
  { source: "/de/e-katalog-de", destination: "/de/standardzellen" },
  { source: "/e-katalog-hr", destination: "/standardne-celice" },
  { source: "/e-katalog", destination: "/standardne-celice" },
  { source: "/stroji-za-kovino", destination: "/resitve/avtomatizacija-cnc-strojev" },
  { source: "/stroji-za-plastiko", destination: "/resitve/brizganje-plastike" },
  {
    source: "/avtomatizacija-paleteziranja-interna-logistika",
    destination: "/resitve/logistika",
  },
  {
    source: "/resitve-s-kolaborativnimi-roboti",
    destination: "/resitve/kolaborativni-roboti",
  },
  {
    source: "/digitalna-preobrazba-kljucnih-funkcij-podjetja-polycom",
    destination: "/razvojni-projekti/digitalna-preobrazba-kljucnih-funkcij-podjetja-polycom",
  },
  {
    source: "/digitalna-transformacija-podjetja-flexido-d-o-o",
    destination: "/razvojni-projekti/digitalna-transformacija-podjetja-flexido-d-o-o",
  },
  {
    source: "/naziv-projekta-smartim-pametna-tovarna-iskra-mehanizmi",
    destination: "/razvojni-projekti/naziv-projekta-smartim-pametna-tovarna-iskra-mehanizmi",
  },
  {
    source: "/spodbude-za-raziskovalno-razvojni-projekt",
    destination: "/razvojni-projekti/spodbude-za-raziskovalno-razvojni-projekt",
  },
  { source: "/resitve/servis", destination: "/servis" },

  // Joomla launch audit: additional legacy URLs, explicit one-hop targets.
  // Legacy German pages (root-level slugs) → DE routes
  {
    source: "/de/automatisierung-des-palettierens-und-der-internen-logistik",
    destination: "/de/loesungen/interne-logistik",
  },
  {
    source: "/de/automatisierung-von-cnc-maschinen",
    destination: "/de/loesungen/automatisierung-von-cnc-maschinen",
  },
  {
    source: "/de/automatisierung-von-spritzgiessmaschinen",
    destination: "/de/loesungen/automatisierung-von-spritzgiessmaschinen",
  },
  {
    source: "/de/bedienung-und-kundendienst-digitaler-service",
    destination: "/de/service",
  },
  { source: "/de/cnc-maschinen", destination: "/de/standardzellen/cnc-maschinen" },
  { source: "/de/imm-maschinen", destination: "/de/standardzellen/imm-maschinen" },
  {
    source: "/de/kollaborative-roboterloesungen",
    destination: "/de/loesungen/kollaborative-roboter",
  },
  { source: "/de/standard-roboterzellen", destination: "/de/standardzellen" },
  // Legacy English pages (root-level slugs) → EN routes
  {
    source: "/en/automation-of-cnc-machines",
    destination: "/en/solutions/cnc-machine-automation",
  },
  {
    source: "/en/automation-of-injection-molding-machines",
    destination: "/en/solutions/injection-molding-automation",
  },
  {
    source: "/en/automation-of-palletizing-and-intern-logistic",
    destination: "/en/solutions/internal-logistics",
  },
  {
    source: "/en/colaborative-robot-solutions",
    destination: "/en/solutions/collaborative-robots",
  },
  { source: "/en/component/tags/tag/novice", destination: "/en/news" },
  { source: "/en/fakuma-23", destination: "/en/news/fakuma-23" },
  {
    source: "/en/flex-7-cnc-robotic-cell",
    destination: "/en/standard-cells/cnc-machine",
  },
  {
    source: "/en/flexido-at-automatica-trade-fair",
    destination: "/en/news/flexido-at-automatica-trade-fair",
  },
  {
    source: "/en/industry-fair-2019-celje",
    destination: "/en/news/industry-fair-2019-celje",
  },
  {
    source: "/en/new-application-is-released",
    destination: "/en/news/new-application-is-released",
  },
  {
    source: "/en/new-series-is-out-flex-220-pro",
    destination: "/en/news/new-series-is-out-flex-220-pro",
  },
  {
    source: "/en/next-level-efficiency-flexido-robot-cell-on-krauss-maffei-km-81-250-px",
    destination: "/en/news/next-level-efficiency-flexido-robot-cell-on-krauss-maffei-km-81-250-px",
  },
  {
    source: "/en/service-and-after-sales-support-digital-service",
    destination: "/en/service",
  },
  {
    source: "/en/standard-robotic-cell-flex-25-50",
    destination: "/en/standard-cells/flex-25-50",
  },
  {
    source: "/en/standard-robotic-cell-flex-7-imm",
    destination: "/en/standard-cells/imm-machine",
  },
  {
    source: "/en/tmx-platoform-with-integrated-collaboraitve-robot",
    destination: "/en/standard-cells/tmx",
  },
  // Legacy English news articles migrated to /en/news/<slug>
  { source: "/en/new-flexido-robot-cell-installed", destination: "/en/news/new-flexido-robot-cell-installed" },
  { source: "/en/flex-7-pro", destination: "/en/news/flex-7-pro" },
  { source: "/en/flex-7-pro-for-dental-industry", destination: "/en/news/flex-7-pro-for-dental-industry" },
  { source: "/en/new-in-flexido-family", destination: "/en/news/new-in-flexido-family" },
  { source: "/en/flex-7-imm-slim", destination: "/en/news/flex-7-imm-slim" },
  // Joomla /sl/ language-prefixed duplicates → unprefixed SL routes
  { source: "/sl", destination: "/" },
  {
    source: "/sl/avtomatizacija-paleteziranja-interna-logistika",
    destination: "/resitve/logistika",
  },
  { source: "/sl/cnc-stroji", destination: "/standardne-celice/cnc" },
  { source: "/sl/fakuma-2023", destination: "/novice/fakuma-2023" },
  { source: "/sl/imm-stroji", destination: "/standardne-celice/imm" },
  { source: "/sl/novice", destination: "/novice" },
  { source: "/sl/o-nas", destination: "/o-nas" },
  {
    source: "/sl/resitve-s-kolaborativnimi-roboti",
    destination: "/resitve/kolaborativni-roboti",
  },
  { source: "/sl/servis", destination: "/servis" },
  { source: "/sl/sl-kontakt", destination: "/kontakt" },
  { source: "/sl/standardne-celice", destination: "/standardne-celice" },
  {
    source: "/sl/stroji-za-kovino",
    destination: "/resitve/avtomatizacija-cnc-strojev",
  },
  { source: "/sl/stroji-za-plastiko", destination: "/resitve/brizganje-plastike" },
  { source: "/sl/video", destination: "/video" },
  { source: "/sl/zaposlitev", destination: "/zaposlitev" },
];

/** News root aliases that collide with a development-project URL. */
export const NEWS_ROOT_REDIRECT_EXCLUSIONS = [
  "digitalna-transformacija-podjetja-flexido-d-o-o",
] as const;
