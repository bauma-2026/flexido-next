import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import WikiNav from "@/components/wiki/WikiNav";
import Button from "@/components/ui/Button";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { ServicePageContent } from "@/content/service/types";

export default function ServicePageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: ServicePageContent;
}) {
  const pricingHref = getPath("servicePricing", locale) ?? "/cenik";

  return (
    <>
      <Header locale={locale} routeKey={content.routeKey} />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-[var(--color-dark-band)] pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
          <div className="absolute inset-0">
            <img
              src={content.hero.image.src}
              alt={content.hero.image.alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/75 to-[var(--color-dark-band)]/40" />

          <Container className="relative">
            <p className="eyebrow-on-dark mb-5">{content.hero.eyebrow}</p>
            <div className="max-w-3xl">
              <h1 className="text-display">
                {content.hero.heading}
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/72 sm:text-lg">
                {content.hero.subhead}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={content.hero.primaryCta.href}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.hero.primaryCta.label}
                </a>
                <Link
                  href={pricingHref}
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  {content.hero.secondaryCtaLabel}
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <WikiNav items={content.wikiNav} />

        <Section id={content.coverage.id} className="scroll-mt-24 border-b border-neutral-200 bg-white">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{content.coverage.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {content.coverage.heading}
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-7 text-neutral-600">
                {content.coverage.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section id={content.request.id} className="scroll-mt-24 surface-muted">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="max-w-[520px]">
                <p className="eyebrow">{content.request.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {content.request.heading}
                </h2>
                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  {content.request.body}
                </p>
              </div>
              <ol className="divide-y divide-neutral-200 border-t border-neutral-200">
                {content.request.details.map((detail, index) => (
                  <li key={detail} className="grid grid-cols-[40px_1fr] items-baseline gap-x-4 py-6">
                    <span className="text-[12px] font-medium tabular-nums tracking-[0.14em] text-neutral-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[16px] leading-6 text-neutral-700">{detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        <Section id={content.flow.id} className="scroll-mt-24 border-y border-neutral-200 bg-white">
          <Container>
            <div className="max-w-[760px]">
              <p className="eyebrow">{content.flow.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {content.flow.heading}
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {content.flow.items.map((item) => (
                <div key={item.step} className="rounded-[var(--radius-structural)] border border-neutral-200 bg-white p-7">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-interactive)]">
                    {item.step}
                  </p>
                  <h3 className="mt-5 text-[20px] font-semibold tracking-[-0.03em] text-neutral-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-neutral-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section id={content.equipment.id} className="scroll-mt-24 bg-white">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{content.equipment.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {content.equipment.heading}
              </h2>
              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                {content.equipment.body}
              </p>
            </div>

            <div className="mt-10 grid border-t border-neutral-200 sm:grid-cols-2 sm:divide-x sm:divide-neutral-200">
              {content.equipment.groups.map((group) => (
                <div
                  key={group.title}
                  className="border-b border-neutral-200 py-8 last:border-b-0 sm:border-b-0 sm:px-8 sm:py-10 sm:first:pl-0 sm:last:pr-0"
                >
                  <p className="index-label">{group.number}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-neutral-950">{group.title}</h3>
                  <ul className="mt-5 space-y-3 text-[15px] leading-6 text-neutral-600">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section id={content.pricing.id} className="border-y border-neutral-200 surface-muted">
          <Container>
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
              <div className="max-w-[720px]">
                <p className="eyebrow">{content.pricing.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {content.pricing.heading}
                </h2>
                <p className="mt-4 text-[16px] leading-7 text-neutral-600">{content.pricing.body}</p>
              </div>
              <Link
                href={pricingHref}
                className="inline-flex items-center justify-center rounded-full border border-neutral-950 px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
              >
                {content.pricing.ctaLabel}
              </Link>
            </div>
          </Container>
        </Section>

        <Section id={content.cta.id} variant="large" className="relative overflow-hidden bg-[var(--color-dark-band)]">
          <div className="absolute inset-0 opacity-20">
            <img src={content.cta.image.src} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <Container className="relative">
            <div className="max-w-[720px]">
              <p className="eyebrow-on-dark">{content.cta.eyebrow}</p>
              <h2 className="mt-4 max-w-[16ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
                {content.cta.heading}
              </h2>
              <p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-white/72 sm:text-lg">
                {content.cta.body}
              </p>
              <div className="mt-8">
                <a
                  href={`mailto:${content.cta.mailto}`}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.cta.label}
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer locale={locale} />
    </>
  );
}
