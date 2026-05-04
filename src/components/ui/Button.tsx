import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-medium transition focus:outline-none";

  const variants = {
    primary:
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] focus:ring-2 focus:ring-[var(--primary)]/40",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
    ghost:
      "text-neutral-600 hover:text-neutral-950",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}