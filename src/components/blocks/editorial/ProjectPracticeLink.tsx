import Link from "next/link";

import type { RouteKey } from "@/i18n/routes";
import { getPath } from "@/i18n/routes";

type PracticeLink = {
  label: string;
  routeKey?: RouteKey;
  href?: string;
  external?: boolean;
};

type ProjectPracticeLinkProps = {
  heading: string;
  body: string;
  links: PracticeLink[];
};

/**
 * Surfaces an already-existing relationship between a funding/development
 * project and current Flexido practice (a solution page or a news article
 * about the same project) — only rendered when at least one link resolves.
 */
export default function ProjectPracticeLink({
  heading,
  body,
  links,
}: ProjectPracticeLinkProps) {
  const resolved = links
    .map((link) => {
      const href = link.routeKey ? getPath(link.routeKey, "sl") : link.href;
      if (!href) return null;
      return { ...link, href };
    })
    .filter((link): link is PracticeLink & { href: string } => link !== null);

  if (resolved.length === 0) return null;

  return (
    <section className="mt-10 space-y-4 border-t border-neutral-200 pt-8">
      <p className="eyebrow">
        Povezava s prakso
      </p>

      <h2 className="text-[22px] font-semibold tracking-[-0.03em] text-neutral-950">
        {heading}
      </h2>

      <p className="max-w-[62ch] text-[15px] leading-7 text-neutral-600">
        {body}
      </p>

      <div className="flex flex-wrap gap-3 pt-1">
        {resolved.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
            >
              {link.label} →
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
            >
              {link.label} →
            </Link>
          )
        )}
      </div>
    </section>
  );
}
