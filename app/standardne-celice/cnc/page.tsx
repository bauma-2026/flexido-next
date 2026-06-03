import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { flexidoSystems } from "@/data/flexido-systems";

const cncSystem = flexidoSystems.find((system) => system.slug === "flex-7-cnc");

export default function Page() {
  return (
    <>
      <Header />

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
            <source
              src="/video/flexido/hero-standardne-celice-cnc.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <Container className="relative z-10 flex min-h-[520px] items-end pb-16 pt-32 sm:min-h-[620px] lg:pb-20">
            <div className="max-w-[720px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                Standardne robotske celice
              </p>

              <h1 className="mt-5 text-[48px] font-semibold leading-[0.95] tracking-[-0.055em] sm:text-[72px]">
                CNC stroji
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">
                Robotske celice za posluževanje CNC strojev — za nalaganje,
                odvzemanje, fleksibilno menjavo kosov in dodatne operacije v
                proizvodnem procesu.
              </p>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  CNC avtomatizacija
                </p>

                <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  Fleksibilno posluževanje CNC strojev z robotom.
                </h2>
              </div>

              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  Flexido celice ponujajo bogat nabor opcij. Pri posluževanju
                  CNC strojev z robotom se za nalaganje in odvzemanje največkrat
                  uporabi drsni paletni sistem, sistem z vrtljivo mizo ali
                  vrtljivi paletni sistem.
                </p>

                <p>
                  Vedno bolj se uporablja tudi odvzem kosov z robotom z uporabo
                  sistema pametnega vida Vision, ki omogoča višjo stopnjo
                  fleksibilnosti robotske celice.
                </p>

                <p>
                  Robot lahko pri integrirani opciji Pick &amp; Place z vhodnega
                  traku pobira različne kose različnih oblik.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* PRODUCT SYSTEM */}
        {cncSystem ? (
          <Section className="border-y border-neutral-200 bg-white">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    Standardna celica
                  </p>

                  <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                    {cncSystem.name}
                  </h2>

                  <p className="mt-5 max-w-[58ch] text-[16px] leading-8 text-neutral-700">
                    {cncSystem.description}
                  </p>

                 
                </div>

                <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={cncSystem.image}
                      alt={cncSystem.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

            
            </Container>
          </Section>
        ) : null}

        {/* ADDITIONAL OPERATIONS */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="max-w-[760px]">
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                Dodatne operacije
              </p>

              <h2 className="mt-4 text-[32px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                Standardna celica lahko vključuje dodatne postaje v procesu.
              </h2>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "postaja za pranje kosov",
                  "postaja za graviranje kosov",
                  "postaja za raziglevanje srha",
                  "postaja za dimenzijsko kontrolo kosov",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-neutral-200 bg-white p-5 text-[15px] text-neutral-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        {/* BENEFITS */}
        <Section>
          <Container>
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Modularna zasnova",
                  desc: "Zaradi modularne zasnove so standardne robotske celice cenovno dostopne tudi manjšim podjetjem.",
                },
                {
                  title: "Nizek ROI",
                  desc: "Standardne robotske celice so prvi korak k optimizaciji proizvodnje z robotom in imajo izjemno nizek ROI.",
                },
                {
                  title: "Višja razpoložljivost",
                  desc: "Integracija robotske celice pomaga zvišati kakovost proizvodnje in razpoložljivost CNC strojev.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-neutral-200 bg-white p-7"
                >
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[720px] text-[16px] leading-8 text-neutral-700">
              Standardne robotske celice omogočajo nižanje proizvodnih stroškov
              na hiter in enostaven način.
            </p>
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
                  Je CNC celica prava rešitev za vaš proces?
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pogledamo vaš CNC stroj, način nalaganja, kos,
                  razpoložljiv prostor in dodatne operacije — potem ocenimo,
                  katera konfiguracija celice ima največ smisla.
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
                    alt="CNC robotska celica v proizvodnji"
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
                      Kje pri CNC procesu izgubljate čas, ritem ali
                      razpoložljivost stroja?
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