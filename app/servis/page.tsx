import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const servicePoints = [
  {
    title: "Hitrejša prijava napake",
    desc: "Napako je mogoče prijaviti hitro in jasno, z osnovnimi podatki o stroju, celici ali opremi.",
  },
  {
    title: "Boljši pregled nad opremo",
    desc: "Digitalni servis omogoča lažje spremljanje servisnih zahtevkov, zgodovine posegov in stanja opreme.",
  },
  {
    title: "Manj izgubljenega časa",
    desc: "Ko so podatki zbrani na enem mestu, je reševanje napak hitrejše in bolj pregledno.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Prijava napake",
    desc: "Stranka poda osnovne informacije o opremi, težavi in stanju procesa.",
  },
  {
    step: "02",
    title: "Pregled zahtevka",
    desc: "Flexido pregleda prijavo, določi nujnost in pripravi naslednji korak.",
  },
  {
    step: "03",
    title: "Servisna podpora",
    desc: "Po potrebi se izvede oddaljena pomoč, priprava posega ali servis na lokaciji.",
  },
];

const supportAreas = [
  "robotske celice",
  "CNC avtomatizacija",
  "brizganje plastike",
  "kolaborativni roboti",
  "transportni sistemi",
  "senzorika in periferija",
  "krmiljenje in povezave",
  "poprodajna podpora",
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(14,165,233,0.18),transparent_32%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

          <Container className="relative z-10 grid min-h-[560px] items-end gap-12 py-16 sm:min-h-[620px] sm:py-20 lg:min-h-[660px] lg:grid-cols-[0.95fr_1.05fr] lg:py-24">
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Servis in podpora
              </p>

              <h1 className="mt-4 max-w-[13ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
                Podpora po zagonu.
              </h1>

              <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                Ko je sistem v proizvodnji, je pomembno, da podpora ostane
                hitra, pregledna in zanesljiva. Flexido nudi servisno in
                poprodajno podporo za stabilno delovanje opreme.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Prijavite servis →
                </a>

                <a
                  href="/cenik"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  Cenik servisa →
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative ml-auto max-w-[560px] overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/flexido/service/digitalni-servis.jpg"
                    alt="Flexido digitalni servis"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover opacity-85"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                    Digitalni servis
                  </p>

                  <p className="mt-2 max-w-[34ch] text-[18px] font-medium leading-6 text-white">
                    Preglednejša prijava napak in hitrejši odziv.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  Po zagonu
                </p>

                <h2 className="mt-4 max-w-[560px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  Servis ni samo popravilo. Je del stabilnega procesa.
                </h2>
              </div>

              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  Pri avtomatizaciji proizvodnje je zagon samo en del zgodbe.
                  Pomembno je tudi, kaj se zgodi po zagonu — ko sistem dela v
                  realnem procesu, z realnimi obremenitvami in vsakodnevnimi
                  zahtevami proizvodnje.
                </p>

                <p>
                  Flexido pomaga pri servisiranju, poprodajni podpori,
                  spremljanju stanja opreme in hitrejšem reševanju napak, da se
                  proizvodnja čim prej vrne v stabilen tok.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* DIGITAL SERVICE */}
        <Section className="border-y border-neutral-200 bg-neutral-50">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  Digitalni servis
                </p>

                <h2 className="mt-4 max-w-[560px] text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  Preglednejša prijava napak in hitrejši odziv.
                </h2>

                <p className="mt-5 max-w-[62ch] text-[16px] leading-8 text-neutral-700">
                  Digitalni servis omogoča bolj urejeno komunikacijo pri
                  servisnih zahtevkih. Cilj je, da so podatki o opremi, težavi
                  in zgodovini posegov bolj dostopni, servisni proces pa bolj
                  pregleden.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "hitrejša prijava napake",
                  "pregled servisnih zahtevkov",
                  "zgodovina posegov",
                  "bolj jasna komunikacija",
                  "boljši pregled nad opremo",
                  "hitrejši naslednji korak",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-[14px] font-medium text-neutral-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* SERVICE POINTS */}
        <Section>
          <Container>
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Zakaj servis
              </p>

              <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                Ko se proizvodnja ustavi, šteje jasen naslednji korak.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {servicePoints.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-neutral-200 bg-white p-7"
                >
                  <h3 className="text-[21px] font-semibold tracking-[-0.03em] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* PROCESS */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Kako poteka
              </p>

              <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                Servisni zahtevek mora biti pregleden od začetka.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {howItWorks.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[28px] border border-neutral-200 bg-white p-7 shadow-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    {item.step}
                  </p>

                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.03em] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* SUPPORT AREAS */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  Področja podpore
                </p>

                <h2 className="mt-4 max-w-[520px] text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  Podpora za opremo, ki mora delovati v realnem procesu.
                </h2>

                <p className="mt-5 max-w-[58ch] text-[16px] leading-8 text-neutral-700">
                  Servisna podpora je pomembna pri posameznih celicah, dodatnih
                  modulih, transportnih sistemih in povezanih delih proizvodnega
                  procesa.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {supportAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-[14px] font-medium text-neutral-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* PRICING LINK */}
        <Section className="border-y border-neutral-200 bg-neutral-950 text-white">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                  Cenik
                </p>

                <h2 className="mt-4 max-w-[560px] text-[32px] font-semibold leading-tight tracking-[-0.04em] sm:text-[44px]">
                  Servisni pogoji in cene naj bodo jasno dostopni.
                </h2>
              </div>

              <div>
                <p className="max-w-[62ch] text-[16px] leading-8 text-white/65">
                  Za pregled servisnih postavk, urnih postavk in pogojev je
                  cenik servisa pripravljen kot ločena stran.
                </p>

                <a
                  href="/cenik"
                  className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglej cenik servisa →
                </a>
              </div>
            </div>
          </Container>
        </Section>

        {/* LIGHT FINAL CTA */}
        <section
          id="kontakt"
          className="border-t border-neutral-200/60 bg-white py-20 sm:py-24 lg:py-28"
        >
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div className="max-w-[680px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kontakt
                </p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                  Potrebujete servisno podporo?
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Pošljite osnovne podatke o opremi, napaki ali servisni
                  zahtevi. Flexido pregleda prijavo in predlaga naslednji
                  korak.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:info@flexido.eu"
                    className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Prijavite servis →
                  </a>

                  <a
                    href="/cenik"
                    className="inline-flex items-center rounded-full border border-neutral-200 px-6 py-3 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
                  >
                    Poglej cenik →
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/flexido/service/digitalni-servis.jpg"
                    alt="Digitalni servis Flexido"
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">
                      Prvi korak
                    </p>

                    <p className="mt-2 max-w-[34ch] text-[15px] font-medium leading-6 text-white">
                      Kaj se je zgodilo, na kateri opremi in kako vpliva na
                      proizvodnjo?
                    </p>
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