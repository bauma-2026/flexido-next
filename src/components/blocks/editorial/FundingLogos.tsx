import { fundingLogoImgClass, FUNDING_LOGO_BASE_CLASS } from "./fundingLogoOptics";

type FundingLogo = {
  src?: string;
  alt: string;
  href?: string;
  label?: string;
  tone?: "official" | "partner";
  /**
   * Escape hatch for a source shared with an out-of-scope page (e.g. a
   * project detail page whose sizing must not move). Overrides the
   * shared `fundingLogoOptics` height for this instance only — leave
   * unset so every logo stays on the shared system by default.
   */
  heightClassOverride?: string;
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
      <div className="flex flex-wrap items-center gap-x-6 gap-y-5 sm:gap-x-8">
        {logos.map((logo) => {
          const content = logo.src ? (
            <img
              src={logo.src}
              alt={logo.alt}
              className={
                logo.heightClassOverride
                  ? `${FUNDING_LOGO_BASE_CLASS} ${logo.heightClassOverride}`
                  : fundingLogoImgClass(logo.src)
              }
            />
          ) : (
            <span className="text-center text-[15px] font-medium tracking-[-0.02em] text-neutral-700">
              {logo.label ?? logo.alt}
            </span>
          );

          const wrapClass =
            "inline-flex max-w-full items-center opacity-90 transition hover:opacity-100";

          if (logo.href) {
            return (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className={wrapClass}
              >
                {content}
              </a>
            );
          }

          return (
            <div key={logo.alt} className={wrapClass}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
}