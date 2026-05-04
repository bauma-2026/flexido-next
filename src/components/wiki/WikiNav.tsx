"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

type WikiNavItem = {
  href: string;
  label: string;
};

type WikiNavProps = {
  items: WikiNavItem[];
};

export default function WikiNav({ items }: WikiNavProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = items.map((item) => document.querySelector(item.href));

    const handleScroll = () => {
      let current: string | null = null;

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120) {
          current = items[index].href;
        }
      });

      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <div className="sticky top-0 z-40 border-y border-neutral-200 bg-white">
      <Container>
        <div className="py-2.5 sm:flex sm:items-center sm:justify-between sm:gap-4 sm:py-3">
          <p className="hidden shrink-0 text-[11px] uppercase tracking-[0.16em] text-neutral-500 sm:block">
            Na tej strani
          </p>

       <nav
  aria-label="Kazalo strani"
  className="-mx-5 flex gap-2 overflow-x-auto px-5 text-[12px] font-medium [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0 sm:text-[13px]"
>
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "shrink-0 rounded-full border px-3.5 py-1.5 transition sm:px-4 sm:py-2",
                  active === item.href
                    ? "border-neutral-950 bg-neutral-950 text-white"
                    : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-950 hover:text-neutral-950",
                ].join(" ")}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </div>
  );
}