import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/cn";

import { BODY, HEADING, SLOT_ID, SURFACE } from "./roles";
import type { CatalogSlots, OptionGroup } from "./slots";

/**
 * Slot 06 — options, modules and documented configurations. White register,
 * one section, however many groups the product actually documents.
 *
 * Four group kinds exist because the family genuinely documents options four
 * ways; each is declared by content, so this file contains no product
 * conditionals:
 *
 *   rows      dense text matrix — "what the product contains" (IMM, TMX)
 *   tiles     isolated option renders with title + one line (CNC, IMM, FLEX)
 *   captioned option photography carrying only a caption (TMX)
 *   class     a documented module class with its own media (Middleware)
 *
 * What went away: the index-keyed `featured / primary / dense` size variants
 * that gave FLEX 25/50's first, second and third groups three different tile
 * scales and three different container widths purely by array position. Every
 * group now uses one tile grammar and takes its column count from its own
 * item count, so no group orphans a partial row.
 *
 * `object-contain` for `tiles` (isolated renders, several already framed at
 * exactly 4:3) and `object-cover` for `captioned` (full studio photographs
 * that must fill the frame). No tile padding — it insets the visible subject
 * from the text axis the caption aligns to.
 */

/** Columns that divide the group evenly; never thinner than 3. */
function tileColumns(count: number): 3 | 4 {
  if (count % 4 === 0) return 4;
  if (count % 3 === 0) return 3;
  return 4;
}

const TILE_COLUMNS: Record<3 | 4, string> = {
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * Option tile grammar (Pass 2B-2). Below `sm` a tile is a hairline row —
 * a 112px 4:3 image plate on the left, title and description beside it — so
 * an 18-tile FLEX group stays a scannable list instead of two 167px columns
 * of wrapped titles. From `sm` up it is the stacked tile it always was:
 * image plate above open text, no enclosure. Radius comes from the
 * structural token rather than a one-off `rounded-lg`.
 */
const TILE_LIST =
  "mt-6 grid grid-cols-1 border-t border-neutral-200 sm:mt-8 sm:gap-x-4 sm:gap-y-6 sm:border-t-0 lg:gap-5";
const TILE_ITEM = "flex gap-4 border-b border-neutral-200 py-4 sm:block sm:border-b-0 sm:py-0";
const TILE_IMAGE =
  "relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-[var(--radius-structural)] sm:w-auto";

/** `"Name — explanation"` items get the name at slightly more weight. */
function DefinitionList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-y-3">
      {items.map((item) => {
        const separator = item.indexOf(" — ");
        const name = separator === -1 ? null : item.slice(0, separator);
        const explanation = separator === -1 ? null : item.slice(separator + 3);
        return (
          <li key={item} className="grid grid-cols-[8px_1fr] items-start gap-x-3">
            <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
            <span className="max-w-[54ch] text-[15px] leading-6 text-neutral-700">
              {name !== null && explanation !== null ? (
                <>
                  <span className="font-medium text-neutral-900">{name}</span>
                  {" — "}
                  {explanation}
                </>
              ) : (
                item
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function GroupBody({ group }: { group: OptionGroup }) {
  if (group.kind === "rows") {
    const rows = Math.ceil(group.items.length / 2);
    return (
      <div className="mt-8 grid max-w-[760px] border border-neutral-200 sm:grid-cols-2">
        {group.items.map((item, index) => {
          const row = Math.floor(index / 2);
          const isLeftColumn = index % 2 === 0;
          const hasRowPartner = isLeftColumn && index + 1 < group.items.length;
          return (
            <div
              key={item}
              className={cn(
                "px-5 py-3.5",
                row < rows - 1 && "border-b border-neutral-200",
                hasRowPartner && "sm:border-r sm:border-neutral-200"
              )}
            >
              <p className={BODY.matrix}>{item}</p>
            </div>
          );
        })}
      </div>
    );
  }

  if (group.kind === "tiles") {
    const columns = tileColumns(group.items.length);
    return (
      <ul className={cn(TILE_LIST, TILE_COLUMNS[columns])}>
        {group.items.map((item) => (
          <li key={`${item.title}-${item.image.src}`} className={TILE_ITEM}>
            <div className={TILE_IMAGE}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes={`(min-width: 1024px) ${Math.round(88 / columns)}vw, (min-width: 640px) 45vw, 112px`}
                className="object-contain"
              />
            </div>
            <div className="min-w-0 sm:mt-2.5">
              <h4 className={HEADING.tile}>{item.title}</h4>
              <p className={cn("mt-1 max-w-[38ch]", BODY.micro)}>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  if (group.kind === "captioned") {
    const columns = tileColumns(group.tiles.length);
    return (
      <ul className={cn(TILE_LIST, TILE_COLUMNS[columns])}>
        {group.tiles.map((tile) => (
          <li key={tile.src} className={TILE_ITEM}>
            <div className={cn(TILE_IMAGE, "bg-neutral-100")}>
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes={`(min-width: 1024px) ${Math.round(88 / columns)}vw, (min-width: 640px) 45vw, 112px`}
                className="object-cover"
              />
            </div>
            {/* A captioned group has no authored description, only the
                caption. It still carries the tile-title role rather than the
                lighter caption role, so a documented option reads with the
                same first-line weight whether or not a description exists. */}
            <div className="min-w-0 sm:mt-2.5">
              <p className={HEADING.tile}>{tile.alt}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  // kind === "class"
  return (
    <div className="mt-8">
      {group.lead ? <p className={cn("max-w-[70ch]", BODY.strong)}>{group.lead}</p> : null}

      {group.media ? (
        <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] bg-neutral-100">
            {group.media.kind === "video" ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={group.media.alt}
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src={group.media.src} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={group.media.src}
                alt={group.media.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            )}
          </div>
          <div>
            <DefinitionList items={group.items} />
          </div>
        </div>
      ) : group.items.length ? (
        <DefinitionList items={group.items} />
      ) : null}

      {group.tiles?.length ? (
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6">
          {group.tiles.map((tile) => (
            <div key={tile.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-panel)] bg-neutral-100">
                <Image src={tile.src} alt={tile.alt} fill sizes="46vw" className="object-cover" />
              </div>
              {tile.caption ? <p className={cn("mt-3", BODY.small)}>{tile.caption}</p> : null}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function CatalogOptions({
  options,
  needsTopRule = false,
}: {
  options: NonNullable<CatalogSlots["options"]>;
  /** True when no applications band precedes this slot (CNC, Middleware), so
   *  the technical → options boundary has nothing else to mark it (Pass 3). */
  needsTopRule?: boolean;
}) {
  const { groups, absorbsFirstGroupHeading } = options;

  return (
    <Section
      id={SLOT_ID.options}
      className={cn("scroll-mt-24", needsTopRule && "border-t border-neutral-200", SURFACE.white)}
    >
      <Container>
        <div className="max-w-[760px]">
          {options.eyebrow ? <p className="eyebrow">{options.eyebrow}</p> : null}
          <h2 className={cn(options.eyebrow ? "mt-3" : undefined, HEADING.section)}>{options.heading}</h2>
        </div>

        {groups.map((group, index) => {
          const isAbsorbed = absorbsFirstGroupHeading && index === 0;
          /* Several groups are authored with the eyebrow and the heading set
             to the same word ("Prijemala" / "Prijemala"). Printing it twice is
             chrome, not hierarchy, so the eyebrow is dropped when it repeats
             the heading it labels. Content-driven, so no group needs to know
             which product it belongs to. */
          const showGroupEyebrow = group.eyebrow && group.eyebrow !== group.heading;
          return (
            <div
              key={`${group.kind}-${group.heading}`}
              className={cn(
                index > 0 && "mt-14 lg:mt-16",
                /* An umbrella heading means group 0 still prints its own
                   heading, which would otherwise stack straight onto the
                   section h2 and read as a second title line. */
                index === 0 && !isAbsorbed && "mt-10 lg:mt-12"
              )}
            >
              {isAbsorbed ? null : (
                <>
                  {showGroupEyebrow ? <p className="eyebrow">{group.eyebrow}</p> : null}
                  <h3 className={cn(showGroupEyebrow ? "mt-3" : undefined, "max-w-[46ch]", HEADING.subsection)}>
                    {group.heading}
                  </h3>
                </>
              )}
              <GroupBody group={group} />
            </div>
          );
        })}

        {options.note ? (
          <div className="mt-14 border-t border-neutral-200 pt-10 lg:mt-16">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-12">
              <div>
                {options.note.eyebrow ? <p className="eyebrow">{options.note.eyebrow}</p> : null}
                {options.note.heading ? (
                  <h3 className={cn("mt-3", HEADING.subsection)}>{options.note.heading}</h3>
                ) : null}
              </div>
              <div className="max-w-[560px]">
                {options.note.paragraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === 0 ? BODY.strong : cn("mt-4", BODY.card)}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            {options.note.panelItems?.length ? (
              <div className="mt-10 max-w-[520px] border-t border-neutral-200 pt-6">
                {/* Supplementary technical aside, not a card: a hairline and the
                    page surface carry the separation (Pass 2B-3). */}
                {options.note.panelEyebrow ? <p className="eyebrow">{options.note.panelEyebrow}</p> : null}
                <ul className="mt-4 space-y-3 text-[15px] leading-6 text-neutral-700">
                  {options.note.panelItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}

        {options.benefits ? (
          <div className="mt-12 grid gap-8 border-t border-neutral-200 pt-8 sm:grid-cols-2 sm:gap-x-12">
            {options.benefits.items.map((item) => (
              <div key={item.title}>
                <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-neutral-950">{item.title}</h3>
                <p className={cn("mt-1.5 max-w-[46ch]", BODY.small)}>{item.body}</p>
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
