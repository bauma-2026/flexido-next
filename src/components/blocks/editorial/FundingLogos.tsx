"use client";

type Logo = {
  src: string;
  alt: string;
  href?: string;
};

type Props = {
  logos: Logo[];
  className?: string;
};
export default function FundingLogos({ logos, className = "" }: Props) {
  return (
    <div
      className={`not-prose mt-16 border-t border-neutral-200 pt-10 ${className}`}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {logos.map((logo, i) => {
          const Wrapper = logo.href ? "a" : "div";

          return (
            <Wrapper
              key={i}
              href={logo.href}
              target={logo.href ? "_blank" : undefined}
              rel={logo.href ? "noopener noreferrer" : undefined}
              className="flex min-h-[110px] items-center justify-center rounded-2xl border border-neutral-200 bg-white px-8 py-6 transition hover:border-neutral-300 hover:shadow-sm"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 w-auto max-w-[160px] object-contain"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;

                  // prepreči infinite loop
                  if (!target.src.includes("placeholder")) {
                    target.src = "/images/funding/placeholder.webp";
                  }
                }}
              />
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}