export type CareerJobSection = {
  title: string;
  items: string[];
};

/**
 * A scannable job fact — the things a candidate looks for before reading the
 * ad itself. Every value here is condensed from a bullet that already exists
 * in `sections` below; nothing is invented. Seniority, salary, department and
 * work model are deliberately absent because the source content does not
 * state them.
 */
export type CareerJobFact = {
  label: string;
  value: string;
};

export type CareerJob = {
  title: string;
  href: string;
  date: string;
  summary: string;
  /** Scannable facts for the listing entry and the detail header. */
  facts: CareerJobFact[];
  /** Short domain tags, rendered as pills on the detail page. */
  meta: string[];
  /** Three-line preview of the work for the listing entry, condensed from
   *  the responsibilities section. The listing never renders `sections`. */
  preview: string[];
  sections: CareerJobSection[];
  workEnvironment: string;
  applicationNote: string;
};

/** The single address every Flexido application goes to. */
export const CAREERS_EMAIL = "info@flexido.eu";

/**
 * A role-specific application link. The subject line is what makes a reply to
 * this posting distinguishable from the speculative applications that arrive
 * through the open-application band on `/zaposlitev` — that one stays a bare
 * mailto on purpose.
 */
export function roleApplicationMailto(job: CareerJob): string {
  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
    `Prijava — ${job.title}`
  )}`;
}

/** One consistent label for "apply to this specific role", listing and detail. */
export const ROLE_APPLY_LABEL = "Prijavite se →";

/** One consistent label for "open this role's detail page". */
export const ROLE_DETAIL_LABEL = "Poglej delovno mesto →";

/**
 * The single currently-active SL job opening — matches live flexido.eu/konstrukter
 * (1/1 listing). `/zaposlitev` renders only the summary fields (title, date,
 * summary, facts, preview) and links here; the full `sections`,
 * `workEnvironment` and `applicationNote` belong to the detail page alone.
 *
 * `sections` order is the candidate journey, not the order of the original ad:
 * what the work is, what the role gives back, and only then what it asks for.
 */
export const konstrukterJob: CareerJob = {
  title: "Konstrukter",
  href: "/konstrukter",
  date: "19. jun. 2026",
  summary:
    "Delo vključuje razvoj in projektiranje fleksibilnih robotskih celic, konstrukcijo sklopov, pripravo tehnične dokumentacije ter sodelovanje pri izvedbi rešitev.",
  facts: [
    { label: "Področje", value: "Konstrukcija in razvoj rešitev" },
    { label: "Zaposlitev", value: "Nedoločen čas, 3-mesečno poskusno obdobje" },
    { label: "Kraj dela", value: "Sedež podjetja in stranke po Sloveniji" },
  ],
  meta: ["Konstrukcija", "SolidWorks", "Razvoj rešitev"],
  preview: [
    "Razvoj in projektiranje fleksibilnih robotskih celic, sklopov in naprav",
    "Konstruiranje vpenjal za CNC stroje in komponent v strojegradnji",
    "Izdelava tehnične in projektne dokumentacije",
  ],
  sections: [
    {
      title: "Vaše ključne odgovornosti in naloge",
      items: [
        "Razvoj in projektiranje fleksibilnih robotskih celic, posameznih sklopov in naprav;",
        "Izdelava analize mehanskega delovanja robotskih celic, posameznih sklopov in naprav;",
        "Urejanje obstoječih sklopov / naprav / celic / platforme / komponente in kreiranje novih prilagoditev;",
        "Kreiranje in vzdrževanje knjižnice s standardnimi komponentami;",
        "Izdelava tehnične dokumentacije za izdelavo posameznih komponent;",
        "Razvoj in konstruiranje vpenjal za CNC stroje in ostalih oddelkov / komponent v strojegradnji;",
        "Sodelovanje pri pripravi ponudb;",
        "Izdelava projektne dokumentacije;",
        "Sodelovanje pri izdelavi prototipov in testiranja le-teh.",
      ],
    },
    {
      title: "Kaj nudimo",
      items: [
        "Zaposlitev za nedoločen čas s 3-mesečnim poskusnim obdobjem;",
        "Odgovorno in dinamično delo v ustvarjalnem mednarodnem podjetju;",
        "Možnost osebne in profesionalne rasti ter strokovnega izobraževanja;",
        "Plača po dogovoru;",
        "Takojšen začetek dela;",
        "Kraj dela: na sedežu podjetja in pri strankah na območju celotne Slovenije.",
      ],
    },
    {
      title: "Kaj pričakujemo",
      items: [
        "Formalna izobrazba: najmanj V. stopnja izobrazbe, smer elektrotehnika, mehatronika, računalništvo, strojništvo;",
        "Poznavanje računalniških programov: MS Office, SOLIDWORKS;",
        "Samostojno delo, samoiniciativnost, komunikativnost, timsko delo;",
        "Odgovornost opravljanja dela in rokov izdelave;",
        "Tekoče znanje angleškega jezika, pisno in ustno;",
        "Uporabljanje modelirnikov za modeliranje;",
        "Poznavanje pnevmatike / senzorike;",
        "Izpit B-kategorije;",
        "Poznavanje tehnične dokumentacije in branja načrtov.",
      ],
    },
  ],
  workEnvironment:
    "Nudimo pogoje za izjemne delovne uspehe naših zaposlenih. Privlačno delovno okolje, izjemna kolektivnost in delovne naloge vam bodo omogočile svobodno razmišljanje in osebnostni razvoj.",
  applicationNote:
    "Ponudbe z življenjepisom, opisom vaših izkušenj in potrdila o zahtevani izobrazbi pošljite na:",
};

/**
 * Historical/inactive postings — kept for record only, deliberately not
 * imported or rendered by any page. Not part of the public SL listing.
 * Carries the same fields as an active posting so it stays renderable if it
 * is ever reactivated.
 */
export const archivedJobs: CareerJob[] = [
  {
    title: "Monter robotskih celic (m/ž)",
    href: "",
    date: "26. nov. 2025",
    summary:
      "Delo vključuje mehansko montažo robotskih celic, pripravo sklopov, osnovno elektro montažo ter sodelovanje pri zagonih in prilagoditvah v realnih proizvodnih okoljih.",
    facts: [
      { label: "Področje", value: "Montaža robotskih celic" },
      { label: "Zaposlitev", value: "Nedoločen čas, 3-mesečno poskusno obdobje" },
      { label: "Kraj dela", value: "PE Šenčur in stranke po Sloveniji" },
    ],
    meta: ["Montaža", "Robotske celice", "PE Šenčur / teren"],
    preview: [
      "Mehanska montaža robotskih celic, komponent in mehanskih sklopov",
      "Priprava celic za izvedbo predprevzema",
      "Enostavnejša elektro montaža in rokovanje s pnevmatskimi komponentami",
    ],
    sections: [
      {
        title: "Vaše ključne odgovornosti in naloge",
        items: [
          "Mehanska montaža robotskih celic, komponent in posameznih mehanskih sklopov;",
          "Priprava celic za izvedbo predprevzema;",
          "Preverjanje ustreznosti dobavljenih strojnih delov in uskladitev nestandardnih komponent;",
          "Osnovno rokovanje z 3D modelirniki za namen pregledovanja 3D modelov;",
          "Preverjanje in usklajevanje dobav nestandardnih delov z okoliškimi poddobavitelji;",
          "Enostavnejša elektro montaža;",
          "Rokovanje s pnevmatskimi komponentami in montaža le-teh;",
          "Sposobnost branja tehničnih risb.",
        ],
      },
      {
        title: "Kaj nudimo",
        items: [
          "Zaposlitev za nedoločen čas s 3-mesečnim poskusnim obdobjem;",
          "Odgovorno in dinamično delo v ustvarjalnem mednarodnem podjetju;",
          "Možnost osebne in profesionalne rasti ter strokovnega izobraževanja;",
          "Takojšen začetek dela;",
          "Kraj dela: v PE Šenčur in pri strankah na območju celotne Slovenije.",
        ],
      },
      {
        title: "Kaj pričakujemo",
        items: [
          "Vsaj IV. stopnjo izobrazbe smer strojništvo, elektrotehnika, mehatronika, računalništvo ali druga ustrezna izobrazba;",
          "Poznavanje osnov računalništva, računalniških programov, MS Office;",
          "Samostojnost, samoiniciativnost, komunikativnost, timsko delo;",
          "Želja po učenju, raziskovanju in spoznavanju novih tehnologij;",
          "Tekoče znanje angleškega jezika, pisno in ustno;",
          "Izpit B-kategorije.",
        ],
      },
    ],
    workEnvironment:
      "Nudimo pogoje za izjemne delovne uspehe naših zaposlenih. Privlačno delovno okolje, izjemna kolektivnost in delovne naloge vam bodo omogočile svobodno razmišljanje in osebnostni razvoj.",
    applicationNote:
      "Ponudbe z življenjepisom, opisom vaših izkušenj in potrdila o zahtevani izobrazbi pošljite na:",
  },
];
