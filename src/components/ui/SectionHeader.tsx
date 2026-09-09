import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  desc?: ReactNode;
  /** Prose measure for intro copy; defaults to section header width */
  className?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  desc,
  className = "max-w-[760px]",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="text-section-title mt-3 lg:text-5xl">{title}</h2>
      {desc ? <p className="text-body mt-5 max-w-[60ch]">{desc}</p> : null}
    </div>
  );
}
