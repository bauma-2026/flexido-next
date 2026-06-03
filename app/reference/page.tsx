import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const featured = {
  title: "Rešitve za stabilnejši proizvodni proces",
  desc: "Primeri rešitev lahko vključujejo robotske celice, avtomatizacijo CNC in IMM procesov, manipulacijo materiala, interno logistiko ter podporo po zagonu.",
  href: "/resitve",
};

const areas = [
  {
    title: "CNC avtomatizacija",
    desc: "Nalaganje, odvzem in stabilnejši tok kosov okoli CNC strojev.",
    href: "/resitve/avtomatizacija-cnc-strojev",
  },
  {
    title: "Brizganje plastike",
    desc: "Odvzem, odlaganje in tok kosov po ciklu brizganja.",
    href: "/resitve/brizganje-plastike",
  },
  {
    title: "Manipulacija materiala",
    desc: "Prijemanje, prestavljanje, obračanje, pozicioniranje in odlaganje kosov.",
    href: "/resitve/manipulacija",
  },
  {
    title: "Interna logistika",
    desc: "Ureditev toka materiala med fazami, stroji in postajami.",
    href: "/resitve/logistika",
  },
  {
    title: "Kolaborativni roboti",
    desc: "Prevzem ponavljajočih nalog, kjer operater ostane v nadzoru procesa.",
    href: "/resitve/kolaborativni-roboti",
  },
  {
    title: "Namenski sistemi",
    desc: "Rešitve po meri procesa, prostora, kosov in obstoječih strojev.",
    href: "/resitve/namenski-sistemi",
  },
];

const proofPoints = [
  {
    title: "Realna proizvodnja",
    desc: "Rešitve morajo delovati v dejanskih proizvodnih pogojih, ne samo v predstavitvi.",
  },
  {
    title: "Celovit proces",
    desc: "Pomemben ni samo en stroj, ampak tok med fazami, materialom in ljudmi.",
  },
  {
    title: "Podpora po zagonu",
    desc: "Sistem mora ostati uporaben tudi po predaji in spremembah v proizvodnji.",
  },
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          >
            <source src="/video/flexido/hero-home.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Reference
              </p>

              <h1 className="mt-4 max-w-[13ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
                Rešitve iz realne proizvodnje.
              </h1>

              <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                Avtomatizacija ima vrednost šele takrat, ko v praksi izboljša
                tok dela, zmanjša ročne prekinitve in naredi proces bolj
                stabilen.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/resitve"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglej rešitve →
                </a>

                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  Poglejmo vaš proces →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* OVERVIEW */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div>
                <p className="eyebrow">Pregled</p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Avtomatizacija ni ena rešitev za vse procese.
                </h2>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 sm:p-8">
                <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                  {featured.title}
                </h3>

                <p className="mt-4 max-w-[58ch] text-[16px] leading-7 text-neutral-600">
                  {featured.desc}
                </p>

                <div className="mt-7">
                  <a
                    href={featured.href}
                    className="inline-flex rounded-full bg-neutral-950 px-5 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Poglej področja rešitev →
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* AREAS */}
        <Section className="bg-[#f6f9fc]">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Področja</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Kje se rešitve najpogosteje pokažejo v praksi
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Reference je smiselno razumeti po delu procesa, kjer nastaja
                učinek — ne samo po uporabljeni tehnologiji.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {areas.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group rounded-[24px] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.045)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
                >
                  <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.desc}
                  </p>

                  <p className="mt-6 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950">
                    Preberi več →
                  </p>
                </a>
              ))}
            </div>
          </Container>
        </Section>

        {/* PROOF */}
        <Section className="bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <div>
                <p className="eyebrow">Kaj šteje kot referenca</p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Rešitev mora delovati v praksi.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {proofPoints.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[22px] border border-neutral-200 bg-white p-6"
                  >
                    <h3 className="text-[16px] font-semibold text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-[14px] leading-6 text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
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
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="max-w-[620px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kontakt
                </p>

                <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                  Poglejmo vaš proces
                </h2>
              </div>

              <div className="max-w-[680px]">
                <p className="text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Če veste, kje se proces ustavlja, lahko skupaj preverimo,
                  katera rešitev ima največ smisla za naslednji korak.
                </p>

                <div className="mt-8">
                  <a
                    href="mailto:info@flexido.eu"
                    className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                  >
                    Pošljite povpraševanje →
                  </a>
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