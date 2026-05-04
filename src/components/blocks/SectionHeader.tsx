import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  desc?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  desc,
}: SectionHeaderProps) {
  return (
    <div className="max-w-[640px]">
      {eyebrow && (
        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
          {eyebrow}
        </p>
      )}

     <h2 className="mt-4 max-w-[20ch] text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
  {title}
</h2>

      {desc && (
        <p className="mt-4 text-[15px] leading-7 text-neutral-600">
          {desc}
        </p>
      )}
    </div>
  );
}