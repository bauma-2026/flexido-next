import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

const jobs = [
  {
    number: "1/2",
    title: "Monter robotskih celic (m/ž)",
    date: "26. nov. 2025",
    sections: [
      {
        title: "Vaše ključne odgovornosti in naloge:",
        items: [
          "Mehanska montaža robotskih celic, komponent in posameznih mehanskih sklopov;",
          "Priprava celic za izvedbo predprevzema;",
          "Preverjanje ustreznosti dobavljenih strojnih delov in uskladitev nestandardnih komponent;",
          "Osnovno rokovanje z 3D modelirniki za namen pregledovanja 3D modelov;",
          "Preverjanje in usklajevanje dobav nestandardnih delov z okoliškimi poddobavitelji;",
          "Enostavnejša elektro montaža;",
          "Rokovanje z pnevmatskimi komponentami in montaža le-teh;",
          "Sposobnost branja tehničnih risb.",
        ],
      },
      {
        title: "Kaj pričakujemo:",
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
        title: "Kaj nudimo:",
        items: [
          "Zaposlitev za nedoločen čas s 3-mesečnim poskusnim obdobjem;",
          "Odgovorno in dinamično delo v ustvarjalnem mednarodnem podjetju;",
          "Možnost osebne in profesionalne rasti ter strokovnega izobraževanja;",
          "Takojšen začetek dela;",
          "Kraj dela: v PE Šenčur in pri strankah na območju celotne Slovenije.",
        ],
      },
    ],
  },
  {
    number: "2/2",
    title: "Konstrukter",
    date: "26. nov. 2025",
    sections: [
      {
        title: "Vaše ključne odgovornosti in naloge:",
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
        title: "Kaj pričakujemo:",
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
        title: "Kaj nudimo:",
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
  },
];

export default function ZaposlitevPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="border-b border-neutral-200 bg-neutral-950 py-20 text-white sm:py-24 lg:py-28">
          <Container>
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                Zaposlitev
              </p>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[66px]">
                Prosta delovna mesta.
              </h1>

              <p className="mt-6 max-w-[58ch] text-base leading-7 text-white/70 sm:text-lg">
                Iščemo ljudi, ki želijo delati na realnih projektih
                avtomatizacije, robotskih celic in proizvodnih sistemov.
              </p>
            </div>
          </Container>
        </section>

        {/* JOBS */}
        <section className="py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="space-y-12">
              {jobs.map((job) => (
                <article
                  key={job.title}
                  className="rounded-[2rem] border border-neutral-200 bg-white p-7 shadow-sm sm:p-9 lg:p-12"
                >
                  <div className="flex flex-wrap items-center gap-4 border-b border-neutral-200 pb-6">
                    <span className="rounded-full bg-sky-600 px-3 py-1 text-xs font-medium text-white">
                      {job.number}
                    </span>

                    <div>
                      <h2 className="text-2xl font-semibold tracking-[-0.035em] text-neutral-950 sm:text-3xl">
                        {job.title}
                      </h2>
                      <p className="mt-1 text-sm text-neutral-500">
                        {job.date}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-8">
                    {job.sections.map((section) => (
                      <section key={section.title}>
                        <h3 className="text-base font-semibold text-sky-700">
                          {section.title}
                        </h3>

                        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-neutral-700">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ))}

                    <section>
                      <h3 className="text-base font-semibold text-sky-700">
                        Opis delovnega okolja:
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-neutral-700">
                        Nudimo pogoje za izjemne delovne uspehe naših zaposlenih.
                        Privlačno delovno okolje, izjemna kolektivnost in
                        delovne naloge vam bodo omogočile svobodno razmišljanje
                        in osebnostni razvoj.
                      </p>
                    </section>

                    <div className="rounded-2xl bg-sky-600 px-5 py-4 text-sm font-medium text-white">
                      Ponudbe z življenjepisom, opisom vaših izkušenj in
                      potrdila o zahtevani izobrazbi pošljite na{" "}
                      <a href="mailto:info@flexido.eu" className="underline">
                        info@flexido.eu
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}