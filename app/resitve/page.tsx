import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Solutions from "@/components/blocks/home/Solutions";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FinalCTA from "@/components/blocks/home/FinalCTA";

import Container from "@/components/layout/Container";

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-neutral-200/60 bg-neutral-950 text-white">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          >
            <source src="/video/hero-cnc.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Rešitve
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[13ch]">Rešitve za</span>
                <span className="block max-w-[13ch]">stabilnejšo</span>
                <span className="block max-w-[13ch]">proizvodnjo</span>
              </h1>

              <p className="mt-5 max-w-[54ch] text-[16px] leading-7 text-white/75">
                Izberite področje glede na vaš proces — od CNC strojev in
                brizganja plastike do manipulacije materiala, interne logistike,
                kolaborativnih robotov in podpore po zagonu.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#resitve-grid"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Izberi rešitev →
                </a>

                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Nisem prepričan →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* BRIDGE */}
        <section className="border-b border-neutral-200/60 bg-white py-10 sm:py-12">
          <Container>
 <p className="max-w-[62ch] text-[15px] leading-7 text-neutral-600">
  Ni problem vedno v stroju. Zastoji pogosto nastajajo pri materialu,
  ročnih korakih ali med fazami — tam ima avtomatizacija največji učinek.
</p>
          </Container>
        </section>

        {/* SOLUTIONS GRID */}
        <div id="resitve-grid">
          <Solutions
            title="Kje se vaš proces ustavlja?"
            desc="Začnite pri delu procesa, kjer nastajajo zastoji — ali pa skupaj določimo, kje ima avtomatizacija največji učinek."
          />
        </div>

        {/* DECISION CTA */}
        <section className="border-t border-neutral-200/60 bg-white py-16 sm:py-20">
          <Container>
            <div className="max-w-[640px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                Niste prepričani?
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-3xl">
                Ne veste, kje začeti?
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                Pogosto ne gre za eno samo področje. Najprej pregledamo proces,
                ročne korake, zastoje in tok materiala — potem določimo, kje je
                avtomatizacija najbolj smiselna.
              </p>

              <div className="mt-6">
                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                >
                Poglejmo vaš proces →
                </a>
              </div>
            </div>
          </Container>
        </section>

        <ProcessBand />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}