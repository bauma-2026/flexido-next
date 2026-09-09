import type { ReactNode } from "react";

export type ProjectFundingLogo = {
  src: string;
  alt: string;
  href?: string;
  heightClass?: string;
};

type ProjectFundingLink = {
  href: string;
  label: string;
};

type ProjectFundingBlockProps = {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  links?: ProjectFundingLink[];
  primaryLogos: ProjectFundingLogo[];
  secondaryLogos?: ProjectFundingLogo[];
  legalLine?: ReactNode;
  className?: string;
};

function FundingLogoMark({
  logo,
  subdued = false,
}: {
  logo: ProjectFundingLogo;
  subdued?: boolean;
}) {
  const heightClass = logo.heightClass ?? "h-12 sm:h-14";
  const image = (
    <img
      src={logo.src}
      alt={logo.alt}
      className={`w-auto object-contain ${heightClass}`}
    />
  );

  if (logo.href) {
    return (
      <a
        href={logo.href}
        target="_blank"
        rel="noopener noreferrer"
        className={
          subdued
            ? "opacity-75 transition hover:opacity-90"
            : "opacity-90 transition hover:opacity-100"
        }
      >
        {image}
      </a>
    );
  }

  return <div className={subdued ? "opacity-75" : "opacity-90"}>{image}</div>;
}

export default function ProjectFundingBlock({
  eyebrow,
  heading,
  paragraphs,
  links,
  primaryLogos,
  secondaryLogos,
  legalLine,
  className = "",
}: ProjectFundingBlockProps) {
  const hasText =
    eyebrow ||
    heading ||
    (paragraphs && paragraphs.length > 0) ||
    (links && links.length > 0);

  return (
    <div
      className={[
        "not-prose mt-12 border-t border-neutral-200 pt-10",
        className,
      ].join(" ")}
    >
      <div className="max-w-[920px]">
        {eyebrow && (
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
            {eyebrow}
          </p>
        )}

        {heading && (
          <h2
            className={[
              "text-[22px] font-semibold tracking-[-0.03em] text-neutral-950",
              eyebrow ? "mt-3" : "",
            ].join(" ")}
          >
            {heading}
          </h2>
        )}

        {paragraphs?.map((paragraph, index) => (
          <p
            key={index}
            className="mt-3 max-w-[62ch] text-[15px] leading-7 text-neutral-600"
          >
            {paragraph}
          </p>
        ))}

        {links && links.length > 0 && (
          <p className="mt-5 text-[14px] leading-6 text-neutral-600">
            {links.map((link, index) => (
              <span key={link.href}>
                {index > 0 && <span className="mx-2 text-neutral-300">·</span>}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-950"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </p>
        )}

        {primaryLogos.length > 0 && (
          <div
            className={[
              "flex flex-wrap items-center gap-x-8 gap-y-5",
              hasText || legalLine ? "mt-6 sm:mt-7" : "",
            ].join(" ")}
          >
            {primaryLogos.map((logo) => (
              <FundingLogoMark key={logo.src} logo={logo} />
            ))}
          </div>
        )}

        {legalLine && (
          <div className="mt-8 max-w-[70ch] border-t border-neutral-200 pt-6 text-[13px] leading-6 text-neutral-500 sm:mt-9 sm:pt-7">
            {legalLine}
          </div>
        )}
      </div>

      {secondaryLogos && secondaryLogos.length > 0 && (
        <div className="mt-8 border-t border-neutral-200 pt-6 sm:mt-9 sm:pt-7">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            {secondaryLogos.map((logo) => (
              <FundingLogoMark key={logo.src} logo={logo} subdued />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
