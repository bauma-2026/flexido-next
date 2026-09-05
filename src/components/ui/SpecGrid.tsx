import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SpecGridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 4 | 5;
  className?: string;
};

const columnClasses: Record<2 | 3 | 4 | 5, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 lg:grid-cols-5",
};

export function SpecGrid({
  children,
  columns = 2,
  className,
}: SpecGridProps) {
  return (
    <dl
      className={cn(
        "grid gap-4 sm:gap-5",
        columnClasses[columns],
        className
      )}
    >
      {children}
    </dl>
  );
}

type SpecItemProps = {
  label: string;
  value: ReactNode;
  unit?: string;
  className?: string;
};

export function SpecItem({ label, value, unit, className }: SpecItemProps) {
  return (
    <div className={cn("min-w-0", className)}>
      <dt className="spec-label">{label}</dt>
      <dd className="mt-1.5 flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
        <span className="spec-value">{value}</span>
        {unit ? <span className="spec-unit">{unit}</span> : null}
      </dd>
    </div>
  );
}
