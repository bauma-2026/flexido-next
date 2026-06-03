import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceSupportBand from "@/components/blocks/ServiceSupportBand";
import Solutions from "@/components/blocks/home/Solutions";
import ProcessBand from "@/components/blocks/home/ProcessBand";

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
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          >
            <source src="/video/flexido/hero-home.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/52 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Rešitve
              </p>

              <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                <span className="block max-w-[13ch]">Rešitve za </span>
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
              Ni problem vedno v stroju. Zastoji pogosto nastajajo pri
              materialu, ročnih korakih ali med fazami — tam ima
              avtomatizacija največji učinek.
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
                Najprej določimo pravi začetek
              </h2>

              <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                Pogosto ne gre za eno samo področje. Najprej je smiselno
                pogledati proces, ročne korake, zastoje in tok materiala —
                potem se lažje določi, kje ima avtomatizacija največji učinek.
              </p>

              <div className="mt-6">
                <a
                  href="#kontakt"
                  className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                >
                  Poglejmo proces →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* PROCESS / POSITIONING */}
        <ProcessBand />
<ServiceSupportBand variant="light" />
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

                <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                  Poglejmo vaš proces
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pregledamo potek dela, poiščemo zastoje in ocenimo,
                  kateri koraki imajo največ smisla za avtomatizacijo.
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

              <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
                <div className="relative aspect-[4/3]">
                  <img
                    src="/images/flexido//legacy/s-3.jpg.jpeg"
                    alt="Avtomatiziran proizvodni proces"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">
                      Prvi korak
                    </p>
                    <p className="mt-2 max-w-[34ch] text-[15px] font-medium leading-6 text-white">
                      Kje proces izgublja čas, material ali stabilen ritem?
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