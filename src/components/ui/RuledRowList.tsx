import Link from "next/link";

export type RuledRowItem = {
  href: string;
  title: string;
  desc?: string;
};

type Props = {
  items: RuledRowItem[];
  className?: string;
  /**
   * "nav" (default): the original peer/navigation-set grammar — full-bleed
   * hairlines. Used by `/resitve` and the references hub. Do not change
   * this branch's output without checking every call site.
   *
   * "solutions": Home compact Solutions only. Hairlines are inset to the
   * same 42rem measure as the text (a paragraph rule, not a table rule),
   * title/body contrast is stronger, and the list renders no closing
   * bottom rule of its own — the caller supplies one (see Solutions.tsx's
   * bridge line) so two hairlines don't stack back to back.
   */
  variant?: "nav" | "solutions";
};

/**
 * Canonical Flexido ruled-row grammar for peer / navigation sets.
 *
 * Production use: Home compact Solutions ("solutions" variant), `/resitve`
 * and references-hub peer-navigation lists ("nav" variant, default). Do not
 * roll out to competence, process, inventory, or proof sets.
 *
 * Geometry (desktop):
 *   hairline — full container width ("nav") or content width ("solutions")
 *   content — left cluster, max 42rem
 *   tracks — 2rem index | title + inline arrow, description below
 *   arrow  — adjacent to the title, never justify-between to the far edge
 */
export default function RuledRowList({
  items,
  className = "",
  variant = "nav",
}: Props) {
  const isSolutions = variant === "solutions";

  return (
    <ul className={`${isSolutions ? "" : "border-b border-neutral-200"} ${className}`}>
      {items.map((item, index) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={
              isSolutions
                ? "focus-ring group block"
                : "focus-ring group block border-t border-neutral-200 py-5 transition-colors duration-300 hover:border-neutral-300"
            }
          >
            <span
              className={
                isSolutions
                  ? "grid max-w-[42rem] grid-cols-[1.75rem_minmax(0,1fr)] items-baseline gap-x-2 border-t border-neutral-200 py-6 transition-colors duration-300 group-hover:border-neutral-300 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-x-4"
                  : "grid max-w-[42rem] grid-cols-[2rem_minmax(0,1fr)] items-baseline gap-x-3 sm:gap-x-4"
              }
            >
              <span className="text-[12px] font-medium tabular-nums tracking-[0.14em] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span
                  className={
                    isSolutions
                      ? "text-[20px] font-semibold leading-[1.15] tracking-[-0.03em] text-neutral-950 sm:text-[22px]"
                      : "text-[18px] font-semibold leading-[1.2] tracking-[-0.02em] text-neutral-950 sm:text-[19px]"
                  }
                >
                  {item.title}
                  <span
                    aria-hidden="true"
                    className="ml-2.5 inline-block text-[14px] font-normal text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--color-interactive)]"
                  >
                    →
                  </span>
                </span>

                {item.desc ? (
                  <span
                    className={
                      isSolutions
                        ? "mt-2 block max-w-[48ch] text-[14px] leading-[22px] text-neutral-600"
                        : "mt-1.5 block max-w-[48ch] text-[14px] leading-[22px] text-neutral-600"
                    }
                  >
                    {item.desc}
                  </span>
                ) : null}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
