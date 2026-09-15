import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import type { Locale } from "@/i18n/config";
import type { HomeFundingCertificationContent } from "@/content/home/types";

type FundingLogo = {
  href: string;
  src: string;
  alt: string;
  /** Per-logo height slot — tuned by optical mass, not a shared box. */
  heightClass: string;
  /** Lets an unusually wide mark span the mobile grid instead of shrinking. */
  wide?: boolean;
};

/**
 * Funding/development-support register — the Home page's trust/compliance
 * block for funding logos only, rendered once near the footer.
 * Certification (Bureau Veritas / ISO 9001) is a separate trust signal
 * shown in the post-hero TrustStrip instead — do not add it back here.
 *
 * Funding logos are locale-gated:
 * - SL renders the SL-only voucher-scheme group (SPS, ERDF, Ministry) above
 *   the shared group (SPIRIT, EU Cohesion Fund) — these are two different
 *   funding programmes, kept in that order.
 * - EN/DE render only the shared group; the SL-only group has no
 *   translated funding claim to attach to it, so it's omitted rather than
 *   invented.
 *
 * Per-logo heights below are tuned by optical mass (aspect ratio ×
 * built-in whitespace × ink density), not a shared box — do not round
 * these back to a single shared Tailwind height step.
 */
/** Group 1 — project funding, SL-only — order fixed: SPS, ERDF, Ministry. */
const fundingLogosSlOnly: FundingLogo[] = [
  {
    href: "https://podjetniskisklad.si/sl/",
    src: "/logos/funding/sps.svg",
    alt: "Slovenski podjetniški sklad",
    // Densest mark (bold navy wordmark + solid icon block) — eased down
    // further so it sits quietly next to ERDF/Ministry (~9% off previous).
    heightClass: "h-[38px] sm:h-[42px]",
  },
  {
    href: "https://www.eu-skladi.si/",
    src: "/logos/funding/eu-regional-development-fund.png",
    alt: "Evropska unija — Evropski sklad za regionalni razvoj — Naložba v vašo prihodnost",
    // Light density (thin flag + a fine 3rd caption line) read as too
    // faint next to SPS/SPIRIT — given more presence.
    heightClass: "h-[43px] sm:h-[47px]",
  },
  {
    href: "https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarski-razvoj-in-tehnologijo/",
    src: "/logos/funding/ministry-mgrt.png",
    alt: "Republika Slovenija — Ministrstvo za gospodarski razvoj in tehnologijo",
    // Widest aspect ratio and lowest ink density of the set — needs the
    // most height to hold its place; its extra width is expected and left
    // uncapped rather than shrunk to force a narrower box.
    heightClass: "h-[44px] sm:h-[48px]",
  },
];

/** Group 2 — development support, all locales — order fixed: SPIRIT, EU Cohesion Fund. */
const fundingLogosShared: FundingLogo[] = [
  {
    href: "https://www.spiritslovenia.si/",
    src: "/logos/funding/spirit-slovenija.svg",
    alt: "SPIRIT Slovenija",
    // Bold icon + wordmark, second-heaviest mark after SPS — eased down
    // further so it no longer outweighs the Cohesion/EU lockup beside it
    // (~11% off previous).
    heightClass: "h-[29px] sm:h-[33px]",
  },
  {
    href: "https://www.eu-skladi.si/?set_language=sl",
    src: "/logos/funding/eu-cohesion-fund.png",
    alt: "Evropska unija — Kohezijski sklad",
    // Same light structure as ERDF (thin flag + fine caption line) —
    // given the same presence boost for a consistent pair.
    heightClass: "h-[42px] sm:h-[46px]",
  },
];

function FundingLogoLink({ logo }: { logo: FundingLogo }) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center opacity-90 transition hover:opacity-100 ${logo.wide ? "col-span-2 sm:col-span-1" : ""}`}
    >
      <img src={logo.src} alt={logo.alt} className={`w-auto object-contain ${logo.heightClass}`} />
    </a>
  );
}

function FundingLogoRow({ logos }: { logos: FundingLogo[] }) {
  return (
    // gap-x steps down between sm and lg: the tuned optical sizes push the
    // 3-logo row's raw width past the funding column at md/768, so the
    // rhythm tightens slightly there and opens back up from lg — same
    // shared layout system, just closing the one breakpoint where it
    // would otherwise wrap to a fourth row.
    <div className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:flex sm:flex-wrap sm:gap-x-6 lg:gap-x-10">
      {logos.map((logo) => (
        <FundingLogoLink key={logo.src} logo={logo} />
      ))}
    </div>
  );
}

export default function FundingCertification({
  content,
  locale,
}: {
  content: HomeFundingCertificationContent;
  locale: Locale;
}) {
  const showSlOnlyGroup = locale === "sl";

  return (
    <Section variant="tight" className="border-t border-neutral-200 surface-muted text-neutral-900">
      <Container>
        <div className="max-w-[920px]">
          <p className="eyebrow">{content.eyebrow}</p>

          {content.quote && (
            <blockquote className="mt-5 max-w-[62ch] text-[15px] leading-7 text-neutral-700 sm:mt-6 sm:text-[16px]">
              {content.quote}
            </blockquote>
          )}

          <div
            className={`border-y border-neutral-200 py-6 sm:py-7 ${
              content.quote ? "mt-6 sm:mt-7" : "mt-5 sm:mt-6"
            }`}
          >
            {/*
              Two semantic subgroups sharing one section: the SL-only
              project-funding voucher scheme, and the shared
              development-support programme. A hairline only appears
              between them when both render (SL) — with a single group
              (EN/DE) there's nothing to separate.
            */}
            {showSlOnlyGroup && (
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500">
                  {content.projectFundingLabel}
                </p>
                <div className="mt-4">
                  <FundingLogoRow logos={fundingLogosSlOnly} />
                </div>
              </div>
            )}
            <div className={showSlOnlyGroup ? "mt-6 border-t border-neutral-200 pt-6 sm:mt-7 sm:pt-7" : ""}>
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-neutral-500">
                {content.developmentSupportLabel}
              </p>
              <div className="mt-4">
                <FundingLogoRow logos={fundingLogosShared} />
              </div>
            </div>
          </div>

          {content.legalNote && (
            <div className="mt-6 max-w-[70ch] text-[13px] leading-6 text-neutral-600 sm:mt-7">
              <p>
                {content.legalNote}{" "}
                {content.legalNoteLinkHref && (
                  <a
                    href={content.legalNoteLinkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-800"
                  >
                    {content.legalNoteLinkLabel}
                  </a>
                )}
                .
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
