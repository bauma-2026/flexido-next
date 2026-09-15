import Button from "@/components/ui/Button";
import type { HomeHeroContent } from "@/content/home/types";

/**
 * Exact copy of the production hero media stack (video + vertical scrim).
 * The horizontal scrim is NOT included — that is the variable each concept
 * changes, so it is passed in per concept.
 */
export function HeroMedia({ horizontalScrim }: { horizontalScrim: string }) {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/flexido/legacy/s-1.jpg.jpeg"
        className="absolute inset-0 h-full w-full scale-105 object-cover object-[30%_center] opacity-80"
      >
        <source src="/video/flexido/hero-home.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/65" />
      <div className={`absolute inset-0 ${horizontalScrim}`} />
    </>
  );
}

type StatementProps = {
  content: HomeHeroContent;
  processHref: string;
  contactHref: string;
  /** Per-concept H1 size + measure. Everything else matches production. */
  titleClassName: string;
};

/** Production statement block: eyebrow, H1, subhead, two CTAs, slogan. */
export function HeroStatement({
  content,
  processHref,
  contactHref,
  titleClassName,
}: StatementProps) {
  return (
    <div>
      <p className="eyebrow text-white/50">{content.eyebrow}</p>

      <h1 className={`mt-4 font-semibold text-white ${titleClassName}`}>
        {content.titleLines[0]}
        <br />
        {content.titleLines[1]}
      </h1>

      <p className="mt-5 max-w-[46ch] text-lg leading-8 text-white/80">
        {content.subhead}
      </p>

      <div className="mt-7 flex gap-3">
        <Button href={contactHref}>{content.ctaPrimary} →</Button>
        <Button href={processHref} variant="secondary">
          {content.ctaSecondary} →
        </Button>
      </div>

      <p className="mt-6 text-[13px] text-white/45">{content.slogan}</p>
    </div>
  );
}

/** Shared row primitive for the concept indexes — arrow appears on hover only. */
export function HoverArrow({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`shrink-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 ${className}`}
    >
      →
    </span>
  );
}
