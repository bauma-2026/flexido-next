import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import type { ContactPageContent } from "@/content/contact/types";
import { contactFacts } from "@/content/contact/shared";

export default function ContactPageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: ContactPageContent;
}) {
  return (
    <>
      <Header locale={locale} routeKey={content.routeKey} />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.025),transparent)]" />

          <Container className="relative py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div className="max-w-[720px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  {content.hero.eyebrow}
                </p>

                <h1 className="mt-4 max-w-[13ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-neutral-950 sm:text-6xl lg:text-[68px]">
                  {content.hero.heading}
                </h1>

                <p className="mt-6 max-w-[56ch] text-[17px] leading-8 text-neutral-600">
                  {content.hero.subhead}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={contactFacts.emailHref}>
                    {content.hero.primaryCtaLabel}
                  </Button>

                  <a
                    href={contactFacts.phoneHref}
                    className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
                  >
                    {content.hero.secondaryCtaLabel}
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  {content.hero.stepsEyebrow}
                </p>

                <div className="mt-6 space-y-5">
                  {content.hero.steps.map((item) => (
                    <div
                      key={item.title}
                      className="border-b border-neutral-200 pb-5 last:border-b-0 last:pb-0"
                    >
                      <h2 className="text-[16px] font-semibold text-neutral-950">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Section className="bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="max-w-[520px]">
                <p className="eyebrow">{content.details.eyebrow}</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {content.details.heading}
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  {content.details.body}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <a
                  href={contactFacts.emailHref}
                  className="rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    {content.details.emailLabel}
                  </p>

                  <p className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-neutral-950">
                    {contactFacts.email}
                  </p>
                </a>

                <a
                  href={contactFacts.phoneHref}
                  className="rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                >
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    {content.details.phoneLabel}
                  </p>

                  <p className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-neutral-950">
                    {contactFacts.phoneDisplay}
                  </p>
                </a>

                <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-6 sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    {content.details.companyLabel}
                  </p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-[13px] font-medium text-neutral-950">
                        {content.details.companyNameLabel}
                      </p>

                      <p className="mt-1 text-[14px] leading-6 text-neutral-600">
                        {contactFacts.companyName}
                      </p>
                    </div>

                    <div>
                      <p className="text-[13px] font-medium text-neutral-950">
                        {content.details.registeredOfficeLabel}
                      </p>

                      <p className="mt-1 text-[14px] leading-6 text-neutral-600">
                        {contactFacts.registeredAddress}
                      </p>
                    </div>

                    <div>
                      <p className="text-[13px] font-medium text-neutral-950">
                        {content.details.businessUnitLabel}
                      </p>

                      <p className="mt-1 text-[14px] leading-6 text-neutral-600">
                        {contactFacts.businessUnitAddress}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-6 sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    {content.details.topicsLabel}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {content.details.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[13px] font-medium text-neutral-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <section className="bg-neutral-950 text-white">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[680px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  {content.final.eyebrow}
                </p>

                <h2 className="mt-4 max-w-[14ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                  {content.final.heading}
                </h2>

                <p className="mt-5 max-w-[54ch] text-[16px] leading-7 text-white/65">
                  {content.final.body}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href={contactFacts.emailHref}
                  className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.final.emailCta}
                </a>

                <a
                  href={contactFacts.phoneHref}
                  className="inline-flex w-fit items-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white"
                >
                  {content.final.phoneCta}
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
