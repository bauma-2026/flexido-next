import Link from "next/link";

import { getPath } from "@/i18n/routes";

const projectRouteKeys = [
  "fundingProjectSalesDigitalization",
  "fundingProjectPolyDigit",
  "fundingProjectFlexidoDigital",
  "fundingProjectSmartim",
  "fundingProjectSafeguard",
] as const;

export type DevelopmentProjectKey = typeof projectRouteKeys[number];

const projectLabels: Record<DevelopmentProjectKey, string> = {
  fundingProjectSalesDigitalization: "Digitalizacija prodajnih poti",
  fundingProjectPolyDigit: "Digitalna preobrazba ključnih funkcij",
  fundingProjectFlexidoDigital: "Digitalna transformacija podjetja",
  fundingProjectSmartim: "SMARTIM — pametna tovarna",
  fundingProjectSafeguard: "Raziskovalno-razvojni projekt",
};

/**
 * Geometry is shared by both states so the current pill occupies exactly the
 * same box as a sibling link — only the border/fill/ink differ.
 */
const pillBaseClass =
  "inline-flex rounded-full border px-4 py-2 text-[13px] font-medium";

const pillLinkClass =
  "border-neutral-200 bg-white text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950";

/**
 * Filled + darker ink, with no hover transition, so it reads as "you are
 * here" rather than as a hovered sibling. Deliberately not the site's
 * primary-button treatment — this is an editorial sibling nav, not a CTA.
 */
const pillCurrentClass = "border-neutral-300 bg-neutral-100 text-neutral-950";

/**
 * `currentKey` is required on purpose: every consumer is a project detail
 * page that already declares its own route key to `Header`, and making it
 * required means a page cannot silently reintroduce a self-link.
 */
export default function DevelopmentProjectNav({
  currentKey,
}: {
  currentKey: DevelopmentProjectKey;
}) {
  const projects = projectRouteKeys
    .map((key) => {
      const href = getPath(key, "sl");
      if (!href) return null;
      return { key, href, label: projectLabels[key] };
    })
    .filter(
      (project): project is { key: DevelopmentProjectKey; href: string; label: string } =>
        project !== null
    );

  // Open section: the pills are the navigation, the outer panel only added a
  // second enclosure around them (Pass 2B-3).
  return (
    <nav className="not-prose mb-10 border-t border-neutral-200 pt-6">
      <p className="eyebrow">
        Razvojni projekti
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {projects.map((project) =>
          project.key === currentKey ? (
            // Not a link: navigating to the page you are already on is a
            // no-op affordance. `aria-current` is valid on any element, so
            // the state is still exposed without an actionable control.
            <span
              key={project.href}
              aria-current="page"
              className={`${pillBaseClass} ${pillCurrentClass}`}
            >
              {project.label}
            </span>
          ) : (
            <Link
              key={project.href}
              href={project.href}
              className={`${pillBaseClass} ${pillLinkClass}`}
            >
              {project.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
