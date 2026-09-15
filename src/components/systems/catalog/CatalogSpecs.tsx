import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/cn";

import { BODY, HEADING, SLOT_ID, SURFACE } from "./roles";
import type { CatalogSlots, SpecRow } from "./slots";

/**
 * Slot 04 — technical data. One canonical grammar for the whole family: a
 * ruled label/value table, quiet uppercase label left, strong value right,
 * hairline between rows.
 *
 * The 2×2 `SpecGrid` tile treatment CNC carried into this pass is retired.
 * Shared-family inspection is what decided it: three of the four products
 * with mechanical specs (IMM, FLEX 25/50, TMX) already used the ruled table;
 * it holds the longest authored values ("2500 × 2360 mm + varnostna ograja",
 * "E67, E78 / E73") on one line where the two-column tile splits them; and it
 * stays compact on a 390px viewport where the tile grid spends roughly 500px
 * on four fields. Reverting is a single component swap here.
 *
 * Two sub-blocks share the register because both are technical documentation,
 * not applications:
 *  - `documentedSystems` — CNC's compact loading/unloading inventory
 *  - `definitions` — Middleware's interfaces and services, whose authored
 *    "Name — explanation" shape *is* a label/value pair. Middleware has no
 *    mechanical specs and none are invented for it.
 */
function SpecTable({ rows, labelWidth }: { rows: SpecRow[]; labelWidth: string }) {
  return (
    <dl className="mt-6 border-t border-neutral-200">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex flex-col gap-1 border-b border-neutral-200 py-4 last:border-b-0 sm:flex-row sm:items-baseline sm:gap-8 sm:py-5"
        >
          <dt className={cn("shrink-0 spec-label", labelWidth)}>{row.label}</dt>
          <dd className="max-w-[58ch] text-[18px] font-medium leading-6 text-neutral-900">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function CatalogSpecs({ technical }: { technical: NonNullable<CatalogSlots["technical"]> }) {
  const hasDefinitions = Boolean(technical.definitions?.length);

  return (
    <Section
      id={SLOT_ID.technical}
      variant="tight"
      className={cn("scroll-mt-24 border-t border-neutral-200", SURFACE.white)}
    >
      <Container>
        <p className="eyebrow">{technical.eyebrow}</p>
        {technical.heading ? (
          <h2 className={cn("mt-3 max-w-[760px]", HEADING.section)}>{technical.heading}</h2>
        ) : null}

        {technical.specs.length ? (
          <div className="max-w-[560px]">
            <SpecTable rows={technical.specs} labelWidth="sm:w-[128px]" />
          </div>
        ) : null}

        {hasDefinitions ? (
          <div className="max-w-[900px]">
            <SpecTable rows={technical.definitions!} labelWidth="sm:w-[280px]" />
          </div>
        ) : null}

        {technical.documentedSystems ? (
          <div className="mt-12">
            <p className="eyebrow">{technical.documentedSystems.eyebrow}</p>
            <h3 className={cn("mt-3 max-w-[46ch]", HEADING.subsection)}>
              {technical.documentedSystems.heading}
            </h3>
            <div className="mt-6 grid border border-neutral-200 sm:grid-cols-3">
              {technical.documentedSystems.items.map((item) => (
                <div
                  key={item}
                  className="border-b border-neutral-200 px-5 py-3.5 last:border-b-0 sm:border-b-0 sm:border-l sm:border-neutral-200 sm:first:border-l-0"
                >
                  <p className={BODY.matrix}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
