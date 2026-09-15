import Link from "next/link";

import Container from "@/components/layout/Container";
import type { RegisterFamily } from "./families";

type Props = {
  /** Left narrative — unchanged hub copy. */
  eyebrow: string;
  heading: string;
  body: string;
  /** Right register. */
  registerLabel: string;
  families: RegisterFamily[];
};

/**
 * LAB — Concept A translated into the light editorial system, for the first
 * `/resitve` body section. Replaces the 4 full-width solution rows with a
 * 2-column split: narrative left, a 7-family decision register right.
 *
 * Light-system translation, not a recolour of the dark hero version:
 *   - numerals keep `.index-label` metrics but drop to neutral-400 (7 brand
 *     blue numerals read as decoration on white; on the dark hero they read
 *     as structure)
 *   - hairlines, arrow and hover borrow the grammar already used by the
 *     `Solutions` compact rows, so the section stays in the page's language
 *   - no cards, no icons, no radii, no fills
 */
export default function DecisionRegister({
  eyebrow,
  heading,
  body,
  registerLabel,
  families,
}: Props) {
  return (
    <section id="resitve-grid" className="surface-muted py-14 text-[#0a2540] sm:py-16 lg:py-20">
      <Container>
        <div className="grid gap-y-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-x-14 lg:gap-y-0">
          {/* LEFT — narrative, unchanged copy and typography */}
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="text-section-title mt-3">{heading}</h2>
            <p className="text-body mt-4 max-w-[46ch]">{body}</p>
          </div>

          {/* RIGHT — decision register */}
          <div>
            <p className="eyebrow">{registerLabel}</p>

            <ul className="mt-4 border-t border-neutral-200">
              {families.map((family, index) => (
                <li key={family.href}>
                  <Link
                    href={family.href}
                    className="focus-ring group grid grid-cols-[1.75rem_1fr_auto] items-baseline gap-x-3 border-b border-neutral-200 py-3 transition-colors duration-300 hover:border-neutral-300"
                  >
                    <span className="index-label text-neutral-400 transition-colors duration-300 group-hover:text-neutral-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[16px] font-semibold leading-[1.3] tracking-[-0.02em] text-neutral-800 transition-colors duration-300 group-hover:text-neutral-950">
                        {family.title}
                      </span>
                      <span className="mt-1 block max-w-[54ch] text-[13px] leading-5 text-neutral-500">
                        {family.desc}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-[15px] text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[#0b8fdc]"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
