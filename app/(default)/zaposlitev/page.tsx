import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Image from "next/image";
import DarkBand from "@/components/ui/DarkBand";
import Section from "@/components/layout/Section";
import {
  CAREERS_EMAIL,
  konstrukterJob,
  ROLE_DETAIL_LABEL,
} from "@/content/careers/konstrukter";
import SectionHeader from "@/components/ui/SectionHeader";
import { buildAlternates } from "@/i18n/metadata";

/** Live SL listing (flexido.eu/zaposlitev) currently shows exactly one active opening, 1/1. */
const jobs = [konstrukterJob];

export const metadata: Metadata = {
  title: "Zaposlitev — prosta delovna mesta | Flexido",
  description:
    "Odprta delovna mesta pri Flexidu. Delo na robotskih celicah, proizvodnih sistemih in rešitvah za avtomatizacijo.",
  robots: { index: false, follow: false },
  alternates: buildAlternates("careers", "sl"),
};

export default function ZaposlitevPage() {
  return (
    <>
      <Header routeKey="careers" parentKey="aboutUs" />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-[var(--color-dark-band)] text-white">
          <div className="absolute inset-0">
            {/* The branded robot arm sits left-of-centre in the source frame.
                The wide crop keeps it in view on its own; the portrait-ish
                mobile box does not, so the subject is re-centred below `sm`. */}
            <Image
              src="/images/robot.jpg"
              alt="Delo na robotskih celicah Flexido"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[34%_45%] opacity-70 sm:object-[58%_38%]"
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

                {/* Speculative, not role-specific: same label and same bare
                    mailto as the open-application band that closes the page. */}
                <a
                  href={`mailto:${CAREERS_EMAIL}`}
                  className="focus-ring inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white"
                >
                  Pošljite odprto prijavo →
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
                <SectionHeader
                  eyebrow="Odprta mesta"
                  title="Pridružite se ekipi, ki dela na proizvodnih sistemih."
                />
              </div>

              <div className="max-w-[680px]">
                <p className="text-body measure-prose">
                  Flexido razvija in integrira robotske celice, proizvodne
                  sisteme in rešitve za avtomatizacijo. Delo je praktično,
                  tehnično in povezano z realnimi izzivi proizvodnje.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* JOBS — summary entries only. The full description of a role
            (odgovornosti, pričakovanja, kaj nudimo, delovno okolje, navodila
            za prijavo) lives on that role's detail page, so this section stays
            scannable as openings are added. */}
        <Section id="odprta-mesta" className="surface-muted">
          <Container>
            <div className="space-y-12 lg:space-y-16">
              {jobs.map((job, index) => (
                <article
                  key={job.title}
                  className={
                    index > 0
                      ? "border-t border-neutral-200 pt-12 lg:pt-16"
                      : undefined
                  }
                >
                  <div className="max-w-[760px]">
                    <div className="flex flex-wrap items-center gap-3">
                      <p className="eyebrow">
                        {index + 1}/{jobs.length}
                      </p>
                      <p className="text-[13px] text-neutral-500">{job.date}</p>
                    </div>

                    <h2 className="text-section-title mt-4">{job.title}</h2>

                    <p className="text-body mt-4 measure-prose">
                      {job.summary}
                    </p>

                    <dl className="mt-7 grid gap-5 sm:grid-cols-3 sm:gap-6">
                      {job.facts.map((fact) => (
                        <div key={fact.label}>
                          <dt className="eyebrow">{fact.label}</dt>
                          <dd className="mt-1.5 text-[14px] leading-6 text-neutral-700">
                            {fact.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-8">
                      <p className="eyebrow">Kaj boste delali</p>

                      <ul className="measure-prose mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-6 text-neutral-700">
                        {job.preview.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={job.href}
                      className="focus-ring mt-7 -mb-2.5 inline-flex items-center py-2.5 text-[15px] font-semibold text-[#0078bd] underline underline-offset-4 decoration-[#0078bd]/30 transition hover:text-[#0089d6] hover:decoration-[#0089d6]"
                    >
                      {ROLE_DETAIL_LABEL}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* FINAL CTA — speculative application. Deliberately a bare mailto with
            no subject: this is the one path that is not tied to a role. */}
        <DarkBand
          tone="brand"
          eyebrow="Odprta prijava"
          title="Ne vidite pravega mesta?"
          body="Pošljite nam svojo predstavitev, izkušnje in področje, kjer bi lahko prispevali. Če se pojavi prava priložnost, vas kontaktiramo."
          primaryAction={{
            href: `mailto:${CAREERS_EMAIL}`,
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
