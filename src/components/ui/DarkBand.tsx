import type { ReactNode } from "react";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { cn } from "@/lib/cn";

type BandAction = {
  href: string;
  label: string;
  external?: boolean;
};

type DarkBandProps = {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  primaryAction?: BandAction;
  secondaryAction?: BandAction;
  image?: {
    src: string;
    alt?: string;
    caption?: string;
  };
  /**
   * Full-bleed background photo behind the whole band (with a dark overlay),
   * instead of the small side-thumbnail `image`. Mutually exclusive with `image`.
   */
  backgroundImage?: {
    src: string;
    alt?: string;
  };
  variant?: "default" | "compact";
  tone?: "neutral" | "brand";
  className?: string;
  id?: string;
};

const toneClasses = {
  neutral: "bg-neutral-950 text-white",
  brand: "bg-[var(--color-dark-band)] text-white",
} as const;

/**
 * Reusable dark conversion / transition band.
 * Foundation primitive — page templates migrate in later passes.
 */
export default function DarkBand({
  eyebrow,
  title,
  body,
  primaryAction,
  secondaryAction,
  image,
  backgroundImage,
  variant = "default",
  tone = "neutral",
  className,
  id,
}: DarkBandProps) {
  const sectionVariant = variant === "compact" ? "default" : "large";
  const hasActions = primaryAction || secondaryAction;
  const hasSideImage = Boolean(image) && !backgroundImage;

  return (
    <Section
      id={id}
      variant={sectionVariant}
      className={cn(
        backgroundImage ? "relative overflow-hidden" : undefined,
        toneClasses[tone],
        className
      )}
    >
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <img
              src={backgroundImage.src}
              alt={backgroundImage.alt ?? ""}
              className="h-full w-full object-cover opacity-35"
            />
          </div>
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-r",
              tone === "brand"
                ? "from-[var(--color-dark-band)]/95 via-[var(--color-dark-band)]/85 to-[var(--color-dark-band)]/65"
                : "from-neutral-950/95 via-neutral-950/85 to-neutral-950/65"
            )}
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-t",
              tone === "brand"
                ? "from-[var(--color-dark-band)]/50 via-transparent to-black/20"
                : "from-neutral-950/50 via-transparent to-black/20"
            )}
          />
        </>
      ) : null}

      <Container className={backgroundImage ? "relative" : undefined}>
        <div
          className={cn(
            "grid gap-8",
            hasSideImage
              ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.55fr)] lg:items-end lg:gap-16"
              : hasActions
                ? "lg:grid-cols-[1fr_auto] lg:items-end"
                : undefined
          )}
        >
          <div className={hasSideImage ? "max-w-[720px]" : "max-w-[680px]"}>
            {eyebrow ? <p className="eyebrow-on-dark">{eyebrow}</p> : null}

            <h2 className="text-section-title measure-heading mt-4 text-white">
              {title}
            </h2>

            {body ? (
              <p
                className={cn(
                  "mt-5 max-w-[54ch] text-[16px] leading-7",
                  variant === "compact" ? "text-white/65" : "text-white/72 sm:text-[17px]"
                )}
              >
                {body}
              </p>
            ) : null}

            {hasActions && hasSideImage ? (
              <div className="mt-9 flex flex-wrap gap-3">
                {primaryAction ? (
                  <BandButton action={primaryAction} variant="primary" />
                ) : null}
                {secondaryAction ? (
                  <BandButton action={secondaryAction} variant="secondary" />
                ) : null}
              </div>
            ) : null}
          </div>

          {hasSideImage ? (
            <div className="relative overflow-hidden border border-white/10">
              <img
                src={image!.src}
                alt={image!.alt ?? ""}
                className="h-[180px] w-full object-cover object-center opacity-55 sm:h-[200px] lg:h-[220px]"
              />
              <div className="absolute inset-0 bg-black/45" />
              {image!.caption ? (
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <p className="text-[14px] font-medium leading-5 tracking-[-0.02em] text-white/80">
                    {image!.caption}
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}

          {hasActions && !hasSideImage ? (
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {primaryAction ? (
                <BandButton action={primaryAction} variant="primary" />
              ) : null}
              {secondaryAction ? (
                <BandButton action={secondaryAction} variant="secondary" />
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}

function BandButton({
  action,
  variant,
}: {
  action: BandAction;
  variant: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
      : "inline-flex w-fit items-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white";

  if (
    action.external ||
    action.href.startsWith("mailto:") ||
    action.href.startsWith("tel:")
  ) {
    return (
      <a
        href={action.href}
        className={className}
        {...(action.external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {action.label}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
    </Link>
  );
}
