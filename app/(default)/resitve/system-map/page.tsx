import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FinalCTA from "@/components/blocks/home/FinalCTA";

const mapItems = [
  {
    label: "Stroj / cikel",
    title: "CNC proces ne teče",
    desc: "Stroj čaka med cikli, operater ročno nalaga kose ali proces ni stabilen.",
    href: "/resitve/avtomatizacija-cnc-strojev",
    cta: "Poglej CNC rešitev",
  },
  {
    label: "Med operacijami",
    title: "Proces se ustavi med koraki",
    desc: "Kos je obdelan, vendar čaka na prenos, obračanje, kontrolo ali naslednjo operacijo.",
    href: "/resitve/manipulacija",
    cta: "Poglej manipulacijo",
  },
  {
    label: "Tok materiala",
    title: "Material ne pride pravočasno",
    desc: "Material potuje ročno, bufferji niso definirani ali postaje čakajo ena na drugo.",
    href: "/resitve/logistika",
    cta: "Poglej logistiko",
  },
  {
    label: "Ročno delo",
    title: "Operater je ozko grlo",
    desc: "Ponavljajoče naloge, ročno pobiranje, odlaganje ali delo ob stroju omejujejo ritem.",
    href: "/resitve/kolaborativni-roboti",
    cta: "Poglej cobote",
  },
];

const guideItems = [
  {
    question: "Stroj čaka med cikli?",
    answer: "Začnite pri CNC avtomatizaciji.",
  },
  {
    question: "Kos čaka med dvema operacijama?",
    answer: "Poglejte manipulacijo kosov.",
  },
  {
    question: "Material ne pride pravočasno?",
    answer: "Poglejte interno logistiko.",
  },
  {
    question: "Operater dela ponavljajoče naloge?",
    answer: "Poglejte kolaborativne robote.",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.18),transparent_26%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <a
                href="/resitve"
                className="inline-flex text-[13px] text-white/55 transition hover:text-white"
              >
                ← Vse rešitve
              </a>

              <p className="mt-6 eyebrow-on-dark">
                System map
              </p>

             <h1 className="text-display mt-4 max-w-[13ch]">
  Kje se ustavlja vaš proces?
</h1>

<p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-white/75">
  Če proizvodnja ne teče stabilno, problem običajno ni samo en.
  Najprej ga razdelimo na ključne dele — stroj, manipulacijo,
  tok materiala in ročno delo.
  <span className="mt-3 block font-medium text-white">
    Najprej problem. Šele potem rešitev.
  </span>
</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#mapa"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglej mapo →
                </a>

                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Poglejmo vaš proces →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <Section className="border-b border-neutral-200/60 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div className="max-w-[560px]">
                <p className="eyebrow">Model</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Najprej poiščemo, kje proces izgublja ritem.
                </h2>
              </div>

              <div className="max-w-[680px]">
                <p className="text-[16px] leading-7 text-neutral-600">
                  Avtomatizacija ni vedno vprašanje enega robota. Včasih stroj
                  čaka na operaterja. Včasih kos stoji med operacijami. Včasih
                  material ne pride pravočasno. Zato problem najprej razbijemo
                  na del procesa, kjer nastaja največ izgub.
                </p>

                <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                  Ta mapa pomaga hitro določiti, katera rešitev ima največji
                  učinek za stabilnost, izkoristek in manj ročnega dela.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* SYSTEM MAP */}
        <Section id="mapa" className="scroll-mt-24 surface-muted">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Mapa problemov</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Kje se proces ustavi?
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Vsak zastoj ima drugačen vzrok. Zato ima tudi rešitev drugačno
                logiko.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {mapItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-7 transition hover:-translate-y-0.5 hover:border-neutral-300"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    {item.label}
                  </p>

                  <h3 className="mt-4 max-w-[16ch] text-2xl font-semibold leading-[1] tracking-[-0.03em] text-neutral-950 sm:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-[48ch] text-[15px] leading-7 text-neutral-600">
                    {item.desc}
                  </p>

                  <span className="mt-7 inline-flex text-[14px] font-medium text-neutral-950 transition group-hover:translate-x-1">
                    {item.cta} →
                  </span>
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {/* GUIDE */}
        <Section className="bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="max-w-[520px]">
                <p className="eyebrow">Kako to brati</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Začni tam, kjer proces čaka.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Ni treba najprej vedeti, katero tehnologijo potrebujete.
                  Dovolj je vedeti, kje nastaja zastoj.
                </p>
              </div>

              <div className="grid gap-4">
                {guideItems.map((item) => (
                  <div
                    key={item.question}
                    className="grid gap-3 rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-6 sm:grid-cols-[0.9fr_1.1fr]"
                  >
                    <p className="text-[15px] font-semibold text-neutral-950">
                      {item.question}
                    </p>

                    <p className="text-[15px] leading-6 text-neutral-600">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* MINI CTA */}
        <section className="bg-neutral-950 text-white">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[680px]">
                <p className="eyebrow text-white/45">Diagnostika procesa</p>

                <h2 className="mt-4 max-w-[14ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                  Ne začnemo pri robotu. Začnemo pri toku.
                </h2>

                <p className="mt-5 max-w-[54ch] text-[16px] leading-7 text-white/65">
                  Najprej pogledamo, kje proces izgublja stabilnost — šele nato
                  določimo, katera avtomatizacija ima smisel.
                </p>
              </div>

              <a
                href="#kontakt"
                className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
              >
                Poglejmo vaš proces →
              </a>
            </div>
          </Container>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}