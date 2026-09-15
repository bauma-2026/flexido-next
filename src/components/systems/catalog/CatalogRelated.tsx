import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import { cn } from "@/lib/cn";

import { BODY, HEADING, SLOT_ID, SURFACE } from "./roles";
import type { CatalogSlots } from "./slots";

/**
 * Slot 08 — related solution. One card grammar for the family.
 *
 * Geometry follows the real peer count rather than the other way round: two
 * or more peers get the two-column grid; a single peer gets a card at its own
 * measure instead of one 420px card floating in a 1216px row. No second item
 * is fabricated to fill the grid — CNC, IMM and Middleware genuinely have one
 * related solution each.
 */
export default function CatalogRelated({
  related,
  locale,
}: {
  related: NonNullable<CatalogSlots["related"]>;
  locale: Locale;
}) {
  const isSingle = related.items.length === 1;

  return (
    <Section id={SLOT_ID.related} className={cn("scroll-mt-24 border-t border-neutral-200", SURFACE.white)}>
      <Container>
        <div className="max-w-[720px]">
          <p className="eyebrow">{related.eyebrow}</p>
          <h2 className={cn("mt-3", HEADING.section)}>{related.heading}</h2>
          {related.lead?.length ? (
            <div className="mt-5">
              {related.lead.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? BODY.strong : cn("mt-4", BODY.strong)}>
                  {paragraph}
                </p>
              ))}
            </div>
          ) : null}
        </div>
        <div className={cn("mt-8 grid border-l border-t border-neutral-200", isSingle ? "max-w-[560px]" : "sm:grid-cols-2")}>
          {related.items.map((item) => (
            <Link
              key={item.routeKey}
              href={getPath(item.routeKey, locale) ?? "#"}
              className="focus-ring group block border-b border-r border-neutral-200 p-6 transition-colors hover:bg-neutral-50 sm:p-7"
            >
              <h3 className={HEADING.card}>{item.title}</h3>
              <p className="mt-3 text-[15px] leading-6 text-neutral-600">{item.body}</p>
              <span className="mt-5 inline-flex items-center text-[14px] font-medium text-neutral-700 transition group-hover:text-neutral-950">
                {item.linkLabel ?? related.linkLabel}
                <span className="link-arrow">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
