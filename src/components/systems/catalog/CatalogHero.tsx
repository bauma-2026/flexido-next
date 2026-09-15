import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import type { SystemHero } from "@/content/systems/types";

import { HEADING } from "./roles";

/**
 * Slot 01 — hero. Identical across the family today (media + eyebrow + h1 +
 * supporting copy); the only variation is whether `media` is a clip or a
 * still, which the content declares. Ported verbatim from the five
 * templates, which already agreed on every value here.
 *
 * The hero carries no CTA: the catalogue's single conversion point is the
 * locked charcoal close, and the header's Kontakt button is always in view.
 * That is a family rule, not an omission.
 */
export default function CatalogHero({
  hero,
  backLabel,
  backHref,
}: {
  hero: SystemHero;
  backLabel?: string;
  backHref: string;
}) {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {hero.media.kind === "video" ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        >
          <source src={hero.media.src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0">
          <Image
            src={hero.media.src}
            alt={hero.media.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-55"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      <Container className="relative z-10 flex min-h-[520px] items-end pb-16 pt-32 sm:min-h-[620px] lg:pb-20">
        <div className="max-w-[720px]">
          {backLabel ? (
            <Link
              href={backHref}
              className="focus-ring mb-5 inline-flex text-[13px] text-white/55 transition hover:text-white"
            >
              {backLabel}
            </Link>
          ) : null}
          <p className="eyebrow-on-dark">{hero.eyebrow}</p>
          <h1 className={`mt-5 ${HEADING.page}`}>{hero.heading}</h1>
          <p className="mt-6 max-w-[560px] text-[17px] leading-8 text-white/70">{hero.subhead}</p>
        </div>
      </Container>
    </section>
  );
}
