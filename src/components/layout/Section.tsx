import { cn } from "@/lib/cn";

type SectionVariant = "default" | "tight" | "large";

const variants: Record<SectionVariant, string> = {
  default: "py-16 sm:py-20 lg:py-24",
  tight: "py-12 sm:py-14 lg:py-16",
  large: "py-20 sm:py-24 lg:py-28",
};

export default function Section({
  children,
  className = "",
  variant = "default",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: SectionVariant;
  id?: string;
}) {
  return (
    <section id={id} className={`${variants[variant]} ${className}`}>
      {children}
    </section>
  );
}