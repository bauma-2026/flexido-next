import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import { flexidoSystems } from "@/data/flexido-systems";

const immSystem = flexidoSystems.find((system) => system.slug === "flex-7-imm");

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
              src="/video/flexido/hero-standardne-celice-imm.mp4"
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
                IMM stroji
              </h1>

              <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">
                Standardne robotske celice za posluževanje strojev za brizganje
                plastike — z industrijskimi 6-osnimi roboti, dodatnimi
                operacijami in modularnimi postajami.
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
                  IMM avtomatizacija
                </p>

                <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                  Alternativa tradicionalnim linearnim manipulatorjem.
                </h2>
              </div>

              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  Standardne celice Flexido so pri robotskem posluževanju strojev
                  za plastiko odlična alternativa tradicionalnim rešitvam
                  avtomatizacije z linearnimi manipulatorji.
                </p>

                <p>
                  V standardnih robotskih celicah so integrirani 6-osni roboti,
                  ki poleg osnovne funkcije odvzemanja kosov iz orodja nudijo
                  tudi dodatne operacije.
                </p>

                <p>
                  Standardne robotske celice se uporabijo tudi v primerih, ko so
                  stroji inštalirani v proizvodnih prostorih z nizko višino.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* PRODUCT SYSTEM */}
        {immSystem ? (
          <Section className="border-y border-neutral-200 bg-white">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                    Standardna celica
                  </p>

                  <h2 className="mt-4 max-w-[520px] text-[34px] font-semibold leading-tight tracking-[-0.04em] text-neutral-950 sm:text-[44px]">
                    {immSystem.name}
                  </h2>

                  <p className="mt-5 max-w-[58ch] text-[16px] leading-8 text-neutral-700">
                    {immSystem.description}
                  </p>
                </div>

                <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-neutral-100">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={immSystem.image}
                      alt={immSystem.name}
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
                Več kot samo odvzem kosa iz orodja.
              </h2>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "odstranjevanje dolivka",
                  "preverjanje zalitosti kosov",
                  "preverjanje prisotnosti srha ali prelitij",
                  "zaznavanje površinskih napak",
                  "montaža brizganega kosa v celici",
                  "naknadna obdelava brizganega kosa",
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

        {/* PROCESS DETAILS */}
        <Section>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6 text-[16px] leading-8 text-neutral-700">
                <p>
                  V primerih nizke višine proizvodnih prostorov 6-osni roboti
                  poslužujejo stroj za brizganje plastike s strani pri odprtih
                  vratih stroja.
                </p>

                <p>
                  Vmesniki, ki morajo biti predhodno nameščeni na strojih za
                  brizganje plastike, so Euromap 67 in Euromap 63 oziroma
                  Euromap 77.
                </p>

                <p>
                  Standardne robotske celice se pogosto uporabljajo tudi pri
                  vstavljanju insertov v orodje pri procesu nabrizgavanja.
                </p>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                  Modulne postaje
                </p>

                <ul className="mt-5 space-y-3 text-[15px] leading-6 text-neutral-700">
                  <li>vhodna vibrirna postaja</li>
                  <li>drsni paletni sistem</li>
                  <li>sistem vrtljive mize</li>
                  <li>Pick &amp; Place Vision sistem</li>
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* BENEFITS */}
        <Section className="bg-neutral-50">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  title: "Cenovna dostopnost",
                  desc: "Zaradi modularne zasnove so standardne robotske celice cenovno dostopnejše.",
                },
                {
                  title: "Nizek ROI",
                  desc: "Standardne robotske celice so prvi korak k optimizaciji proizvodnje in imajo izjemno nizek ROI.",
                },
                {
                  title: "Višja kakovost",
                  desc: "Celica pomaga zvišati kakovost proizvodnje in razpoložljivost strojev ter proizvodnih sredstev.",
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
              na zelo hiter in enostaven način.
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
                  Je IMM celica prava rešitev za vaš proces?
                </h2>

                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                  Skupaj pogledamo vaš stroj za brizganje plastike, kos,
                  prostor ob stroju, način odvzema in dodatne operacije — potem
                  ocenimo, katera konfiguracija celice ima največ smisla.
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
                    alt="Robotska celica za brizganje plastike"
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
                      Kje pri brizganju plastike izgubljate čas, stabilnost ali
                      ponovljivost procesa?
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