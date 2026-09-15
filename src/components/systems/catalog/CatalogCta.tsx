import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/cn";
import type { KontaktContent } from "@/content/systems/types";

import { HEADING, SLOT_ID, SURFACE } from "./roles";

/**
 * Slot 09 — the locked charcoal close. Ported byte-for-byte from the five
 * templates, which already agreed on every value: `--color-dark-band`, the
 * large section rhythm, the two gradient scrims, eyebrow + question headline
 * + body + one white pill. Not redesigned in this pass.
 *
 * The pill is still a hand-rolled anchor rather than the shared `Button`
 * component (a `mailto:`, which `Button` does not take today). Routing it
 * through `Button` belongs to the CTA-consolidation step of the typography
 * and blue pass, alongside the other nineteen hand-rolled copies site-wide.
 */
export default function CatalogCta({ kontakt }: { kontakt: KontaktContent }) {
  return (
    <Section
      id={SLOT_ID.kontakt}
      variant="large"
      className={cn("relative overflow-hidden", SURFACE.dark)}
    >
      <div className="absolute inset-0 opacity-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={kontakt.imageSrc} alt="" className="h-full w-full object-cover object-center" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <Container className="relative">
        <div className="max-w-[720px]">
          <p className="eyebrow-on-dark">{kontakt.eyebrow}</p>
          <h2 className={cn("mt-3 max-w-[20ch]", HEADING.dark)}>{kontakt.heading}</h2>
          <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-white/72 sm:text-[16px]">
            {kontakt.body}
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${kontakt.mailto}`}
              className="focus-ring inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
            >
              {kontakt.ctaLabel} <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
