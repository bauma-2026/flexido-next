import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Image from "next/image";
import DarkBand from "@/components/ui/DarkBand";
import Section from "@/components/layout/Section";
import { konstrukterJob } from "@/content/careers/konstrukter";

/** Live SL listing (flexido.eu/zaposlitev) currently shows exactly one active opening, 1/1. */
const jobs = [konstrukterJob];

export default function ZaposlitevPage() {
  return (
    <>
      <Header routeKey="careers" parentKey="aboutUs" />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[var(--color-dark-band)] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/robot.jpg"
              alt="Delo na robotskih celicah Flexido"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[58%_38%] opacity-70"
            />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.2),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)]/90 via-[var(--color-dark-band)]/55 to-[var(--color-dark-band)]/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-band)]/55 via-transparent to-black/15" />

          <Container className="relative z-10 flex min-h-[440px] items-end py-16 sm:min-h-[520px] sm:py-20 lg:min-h-[560px] lg:py-24">
            <div className="max-w-[720px]">
              <p className="eyebrow-on-dark">
                Zaposlitev
              </p>

              <h1 className="text-display mt-4">
                Prosta delovna mesta.
              </h1>

              <p className="mt-6 max-w-[54ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                Iščemo ljudi, ki želijo delati na realnih projektih
                avtomatizacije, robotskih celic in proizvodnih sistemov.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#odprta-mesta"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglej delovna mesta →
                </a>

                <a
                  href="mailto:info@flexido.eu"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  Pošljite prijavo →
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* INTRO */}
        <Section className="border-b border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  Odprta mesta
                </p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  Pridružite se ekipi, ki dela na proizvodnih sistemih.
                </h2>
              </div>

              <div className="max-w-[680px]">
                <p className="text-[16px] leading-7 text-neutral-600">
                  Flexido razvija in integrira robotske celice, proizvodne
                  sisteme in rešitve za avtomatizacijo. Delo je praktično,
                  tehnično in povezano z realnimi izzivi proizvodnje.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* JOBS */}
        <Section id="odprta-mesta" className="surface-muted">
          <Container>
            <div className="space-y-16 lg:space-y-20">
              {jobs.map((job, index) => (
                <article
                  key={job.title}
                  className={index > 0 ? "border-t border-neutral-200 pt-16 lg:pt-20" : undefined}
                >
                  <div className="max-w-[760px]">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="eyebrow">
                        {index + 1}/{jobs.length}
                      </p>
                      <p className="text-[13px] text-neutral-500">{job.date}</p>
                    </div>

                      <a
                        href="mailto:info@flexido.eu"
                        className="inline-flex shrink-0 items-center rounded-full bg-neutral-950 px-5 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                      >
                        <h3 className="text-[15px] font-semibold text-[#0078bd]">
                          {section.title}
                        </h3>

                        <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-6 text-neutral-700">
                          {section.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>

                  <div className="mt-14 grid gap-8 border-t border-neutral-200 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                    <div>
                      <h3 className="text-[15px] font-semibold text-neutral-950">
                        Opis delovnega okolja
                      </h3>

                      <p className="mt-3 max-w-[52ch] text-[14px] leading-6 text-neutral-600">
                        {job.workEnvironment}
                      </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                        <h3 className="text-[15px] font-semibold text-neutral-950">
                          Opis delovnega okolja
                        </h3>

                      <a
                        href="mailto:info@flexido.eu"
                        className="focus-ring mt-5 inline-flex items-center text-[15px] font-semibold text-[#0078bd] transition hover:text-[#0089d6]"
                      >
                        info@flexido.eu →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* FINAL CTA */}
        <DarkBand
          tone="brand"
          eyebrow="Odprta prijava"
          title="Ne vidite pravega mesta?"
          body="Pošljite nam svojo predstavitev, izkušnje in področje, kjer bi lahko prispevali. Če se pojavi prava priložnost, vas kontaktiramo."
          primaryAction={{
            href: "mailto:info@flexido.eu",
            label: "Pošljite odprto prijavo →",
          }}
          backgroundImage={{
            src: "/images/flexido/legacy/s-3.jpg.jpeg",
            alt: "",
          }}
        />
      </main>

      <Footer />
    </>
  );
}