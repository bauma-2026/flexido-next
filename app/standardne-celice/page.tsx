import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { flexidoSystems } from "@/data/flexido-systems";

const cncSystem = flexidoSystems.find((system) => system.slug === "flex-7-cnc");
const immSystem = flexidoSystems.find((system) => system.slug === "flex-7-imm");

const cellTypes = [
  {
    title: "CNC stroji",
    eyebrow: "FLEX 7 CNC Slim",
    desc: "Kompaktna robotska celica za strego CNC strojev, nalaganje, odvzem in stabilnejši tok kosov.",
    href: "/standardne-celice/cnc",
    image: cncSystem?.image ?? "/images/standardne-celice/cnc.webp",
    alt: "FLEX 7 CNC Slim robotska celica",
  },
  {
    title: "IMM stroji",
    eyebrow: "FLEX 7 IMM Slim",
    desc: "Robotska celica za strego strojev za brizganje plastike, odvzem kosov, insert moulding in kontrolo.",
    href: "/standardne-celice/imm",
    image: immSystem?.image ?? "/images/standardne-celice/imm.webp",
    alt: "FLEX 7 IMM Slim robotska celica",
  },
];

export default function Page() {
  return (
    <>
      <Header />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/flexido/legacy/s-1.jpg.jpeg"
              alt="Standardne robotske celice Flexido"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-55"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-black/15" />

          <Container className="relative z-10 flex min-h-[520px] items-end pb-16 pt-32 sm:min-h-[620px] lg:pb-20">
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                Standardne robotske celice
              </p>

              <h1 className="mt-5 max-w-[680px] text-[44px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[64px] lg:text-[76px]">
                Standardne celice za stabilno strego strojev.
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">
                Robotske celice za avtomatizacijo ponovljivih proizvodnih
                procesov — predvsem pri stregi CNC strojev in strojev za
                brizganje plastike.
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
                  Za procese, kjer se isti koraki ponavljajo vsak dan.
                </h2>
              </div>

              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  Standardne robotske celice so smiselne tam, kjer se nalaganje,
                  odvzem, manipulacija ali kontrola kosov ponavljajo dovolj
                  pogosto, da ročno delo začne omejevati stabilnost procesa.
                </p>

                <p>
                  Najpogostejši uporabi sta strega CNC strojev in strega strojev
                  za brizganje plastike. Celica prevzame ponovljive korake,
                  operater pa se lahko osredotoči na nadzor, pripravo in
                  kakovost.
                </p>

                <p>
                  Robotske celice Flexido so na voljo v različnih velikostih, z
                  možnostjo izbire modulov, prijemal, zalogovnikov in dodatne
                  opreme glede na proces.
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
                Izmenljiv sistem za hitro prilagoditev različnim strojem in
                kosom.
              </h2>

              <p className="mt-6 text-[16px] leading-8 text-neutral-700">
                Glavna prednost celic Flexido je izmenljiv Station System, ki
                omogoča uporabo celice na različnih strojih, za različne kose in
                z zelo kratkim časom menjave.
              </p>

              <p className="mt-5 text-[16px] leading-8 text-neutral-700">
                Celica ostane standardizirana, prilagoditev pa se zgodi skozi
                module, prijemala, postaje in nastavitve glede na konkreten
                proizvodni proces.
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
                Izberite celico glede na vaš stroj.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {cellTypes.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white transition hover:border-neutral-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.03em] text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-6 text-neutral-600">
                      {item.desc}
                    </p>

                    <p className="mt-6 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950">
                      Poglej celico →
                    </p>
                  </div>
                </Link>
              ))}
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
                  Niste prepričani, katera celica je prava?
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pogledamo vaš stroj, kos, način nalaganja in prostor
                  ob stroju — potem lažje določimo, ali je bolj smiselna CNC,
                  IMM ali druga rešitev.
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
                  <Image
                    src="/images/flexido/legacy/s-3.jpg.jpeg"
                    alt="Standardna robotska celica v proizvodnji"
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
                      Katera celica najbolje ustreza vašemu stroju in procesu?
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