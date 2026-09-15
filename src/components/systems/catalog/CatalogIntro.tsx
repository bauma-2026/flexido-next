import Image from "next/image";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/cn";
import type { IntroBlock } from "@/content/systems/types";

import { BODY, HEADING, SURFACE } from "./roles";

/**
 * Slot 02 — intro. Text left, visual right, white register, for every
 * product. Middleware previously reversed the columns; nothing in its
 * content justified the flip, so it now reads the same way as its four
 * siblings.
 */
export default function CatalogIntro({ intro }: { intro: IntroBlock }) {
  return (
    <Section className={SURFACE.white}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">{intro.eyebrow}</p>
            <h2 className={cn("mt-3 max-w-[520px]", HEADING.lead)}>{intro.heading}</h2>
            <div className="mt-6 max-w-[58ch]">
              {intro.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={
                    index === 0 ? BODY.lead : cn(BODY.base, index === 1 ? "mt-4" : "mt-2")
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-[var(--radius-panel)] bg-neutral-100">
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
