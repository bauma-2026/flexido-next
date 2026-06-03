import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const steps = [
  {
    number: "01",
    title: "Pregled procesa",
    desc: "Najprej pogledamo, kje nastajajo zastoji, ročni koraki, čakanje ali nejasen tok materiala.",
  },
  {
    number: "02",
    title: "Zasnova rešitve",
    desc: "Določimo, kateri del procesa ima največji učinek za avtomatizacijo — brez nepotrebne kompleksnosti.",
  },
  {
    number: "03",
    title: "Integracija v proizvodnjo",
    desc: "Rešitev povežemo z obstoječimi stroji, operaterji, prostorom in realnim ritmom dela.",
  },
  {
    number: "04",
    title: "Zagon in podpora",
    desc: "Sistem zaženemo, stabiliziramo v praksi in po potrebi prilagodimo spremembam v proizvodnji.",
  },
];

const principles = [
  {
    title: "Najprej proces",
    desc: "Ne začnemo z izbiro robota, ampak z razumevanjem toka dela.",
  },
  {
    title: "Manj improvizacije",
    desc: "Cilj je stabilen proces, kjer so premiki, čakanje in odgovornosti jasni.",
  },
  {
    title: "Rešitev za prakso",
    desc: "Sistem mora delovati v realni proizvodnji, ne samo v predstavitvi.",
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
            <source src="/video/flexido-predstavitev.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16),transparent_30%)]" />

          <Container className="relative z-10 flex min-h-[520px] items-end py-16 sm:min-h-[600px] sm:py-20 lg:min-h-[640px] lg:py-24">
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Proces
              </p>

              <h1 className="mt-4 max-w-[13ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
                Najprej proces. Potem rešitev.
              </h1>

              <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                Avtomatizacija ima največji učinek takrat, ko najprej
                razumemo, kje proizvodnja izgublja ritem — šele nato izberemo
                tehnologijo, robotiko ali sistem.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglejmo vaš proces →
                </a>

                <a
                  href="#koraki"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  Kako poteka projekt →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div>
                <p className="eyebrow">Naš pristop</p>

                <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Ne začnemo pri robotu.
                </h2>
              </div>

              <div className="max-w-[680px]">
                <p className="text-[16px] leading-7 text-neutral-600">
                  Robot, celica ali transportni sistem niso cilj sami po sebi.
                  Cilj je proizvodni tok, ki deluje bolj stabilno,
                  predvidljivo in z manj ročnega usklajevanja.
                </p>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Zato najprej pogledamo proces kot celoto: stroje, material,
                  operaterje, podatke, prostor in mesta, kjer nastajajo
                  zastoji.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* STEPS */}
        <Section id="koraki" className="scroll-mt-24 bg-[#f6f9fc]">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Kako poteka projekt</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Od pregleda procesa do delujoče rešitve.
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                Postopek prilagodimo projektu, vendar logika ostane enaka:
                najprej razumemo proces, nato zasnujemo in izvedemo rešitev.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-[24px] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.045)]"
                >
                  <p className="text-[12px] font-medium text-neutral-400">
                    {step.number}
                  </p>

                  <h3 className="mt-5 text-[18px] font-semibold tracking-[-0.02em] text-neutral-950">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* PRINCIPLES */}
        <Section className="bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <div>
                <p className="eyebrow">Zakaj tako</p>

                <h2 className="mt-3 max-w-[14ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Rešitev mora slediti procesu.
                </h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {principles.map((item) => (
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
                  Naslednji korak
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