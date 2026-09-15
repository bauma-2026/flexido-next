import Link from "next/link";

import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";
import DecisionRegister from "@/components/lab/resitve-register/DecisionRegister";
import { getRegisterFamilies } from "@/components/lab/resitve-register/families";
import { getHubContent } from "@/content/solutions";
import { getPath } from "@/i18n/routes";

const locale = "sl" as const;

/**
 * LAB — `/resitve` first body section experiment.
 *
 * Renders the real hub hero above the candidate section so it can be judged in
 * position, and the real "Širši pristop" section below it so the redundancy
 * question is visible rather than theoretical. Both of those are copies of the
 * production markup; production `SolutionsHubTemplate` is untouched.
 */
export default function ResitveRegisterLab() {
  const content = getHubContent(locale);
  const families = getRegisterFamilies(locale);

  return (
    <>
      <Header locale={locale} routeKey="solutions" />

      <main className="overflow-x-hidden">
        {/* Real hub hero — copied for context, not modified. */}
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
              <h1 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {content.hero.heading}
              </h1>
              <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/72 sm:text-lg">
                {content.hero.subhead}
              </p>
              <Button href="#resitve-grid" variant="light" className="mt-9">
                {content.hero.ctaLabel} <span className="ml-2">→</span>
              </Button>
            </div>
          </Container>
        </section>

        {/* CANDIDATE — replaces the 4-row compact grid. */}
        <DecisionRegister
          eyebrow={content.hero.eyebrow}
          heading={content.gridHeading}
          body={content.gridBody}
          registerLabel="Področja"
          families={families}
        />

        {/* Real "Širši pristop" section — copied so the overlap with rows
            05 and 06 of the register is visible in place. */}
        <section className="border-y border-neutral-200 bg-white py-16 sm:py-20">
          <Container>
            <div className="max-w-2xl">
              <p className="eyebrow">{content.widerApproach.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                {content.widerApproach.heading}
              </h2>
            </div>

            <div className="mt-10 grid border-t border-neutral-200 sm:grid-cols-2 sm:divide-x sm:divide-neutral-200">
              {content.widerApproach.paths.map((path) => (
                <Link
                  key={path.routeKey}
                  href={getPath(path.routeKey, locale) ?? "#"}
                  className="focus-ring group flex h-full flex-col border-b border-neutral-200 py-8 transition-colors duration-300 last:border-b-0 sm:border-b-0 sm:py-10 sm:first:pr-10 sm:last:pl-10 lg:first:pr-14 lg:last:pl-14"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950 sm:text-[22px]">
                    {path.title}
                  </h3>
                  <p className="mt-3 max-w-[42ch] leading-7 text-neutral-600">{path.body}</p>
                  <span className="mt-auto inline-flex items-center pt-7 text-[14px] font-medium text-neutral-700 transition-colors duration-300 group-hover:text-neutral-950">
                    {content.widerApproach.linkLabel}
                    <span className="link-arrow">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
