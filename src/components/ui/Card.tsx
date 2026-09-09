import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Default content panel — flat, restrained border, structural radius.
 * Product/proof cards in page templates often override radius/shadow intentionally.
 */
export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "content-panel p-6 sm:p-7",
        className
      )}
    >
      {children}
    </div>
  );
}
