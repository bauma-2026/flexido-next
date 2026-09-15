import Link from "next/link";

import { getPath } from "@/i18n/routes";

const projectRouteKeys = [
  "fundingProjectSalesDigitalization",
  "fundingProjectPolyDigit",
  "fundingProjectFlexidoDigital",
  "fundingProjectSmartim",
  "fundingProjectSafeguard",
] as const;

const projectLabels: Record<typeof projectRouteKeys[number], string> = {
  fundingProjectSalesDigitalization: "Digitalizacija prodajnih poti",
  fundingProjectPolyDigit: "Digitalna preobrazba ključnih funkcij",
  fundingProjectFlexidoDigital: "Digitalna transformacija podjetja",
  fundingProjectSmartim: "SMARTIM — pametna tovarna",
  fundingProjectSafeguard: "Raziskovalno-razvojni projekt",
};

export default function DevelopmentProjectNav() {
  const projects = projectRouteKeys
    .map((key) => {
      const href = getPath(key, "sl");
      if (!href) return null;
      return { href, label: projectLabels[key] };
    })
    .filter((project): project is { href: string; label: string } => project !== null);

  // Open section: the pills are the navigation, the outer panel only added a
  // second enclosure around them (Pass 2B-3).
  return (
    <nav className="not-prose mb-10 border-t border-neutral-200 pt-6">
      <p className="eyebrow">
        Razvojni projekti
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {projects.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-2 text-[13px] font-medium text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950"
          >
            {project.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}