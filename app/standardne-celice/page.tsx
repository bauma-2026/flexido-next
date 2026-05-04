import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import FinalCTA from "@/components/blocks/home/FinalCTA";

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[url('/images/standardne-celice/hero.webp')] bg-cover bg-center opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

          <Container className="relative z-10 flex min-h-[520px] items-end pb-16 pt-32 sm:min-h-[620px] lg:pb-20">
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                Standardne robotske celice
              </p>

              <h1 className="mt-5 max-w-[680px] text-[44px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[64px] lg:text-[76px]">
                V Flexidu delamo avtomatizacijo enostavno.
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">
                Standardne robotske celice za avtomatizacijo različnih
                proizvodnih procesov — z glavnima prednostma fleksibilnosti in
                enostavne uporabe.
              </p>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  Program
                </p>
                <h2 className="mt-4 max-w-[480px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  Standardne celice za CNC stroje in stroje za brizganje plastike.
                </h2>
              </div>

              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  Velik delež proizvodnje podjetja Flexido predstavljajo
                  standardne robotske celice, katerih glavni prednosti sta
                  fleksibilnost in enostavnost uporabe.
                </p>

                <p>
                  Namenjene so uporabi za avtomatizacijo različnih proizvodnih
                  procesov. Največji potencial predstavljajo robotske celice za
                  strego CNC strojev in robotske celice za strego strojev za
                  brizganje plastike.
                </p>

                <p>
                  Robotske celice Flexido so na voljo v različnih velikostih,
                  na vseh pa je mogoč širok izbor modulov in opreme.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* KEY ADVANTAGE */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Station System
              </p>

              <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                Izmenljiv sistem za hitro prilagoditev različnim strojem in kosom.
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-neutral-700">
                Glavna prednost celic FLEXIDO je izmenljiv Station System, ki
                omogoča avtomatizacijo na različnih strojih, za različne kose in
                z zelo kratkim časom menjave.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-neutral-700">
                V produktih uporabljamo komponente priznanih dobaviteljev in
                napredna interaktivna orodja za storitve.
              </p>
            </div>
          </Container>
        </Section>

        {/* TYPES */}
        <Section>
          <Container>
            <div className="mb-10 max-w-[620px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Tipi celic
              </p>
              <h2 className="mt-4 text-[34px] font-semibold tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                Dve glavni uporabi.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Link
                href="/standardne-celice/cnc-stroji"
                className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-sm"
              >
                <div className="aspect-[4/3] bg-neutral-100">
                  <img
                    src="/images/standardne-celice/cnc.webp"
                    alt="CNC stroji"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Standardne robotske celice
                  </p>
                  <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                    CNC stroji
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-neutral-600">
                    Robotske celice za strego CNC strojev.
                  </p>
                </div>
              </Link>

              <Link
                href="/standardne-celice/imm-stroji"
                className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-sm"
              >
                <div className="aspect-[4/3] bg-neutral-100">
                  <img
                    src="/images/standardne-celice/imm.webp"
                    alt="IMM stroji"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Standardne robotske celice
                  </p>
                  <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                    IMM stroji
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-neutral-600">
                    Robotske celice za strego strojev za brizganje plastike.
                  </p>
                </div>
              </Link>
            </div>
          </Container>
        </Section>

        {/* VIDEO */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Video
              </p>
              <h2 className="mt-4 text-[34px] font-semibold tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                Standardne celice v praksi.
              </h2>
            </div>

            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[28px] border border-neutral-200 bg-black">
              <video
                controls
                muted
                playsInline
                poster="/images/standardne-celice/video-poster.webp"
                className="aspect-video w-full"
              >
                <source src="/video/standardne-celice.mp4" type="video/mp4" />
              </video>
            </div>
          </Container>
        </Section>

       <FinalCTA />
      </main>

      <Footer />
    </>
  );
}