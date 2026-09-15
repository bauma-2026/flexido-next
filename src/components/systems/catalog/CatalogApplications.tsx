import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/cn";

import { BODY, HEADING, SLOT_ID, SURFACE } from "./roles";
import type { CatalogSlots } from "./slots";

/**
 * Slot 05 — applications. The muted register, and the only slot that owns it.
 * A closed ruled matrix of peer application areas: outer hairline, internal
 * dividers, calm normal-weight titles, no numbering — these are peers, not a
 * sequence.
 *
 * Column count follows the item count so no row is orphaned (IMM 4, FLEX 4,
 * TMX 3). CNC and Middleware have no authored applications block; the slot
 * stays absent rather than being filled from `flexidoSystems[].applications`,
 * which is Slovenian-only and would leak into EN/DE.
 *
 * FLEX 25/50's example-part signal strip is an application-range signal, so
 * it renders here as a subordinate strip instead of the standalone white
 * section it had — one fewer section, same content, correct register.
 *
 * FLEX 25/50 is the only product that authors `applicationSignals`, and the
 * strip grammar below is deliberately not generalised to the others. IMM has
 * an applications block but no example parts; CNC has neither. Their image
 * grids are `optionGrids` — primary documented-configuration content with
 * titles and descriptions, which owns the full container by right. Capping
 * those to a strip width would demote the main content of those pages.
 */
const COLUMNS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
};

export default function CatalogApplications({
  applications,
}: {
  applications: NonNullable<CatalogSlots["applications"]>;
}) {
  const count = applications.items.length;
  const columns = COLUMNS[count] ?? COLUMNS[3];

  return (
    <Section id={SLOT_ID.applications} className={cn("scroll-mt-24", SURFACE.muted)}>
      <Container>
        <div className="max-w-[760px]">
          <p className="eyebrow">{applications.eyebrow}</p>
          <h2 className={cn("mt-3", HEADING.section)}>{applications.heading}</h2>
        </div>
        <div className={cn("mt-8 grid border border-neutral-200", columns)}>
          {applications.items.map((item) => (
            <div
              key={item}
              className="border-b border-neutral-200 px-6 py-6 last:border-b-0 sm:border-b-0 sm:border-l sm:border-neutral-200 sm:px-8 sm:py-7 sm:first:border-l-0"
            >
              <h3 className={BODY.peer}>{item}</h3>
            </div>
          ))}
        </div>

        {applications.signals ? (
          <div className="mt-12 border-t border-neutral-200 pt-8">
            <p className="eyebrow">{applications.signals.eyebrow}</p>
            <h3 className={cn("mt-3 max-w-[46ch]", HEADING.subsection)}>
              {applications.signals.heading}
            </h3>
            {/* One sizing rule at every width: the group is capped narrower
                than the container and the plate fills its track, so plate size
                is a consequence of (group width / column count) and no cell
                can carry dead air. 320/2 on phones, 416/3 from sm, 848/6 from
                lg — a 125px plate on every desktop width, 152px on every
                phone. Left-aligned throughout, sharing the heading's spine. */}
            <ul className="mt-6 grid max-w-[20rem] grid-cols-2 gap-x-4 gap-y-7 sm:max-w-[26rem] sm:grid-cols-3 sm:gap-x-5 lg:max-w-[53rem] lg:grid-cols-6">
              {applications.signals.items.map((item) => (
                <li key={item.label}>
                  {/* The example-part renders are a mixed set — two JPEGs and
                      one PNG are matted on opaque white, three PNGs carry
                      alpha. Unplated on the muted band that reads as three
                      white squares beside three cut-outs, so every tile gets
                      the same white plate and the set reads as one row. */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-[var(--radius-structural)] bg-white">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(min-width: 1024px) 125px, (min-width: 640px) 126px, 152px"
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-3 text-[14px] leading-5 text-neutral-600">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
