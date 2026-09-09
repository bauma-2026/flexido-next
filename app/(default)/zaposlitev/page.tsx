import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Image from "next/image";
import DarkBand from "@/components/ui/DarkBand";
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                Zaposlitev
              </p>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-[68px]">
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
        <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
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
        </section>

        {/* JOBS */}
        <section id="odprta-mesta" className="bg-[#f6f9fc] py-16 sm:py-20 lg:py-24">
          <Container>
            <div className="space-y-8">
              {jobs.map((job, index) => (
                <article
                  key={job.title}
                  className="overflow-hidden rounded-[30px] border border-neutral-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.055)]"
                >
                  <div className="border-b border-neutral-200 bg-white p-7 sm:p-8 lg:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-6">
                      <div className="max-w-[720px]">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-full bg-[#0089d6] px-3 py-1 text-xs font-medium text-white">
                            {index + 1}/{jobs.length}
                          </span>

                          <p className="text-sm text-neutral-500">
                            {job.date}
                          </p>
                        </div>

                        <h2 className="mt-4 text-3xl font-semibold leading-[1] tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                          <Link href={job.href} className="transition hover:text-neutral-700">
                            {job.title}
                          </Link>
                        </h2>

                        <p className="mt-5 max-w-[68ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
                          {job.summary}
                        </p>
                      </div>

                      <a
                        href="mailto:info@flexido.eu"
                        className="inline-flex shrink-0 items-center rounded-full bg-neutral-950 px-5 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
                      >
                        Prijava →
                      </a>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {job.meta.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-[13px] font-medium text-neutral-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-3">
                      {job.sections.map((section) => (
                        <section key={section.title}>
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

                    <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                        <h3 className="text-[15px] font-semibold text-neutral-950">
                          Opis delovnega okolja
                        </h3>

                        <p className="mt-3 text-[14px] leading-6 text-neutral-600">
                          {job.workEnvironment}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-neutral-950 p-6 text-white">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                          Prijava
                        </p>

                        <p className="mt-3 text-[15px] leading-7 text-white/75">
                          {job.applicationNote}
                        </p>

                        <a
                          href="mailto:info@flexido.eu"
                          className="mt-5 inline-flex items-center rounded-full bg-white px-5 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                        >
                          info@flexido.eu →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>

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