import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import DarkBand from "@/components/ui/DarkBand";
import { konstrukterJob } from "@/content/careers/konstrukter";

export default function KonstrukterPage() {
  const job = konstrukterJob;

  return (
    <>
      <Header routeKey="careers" parentKey="aboutUs" />

      <main className="bg-white text-neutral-950">
        {/* HEADER */}
        <section className="border-b border-neutral-200 surface-muted">
          <Container className="pt-8 pb-8 sm:pt-10 sm:pb-9 lg:pt-12 lg:pb-10">
            <Link
              href="/zaposlitev"
              className="inline-flex text-[14px] text-neutral-500 transition hover:text-neutral-950"
            >
              ← Nazaj na zaposlitve
            </Link>

            <div className="mt-6 max-w-[820px]">
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

              <div className="mt-10 grid gap-8 lg:grid-cols-3">
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

              <div className="mt-10 rounded-[var(--radius-structural)] border border-neutral-200 bg-neutral-50 p-6">
                <h3 className="text-[15px] font-semibold text-neutral-950">
                  Opis delovnega okolja
                </h3>

                <p className="mt-3 max-w-[68ch] text-[14px] leading-6 text-neutral-600">
                  {job.workEnvironment}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <DarkBand
          tone="brand"
          eyebrow="Prijava"
          title={job.applicationNote}
          primaryAction={{
            href: "mailto:info@flexido.eu",
            label: "info@flexido.eu →",
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
