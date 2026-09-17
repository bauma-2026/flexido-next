import type { NewsHubContent } from "@/content/news/types";

type ArticleCta = NonNullable<NewsHubContent["articleCta"]>;

/**
 * Article-level conversion band.
 *
 * Copy moved out of this component into the News hub's `articleCta` block so
 * the EN article pages stop rendering the Slovenian original. The SL strings
 * are the ones that were inlined here; the EN side reuses approved wording
 * already in the repo rather than introducing new copy.
 */
export default function NewsCTA({ content }: { content: ArticleCta }) {
  return (
    <div className="relative mt-12 overflow-hidden rounded-[var(--radius-panel)] bg-[var(--color-dark-band)]">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/flexido/legacy/s-3.jpg.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/60 to-transparent" />

      <div className="relative p-8 sm:p-10 lg:p-12">
        <p className="eyebrow-on-dark">{content.eyebrow}</p>
        <h2 className="mt-3 max-w-[16ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-4xl">
          {content.heading}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-white/75 sm:text-[16px]">
          {content.body}
        </p>
        <div className="mt-7">
          <a
            href={`mailto:${content.mailto}`}
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
          >
            {content.ctaLabel} <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
