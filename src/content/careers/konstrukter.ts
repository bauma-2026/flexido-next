export type CareerJobSection = {
  title: string;
  items: string[];
};

export type CareerJob = {
  title: string;
  href: string;
  date: string;
  summary: string;
  meta: string[];
  sections: CareerJobSection[];
  workEnvironment: string;
  applicationNote: string;
};

/**
 * The single currently-active SL job opening — matches live flexido.eu/konstrukter
 * (1/1 listing). Shared by /zaposlitev (listing) and /konstrukter (detail page)
 * so both stay in sync from one source.
 */
export const konstrukterJob: CareerJob = {
  title: "Konstrukter",
  href: "/konstrukter",
  date: "19. jun. 2026",
  summary:
    "Delo vključuje razvoj in projektiranje fleksibilnih robotskih celic, konstrukcijo sklopov, pripravo tehnične dokumentacije ter sodelovanje pri izvedbi rešitev.",
  meta: ["Konstrukcija", "SolidWorks", "Razvoj rešitev"],
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
  ],
  workEnvironment:
    "Nudimo pogoje za izjemne delovne uspehe naših zaposlenih. Privlačno delovno okolje, izjemna kolektivnost in delovne naloge vam bodo omogočile svobodno razmišljanje in osebnostni razvoj.",
  applicationNote:
    "Ponudbe z življenjepisom, opisom vaših izkušenj in potrdila o zahtevani izobrazbi pošljite na:",
};

/**
 * Historical/inactive postings — kept for record only, deliberately not
 * imported or rendered by any page. Not part of the public SL listing.
 */
export const archivedJobs: CareerJob[] = [
  {
    title: "Monter robotskih celic (m/ž)",
    href: "",
    date: "26. nov. 2025",
    summary:
      "Delo vključuje mehansko montažo robotskih celic, pripravo sklopov, osnovno elektro montažo ter sodelovanje pri zagonih in prilagoditvah v realnih proizvodnih okoljih.",
    meta: ["Montaža", "Robotske celice", "PE Šenčur / teren"],
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
    ],
    workEnvironment:
      "Nudimo pogoje za izjemne delovne uspehe naših zaposlenih. Privlačno delovno okolje, izjemna kolektivnost in delovne naloge vam bodo omogočile svobodno razmišljanje in osebnostni razvoj.",
    applicationNote:
      "Ponudbe z življenjepisom, opisom vaših izkušenj in potrdila o zahtevani izobrazbi pošljite na:",
  },
];
