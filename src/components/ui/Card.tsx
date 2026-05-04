import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] bg-white p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)]",
        className
      )}
    >
      {children}
    </div>
  );
}