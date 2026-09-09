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

  return (
    <nav className="not-prose mb-10 rounded-[24px] border border-neutral-200 bg-neutral-50 p-5">
      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
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