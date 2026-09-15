import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/cn";

import { BODY, HEADING, SLOT_ID, SURFACE } from "./roles";
import type { CatalogSlots } from "./slots";

/**
 * Slot 03 — product identity. Image left, text right, product name as the
 * section h2. Text renders before the image on mobile so the intro image and
 * the product image are never stacked back to back with no context between
 * them — the ordering trick already proven on CNC/IMM/TMX.
 *
 * `highlights` is the key-characteristics pair. TMX has none: its
 * characteristics are the "Prednosti" capability matrix in slot 06, so the
 * pair is genuinely absent rather than missing, and nothing is invented to
 * fill it.
 */
export default function CatalogIdentity({ identity }: { identity: NonNullable<CatalogSlots["identity"]> }) {
  return (
    <Section id={SLOT_ID.identity} className={cn("scroll-mt-24 border-t border-neutral-200", SURFACE.white)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div
            className={cn(
              "order-2 lg:order-none relative aspect-[3/2] overflow-hidden rounded-[var(--radius-panel)]",
              identity.stage === "dark" ? "bg-neutral-950" : "bg-neutral-100"
            )}
          >
            <Image
              src={identity.image.src}
              alt={identity.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={identity.fit === "contain" ? "object-contain" : "object-cover"}
            />
          </div>
          <div className="order-1 lg:order-none">
            <p className="eyebrow">{identity.eyebrow}</p>
            <h2 className={cn("mt-3 max-w-[520px]", HEADING.lead)}>{identity.name}</h2>
            <p className={cn("mt-5 max-w-[58ch]", BODY.strong)}>{identity.description}</p>
            {identity.highlights?.length ? (
              <ul className="mt-6 grid max-w-[58ch] grid-cols-2 gap-x-6 gap-y-3 text-[13px] font-medium leading-5 text-neutral-600">
                {identity.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-1.5">
                    <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
