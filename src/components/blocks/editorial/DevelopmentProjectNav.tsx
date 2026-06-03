import Link from "next/link";

const projects = [
  {
    href: "/razvojni-projekti/sofinanciranje-stroskov-digitalizacije-prodajnih-poti",
    label: "Digitalizacija prodajnih poti",
  },
  {
  href: "/razvojni-projekti/digitalna-preobrazba-kljucnih-funkcij-podjetja-polycom",
    label: "Digitalna preobrazba ključnih funkcij",
  },
  {
    href: "/razvojni-projekti/digitalna-transformacija-podjetja-flexido-d-o-o",
    label: "Digitalna transformacija podjetja",
  },
  {
    href: "/razvojni-projekti/naziv-projekta-smartim-pametna-tovarna-iskra-mehanizmi",
    label: "SMARTIM — pametna tovarna",
  },
  {
    href: "/razvojni-projekti/spodbude-za-raziskovalno-razvojni-projekt",
    label: "Raziskovalno-razvojni projekt",
  },
];

export default function DevelopmentProjectNav() {
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