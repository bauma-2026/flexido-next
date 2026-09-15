import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * The standard section header: eyebrow → H2 → optional supporting paragraph.
 *
 * This component owns the *composition* — which three elements appear, in what
 * order, and the two gaps between them. It deliberately owns no geometry: the
 * wrapper carries whatever `className` the call site gives it and nothing by
 * default, because the measure of a section header is a property of the column
 * it sits in, not of the header role. (It previously defaulted to
 * `max-w-[760px]`, which silently applied a width to every adopter; the four
 * original call sites now pass that explicitly.)
 *
 * Canonical gaps, unchanged from the values the site already converged on and
 * re-measured in the A3 pass:
 *   eyebrow → heading   `mt-3`  (12px)
 *   heading → body      `mt-5`  (20px)
 *
 * `headingClassName` / `descClassName` extend, never replace, the roles. Use
 * them for structural width (`measure-heading`, `max-w-[Nch]`) — not to restate
 * type. If you find yourself passing a font size or leading here, the role is
 * wrong, not the call site.
 *
 * Not modelled here, on purpose: dark-surface closes (`eyebrow-on-dark` +
 * `text-white`) still compose locally. Their supporting copy has not been
 * normalised — it runs three colours and three measures — so folding them in
 * would mean changing how they look, which is a separate decision.
 */
type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  desc?: ReactNode;
  /** Wrapper classes. No default — the call site owns the header's geometry. */
  className?: string;
  /** Structural additions to the H2 (e.g. `measure-heading`). */
  headingClassName?: string;
  /** Structural additions to the supporting paragraph (e.g. `max-w-[58ch]`). */
  descClassName?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  desc,
  className,
  headingClassName,
  descClassName,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={cn("text-section-title mt-3", headingClassName)}>{title}</h2>
      {desc ? <p className={cn("text-body mt-5", descClassName)}>{desc}</p> : null}
    </div>
  );
}
