import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "light" | "brand";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

/** Each variant owns its full shape (radius, fill, hover, focus-ring) so
 * variants never share a conflicting utility for the same property. */
const variants: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-[var(--color-interactive)] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] hover:bg-[var(--color-interactive-hover)] hover:text-white focus:ring-[var(--color-interactive)]/30",

  secondary:
    "rounded-full border border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950 focus:ring-[var(--color-interactive)]/30",

  dark:
    "rounded-full bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white focus:ring-[var(--color-interactive)]/30",

  light:
    "rounded-full bg-white text-neutral-950 hover:bg-white/90 hover:text-neutral-950 focus:ring-[var(--color-interactive)]/30",

  /** Header's Contact CTA: structural radius, brand blue, no inset gloss. */
  brand:
    "rounded-[var(--radius-structural)] bg-[var(--color-brand)] text-white hover:opacity-90 hover:text-white focus:ring-[var(--color-brand)]/30",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
     className={[
  "inline-flex items-center justify-center px-6 py-3 text-[14px] font-medium transition",
  "focus:outline-none focus:ring-2 focus:ring-offset-2",
  variants[variant],
  className,
].join(" ")}
    >
      {children}
    </Link>
  );
}