"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    href: "/razvojni-projekti",
    label: "Digitalizacija prodajnih poti",
  },
  {
    href: "/digitalna-preobrazba-kljucnih-funkcij-podjetja-polycom",
    label: "Poly Digit",
  },
  {
    href: "/digitalna-transformacija-podjetja-flexido-d-o-o",
    label: "Digitalna transformacija",
  },
  {
    href: "/naziv-projekta-smartim-pametna-tovarna-iskra-mehanizmi",
    label: "SmartIM",
  },
  {
    href: "/spodbude-za-raziskovalno-razvojni-projekt",
    label: "SAFEGUARD",
  },
];

export default function DevelopmentProjectNav() {
  const pathname = usePathname();

  return (
    <div className="not-prose mt-8 border-y border-neutral-200">
      <div className="flex gap-4 overflow-x-auto py-4">
        {items.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap text-sm transition ${
                isActive
                  ? "text-neutral-950 font-medium"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}