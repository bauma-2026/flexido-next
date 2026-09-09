import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "light";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-interactive)] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18)] hover:bg-[var(--color-interactive-hover)] hover:text-white",

  secondary:
    "border border-neutral-200 bg-white text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950",

  dark:
    "bg-neutral-950 text-white hover:bg-neutral-800 hover:text-white",

  light:
    "bg-white text-neutral-950 hover:bg-white/90 hover:text-neutral-950",
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
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-[14px] font-medium transition",
  "focus:outline-none focus:ring-2 focus:ring-[var(--color-interactive)]/30 focus:ring-offset-2",
  variants[variant],
  className,
].join(" ")}
    >
      {children}
    </Link>
  );
}