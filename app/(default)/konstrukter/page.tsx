import type { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import DarkBand from "@/components/ui/DarkBand";
import {
  konstrukterJob,
  roleApplicationMailto,
  ROLE_APPLY_LABEL,
} from "@/content/careers/konstrukter";
import { buildAlternates } from "@/i18n/metadata";

const job = konstrukterJob;
const applyHref = roleApplicationMailto(job);

export const metadata: Metadata = {
  title: "Konstrukter — prosto delovno mesto | Flexido",
  description:
    "Konstrukter pri Flexidu: razvoj in projektiranje fleksibilnih robotskih celic, konstrukcija sklopov in vpenjal za CNC stroje ter priprava tehnične dokumentacije.",
  robots: { index: false, follow: false },
  alternates: buildAlternates("careers", "sl"),
};

export default function KonstrukterPage() {
  return (
    <>
      <Header routeKey="careers" parentKey="aboutUs" />

      <main className="bg-white text-neutral-950">
        {/* HEADER — carries the role's facts and its own apply CTA, so the
            candidate never has to read the full description to find the way in. */}
        <section className="border-b border-neutral-200 surface-muted">
          <Container className="pt-6 pb-8 sm:pt-8 sm:pb-9 lg:pt-10 lg:pb-10">
            <Link
              href="/zaposlitev"
              className="focus-ring -ml-1 inline-flex items-center rounded-full px-1 py-2 text-[14px] text-neutral-500 transition hover:text-neutral-950"
            >
              ← Nazaj na zaposlitve
            </Link>

            <div className="mt-5 max-w-[820px]">
              <p className="eyebrow">
                Zaposlitev
              </p>

              <h1 className="text-document-title mt-4">
                {job.title}
              </h1>

              <p className="mt-3 text-[14px] text-neutral-500">{job.date}</p>

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
                <Button href={applyHref}>{ROLE_APPLY_LABEL}</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* BODY */}
        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <Container>
            <div className="max-w-[900px]">
              <div className="flex flex-wrap gap-2">
                {job.meta.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-[13px] font-medium text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Section order is the candidate journey — the work, then what
                  the role gives back, then what it asks for. Headings are H2
                  (the only level under the H1) at the compact card size; they
                  stay neutral so nothing static wears the link colour. */}
              <div className="mt-10 grid gap-8 lg:grid-cols-3">
                {job.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-[15px] font-semibold text-neutral-950">
                      {section.title}
                    </h2>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[14px] leading-6 text-neutral-700">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="mt-10 rounded-[var(--radius-structural)] border border-neutral-200 bg-neutral-50 p-6">
                <h2 className="text-[15px] font-semibold text-neutral-950">
                  Opis delovnega okolja
                </h2>

                <p className="mt-3 max-w-[68ch] text-[14px] leading-6 text-neutral-600">
                  {job.workEnvironment}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA — short heading, the application instruction as body copy,
            and a role-specific mailto that names the role in the draft. */}
        <DarkBand
          tone="brand"
          eyebrow="Prijava"
          title={`Prijavite se na delovno mesto ${job.title}.`}
          body={job.applicationNote}
          primaryAction={{
            href: applyHref,
            label: ROLE_APPLY_LABEL,
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
