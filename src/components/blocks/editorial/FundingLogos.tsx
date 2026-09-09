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
        "not-prose mt-10 border-t border-neutral-200 pt-8",
        className,
      ].join(" ")}
    >
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
        {logos.map((logo) => {
          const content = (
            <div className="flex h-[64px] items-center justify-center transition group-hover:opacity-80">
              {logo.src ? (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[56px] max-w-[190px] object-contain"
                />
              ) : (
                <span className="text-center text-[15px] font-medium tracking-[-0.02em] text-neutral-700">
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