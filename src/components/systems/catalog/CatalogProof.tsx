import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import { cn } from "@/lib/cn";

import { BODY, HEADING, SLOT_ID, SURFACE } from "./roles";
import type { CatalogSlots } from "./slots";

/**
 * Slot 07 — proof. The E7 evidence register, and the only slot that owns it.
 *
 * The content already existed: a `relatedSolutions` item carrying a `tag`
 * ("Referenca") is a documented project, not an equal-weight related choice.
 * It was rendering as a small underlined link beneath the related cards, so
 * the family's only real proof read as a footnote. It now takes the register
 * the rest of the site reserves for evidence, using its own authored tag,
 * title, body and link label — nothing new is written.
 *
 * FLEX 25/50, TMX and Middleware have no documented project in content. The
 * slot stays absent for them and no nav item is generated. Proof is not
 * invented to make the five pages match.
 */
export default function CatalogProof({
  proof,
  locale,
}: {
  proof: NonNullable<CatalogSlots["proof"]>;
  locale: Locale;
}) {
  return (
    <Section id={SLOT_ID.proof} className={cn("scroll-mt-24", SURFACE.proof)}>
      <Container>
        <div className="max-w-[720px]">
          <p className="eyebrow">{proof.eyebrow}</p>
          <h2 className={cn("mt-3", HEADING.section)}>{proof.heading}</h2>
          <p className={cn("mt-5 max-w-[62ch]", BODY.strong)}>{proof.body}</p>
          <Link
            href={getPath(proof.routeKey, locale) ?? "#"}
            className="focus-ring group mt-7 inline-flex items-center text-[14px] font-medium text-neutral-950"
          >
            <span className="underline decoration-neutral-400 underline-offset-4 group-hover:decoration-neutral-950">
              {proof.linkLabel}
            </span>
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
