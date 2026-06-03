import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.16),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Video
              </p>

              <h1 className="mt-4 max-w-[13ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[68px]">
                Flexido v gibanju.
              </h1>

              <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                Oglejte si predstavitveni video podjetja Flexido —
                avtomatizacija proizvodnje, robotske celice in rešitve za
                stabilnejši tok dela.
              </p>
            </div>
          </Container>
        </section>

        {/* VIDEO */}
        <Section className="bg-white">
          <Container>
            <div className="mx-auto max-w-[980px]">
              <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/video/flexido-video-poster.webp"
                  className="aspect-video w-full bg-neutral-950 object-cover"
                >
                  <source
                    src="/video/flexido-predstavitev.mp4"
                    type="video/mp4"
                  />
                  Vaš brskalnik ne podpira predvajanja videa.
                </video>
              </div>

              <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                <div>
                  <p className="eyebrow">Predstavitev</p>

                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                    Avtomatizacija, prikazana skozi proces.
                  </h2>
                </div>

                <div className="max-w-[640px]">
                  <p className="text-[16px] leading-7 text-neutral-600">
                    Video prikazuje Flexido pristop k avtomatizaciji
                    proizvodnje: od robotskih celic in standardnih rešitev do
                    prilagojenih sistemov za različne industrijske procese.
                  </p>

                  <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                    Na kratko pokaže, kako Flexido razmišlja o avtomatizaciji:
                    najprej proces, potem rešitev, ki mora delovati v realni
                    proizvodnji.
                  </p>

                  <div className="mt-8">
                    <a
                      href="mailto:info@flexido.eu"
                      className="inline-flex items-center rounded-full bg-[#0089d6] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[#0078bd]"
                    >
                      Poglejmo vaš proces →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}