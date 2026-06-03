import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Image from "next/image";

const jobs = [
  {
    number: "1/2",
    title: "Monter robotskih celic (m/ž)",
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
  },
  {
    number: "2/2",
    title: "Konstrukter",
    date: "26. nov. 2025",
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
  },
];

export default function ZaposlitevPage() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-neutral-200 bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.16),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/78 to-black/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,520px)] lg:gap-14">
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

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#odprta-mesta"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                  >
                    Poglej delovna mesta →
                  </a>

                  <a
                    href="mailto:info@flexido.eu"
                    className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                  >
                    Pošljite prijavo →
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/robot.jpg"
                    alt="Delo na robotskih celicah Flexido"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover object-[32%_42%] opacity-90"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/16 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                    Realni projekti
                  </p>

                  <p className="mt-2 max-w-[34ch] text-sm leading-6 text-white/88 sm:text-[15px]">
                    Delo na robotskih celicah, proizvodnih sistemih in
                    avtomatizaciji.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Odprta mesta
                </p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Pridružite se ekipi, ki dela na proizvodnih sistemih.
                </h2>
              </div>

              <div className="max-w-[680px]">
                <p className="text-[16px] leading-7 text-neutral-600">
                  Flexido razvija in integrira robotske celice, proizvodne
                  sisteme in rešitve za avtomatizacijo. Delo je praktično,
                  tehnično in povezano z realnimi izzivi proizvodnje.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* JOBS */}
        <section id="odprta-mesta" className="bg-[#f6f9fc] py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="space-y-8">
              {jobs.map((job) => (
                <article
                  key={job.title}
                  className="overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.055)]"
                >
                  <div className="border-b border-neutral-200 bg-white p-7 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                      <div className="max-w-[720px]">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-[#0089d6] px-3 py-1 text-xs font-medium text-white">
                            {job.number}
                          </span>

                          <p className="text-sm text-neutral-500">
                            {job.date}
                          </p>
                        </div>

                        <h2 className="mt-4 text-3xl font-semibold leading-[1] tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                          {job.title}
                        </h2>

                        <p className="mt-5 max-w-[68ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                          {job.summary}
                        </p>
                      </div>

                      <a
                        href="mailto:info@flexido.eu"
                        className="inline-flex shrink-0 items-center rounded-full bg-neutral-950 px-5 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                      >
                        Prijava →
                      </a>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {job.meta.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-[13px] font-medium text-neutral-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-3">
                      {job.sections.map((section) => (
                        <section key={section.title}>
                          <h3 className="text-[15px] font-semibold text-[#0078bd]">
                            {section.title}
                          </h3>

                          <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-6 text-neutral-700">
                            {section.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                        <h3 className="text-[15px] font-semibold text-neutral-950">
                          Opis delovnega okolja
                        </h3>

                        <p className="mt-3 text-[14px] leading-6 text-neutral-600">
                          Nudimo pogoje za izjemne delovne uspehe naših
                          zaposlenih. Privlačno delovno okolje, izjemna
                          kolektivnost in delovne naloge vam bodo omogočile
                          svobodno razmišljanje in osebnostni razvoj.
                        </p>
                      </div>

                      <div className="rounded-2xl bg-neutral-950 p-6 text-white">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                          Prijava
                        </p>

                        <p className="mt-3 text-[15px] leading-7 text-white/75">
                          Ponudbe z življenjepisom, opisom vaših izkušenj in
                          potrdila o zahtevani izobrazbi pošljite na:
                        </p>

                        <a
                          href="mailto:info@flexido.eu"
                          className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                        >
                          info@flexido.eu →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="border-t border-neutral-200 bg-white py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                    Odprta prijava
                  </p>

                  <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                    Ne vidite pravega mesta?
                  </h2>
                </div>

                <div>
                  <p className="max-w-[58ch] text-[16px] leading-7 text-neutral-600">
                    Pošljite nam svojo predstavitev, izkušnje in področje, kjer
                    bi lahko prispevali. Če se pojavi prava priložnost, vas
                    kontaktiramo.
                  </p>

                  <div className="mt-7">
                    <a
                      href="mailto:info@flexido.eu"
                      className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                    >
                      Pošljite odprto prijavo →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}