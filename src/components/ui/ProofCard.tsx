import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Reference / proof card family (Pass 2B-1).
 *
 * One grammar for every place a documented project appears as a card:
 * /reference (grid), /resitve proof (feature), solution proofGrid (feature).
 * The solution-detail proofProject block is the third member of the family
 * and shares border, radius, eyebrow, title role and image frame, but keeps
 * its own two-column editorial composition inside SolutionPageTemplate.
 *
 * Grid   — 3+ columns: card title 20 / 26, body 15 / 24, padding 20 → 24.
 * Feature — 2 columns: feature title 24 / 30, body 15 / 24, padding 24 → 28.
 *
 * Image frame is 4:3 cover on neutral-100. The reference renders are
 * portrait 757×1024 studio scenes; 4:3 keeps 55% of their height against
 * 46% at 16:10, and matches the one landscape source (1448×1086) exactly.
 * Landscape re-exports of the portrait renders remain asset debt — no
 * per-image scale or transform hacks here, only an optional plain focal
 * point class from content.
 */
export type ProofCardImage = {
  src: string;
  alt: string;
  /** Optional plain `object-[x_y]` focal point from content. Scale/origin hacks are ignored. */
  objectPosition?: string;
};

type ProofCardProps = {
  variant?: "grid" | "feature";
  href?: string;
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  image: ProofCardImage;
  imageSizes?: string;
  resultLabel?: string;
  result?: ReactNode;
  linkLabel?: string;
  className?: string;
};

const FOCAL_POINT = /^object-\[[^\]]+\]$/;

function focalPoint(value?: string): string {
  if (!value) return "";
  const token = value.trim().split(/\s+/)[0] ?? "";
  return FOCAL_POINT.test(token) ? token : "";
}

export default function ProofCard({
  variant = "grid",
  href,
  eyebrow,
  title,
  body,
  image,
  imageSizes = "(min-width: 1024px) 33vw, 100vw",
  resultLabel,
  result,
  linkLabel,
  className,
}: ProofCardProps) {
  const isFeature = variant === "feature";

  const frame = cn(
    "group flex h-full flex-col overflow-hidden rounded-[var(--radius-structural)] border border-neutral-200 bg-white",
    href && "focus-ring transition-colors duration-300 hover:border-neutral-400",
    className
  );

  const inner = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={imageSizes}
          className={cn(
            "object-cover transition-transform duration-500",
            focalPoint(image.objectPosition),
            href && "group-hover:scale-[1.02]"
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col border-t border-neutral-200",
          isFeature ? "p-6 sm:p-7" : "p-5 sm:p-6"
        )}
      >
        {eyebrow ? (
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{eyebrow}</p>
        ) : null}

        <h3 className={cn(isFeature ? "text-feature-title" : "text-card-title", eyebrow && "mt-2")}>
          {title}
        </h3>

        {body ? <p className="mt-3 text-[15px] leading-6 text-neutral-600">{body}</p> : null}

        {result ? (
          <div className="mt-4 border-t border-neutral-200 pt-3">
            {resultLabel ? (
              <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">{resultLabel}</p>
            ) : null}
            <p className={cn("text-[14px] leading-[22px] text-neutral-700", resultLabel && "mt-1")}>{result}</p>
          </div>
        ) : null}

        {href && linkLabel ? (
          <span className="mt-auto inline-flex items-center pt-5 text-[14px] font-medium text-neutral-700 transition-colors duration-300 group-hover:text-neutral-950">
            {linkLabel}
            <span className="link-arrow">→</span>
          </span>
        ) : null}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={frame}>
        {inner}
      </Link>
    );
  }

  return <article className={frame}>{inner}</article>;
}
