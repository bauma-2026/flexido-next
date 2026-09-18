import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProofCard from "@/components/ui/ProofCard";
import WikiNav from "@/components/wiki/WikiNav";
import { flexidoSystems } from "@/data/flexido-systems";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { SolutionPageContent, SolutionSectionBlock } from "@/content/solutions/types";
import { ResolvedFamilyLink, isRouteLink, renderTemplate } from "./links";
import ProblemSplitBlock from "./ProblemSplitBlock";
import SectionHeader from "@/components/ui/SectionHeader";

/**
 * Section background, chosen by what the block *is* — not by its position
 * in the array. Same-role blocks always render the same tone, so reordering
 * or adding a section never silently changes visual meaning.
 *
 *  - white          orientation, explanation, comparison, capability, secondary navigation
 *  - surface-soft   proof — reserved exclusively for documented results
 *
 * Secondary blocks stay on white so proof is always white → soft, never
 * muted (#F2F2F2) adjacent to soft (#E7E7E7). Do not add a fifth surface.
 */
function backgroundForBlock(type: SolutionSectionBlock["type"]): string {
  switch (type) {
    case "proofProject":
    case "proofGrid":
      return "surface-soft";
    default:
      return "bg-white";
  }
}

/** Splits `items` into consecutive slices of the given `sizes` (any remainder becomes a final row). */
/** Ordered-sequence desktop columns; a row never exceeds five steps. */
const SEQUENCE_COLUMNS: Record<number, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

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
      <Header locale={locale} routeKey={content.routeKey} parentKey="solutions" />

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
              <p className="mt-6 eyebrow-on-dark">{content.hero.eyebrow}</p>
              <h1 className="text-display mt-4 max-w-[16ch]">
                {content.hero.titleLines.map((line, index) => (
                  <span key={index} className="block">
                    {line}
                  </span>
                ))}
              </h1>
              <p className="mt-5 max-w-[58ch] text-balance text-[16px] leading-7 text-white/75">{content.hero.subhead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {content.hero.ctas.map((cta, index) => (
                  <a
                    key={cta.anchor}
                    href={cta.anchor}
                    className={
                      index === 0
                        ? "inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                        : "focus-ring inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white"
                    }
                  >
                    {cta.label} <span className="ml-2">→</span>
                  </a>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <WikiNav
          variant="index"
          items={content.wikiNav.map((item) => ({ href: `#${item.id}`, label: item.label }))}
        />

        {content.sections.map((section, index) => (
          <SectionBlock
            key={section.id}
            section={section}
            locale={locale}
            previousType={content.sections[index - 1]?.type}
          />
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
                <h2 className="text-section-title mt-3 measure-heading text-white">
                  {content.kontakt.heading}
                </h2>
                <p className="mt-5 max-w-[58ch] text-balance text-[16px] leading-7 text-white/72 sm:text-lg">{content.kontakt.body}</p>
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
                <SectionHeader
                  eyebrow={content.kontakt.eyebrow}
                  title={content.kontakt.heading}
                  headingClassName="measure-heading"
                  desc={content.kontakt.body}
                  descClassName="measure-prose"
                />
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

function SectionBlock({
  section,
  locale,
  previousType,
}: {
  section: SolutionSectionBlock;
  locale: Locale;
  /** The block rendered immediately above, so a section can own its own top boundary. */
  previousType?: SolutionSectionBlock["type"];
}) {
  switch (section.type) {
    case "problemSplit":
      return <ProblemSplitBlock section={section} />;

    case "intro":
      return (
        <Section id={section.id} className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            <SectionHeader
              className="max-w-[720px]"
              eyebrow={section.eyebrow}
              title={section.heading}
              desc={section.body}
              descClassName="measure-prose"
            />
          </Container>
        </Section>
      );

    case "textOnly":
      return (
        <Section id={section.id} className={`scroll-mt-24 border-y border-neutral-200 ${backgroundForBlock(section.type)}`}>
          <Container>
            <SectionHeader
              className="max-w-[760px]"
              eyebrow={section.eyebrow}
              title={section.heading}
              desc={section.body}
              descClassName="measure-prose"
            />
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
              <SectionHeader
                className="max-w-[580px]"
                eyebrow={section.eyebrow}
                title={section.heading}
                desc={section.body}
                descClassName="measure-prose"
              />
              {/* One hairline grid for both shapes — no gap-px grey fill, no
                  per-cell card border (Pass 2B-3). */}
              <div className={`grid border-l border-t border-neutral-200 ${colsClass}`}>
                {section.items.map((item, itemIndex) =>
                  typeof item === "string" ? (
                    <div key={itemIndex} className="border-b border-r border-neutral-200 p-5 sm:p-6">
                      <p className="text-[15px] font-medium leading-6 text-neutral-950">{item}</p>
                    </div>
                  ) : (
                    <div key={itemIndex} className="border-b border-r border-neutral-200 p-5 sm:p-6">
                      <h3 className="text-list-title">{item.title}</h3>
                      <p className="mt-3 text-balance text-[15px] leading-6 text-neutral-600">{item.body}</p>
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
            <SectionHeader
              className="max-w-[720px]"
              eyebrow={section.eyebrow}
              title={section.heading}
              desc={section.body}
              descClassName="measure-prose"
            />
            {/* A two-way decision, so the pair keeps its own structure — but as a
                hairline grid, not a grey-filled frame. Cells are not clickable;
                only the inline link is (Pass 2B-3). */}
            <div className="mt-10 grid border-l border-t border-neutral-200 lg:grid-cols-2">
              {[section.left, section.right].map((side, sideIndex) => (
                <div key={sideIndex} className="border-b border-r border-neutral-200 p-6 sm:p-8">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{side.tag}</p>
                  <h3 className="text-feature-title mt-3">{side.title}</h3>
                  <p className="mt-4 max-w-[52ch] text-balance text-[15px] leading-6 text-neutral-600">{side.body}</p>
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
      // Pass 2B-2: five presentation branches collapsed into two semantic
      // grammars. `sequence` (content aliases: numberedRows, connectedPath) is
      // the Process step grammar — brand index, tick and dot, ordered list.
      // `peer` (aliases: boxed, openColumns) is an unordered hairline grid —
      // no index, no marks, no hover, no arrow. Column count follows the
      // group count; a trailing odd cell spans the row.
      const isSequence =
        section.layout === "sequence" ||
        section.layout === "numberedRows" ||
        section.layout === "connectedPath";

      // Consecutive capability sections used to touch with no boundary at all
      // (logistics ran 1931px of undivided white). One hairline, owned by the
      // second section, so no neighbour ever draws a double rule (Pass 3).
      const followsCapability = previousType === "capabilityGroups";
      const topRule = followsCapability ? "border-t border-neutral-200 " : "";

      const header = (
        <SectionHeader
          className="max-w-[720px]"
          eyebrow={section.eyebrow}
          title={section.heading}
          desc={section.body}
          descClassName="measure-prose"
        />
      );

      const trailingNote = section.trailingNote ? (
        <div className="mt-8 border-t border-neutral-200 pt-6 text-[15px] leading-7 text-neutral-600">
          {renderTemplate(
            section.trailingNote.template,
            section.trailingNote.links,
            locale,
            "font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-950"
          )}
        </div>
      ) : null;

      if (isSequence) {
        const rows = section.rowSizes ? chunkBySizes(section.groups, section.rowSizes) : [section.groups];
        // Row-start offsets, so an unnumbered step can fall back to its
        // position in the whole sequence without mutating during render.
        const rowOffsets = rows.reduce<number[]>(
          (acc, row, index) => [...acc, (acc[index] ?? 0) + row.length],
          [0]
        );

        return (
          <Section id={section.id} className={`scroll-mt-24 ${topRule}${backgroundForBlock(section.type)}`}>
            <Container>
              {header}
              <div className="relative mt-10 lg:mt-14">
                {/* Mobile: one continuous vertical line through every row. */}
                <span aria-hidden className="absolute left-0 top-1 bottom-1 w-px bg-neutral-200 lg:hidden" />
                {rows.map((row, rowIndex) => {
                  const isLastRow = rowIndex === rows.length - 1;
                  return (
                    <ol
                      key={rowIndex}
                      className={`lg:grid lg:gap-x-8 lg:border-t lg:border-neutral-200 ${
                        SEQUENCE_COLUMNS[Math.min(row.length, 5)]
                      } ${rowIndex > 0 ? "lg:mt-12" : ""}`}
                    >
                      {row.map((group, i) => {
                        const position = (rowOffsets[rowIndex] ?? 0) + i + 1;
                        const isLast = isLastRow && i === row.length - 1;
                        return (
                          <li
                            key={group.title}
                            className={`relative pl-8 lg:pl-0 lg:pt-7 ${isLast ? "pb-0" : "pb-8 lg:pb-0"}`}
                          >
                            <span
                              aria-hidden
                              className="absolute left-0 top-[5px] h-[7px] w-[7px] -translate-x-1/2 rounded-full border-[1.5px] border-[var(--color-brand)] bg-white lg:hidden"
                            />
                            <span
                              aria-hidden
                              className="absolute left-0 top-0 hidden h-7 w-px bg-[var(--color-brand)]/50 lg:block"
                            />
                            <span
                              aria-hidden
                              className="absolute left-0 top-0 hidden h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[var(--color-brand)] bg-white lg:block"
                            />
                            <p className="index-label">{group.number ?? String(position).padStart(2, "0")}</p>
                            <h3 className="mt-3 max-w-[20ch] text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-neutral-950">
                              {group.title}
                            </h3>
                            {group.items ? (
                              <ul className="mt-3 max-w-[34ch] space-y-2 text-[15px] leading-6 text-neutral-600 lg:pr-8">
                                {group.items.map((item) => (
                                  <li key={item}>{item}</li>
                                ))}
                              </ul>
                            ) : group.body ? (
                              <p className="mt-3 max-w-[34ch] text-balance text-[15px] leading-6 text-neutral-600 lg:pr-8">
                                {group.body}
                              </p>
                            ) : null}
                          </li>
                        );
                      })}
                    </ol>
                  );
                })}
              </div>
              {trailingNote}
            </Container>
          </Section>
        );
      }

      const count = section.groups.length;
      const columns = count % 3 === 0 ? 3 : 2;

      return (
        <Section id={section.id} className={`scroll-mt-24 ${topRule}${backgroundForBlock(section.type)}`}>
          <Container>
            {header}
            <div
              className={`mt-10 grid border-l border-t border-neutral-200 ${
                columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
              }`}
            >
              {section.groups.map((group, groupIndex) => (
                <section
                  key={group.title}
                  className={`border-b border-r border-neutral-200 p-5 sm:p-6 ${
                    columns === 2 && count % 2 === 1 && groupIndex === count - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* One title size across the peer grammar: every capability cell
                      carries content (a list or a paragraph), so none is the
                      compact title-only inventory the 16px list role is for. */}
                  <h3 className="text-card-title">{group.title}</h3>
                  {group.items ? (
                    <ul className="mt-3 space-y-2 text-[15px] leading-6 text-neutral-600">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : group.body ? (
                    <p className="mt-3 text-balance text-[15px] leading-6 text-neutral-600">{group.body}</p>
                  ) : null}
                </section>
              ))}
            </div>
            {trailingNote}
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
                <SectionHeader
                  className="max-w-[560px]"
                  eyebrow={section.eyebrow}
                  title={section.heading}
                  desc={section.body}
                  descClassName="measure-prose"
                />
                <div className="grid gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-5">
                  {section.steps.map((step, stepIndex) => {
                    const isLinked = typeof step !== "string";
                    const label = isLinked ? step.label : step;
                    const indexNumber = String(stepIndex + 1).padStart(2, "0");
                    return (
                      <div key={label} className="relative bg-white">
                        {isLinked ? (
                          <a href={step.anchor} className="focus-ring group block p-6">
                            <p className="text-[11px] font-medium tracking-[0.16em] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-700 group-focus-visible:text-neutral-700">
                              {indexNumber}
                            </p>
                            <p className="mt-4 flex items-center gap-1.5 text-[15px] font-semibold leading-6 text-neutral-950">
                              {label}
                              <span
                                className="link-arrow text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:text-neutral-700 group-hover:opacity-100 group-focus-visible:text-neutral-700 group-focus-visible:opacity-100"
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
                <SectionHeader
                  className="max-w-[550px]"
                  eyebrow={section.eyebrow}
                  title={section.heading}
                  desc={section.body}
                  descClassName="measure-prose"
                />
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
                            <span className="text-[12px] font-medium tabular-nums tracking-[0.14em] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-700 group-focus-visible:text-neutral-700">
                              {indexNumber}
                            </span>
                            <p className="flex min-w-0 items-center gap-1.5 text-[16px] font-medium leading-6 tracking-[-0.01em] text-neutral-950">
                              {label}
                              <span
                                className="link-arrow shrink-0 text-neutral-300 opacity-0 transition-opacity duration-300 group-hover:text-neutral-700 group-hover:opacity-100 group-focus-visible:text-neutral-700 group-focus-visible:opacity-100"
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
        const boxHref = isRouteLink(right.link)
          ? (getPath(right.link.routeKey, locale) ?? "#")
          : locale === "sl"
            ? right.link.href
            : null;
        const boxInner = (
          <>
            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{right.tag}</p>
            <h3 className="text-card-title mt-3">{right.title}</h3>
            <p className="mt-3 max-w-[52ch] text-balance text-[15px] leading-6 text-neutral-600">{right.body}</p>
            {boxHref ? (
              <span className="mt-5 inline-flex items-center text-[14px] font-medium text-neutral-700 transition group-hover:text-neutral-950">
                {right.link.label}
                <span className="link-arrow">→</span>
              </span>
            ) : null}
          </>
        );
        return (
          <Section id={section.id} className="scroll-mt-24 border-t border-neutral-200 bg-white">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
                <SectionHeader
                  className="max-w-[560px]"
                  eyebrow={section.eyebrow}
                  title={section.heading}
                  desc={section.body}
                  descClassName="measure-prose"
                />
                <div className="grid border-l border-t border-neutral-200">
                  {boxHref ? (
                    <Link
                      href={boxHref}
                      className="focus-ring group block border-b border-r border-neutral-200 p-6 transition-colors hover:bg-neutral-50 sm:p-7"
                    >
                      {boxInner}
                    </Link>
                  ) : (
                    <div className="border-b border-r border-neutral-200 p-6 sm:p-7">{boxInner}</div>
                  )}
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
        <Section id={section.id} className="scroll-mt-24 border-y border-neutral-200 bg-white">
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
        <Section id={section.id} className="scroll-mt-24 border-t border-neutral-200 bg-white">
          <Container>
            <div className="grid gap-8 border border-neutral-200 bg-white lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="p-7 sm:p-8 lg:p-10">
                <SectionHeader
                  eyebrow={section.eyebrow}
                  title={section.heading}
                  desc={section.body}
                  descClassName="max-w-[52ch]"
                />
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
      // Pass 2B-1: proofProject is the feature member of the proof family.
      // It keeps its two-column editorial composition but shares the family
      // chrome (1px border, radius 12, 4:3 frame on mobile, eyebrow, feature
      // title 24, body rhythm, arrow label). The former `chrome: "open"`
      // borderless variant is folded into the family; `resultTone` still
      // picks the quiet result line versus the accent callout.
      const isQuietResult = section.resultTone === "quiet";
      const proofHref = section.routeKey ? getPath(section.routeKey, locale) : undefined;
      const focal = section.image.objectPosition?.trim().split(/\s+/)[0] ?? "";
      const focalClass = /^object-\[[^\]]+\]$/.test(focal) ? focal : "";

      const card = (
        <>
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 lg:aspect-auto">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-cover ${focalClass} transition-transform duration-500 ${proofHref ? "group-hover:scale-[1.03]" : ""}`}
            />
          </div>
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{section.tag}</p>
            <h3 className="text-feature-title mt-3">{section.title}</h3>
            <p className="text-body mt-4">{section.body}</p>
            {section.result ? (
              isQuietResult ? (
                <p className="mt-5 border-t border-neutral-200 pt-4 text-[15px] font-medium leading-6 text-neutral-800">{section.result}</p>
              ) : (
                <p className="proof-callout mt-5">{section.result}</p>
              )
            ) : null}
            {proofHref ? (
              <p className="mt-7 inline-flex items-center text-[14px] font-medium text-neutral-700 transition-colors duration-300 group-hover:text-neutral-950">
                {section.readMoreLabel}
                <span className="link-arrow">→</span>
              </p>
            ) : null}
          </div>
        </>
      );

      const frame = "grid overflow-hidden rounded-[var(--radius-structural)] border border-neutral-200 bg-white lg:grid-cols-2";

      return (
        <Section id={section.id} variant="large" className={`scroll-mt-24 ${backgroundForBlock(section.type)}`}>
          <Container>
            <SectionHeader
              className="max-w-[720px]"
              eyebrow={section.eyebrow}
              title={section.heading}
            />
            <article className="mt-10">
              {proofHref ? (
                <Link href={proofHref} className={`focus-ring group ${frame} transition-colors duration-300 hover:border-neutral-400`}>
                  {card}
                </Link>
              ) : (
                <div className={frame}>{card}</div>
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
              <SectionHeader
                eyebrow={section.eyebrow}
                title={section.heading}
              />
              {section.body ? <p className="mt-4 text-lg leading-8 text-neutral-600">{section.body}</p> : null}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
              {section.items.map((proof) => (
                <ProofCard
                  key={proof.title}
                  variant="feature"
                  href={proof.routeKey ? (getPath(proof.routeKey, locale) ?? undefined) : undefined}
                  eyebrow={proof.area}
                  title={proof.title}
                  body={proof.body}
                  image={{ src: proof.image.src, alt: proof.title, objectPosition: proof.image.objectPosition }}
                  imageSizes="(min-width: 640px) 50vw, 100vw"
                  resultLabel={section.resultLabel}
                  result={proof.result}
                  linkLabel={section.readMoreLabel}
                />
              ))}
            </div>
          </Container>
        </Section>
      );

    case "ctaBanner":
      return (
        <Section id={section.id} className={`border-y border-neutral-200 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
              <SectionHeader
                className="max-w-[720px]"
                eyebrow={section.eyebrow}
                title={section.heading}
                desc={section.body}
                descClassName="measure-prose"
              />
              <ResolvedFamilyLink
                link={section.cta}
                locale={locale}
                className="focus-ring mt-2 inline-flex items-center text-[14px] font-medium text-neutral-500 transition hover:text-neutral-950 lg:mt-0"
              />
            </div>
          </Container>
        </Section>
      );

    case "relatedSolutions":
      return (
        <Section id={section.id} className={`scroll-mt-24 border-t border-neutral-200 ${backgroundForBlock(section.type)}`}>
          <Container>
            <div className="max-w-[720px]">
              <SectionHeader
                eyebrow={section.eyebrow}
                title={section.heading}
              />
              {section.body ? <p className="text-body mt-5">{section.body}</p> : null}
            </div>
            <div className="mt-10 grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={getPath(item.routeKey, locale) ?? "#"}
                  className="focus-ring group block border-b border-r border-neutral-200 p-6 transition-colors hover:bg-neutral-50 sm:p-7"
                >
                  <h3 className="text-card-title">{item.title}</h3>
                  <p className="mt-3 text-balance text-[15px] leading-6 text-neutral-600">{item.body}</p>
                  <span className="mt-5 inline-flex items-center text-[14px] font-medium text-neutral-700 transition group-hover:text-neutral-950">
                    {section.linkLabel}
                    <span className="link-arrow">→</span>
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
      <SectionHeader
        eyebrow={eyebrow}
        title={heading}
        desc={body}
        descClassName="measure-prose"
      />
      <ResolvedFamilyLink link={link} locale={locale} className="mt-7 inline-flex text-[14px] font-medium text-neutral-700 transition hover:text-neutral-950" />
    </div>
  );
}
