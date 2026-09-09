import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContentPanelProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
};

/**
 * Flat informational panel for steps, facts, principles, and copy blocks.
 */
export default function ContentPanel({
  children,
  className,
  variant = "default",
}: ContentPanelProps) {
  return (
    <div
      className={cn(
        variant === "muted" ? "content-panel-muted" : "content-panel",
        "p-6 sm:p-7",
        className
      )}
    >
      {children}
    </div>
  );
}
