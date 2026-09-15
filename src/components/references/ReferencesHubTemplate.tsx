import Link from "next/link";
import ProofCard from "@/components/ui/ProofCard";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import RuledRowList from "@/components/ui/RuledRowList";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { ReferencesHubContent } from "@/content/references/types";
import { getReferenceSummaries } from "@/content/references";

export default function ReferencesHubTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: ReferencesHubContent;
}) {
  const projects = getReferenceSummaries(locale);
  const solutionsHref = getPath("solutions", locale) ?? "/resitve";
  const primaryHref = content.hero.primaryCta.href.startsWith("#")
    ? content.hero.primaryCta.href
    : solutionsHref;

  return (
    <>
      <Header locale={locale} routeKey={content.routeKey} />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          >
            <source src={content.hero.videoSrc} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <p className="eyebrow-on-dark">
                {content.hero.eyebrow}
              </p>

              <h1 className="text-display mt-4 max-w-[13ch]">
                {content.hero.heading}
              </h1>

              <p className="mt-6 max-w-[58ch] text-[16px] leading-7 text-white/75 sm:text-lg">
                {content.hero.subhead}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={primaryHref}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.hero.primaryCta.label}
                </Link>

                <a
                  href={content.hero.secondaryCta.href}
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-white/10"
                >
                  {content.hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* The site's dedicated proof page uses the proof register, not the generic
            structural pause (Pass 3). */}
        <Section id="projekti" className="surface-soft">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{content.projects.eyebrow}</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {content.projects.heading}
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                {content.projects.body}
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map(({ shared, content: project }) => {
                const href = getPath(shared.routeKey, locale);
                if (!href) return null;

                    variant="grid"
                return (
                  <ProofCard
                    key={shared.id}
                    href={href}
                    eyebrow={project.summary.area}
                    title={project.summary.title}
                    body={project.summary.body}
                    image={{ src: shared.image.src, alt: project.imageAlt, objectPosition: shared.image.objectPosition }}
                    linkLabel={content.projects.readMoreLabel}
                  />
                );
              })}
            </div>
          </Container>
        </Section>

        <Section className="bg-white">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{content.areas.eyebrow}</p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                {content.areas.heading}
              </h2>

              <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                {content.areas.body}
              </p>
            />

            <RuledRowList
              className="mt-8 lg:mt-10"
              items={content.areas.items.flatMap((item) => {
                const href = getPath(item.routeKey, locale);
                if (!href) return [];
                return [{ href, title: item.title, desc: item.body }];
              })}
            </div>
          </Container>
        </Section>

        <Section className="border-t border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
              <div>
                <p className="eyebrow">{content.principles.eyebrow}</p>

                <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                  {content.principles.heading}
                </h2>
              </div>

              <div className="lg:border-l lg:border-neutral-200 lg:pl-10">
                {content.principles.items.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-neutral-200 py-6 first:pt-0 last:border-b-0 last:pb-0"
                  >
                    <h3 className="text-[16px] font-semibold tracking-[-0.02em] text-neutral-950">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[15px] leading-6 text-neutral-600">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        <Section
          id={content.cta.id}
          variant="large"
          className="relative overflow-hidden bg-[var(--color-dark-band)]"
        >
          <div className="absolute inset-0 opacity-20">
            <img
              src="/images/systems/raw/vhodno-izhodna-tracna-proga.png"
              alt=""
              className="h-full w-full object-cover object-[70%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <Container className="relative">
            <div className="max-w-[720px]">
              <p className="eyebrow-on-dark">{content.cta.eyebrow}</p>

              <h2 className="mt-4 max-w-[20ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
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
