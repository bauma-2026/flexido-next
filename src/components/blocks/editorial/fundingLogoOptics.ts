/**
 * Optical sizing for development-project and news funding / partner marks.
 *
 * Shared by ProjectFundingBlock and FundingLogos. Do not import this into
 * Home FundingCertification or the footer trust strip — those surfaces
 * keep their own constraints.
 *
 * Heights are tuned by visual mass (aspect × baked-in whitespace × ink
 * density × perceived prominence), not a shared box. Do not round these
 * back to one Tailwind height step, and do not stretch or crop lockups.
 */

export const FUNDING_LOGO_BASE_CLASS = "w-auto max-w-full shrink-0 object-contain";
const BASE = FUNDING_LOGO_BASE_CLASS;

/**
 * Per-source height slot. Width follows the lockup (`w-auto`); `max-w-full`
 * only prevents overflow. Padded Category B assets are not width-capped,
 * because a cap would shrink the already-small ink inside the box.
 */
const FUNDING_LOGO_OPTICS: Record<string, string> = {
  // Wide ministry lockups — low-to-medium ink, 3-line wordmark.
  // Same height as Home so the coat of arms stays readable in mixed
  // rows; width is the natural lockup, not a shared box.
  "/logos/funding/ministry-mgrt.png": "h-[44px] sm:h-[48px]",
  "/logos/funding/ministry-mgts.png": "h-[44px] sm:h-[48px]",

  // MGTS — alternate export requested specifically for Fakuma (same
  // lockup as ministry-mgts.png, confirmed by matching content aspect
  // 5.76 vs 5.73 and density 0.231 vs 0.225, just already cropped
  // tight with no canvas padding). Kept as its own entry rather than
  // changing ministry-mgts.png itself, which four other project pages
  // still render. Also used by the digitalizacija-prodajnih-poti
  // project page (approved as the correct institutional anchor there
  // too) — this height is checked against both rows; if either needs
  // to move again, re-verify the other before changing this value.
  "/logos/funding/ministry-mgts-alt.png": "h-[34px] sm:h-[36px]",

  // Compact SPS (gold/navy block + stacked wordmark). Denser than the
  // ministry, with moderate padding — holds its place without matching
  // the Home stacked-SPS SVG, which is a different lockup.
  //
  // This entry is shared with a development-project detail page that
  // is out of scope for news-only sizing passes. The Digitalna
  // transformacija NEWS article overrides this per-instance via
  // `heightClassOverride` (see digital-transformation.ts) instead of
  // changing it here, specifically so the project page is never
  // affected. Do not "fix" that by editing this value directly.
  "/images/funding/slovenski-podjetniski-sklad.webp": "h-[40px] sm:h-[44px]",

  // SPIRIT — dense icon + wordmark, almost no padding (mass coefficient
  // ~1.23, close to MGTS's ~1.33), so it needs a noticeably smaller box
  // than the ministry mark to actually read as quieter. Tuned for the
  // digitalizacija-prodajnih-poti project page, its only consumer via
  // this shared map (Fakuma overrides this per-instance; Home doesn't
  // use this function at all) — safe to edit directly rather than via
  // a page override. Nudged up from 22/25 (still clearly secondary to
  // MGTS and ERDF, but wanted slightly more presence/readability).
  "/logos/funding/spirit-slovenija.svg": "h-[24px] sm:h-[28px]",

  // ERDF + slogan — light flag + three caption lines, fills the PNG.
  // Sized with the rest of the funding system, not as a second footer.
  "/logos/funding/eu-regional-development-fund.png": "h-[42px] sm:h-[46px]",

  // NOO — small letterforms inside a heavily padded 597×207 box.
  // Extra height is the only way to give the mark presence. Still used
  // by SmartIM — do not remove even though POLY DIGIT has moved to the
  // noo.png variant below.
  "/images/funding/noo.webp": "h-[76px] sm:h-[84px]",

  // NOO — POLY DIGIT-requested variant (secondary/no-text export,
  // native 160×56, promoted 2.5x with Lanczos, alpha preserved, no
  // redraw). Same NOO/globe artwork as noo.webp, just a different
  // official export the page owner wants used here specifically.
  // Higher ink density (0.57, saturated colour) than the .webp, so it
  // needs much less height for equivalent institutional presence.
  // Eased down slightly further so it reads as a programme mark, not
  // competing with the partner logos beside it.
  "/logos/funding/noo.png": "h-[27px] sm:h-[30px]",

  // NextGenerationEU — promoted to a clean transparent PNG from a
  // high-res source (the old .webp was a flattened screenshot crop,
  // ~53% ink inside its box). The new crop is ~97% ink, so the box is
  // scaled down to land at the same rendered ink height as before.
  "/logos/funding/nextgenerationeu.png": "h-[35px] sm:h-[39px]",

  // Financira EU — flag + two-line wordmark, moderate density (0.49).
  // Eased up slightly from the first ink-matched pass: at 31/35 it sat
  // visibly shorter than MGTS/SPIRIT/I feel Slovenia in the Fakuma row
  // and read as a small badge rather than a peer in that specific set.
  "/logos/funding/eu-financing.png": "h-[33px] sm:h-[37px]",

  // I feel Slovenia — a solid-fill trapezoid (density 0.82, roughly
  // double every other mark in its row), so the same box height reads
  // far heavier than a text/line lockup at that size — a solid shape
  // is a Gestalt "heavy plate" the eye can't discount the way it does
  // sparse letterforms. Eased down from the first ink-matched pass
  // specifically to counteract that, not to match a formula.
  "/logos/funding/i-feel-slovenia.png": "h-[27px] sm:h-[30px]",

  // Kameleon — the old .webp packed the icon into an oversized
  // mostly-empty canvas (content was ~19% of the width, ~38% of the
  // height), so even a large box only produced a small, isolated-
  // looking mark surrounded by dead space that didn't align with its
  // tightly-cropped neighbours. Promoted to a tight crop of the same
  // pixels (no redraw) so the box now matches the ink directly. At
  // 40/44 it still read as visually lighter than MGRT despite a high
  // raw ink density (1.0, solid silhouette) — a bare icon with no
  // text conveys less "institutional weight" to the eye than a
  // crest+wordmark lockup at the same ink area, so it needed a real
  // height increase, not just a tight crop, to read as genuinely
  // present. The only consumer of this entry, safe to edit directly.
  "/logos/funding/kameleon.png": "h-[48px] sm:h-[54px]",

  // Polycom — replaced with logo-polycom-1.png, a correctly-exposed
  // light-surface export (mean opaque RGB ~165,177,75 — genuine lime,
  // not the previous file's near-white pixels): black "POLYCOM"
  // wordmark on a solid lime plate, fully legible on white. Solid-fill
  // density is 1.0 (no gaps like a text-only mark), so it carries a lot
  // of visual mass per pixel of height — sized conservatively for the
  // same Gestalt "heavy plate" reason as I feel Slovenia, not by a
  // naive ink-area match to its text-based neighbours. Byte-identical
  // copy, no redraw/recolor. Promoted to the same canonical path as
  // the previous (rejected) export.
  "/logos/funding/polycom.png": "h-[26px] sm:h-[30px]",

  // Lotrič — true-vector SVG, viewBox is the ink itself with no
  // padding. Eased down slightly from 30/34: at that size it read as
  // one of the two strongest marks in the row instead of a readable
  // secondary partner.
  "/logos/funding/lotric.svg": "h-[25px] sm:h-[29px]",

  // Flexido partner credit — strongest brand in the set, but low ink
  // density (0.24, thin wordmark). At 26/28 it read as a tiny signature
  // rather than a consortium peer, so it was raised to 34/38; eased
  // back down slightly now that Polycom/NOO/Lotrič have all settled —
  // still readable as a partner, just quieter. The only consumer of
  // this entry via the shared system (Header.tsx sizes its own copy
  // directly), so safe to edit here.
  "/logo/flexido-header.svg": "h-[30px] sm:h-[34px]",
};

const FALLBACK = "h-[44px] sm:h-[48px]";

export function fundingLogoImgClass(src: string | undefined): string {
  if (!src) return `${BASE} ${FALLBACK}`;
  return `${BASE} ${FUNDING_LOGO_OPTICS[src] ?? FALLBACK}`;
}
