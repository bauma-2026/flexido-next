"use client";

import { useEffect, useRef, useState } from "react";

type WikiNavItem = {
  href: string;
  label: string;
};

type WikiNavProps = {
  items: WikiNavItem[];
};

export default function WikiNav({ items }: WikiNavProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");

  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sectionIds = items
      .map((item) => item.href.replace("#", ""))
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const getActiveSection = () => {
      const offset = 140;

      let current = sections[0];

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= offset) {
          current = section;
        }
      }

      if (current?.id) {
        setActiveHref(`#${current.id}`);
      }
    };

    getActiveSection();

    window.addEventListener("scroll", getActiveSection, { passive: true });
    window.addEventListener("resize", getActiveSection);

    return () => {
      window.removeEventListener("scroll", getActiveSection);
      window.removeEventListener("resize", getActiveSection);
    };
  }, [items]);

  useEffect(() => {
    const activeItem = itemRefs.current[activeHref];

    if (!activeItem) return;

    activeItem.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeHref]);

  return (
    <div className="sticky top-0 z-30 border-b border-neutral-200/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1180px] gap-2 overflow-x-auto px-6 py-3 lg:px-8 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <a
              key={item.href}
              ref={(node) => {
                itemRefs.current[item.href] = node;
              }}
              href={item.href}
              className={[
                "shrink-0 rounded-full border px-4 py-2 text-[13px] font-medium transition",
                isActive
                  ? "border-neutral-950 bg-neutral-950 text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-950",
              ].join(" ")}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}