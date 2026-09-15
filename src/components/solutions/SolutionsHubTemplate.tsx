import Link from "next/link";
import ProofCard from "@/components/ui/ProofCard";

import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import RuledRowList from "@/components/ui/RuledRowList";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { HubContent } from "@/content/solutions/types";
import { ResolvedFamilyLink, isRouteLink, renderTemplate } from "./links";

export default function SolutionsHubTemplate({ locale, content }: { locale: Locale; content: HubContent }) {
  return (
    <>
      <Header locale={locale} routeKey="solutions" />

      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden bg-[var(--color-dark-band)] pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
          <div className="absolute inset-0">
            <img
              src="/images/standardne-celice/hero.webp"
              alt=""
              className="h-full w-full object-cover object-[70%_center] lg:object-[42%_center]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/75 to-[var(--color-dark-band)]/40" />

          <Container className="relative">
            <p className="eyebrow-on-dark mb-5">{content.hero.eyebrow}</p>
            <div className="max-w-3xl">
              <h1 className="text-display">{content.hero.heading}</h1>
              <p className="mt-6 max-w-2xl text-balance text-[17px] leading-8 text-white/72 sm:text-lg">{content.hero.subhead}</p>
              <Button href="#resitve-grid" variant="light" className="mt-9">
                {content.hero.ctaLabel} <span className="ml-2">→</span>
              </Button>
            </div>
          </Container>
        </section>

        <Section id="resitve-grid" className="surface-muted scroll-mt-24">
          <Container>
            <SectionHeader
              className="max-w-[760px]"
              eyebrow={content.hero.eyebrow}
              title={content.gridHeading}
              desc={content.gridBody}
              descClassName="measure-prose"
            />
            <RuledRowList
              className="mt-8 lg:mt-10"
              items={content.gridItems.map((item) => ({
                href: getPath(item.routeKey, locale) ?? "#",
                title: item.title,
                desc: item.desc,
              }))}
            />
          </Container>
        </Section>

        <Section className="border-y border-neutral-200 bg-white">
          <Container>
            <SectionHeader
              className="max-w-2xl"
              eyebrow={content.widerApproach.eyebrow}
              title={content.widerApproach.heading}
            />

            <div className="mt-10 grid border-l border-t border-neutral-200 sm:grid-cols-2">
              {content.widerApproach.paths.map((path) => (
                <Link
                  key={path.routeKey}
                  href={getPath(path.routeKey, locale) ?? "#"}
                  className="focus-ring group flex h-full flex-col border-b border-r border-neutral-200 p-6 transition-colors duration-300 hover:bg-neutral-50 sm:p-7"
                >
                  <h3 className="text-card-title">{path.title}</h3>
                  <p className="mt-3 max-w-[42ch] text-[15px] leading-6 text-neutral-600">{path.body}</p>
                  <span className="mt-auto inline-flex items-center pt-5 text-[14px] font-medium text-neutral-700 transition-colors duration-300 group-hover:text-neutral-950">
                    {content.widerApproach.linkLabel}
                    <span className="link-arrow">→</span>
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-10 max-w-2xl border-t border-neutral-200 pt-6 text-balance text-[14px] leading-[22px] text-neutral-600">
              {renderTemplate(
                content.widerApproach.footNote.template,
                [content.widerApproach.footNote.link],
                locale,
                "font-medium text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950 hover:text-neutral-950"
              )}
            </p>
          </Container>
        </Section>

        <Section className="surface-soft">
          <Container>
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow={content.proof.eyebrow}
                title={content.proof.heading}
              />
              <p className="mt-4 text-balance text-lg leading-8 text-neutral-600">{content.proof.body}</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {content.proof.items.map((proof) => (
                <ProofCard
                  key={proof.title}
                  variant="feature"
                  href={proof.routeKey ? (getPath(proof.routeKey, locale) ?? undefined) : undefined}
                  eyebrow={proof.area}
                  title={proof.title}
                  body={proof.body}
                  image={{ src: proof.image.src, alt: proof.title, objectPosition: proof.image.objectPosition }}
                  imageSizes="(min-width: 640px) 50vw, 100vw"
                  linkLabel={content.proof.readMoreLabel}
                />
              ))}
            </div>
          </Container>
        </Section>

        <section className="border-t border-neutral-200 bg-white py-7 sm:py-9">
          <Container>
            <div className="grid items-end gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10">
              <div className="max-w-xl">
                <p className="eyebrow">{content.unsure.eyebrow}</p>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-2xl">{content.unsure.heading}</h2>
                <p className="mt-1.5 text-[15px] leading-6 text-neutral-600">{content.unsure.body}</p>
              </div>
              {isRouteLink(content.unsure.cta) ? (
                <Link
                  href={getPath(content.unsure.cta.routeKey, locale) ?? "#"}
                  className="focus-ring group inline-flex items-center text-[14px] font-medium text-neutral-700 transition-colors duration-300 hover:text-neutral-950"
                >
                  {content.unsure.cta.label}
                  <span className="link-arrow">→</span>
                </Link>
              ) : (
                <ResolvedFamilyLink
                  link={content.unsure.cta}
                  locale={locale}
                  className="focus-ring inline-flex items-center text-[14px] font-medium text-neutral-700 transition-colors duration-300 hover:text-neutral-950"
                />
              )}
            </div>
          </Container>
        </section>

        <section className="relative overflow-hidden bg-[var(--color-dark-band)] py-20 sm:py-28">
          <div className="absolute inset-0 opacity-20">
            <img src="/images/flexido/legacy/s-3.jpg.jpeg" alt="" className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <Container className="relative">
            <div className="max-w-3xl">
              <p className="eyebrow-on-dark">{content.finalCta.eyebrow}</p>
              <h2 className="text-section-title mt-3 text-white">{content.finalCta.heading}</h2>
              <p className="mt-6 max-w-2xl text-balance text-[16px] leading-7 text-white/72 sm:text-lg">{content.finalCta.body}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`mailto:${content.finalCta.mailto}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  {content.finalCta.ctaLabel} <span className="ml-2">→</span>
                </a>
                <a
                  href={`mailto:${content.finalCta.mailto}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white"
                >
                  {content.finalCta.mailto}
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
