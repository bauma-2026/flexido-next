import type { FlexidoSystem } from "@/data/flexido-systems";
import type { Locale } from "@/i18n/config";
import type { RouteKey } from "@/i18n/routes";
import type {
  ApplicationSignalsBlock,
  BenefitsBlock,
  DetailPanelBlock,
  ItemGridBlock,
  OptionThumbnailItem,
  SystemPageContent,
} from "@/content/systems/types";
import { TECHNICAL_LABELS } from "@/content/systems/technicalLabels";

import { NAV_MIN_ITEMS, SLOT_ID, TECHNICAL_DATA_EYEBROW } from "./roles";

/**
 * The catalogue family's mapping layer.
 *
 * Every decision about *which slot a piece of content belongs to* is made
 * here, once, from content that declares its own role — never from array
 * position and never from a route-key set inside a component. The Catalog*
 * components below take a resolved slot or nothing; they contain no product
 * conditionals at all.
 */

export type SpecRow = { label: string; value: string };

export type OptionGroup =
  /** Dense text matrix: "what the product contains" (IMM, TMX). */
  | { kind: "rows"; eyebrow: string; heading: string; items: string[] }
  /** Documented options as image cards with title + one line (CNC, IMM, FLEX). */
  | { kind: "tiles"; eyebrow: string; heading: string; items: OptionThumbnailItem[] }
  /** Documented options carried by photography alone, caption only (TMX). */
  | { kind: "captioned"; eyebrow: string; heading: string; tiles: { src: string; alt: string }[] }
  /** A documented module class with its own media and definition list (Middleware). */
  | {
      kind: "class";
      eyebrow: string;
      heading: string;
      lead?: string;
      media?: ItemGridBlock["media"];
      tiles?: NonNullable<ItemGridBlock["tiles"]>;
      items: string[];
    };

export type CatalogSlots = {
  identity: {
    eyebrow: string;
    name: string;
    description: string;
    highlights?: string[];
    image: { src: string; alt: string };
    fit: "cover" | "contain";
    stage: "light" | "dark";
  } | null;
  technical: {
    eyebrow: string;
    heading?: string;
    specs: SpecRow[];
    /** Compact documented-system inventory under the specs (CNC). */
    documentedSystems?: { eyebrow: string; heading: string; items: string[] };
    /** `name — explanation` pairs rendered in the same label/value grammar (Middleware). */
    definitions?: SpecRow[];
  } | null;
  applications: {
    eyebrow: string;
    heading: string;
    items: string[];
    signals?: ApplicationSignalsBlock;
  } | null;
  options: {
    eyebrow?: string;
    heading: string;
    groups: OptionGroup[];
    /**
     * True when the section heading came from `groups[0]`, so that group
     * renders its items directly under it instead of repeating the label.
     * False when an umbrella heading supplied it and every group is a peer.
     */
    absorbsFirstGroupHeading: boolean;
    /** Integration note closing the slot (IMM). */
    note?: DetailPanelBlock;
    benefits?: BenefitsBlock;
  } | null;
  proof: {
    eyebrow: string;
    heading: string;
    body: string;
    linkLabel: string;
    routeKey: RouteKey;
  } | null;
  related: {
    eyebrow: string;
    heading: string;
    linkLabel: string;
    lead?: string[];
    items: { title: string; body: string; routeKey: RouteKey; linkLabel?: string }[];
  } | null;
  nav: { href: string; label: string }[];
};

/** `"Name — explanation"` is the authored shape of every definition item. */
function splitDefinition(item: string): SpecRow {
  const separator = item.indexOf(" — ");
  if (separator === -1) return { label: item, value: "" };
  return { label: item.slice(0, separator), value: item.slice(separator + 3) };
}

function byRole(grids: ItemGridBlock[] | undefined, role: ItemGridBlock["role"]) {
  return (grids ?? []).filter((grid) => (grid.role ?? "applications") === role);
}

export function buildCatalogSlots(
  content: SystemPageContent,
  system: FlexidoSystem | undefined,
  locale: Locale
): CatalogSlots {
  const labels = TECHNICAL_LABELS[locale];

  // --- 03 identity -------------------------------------------------------
  const identity: CatalogSlots["identity"] = system
    ? {
        eyebrow: content.product.eyebrow,
        name: system.name,
        description: content.product.description,
        highlights: content.product.highlights,
        image: { src: content.product.imageSrc ?? system.image, alt: system.name },
        fit: content.product.imageFit ?? "cover",
        stage: content.product.imageStage ?? "light",
      }
    : null;

  // --- 04 technical data -------------------------------------------------
  const specs: SpecRow[] =
    content.product.showTechnical && system?.technical
      ? (Object.keys(system.technical) as (keyof NonNullable<FlexidoSystem["technical"]>)[])
          .map((key) => ({ label: labels[key], value: system.technical?.[key] ?? "" }))
          .filter((row) => row.value)
      : [];

  const [documentedSystemsGrid] = byRole(content.itemGrids, "documented-systems");
  const [definitionsGrid] = byRole(content.itemGrids, "technical-definitions");

  const technical: CatalogSlots["technical"] =
    specs.length || documentedSystemsGrid || definitionsGrid
      ? {
          eyebrow: definitionsGrid?.eyebrow ?? TECHNICAL_DATA_EYEBROW[locale],
          heading: definitionsGrid?.heading,
          specs,
          documentedSystems: documentedSystemsGrid
            ? {
                eyebrow: documentedSystemsGrid.eyebrow,
                heading: documentedSystemsGrid.heading,
                items: documentedSystemsGrid.items,
              }
            : undefined,
          definitions: definitionsGrid?.items.map(splitDefinition),
        }
      : null;

  // --- 05 applications ---------------------------------------------------
  const [applicationsGrid] = byRole(content.itemGrids, "applications");
  const applications: CatalogSlots["applications"] = applicationsGrid
    ? {
        eyebrow: applicationsGrid.eyebrow,
        heading: applicationsGrid.heading,
        items: applicationsGrid.items,
        signals: content.applicationSignals,
      }
    : null;

  // --- 06 options / modules ----------------------------------------------
  const groups: OptionGroup[] = [
    ...byRole(content.itemGrids, "capabilities").map(
      (grid): OptionGroup => ({
        kind: "rows",
        eyebrow: grid.eyebrow,
        heading: grid.heading,
        items: grid.items,
      })
    ),
    ...(content.optionGrids ?? []).map(
      (grid): OptionGroup => ({
        kind: "tiles",
        eyebrow: grid.eyebrow,
        heading: grid.heading,
        items: grid.items,
      })
    ),
    ...byRole(content.itemGrids, "module-class").map(
      (grid): OptionGroup => ({
        kind: "class",
        eyebrow: grid.eyebrow,
        heading: grid.heading,
        lead: grid.lead,
        media: grid.media,
        tiles: grid.tiles,
        items: grid.items,
      })
    ),
  ];

  if (content.gallery?.role === "options" && system?.gallery.length) {
    groups.push({
      kind: "captioned",
      eyebrow: content.gallery.eyebrow,
      heading: content.gallery.heading,
      tiles: system.gallery.map((item, index) => ({
        src: item.src,
        alt: content.gallery?.alts[index] ?? item.alt,
      })),
    });
  }

  const optionsNote = content.detailPanel?.placement === "options" ? content.detailPanel : undefined;

  /**
   * Section label: the umbrella heading when the page has one, otherwise the
   * first group's own label. A single-group page never repeats it below.
   */
  const options: CatalogSlots["options"] = groups.length
    ? {
        eyebrow: content.optionGroupsHeading ? content.optionGroupsHeading.eyebrow : groups[0].eyebrow,
        heading: content.optionGroupsHeading?.heading ?? groups[0].heading,
        groups,
        absorbsFirstGroupHeading: !content.optionGroupsHeading,
        note: optionsNote,
        benefits: content.benefits,
      }
    : null;

  // --- 07 proof / 08 related --------------------------------------------
  const relatedItems = content.relatedSolutions?.items ?? [];
  const proofItem = relatedItems.find((item) => item.tag);
  const peerItems = relatedItems.filter((item) => !item.tag);

  const proof: CatalogSlots["proof"] =
    content.relatedSolutions && proofItem
      ? {
          eyebrow: proofItem.tag!,
          heading: proofItem.title,
          body: proofItem.body,
          linkLabel: proofItem.linkLabel ?? content.relatedSolutions.linkLabel,
          routeKey: proofItem.routeKey,
        }
      : null;

  const related: CatalogSlots["related"] =
    content.relatedSolutions && peerItems.length
      ? {
          eyebrow: content.relatedSolutions.eyebrow,
          heading: content.relatedSolutions.heading,
          linkLabel: content.relatedSolutions.linkLabel,
          lead: content.detailPanel?.placement === "related" ? content.detailPanel.paragraphs : undefined,
          items: peerItems,
        }
      : null;

  // --- 10 in-page navigation --------------------------------------------
  const nav = [
    identity ? { href: `#${SLOT_ID.identity}`, label: identity.eyebrow } : null,
    technical ? { href: `#${SLOT_ID.technical}`, label: technical.eyebrow } : null,
    applications ? { href: `#${SLOT_ID.applications}`, label: applications.eyebrow } : null,
    options ? { href: `#${SLOT_ID.options}`, label: options.eyebrow ?? options.heading } : null,
    proof ? { href: `#${SLOT_ID.proof}`, label: proof.eyebrow } : null,
    related ? { href: `#${SLOT_ID.related}`, label: related.eyebrow } : null,
  ].filter((item): item is { href: string; label: string } => item !== null);

  return {
    identity,
    technical,
    applications,
    options,
    proof,
    related,
    nav: nav.length >= NAV_MIN_ITEMS ? nav : [],
  };
}
