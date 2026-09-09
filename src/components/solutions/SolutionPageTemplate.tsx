import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import WikiNav from "@/components/wiki/WikiNav";
import { flexidoSystems } from "@/data/flexido-systems";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { SolutionPageContent, SolutionSectionBlock } from "@/content/solutions/types";
import { ResolvedFamilyLink, renderTemplate } from "./links";
import ProblemSplitBlock from "./ProblemSplitBlock";

/**
 * Section background, chosen by what the block *is* — not by its position
 * in the array. Same-role blocks always render the same tone, so reordering
 * or adding a section never silently changes visual meaning.
 *
 *  - white          orientation / main explanation (intro, facts, comparison, capability breakdown)
 *  - surface-muted  quiet/secondary (asides, sequences, cross-sell, navigation)
 *  - surface-soft   proof — reserved exclusively for documented results, never reused elsewhere
 */
function backgroundForBlock(type: SolutionSectionBlock["type"]): string {
  switch (type) {
    case "textOnly":
    case "numberedSteps":
    case "ctaBanner":
    case "relatedSolutions":
      return "surface-muted";
    case "proofProject":
    case "proofGrid":
      return "surface-soft";
    case "intro":
    case "problemSplit":
    case "factGrid":
    case "comparisonSplit":
    case "capabilityGroups":
    default:
      return "bg-white";
  }
}

/** Splits `items` into consecutive slices of the given `sizes` (any remainder becomes a final row). */
function chunkBySizes<T>(items: T[], sizes: number[]): T[][] {
  const rows: T[][] = [];
  let offset = 0;
  for (const size of sizes) {
    rows.push(items.slice(offset, offset + size));
    offset += size;
  }
  if (offset < items.length) rows.push(items.slice(offset));
  return rows;
}

export default function SolutionPageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: SolutionPageContent;
}) {
  const hubHref = getPath("solutions", locale) ?? "/";

  return (
    <>
      <Header sticky={false} locale={locale} routeKey={content.routeKey} parentKey="solutions" />

      <main className="bg-white text-neutral-950">
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover opacity-45">
            <source src={content.hero.videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <Link href={hubHref} className="inline-flex text-[13px] text-white/55 transition hover:text-white">
                {content.hero.backLabel}
              </Link>
              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">{content.hero.eyebrow}</p>
              <h1 className="mt-4 max-w-[16ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {content.hero.titleLines.map((line, index) => (
                  <span key={index} className="block max-w-[15ch]">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-white/75">{content.hero.subhead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {content.hero.ctas.map((cta, index) => (
                  <a
                    key={cta.anchor}
                    href={cta.anchor}
                    className={
                      index === 0
                        ? "inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                        : "inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                    }
                  >
                    {cta.label} <span className="ml-2">→</span>
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <WikiNav items={content.wikiNav.map((item) => ({ href: `#${item.id}`, label: item.label }))} />

        {content.sections.map((section) => (
          <SectionBlock key={section.id} section={section} locale={locale} />
        ))}

        {content.kontakt.variant === "photo" ? (
          <Section id="kontakt" variant="large" className="relative overflow-hidden bg-[var(--color-dark-band)]">
            <div className="absolute inset-0 opacity-20">
              <img src={content.kontakt.imageSrc} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <Container className="relative">
              <div className="max-w-[720px]">
                <p className="eyebrow-on-dark">{content.kontakt.eyebrow}</p>
                <h2 className="mt-4 max-w-[16ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
                  {content.kontakt.heading}
                </h2>
                <p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-white/72 sm:text-lg">{content.kontakt.body}</p>
                <div className="mt-8">
                  <a
                    href={`mailto:${content.kontakt.mailto}`}
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                  >
                    {content.kontakt.ctaLabel} <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </Container>
          </Section>
        ) : (
          <Section
            id="kontakt"
            variant="large"
            className={`${content.kontakt.bordered === false ? "" : "border-t border-neutral-200/60 "}bg-white`}
          >
            <Container>
              <div className="max-w-[720px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">{content.kontakt.eyebrow}</p>
                <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
                  {content.kontakt.heading}
                </h2>
                <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-neutral-600 sm:text-[16px]">{content.kontakt.body}</p>
                <div className="mt-8">
                  <a
                    href={`mailto:${content.kontakt.mailto}`}
                    className="inline-flex items-center rounded-full bg-[var(--color-interactive)] px-6 py-3 text-[14px] font-medium text-white transition hover:bg-[var(--color-interactive-hover)]"
                  >
                    {content.kontakt.ctaLabel} <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </Container>
          </Section>
        )}
      </main>

      <Footer locale={locale} />
    </>
  );
}

function SectionBlock({ section, locale }: { section: SolutionSectionBlock; locale: Locale }) {
  switch (section.type) {
    case "problemSplit":
      return <ProblemSplitBlock section={section} />;

    case "intro":
      return (
        <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
              <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
            </div>
          </Container>
        </Section>
      );

    case "textOnly":
      return (
        <Section id={section.id} className={`scroll-mt-24 border-y border-neutral-200 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="max-w-[760px]">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
              <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
            </div>
          </Container>
        </Section>
      );

    case "factGrid": {
      const cols = section.columns ?? 2;
      const colsClass =
        cols === 5
          ? "sm:grid-cols-2 lg:grid-cols-5"
          : cols === 4
            ? "sm:grid-cols-2 lg:grid-cols-4"
            : cols === 3
              ? "sm:grid-cols-2 lg:grid-cols-3"
              : "sm:grid-cols-2";
      const hasCards = section.items.some((item) => typeof item !== "string");

      return (
        <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
              <div className="max-w-[580px]">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
              </div>
              <div className={hasCards ? `grid gap-4 ${colsClass}` : `grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 ${colsClass}`}>
                {section.items.map((item, itemIndex) =>
                  typeof item === "string" ? (
                    <div key={itemIndex} className="bg-white p-5 sm:p-6">
                      <p className="text-[15px] font-medium leading-6 text-neutral-950">{item}</p>
                    </div>
                  ) : (
                    <div key={itemIndex} className="border border-neutral-200 bg-white p-5 sm:p-6">
                      <h3 className="text-[16px] font-semibold text-neutral-950">{item.title}</h3>
                      <p className="mt-3 text-[14px] leading-6 text-neutral-600">{item.body}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            {section.trailingNote ? (
              <div className="mt-8 border-t border-neutral-200 pt-6 text-[15px] leading-7 text-neutral-600">
                {renderTemplate(
                  section.trailingNote.template,
                  section.trailingNote.links,
                  locale,
                  "font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
                )}
              </div>
            ) : null}
          </Container>
        </Section>
      );
    }

    case "comparisonSplit":
      return (
        <Section id={section.id} className={`scroll-mt-24 border-t border-neutral-200 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
              <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 lg:grid-cols-2">
              {[section.left, section.right].map((side, sideIndex) => (
                <div key={sideIndex} className={sideIndex === 0 ? "bg-white p-8 sm:p-9" : "bg-[#f6f9fc] p-8 sm:p-9"}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{side.tag}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-neutral-950">{side.title}</h3>
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-neutral-600">{side.body}</p>
                  {side.link ? (
                    <ResolvedFamilyLink
                      link={side.link}
                      locale={locale}
                      className="mt-7 inline-flex text-[14px] font-medium text-neutral-700 transition hover:text-neutral-950"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </Container>
        </Section>
      );

    case "capabilityGroups": {
      const layout = section.layout ?? "boxed";

      if (layout === "connectedPath") {
        const rows = section.rowSizes ? chunkBySizes(section.groups, section.rowSizes) : [section.groups];

        return (
          <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
            <Container>
              <div className="max-w-[720px]">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
              </div>

              <div className="relative mt-10 lg:mt-14">
                {/* mobile/tablet: single column, shared vertical line (unchanged) */}
                <span aria-hidden className="absolute left-0 top-1 bottom-1 w-px bg-neutral-200 lg:hidden" />
                <ol className="lg:hidden">
                  {section.groups.map((group) => (
                    <li key={group.title} className="relative pb-8 pl-8 last:pb-0">
                      <span
                        aria-hidden
                        className="absolute left-0 top-[5px] h-[7px] w-[7px] -translate-x-1/2 rounded-full border-[1.5px] border-[#1693e6] bg-white"
                      />
                      <p className="index-label">{group.number}</p>
                      <h3 className="mt-2 text-[16px] font-semibold leading-[1.2] tracking-[-0.02em] text-neutral-950">{group.title}</h3>
                      <p className="mt-3 text-[14px] leading-6 text-neutral-500">{group.body}</p>
                    </li>
                  ))}
                </ol>

                {/* desktop/tablet: full-width rows, own shared hairline + nodes per row */}
                <div className="hidden lg:block">
                  {rows.map((row, rowIndex) => (
                    <ol
                      key={rowIndex}
                      className={`grid gap-x-8 border-t border-neutral-200 ${
                        row.length === 2 ? "grid-cols-2" : row.length === 3 ? "grid-cols-3" : "grid-cols-1"
                      } ${rowIndex > 0 ? "mt-12" : ""}`}
                    >
                      {row.map((group) => (
                        <li key={group.title} className="relative pt-7">
                          <span aria-hidden className="absolute left-0 top-0 h-7 w-px bg-[#1693e6]/50" />
                          <span
                            aria-hidden
                            className="absolute left-0 top-0 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[#1693e6] bg-white"
                          />
                          <p className="index-label">{group.number}</p>
                          <h3 className="mt-2 text-[17px] font-semibold leading-[1.2] tracking-[-0.02em] text-neutral-950">{group.title}</h3>
                          <p className="mt-3 text-[14px] leading-6 text-neutral-500">{group.body}</p>
                        </li>
                      ))}
                    </ol>
                  ))}
                </div>
              </div>

              {section.trailingNote ? (
                <div className="mt-8 border-t border-neutral-200 pt-6 text-[15px] leading-7 text-neutral-600">
                  {renderTemplate(
                    section.trailingNote.template,
                    section.trailingNote.links,
                    locale,
                    "font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
                  )}
                </div>
              ) : null}
            </Container>
          </Section>
        );
      }

      if (layout === "openColumns") {
        const cols = section.groups.length;
        const colsClass = cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3";

        return (
          <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
            <Container>
              <div className="max-w-[720px]">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
              </div>

              <div className={`mt-10 grid border-t border-neutral-200 ${colsClass} sm:divide-x sm:divide-neutral-200`}>
                {section.groups.map((group) => (
                  <div
                    key={group.title}
                    className="border-b border-neutral-200 py-8 last:border-b-0 sm:border-b-0 sm:px-8 sm:py-10 sm:first:pl-0 sm:last:pr-0"
                  >
                    {group.number ? <p className="index-label">{group.number}</p> : null}
                    <h3
                      className={`${group.number ? "mt-3 text-xl" : "text-lg"} font-semibold tracking-[-0.02em] text-neutral-950`}
                    >
                      {group.title}
                    </h3>
                    {group.items ? (
                      <ul className="mt-5 space-y-3 text-[15px] leading-6 text-neutral-600">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-4 text-[15px] leading-7 text-neutral-600">{group.body}</p>
                    )}
                  </div>
                ))}
              </div>

              {section.trailingNote ? (
                <div className="mt-8 border-t border-neutral-200 pt-6 text-[15px] leading-7 text-neutral-600">
                  {renderTemplate(
                    section.trailingNote.template,
                    section.trailingNote.links,
                    locale,
                    "font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
                  )}
                </div>
              ) : null}
            </Container>
          </Section>
        );
      }

      return (
        <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div
              className={
                layout === "plainColumns"
                  ? "grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16"
                  : "grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
              }
            >
              <div className="max-w-[540px]">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
              </div>

              {layout === "numberedRows" ? (
                <div className="divide-y divide-neutral-200 border-y border-neutral-200">
                  {section.groups.map((group) => (
                    <section key={group.title} className="grid gap-4 py-6 sm:grid-cols-[48px_minmax(0,1fr)] sm:py-7">
                      <span className="text-[12px] font-medium tracking-[0.14em] text-neutral-400">{group.number}</span>
                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950">{group.title}</h3>
                        {group.body ? (
                          <p className="mt-3 max-w-[58ch] text-[15px] leading-7 text-neutral-600">{group.body}</p>
                        ) : null}
                      </div>
                    </section>
                  ))}
                </div>
              ) : layout === "numberedGrid" ? (
                <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 lg:grid-cols-3">
                  {section.groups.map((group) => (
                    <div key={group.title} className="bg-white p-7 sm:p-8">
                      <p className="text-[11px] font-medium tracking-[0.16em] text-neutral-400">{group.number}</p>
                      <h3 className="mt-5 text-[19px] font-semibold text-neutral-950">{group.title}</h3>
                      <p className="mt-4 text-[15px] leading-7 text-neutral-600">{group.body}</p>
                    </div>
                  ))}
                </div>
              ) : layout === "plainColumns" ? (
                section.rowSizes ? (
                  <div>
                    {chunkBySizes(section.groups, section.rowSizes).map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={`grid gap-8 ${
                          row.length === 2 ? "sm:grid-cols-2" : row.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-1"
                        } ${rowIndex > 0 ? "mt-8 sm:mt-10 sm:border-t sm:border-neutral-200 sm:pt-8" : ""}`}
                      >
                        {row.map((group) => (
                          <div key={group.title}>
                            <h3 className="text-[15px] font-semibold text-neutral-950">{group.title}</h3>
                            <ul className="mt-4 space-y-2 text-[14px] leading-6 text-neutral-600">
                              {group.items?.map((item) => (
                                <li key={item} className="border-b border-neutral-200 pb-2">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-8 sm:grid-cols-3">
                    {section.groups.map((group) => (
                      <div key={group.title}>
                        <h3 className="text-[15px] font-semibold text-neutral-950">{group.title}</h3>
                        <ul className="mt-4 space-y-2 text-[14px] leading-6 text-neutral-600">
                          {group.items?.map((item) => (
                            <li key={item} className="border-b border-neutral-200 pb-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )
              ) : (
                <div className="grid border-l border-t border-neutral-200 sm:grid-cols-2">
                  {section.groups.map((group) => (
                    <section key={group.title} className="border-b border-r border-neutral-200 p-7 sm:p-8">
                      <h3 className="text-lg font-semibold tracking-[-0.02em] text-neutral-950">{group.title}</h3>
                      {group.items ? (
                        <ul className="mt-5 space-y-3 text-[15px] leading-6 text-neutral-600">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-4 text-[15px] leading-7 text-neutral-600">{group.body}</p>
                      )}
                    </section>
                  ))}
                </div>
              )}
            </div>
            {section.trailingNote ? (
              <div className="mt-8 border-t border-neutral-200 pt-6 text-[15px] leading-7 text-neutral-600">
                {renderTemplate(
                  section.trailingNote.template,
                  section.trailingNote.links,
                  locale,
                  "font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
                )}
              </div>
            ) : null}
          </Container>
        </Section>
      );
    }

    case "numberedSteps": {
      const layout = section.layout ?? "list";
      return (
        <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            {layout === "grid" ? (
              <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
                <div className="max-w-[560px]">
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                  <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
                </div>
                <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-5">
                  {section.steps.map((step, stepIndex) => {
                    const isLinked = typeof step !== "string";
                    const label = isLinked ? step.label : step;
                    const indexNumber = String(stepIndex + 1).padStart(2, "0");
                    return (
                      <div key={label} className="relative bg-white">
                        {isLinked ? (
                          <a href={step.anchor} className="focus-ring group block p-6">
                            <p className="text-[11px] font-medium tracking-[0.16em] text-neutral-400 transition-colors duration-300 group-hover:text-[var(--color-interactive)] group-focus-visible:text-[var(--color-interactive)]">
                              {indexNumber}
                            </p>
                            <p className="mt-4 flex items-center gap-1.5 text-[15px] font-semibold leading-6 text-neutral-950">
                              {label}
                              <span
                                className="link-arrow text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:text-[var(--color-interactive)] group-hover:opacity-100 group-focus-visible:text-[var(--color-interactive)] group-focus-visible:opacity-100"
                                aria-hidden
                              >
                                →
                              </span>
                            </p>
                          </a>
                        ) : (
                          <div className="p-6">
                            <p className="text-[11px] font-medium tracking-[0.16em] text-neutral-400">{indexNumber}</p>
                            <p className="mt-4 text-[15px] font-semibold leading-6 text-neutral-950">{label}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
                <div className="max-w-[550px]">
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                  <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
                </div>
                <ol className="w-full lg:max-w-[640px] lg:justify-self-end">
                  {section.steps.map((step, stepIndex) => {
                    const isLinked = typeof step !== "string";
                    const label = isLinked ? step.label : step;
                    const indexNumber = String(stepIndex + 1).padStart(2, "0");
                    return (
                      <li key={label} className="relative">
                        <span
                          aria-hidden
                          className="absolute left-14 right-0 top-0 h-px bg-neutral-200"
                        />
                        {isLinked ? (
                          <a
                            href={step.anchor}
                            className="focus-ring group grid grid-cols-[40px_1fr] items-baseline gap-x-4 py-7"
                          >
                            <span className="text-[12px] font-medium tabular-nums tracking-[0.14em] text-neutral-400 transition-colors duration-300 group-hover:text-[var(--color-interactive)] group-focus-visible:text-[var(--color-interactive)]">
                              {indexNumber}
                            </span>
                            <p className="flex min-w-0 items-center gap-1.5 text-[16px] font-medium leading-6 tracking-[-0.01em] text-neutral-950">
                              {label}
                              <span
                                className="link-arrow shrink-0 text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:text-[var(--color-interactive)] group-hover:opacity-100 group-focus-visible:text-[var(--color-interactive)] group-focus-visible:opacity-100"
                                aria-hidden
                              >
                                →
                              </span>
                            </p>
                          </a>
                        ) : (
                          <div className="grid grid-cols-[40px_1fr] items-baseline gap-x-4 py-7">
                            <span className="text-[12px] font-medium tabular-nums tracking-[0.14em] text-neutral-400">{indexNumber}</span>
                            <p className="min-w-0 text-[16px] font-medium leading-6 tracking-[-0.01em] text-neutral-950">{label}</p>
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}
          </Container>
        </Section>
      );
    }

    case "crossSell": {
      const right = section.right;

      if (right.kind === "box") {
        return (
          <Section id={section.id} className="scroll-mt-24 bg-[#f6f9fc]">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
                <div className="max-w-[560px]">
                  <p className="eyebrow">{section.eyebrow}</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                  <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
                </div>
                <div className="border border-neutral-200 bg-white p-7 sm:p-8">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{right.tag}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-neutral-950">{right.title}</h3>
                  <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-neutral-600">{right.body}</p>
                  <ResolvedFamilyLink link={right.link} locale={locale} className="mt-7 inline-flex text-[14px] font-medium text-neutral-700 transition hover:text-neutral-950" />
                </div>
              </div>
            </Container>
          </Section>
        );
      }

      const isFeature = right.size === "feature";
      const gridColsClass = isFeature
        ? right.reversed
          ? "lg:grid-cols-[1.08fr_1fr]"
          : "lg:grid-cols-[1fr_1.08fr]"
        : right.reversed
          ? "lg:grid-cols-[340px_minmax(0,1fr)]"
          : "lg:grid-cols-[minmax(0,1fr)_340px]";

      return (
        <Section id={section.id} className="scroll-mt-24 border-y border-neutral-200 surface-muted">
          <Container>
            <div className={`grid gap-10 lg:items-center lg:gap-16 ${gridColsClass}`}>
              {right.reversed ? (
                <>
                  <CrossSellImage src={right.src} alt={right.alt} feature={isFeature} />
                  <CrossSellText eyebrow={section.eyebrow} heading={section.heading} body={section.body} link={right.link} locale={locale} />
                </>
              ) : (
                <>
                  <CrossSellText eyebrow={section.eyebrow} heading={section.heading} body={section.body} link={right.link} locale={locale} />
                  <CrossSellImage src={right.src} alt={right.alt} feature={isFeature} />
                </>
              )}
            </div>
          </Container>
        </Section>
      );
    }

    case "productCrossSell": {
      const system = flexidoSystems.find((entry) => entry.slug === section.systemSlug);
      if (!system) return null;

      return (
        <Section id={section.id} className="scroll-mt-24 bg-[#f6f9fc]">
          <Container>
            <div className="grid gap-8 border border-neutral-200 bg-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="p-7 sm:p-8 lg:p-10">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                <p className="mt-5 max-w-[52ch] text-[16px] leading-7 text-neutral-600">{section.body}</p>
                <ResolvedFamilyLink link={section.link} locale={locale} className="mt-7 inline-flex text-[14px] font-medium text-neutral-700 transition hover:text-neutral-950" />
              </div>
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={system.image}
                  alt={section.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={
                    section.systemSlug === "tmx" ? "object-contain p-4" : "object-cover"
                  }
                />
              </div>
            </div>
          </Container>
        </Section>
      );
    }

    case "proofProject": {
      const isOpenChrome = section.chrome === "open";
      const isQuietResult = section.resultTone === "quiet";

      const card = (
        <>
          <div className="relative aspect-[16/10] overflow-hidden bg-neutral-300 lg:aspect-auto">
            <Image src={section.image.src} alt={section.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className={`object-cover ${section.image.objectPosition ?? ""} transition-transform duration-500 group-hover:scale-[1.02]`} />
          </div>
          <div className="p-7 sm:p-8 lg:p-10">
            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{section.tag}</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-neutral-950 sm:text-3xl">{section.title}</h3>
            <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p>
            {section.result ? (
              isQuietResult ? (
                <p className="mt-5 border-t border-neutral-200 pt-4 text-[15px] font-medium leading-7 text-neutral-800">{section.result}</p>
              ) : (
                <p className="proof-callout mt-5">{section.result}</p>
              )
            ) : null}
            {section.routeKey && getPath(section.routeKey, locale) ? (
              <p className="mt-8 inline-flex text-[14px] font-medium text-neutral-700 transition group-hover:text-neutral-950">
                {section.readMoreLabel} <span className="ml-2">→</span>
              </p>
            ) : null}
          </div>
        </>
      );

      return (
        <Section id={section.id} variant="large" className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
            </div>
            <article
              className={`mt-10 grid overflow-hidden bg-white lg:grid-cols-2 ${isOpenChrome ? "" : "border border-neutral-200"}`}
            >
              {section.routeKey && getPath(section.routeKey, locale) ? (
                <Link href={getPath(section.routeKey, locale)!} className="group contents">
                  {card}
                </Link>
              ) : (
                <div className="contents">{card}</div>
              )}
            </article>
          </Container>
        </Section>
      );
    }

    case "proofGrid":
      return (
        <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
              {section.body ? <p className="mt-4 text-lg leading-8 text-neutral-600">{section.body}</p> : null}
            </div>
            <div className="mt-10 grid gap-9 lg:grid-cols-2 lg:gap-x-11 xl:gap-x-14">
              {section.items.map((proof) => {
                const inner = (
                  <>
                    <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                      <Image
                        src={proof.image.src}
                        alt={proof.title}
                        width={proof.image.width}
                        height={proof.image.height}
                        className={`h-full w-full object-cover ${proof.image.objectPosition ?? ""} transition-transform duration-500 group-hover:scale-[1.02]`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col border-t border-neutral-200 px-5 pb-5 pt-6 sm:px-6 sm:pb-6 sm:pt-7">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{proof.area}</p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-neutral-950">{proof.title}</h3>
                      <p className="mt-3 leading-7 text-neutral-600">{proof.body}</p>
                      <div className="mt-auto">
                        {proof.result ? (
                          <div className="mt-4">
                            {section.resultLabel ? (
                              <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{section.resultLabel}</p>
                            ) : null}
                            <p className="mt-1.5 text-[14px] leading-6 text-neutral-600">{proof.result}</p>
                          </div>
                        ) : null}
                        {proof.routeKey && getPath(proof.routeKey, locale) ? (
                          <span className="mt-4 inline-flex items-center text-[14px] font-medium text-neutral-700 transition group-hover:text-neutral-950">
                            {section.readMoreLabel} <span className="ml-2">→</span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </>
                );

                return (
                  <article key={proof.title} className="flex h-full flex-col bg-white">
                    {proof.routeKey && getPath(proof.routeKey, locale) ? (
                      <Link href={getPath(proof.routeKey, locale)!} className="group flex flex-1 flex-col">
                        {inner}
                      </Link>
                    ) : (
                      <div className="flex flex-1 flex-col">{inner}</div>
                    )}
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>
      );

    case "ctaBanner":
      return (
        <Section id={section.id} className={`border-y border-neutral-200 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
              <div className="max-w-[720px]">
                <p className="eyebrow">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
                <p className="mt-4 text-[16px] leading-7 text-neutral-600">{section.body}</p>
              </div>
              <ResolvedFamilyLink
                link={section.cta}
                locale={locale}
                className="inline-flex items-center justify-center rounded-full border border-neutral-950 px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
              />
            </div>
          </Container>
        </Section>
      );

    case "relatedSolutions":
      return (
        <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{section.heading}</h2>
              {section.body ? <p className="mt-5 text-[16px] leading-7 text-neutral-600">{section.body}</p> : null}
            </div>
            <div className="mt-10 grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={getPath(item.routeKey, locale) ?? "#"}
                  className="group border-b border-r border-neutral-200 p-6 transition-colors hover:bg-neutral-50 sm:p-7"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-neutral-950">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-neutral-600">{item.body}</p>
                  <span className="mt-6 inline-flex text-[14px] font-medium text-neutral-600 transition group-hover:text-neutral-950">
                    {section.linkLabel} <span className="ml-2">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      );

    case "crossLinksParagraph":
      return (
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-16 text-[15px] leading-7 text-neutral-600 sm:px-6 lg:px-8">
          {renderTemplate(section.template, section.links, locale, "font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950")}
        </div>
      );

    default:
      return null;
  }
}

function CrossSellImage({ src, alt, feature }: { src: string; alt: string; feature?: boolean }) {
  if (feature) {
    return (
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-neutral-300">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 340px, 100vw" className="object-cover" />
    </div>
  );
}

function CrossSellText({
  eyebrow,
  heading,
  body,
  link,
  locale,
}: {
  eyebrow: string;
  heading: string;
  body: string;
  link: import("@/content/solutions/types").FamilyExternalLink | import("@/content/solutions/types").RouteLink;
  locale: Locale;
}) {
  return (
    <div className="max-w-[680px]">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{heading}</h2>
      <p className="mt-5 text-[16px] leading-7 text-neutral-600">{body}</p>
      <ResolvedFamilyLink link={link} locale={locale} className="mt-7 inline-flex text-[14px] font-medium text-neutral-700 transition hover:text-neutral-950" />
    </div>
  );
}
