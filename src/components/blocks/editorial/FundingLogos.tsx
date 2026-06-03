type FundingLogo = {
  src?: string;
  alt: string;
  href?: string;
  label?: string;
  tone?: "official" | "partner";
};

type FundingLogosProps = {
  logos: FundingLogo[];
  className?: string;
};

export default function FundingLogos({
  logos,
  className = "",
}: FundingLogosProps) {
  return (
    <div
      className={[
        "not-prose mt-12 border-t border-neutral-200 pt-10",
        className,
      ].join(" ")}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {logos.map((logo) => {
          const content = (
            <div className="flex h-[112px] items-center justify-center rounded-[22px] border border-neutral-200 bg-white px-8 py-6 transition group-hover:border-neutral-300 group-hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[54px] max-w-[190px] object-contain"
                />
              ) : (
                <span className="text-center text-[18px] font-medium tracking-[-0.03em] text-neutral-800">
                  {logo.label ?? logo.alt}
                </span>
              )}
            </div>
          );

          if (logo.href) {
            return (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={logo.alt} className="group">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}