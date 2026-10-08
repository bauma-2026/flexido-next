# Readability + Section Rhythm Audit

> **Purpose.** Evaluate the final rendered site as a reader sees it, immediately before pre-preview QA.
>
> **This is not a typography-system redesign.** It does not reopen the closed typography pass, Visual System V1, page compositions, Interaction Weight, Colour Families, Accent Signal, or the deferred width/image findings. Where a readability defect is solvable by a small tonal or contrast adjustment, it is reported as that and nothing more.
>
> **Audit only.** No implementation accompanies this document.

---

## Methodology

Every route was rendered in a real browser and scrolled end to end so reveal animations and lazy images resolved before measurement. Nothing here is estimated from source.

- **Widths tested:** 1440, 1024, 768, 375, 320.
- **Colour resolution.** Tailwind v4 emits computed colours as `lab()` / `oklab()`, not `rgb()`. Every value was converted to sRGB (CIE Lab → XYZ D50 → Bradford → D65 → linear sRGB → gamma) before any contrast maths. Reading `getComputedStyle().color` naively returns strings that no contrast formula accepts, and an audit that skips this step silently measures nothing.
- **Background resolution.** For each text node, ancestors were walked until an opaque background was found, compositing any partially transparent layers on the way. Text over photography is excluded from pass/fail, because the backdrop is variable, and is reported separately.
- **Contrast thresholds.** WCAG AA: 4.5:1 for normal text, 3:1 for text ≥24px or ≥18.66px at weight ≥700.
- **Line counts and measure.** `Range.getClientRects()`, with rects grouped into visual lines by vertical midpoint. An early version grouped by `top` and produced false orphan reports on flex-row headings, where a 13px index numeral and an 18px title share a line but not a top edge. Those findings were withdrawn.
- **Section tone.** Per top-level section: composited background, luminance, height, padding, and the separator at each boundary — checking both the section's own `border-top` **and** the preceding section's `border-bottom`. An early version checked only `border-top` and wrongly reported four unruled boundaries. Re-measured, they are ruled. Those findings were withdrawn.

---

## 1. Executive finding

- **Readable and well structured overall.** Section grammar is sound, hierarchy is unambiguous on a fast scan, and mobile is genuinely clean.
- **Too weak in places — a real cluster, not polish.** Nine distinct text roles render below 4.5:1, including the primary CTA button at 3.57:1.
- **Rhythmically repetitive in places**, confined to the catalog and solution-detail template families.
- **NOT too heavy anywhere.** Every heading clears 13.88:1. No paragraph is overweight.
- **NOT flat overall.** Home, the hubs, Process, Service and About all alternate tone correctly.

The single largest finding is not a contrast issue: **every long-form reading surface is uncapped at 91–123 characters per line.**

---

## 2. Heading audit

| Route/component | Level | Issue | Severity | Evidence |
|---|---|---|---|---|
| All routes, all levels | H1/H2/H3 | **PASS** — contrast | — | Min 13.88:1 (navy `#0a2540`); typical 15.54–19.80:1 |
| All routes | H1/H2 | **PASS** — wrap | — | `.text-display`, `.text-document-title`, `.text-section-title` all carry `text-balance`; zero orphans at any width |
| `resitve` hub + `resitve/*` cards, `.text-feature-title` 24px | H3 | WRAP ISSUE — single-word orphan | SAFE TO DEFER | last/max = 0.24–0.25 at 375 and 768 ("…tračna **proga**") |
| `/reference` card, 20px | H3 | WRAP ISSUE | SAFE TO DEFER | last/max = 0.17 at 1440 and 768 |
| `/novice` card, 19px | H3 | WRAP ISSUE | SAFE TO DEFER | last/max = 0.11 and 0.14 at 1440 |
| Home family (navy `#0a2540`) | H2/H3 | Differs from `neutral-950` sitewide | PASS — note only | 15.54:1 vs 19.80:1; both read as black |

All three wrap issues share one cause: `.text-feature-title`, `.text-card-title`, `.text-list-title` and `.text-subsection-title` are the only heading roles without `text-balance`. That is a locked-typography change, hence deferred.

---

## 3. Body / supporting text audit

### BLOCKING READABILITY

**B1 — The editorial family has no measure cap.**

| Surface | Column | Size | CPL |
|---|---|---|---|
| News article body | 820px, `max-width: none` | 16px | **103** |
| News article lead | 820px | 18px | **91** |
| Reference detail body | 820px | 16px | **103** |
| Development-project detail body | 820px | 16px | **103** |
| Legal pages (`.legal-content`) | 920px | 15px | **123** |

The canonical measure is `--prose-max-width: 58ch`, documented in `globals.css` as validated against live copy. These are the longest-form reading surfaces on the site and the only ones that ignore it. The defect is **co-visible**: on a news article the body runs ~103 CPL while its own callout card directly beneath runs 73 CPL and the dark band runs 66 CPL, all within one viewport. By the co-visibility test established in `visual-system-decisions.md`, that carries weight.

Sources: `NewsArticleTemplate.tsx:119`, `ReferencePageTemplate.tsx:85`, the five `razvojni-projekti/*` detail pages, `.legal-content` via `LegalPage.tsx:51`.

**B2 — The primary CTA button fails AA.**

`Button variant="primary"` is `bg-[var(--color-interactive)]` `#0b8fd3` with `text-white` at 14px/500 → **3.57:1**. At 14px weight 500 this is normal text and owes 4.5:1. Hover `#087fbd` → 4.39:1, still short. `variant="brand"` (header *Kontakt*, every page) is `#0082ca` → **4.16:1**.

Reference point: `#0078bd`, already live in this codebase on the Careers link, measures **4.75:1**.

### PREVIEW FIX

| # | Text | Measured | Where |
|---|---|---|---|
| B3 | `text-neutral-400` 12px on white | **2.58:1** | `razvojni-projekti/page.tsx:301` — "Iz projekta: …" under every practice-connection card (6) |
| B4 | Index numerals `text-neutral-400` 12px on `#f2f2f2` / white | **2.31 / 2.58:1** | Home, `/resitve`, `/servis`, `/reference`. Sequence ordinals — they carry meaning |
| B5 | Footer `text-white/32` 11px on `#0a0a0a` | **2.80:1** | `Footer.tsx:398` — "PRAVNO". Inconsistent with its three siblings at `white/40` |
| B6 | Footer `text-white/40` on `#0a0a0a` | **3.77:1** | Column headings (11px), intro (14px), E-pošta/Telefon labels (15px), copyright (13px). Global |
| B7 | `text-neutral-500` 16px on `--surface-soft` `#e7e7e7` | **3.83:1** | Home systems lead. This is body copy, not metadata |
| B8 | Funding strip `white/42` 11px on `#101010` | **4.09:1** | Footer, every page |
| B9 | Home hero slogan `text-[13px] text-white/45`, uncapped | **142 CPL @1024**, 111 @768 | `Hero.tsx:170`. Faint *and* the longest line on the site |

### SAFE TO DEFER

| # | Text | Measured | Where |
|---|---|---|---|
| B10 | `text-neutral-500` 13–14px on `#f2f2f2` | 4.24:1 | Home standard-cell note (also 103 CPL); Careers + job-detail dates |
| B11 | `text-neutral-500` 11px/500 on `#f2f2f2` | 4.24:1 | Home funding labels |
| B12 | `text-neutral-500` 10px/500 on `#f5f5f5` | 4.35:1 | `/kontakt` topic chips (7) |
| B13 | `.index-label` brand blue | 3.72–4.16:1 | Process, About, Service, Cenik. Known: every blue fails 4.5 on light |

B7, B10 and B11 are the same defect the eyebrow pass diagnosed and fixed. That pass corrected the `.eyebrow` **role** to `neutral-600`; these are the bespoke literals it never reached.

**Nothing is too heavy.** On-dark body copy (`white/65`–`white/80`, 8.45–12.58:1) and on-white body (`neutral-600`, 7.81:1) are both healthy.

---

## 4. Section tone / rhythm audit

| Route | Sequence | Problem? | Direction |
|---|---|---|---|
| `/` | dark → white → F2 → E7 → white → white → dark → F2 | No | No change — best rhythm on the site |
| `/resitve`, `/standardne-celice`, `/reference`, `/novice`, `/razvojni-projekti`, `/kontakt` | alternating | No | No change |
| `/proces`, `/servis`, `/o-nas` | alternating, muted bands doing real work | No | No change |
| `/standardne-celice/middleware` | dark → white ×5 → dark | **Yes** | 4,614px unbroken; §5 alone is 2,107px |
| `/resitve/logistika` | dark → white ×5 → E7 → dark | **Yes** | 2,972px |
| `/standardne-celice/cnc`, `/resitve/avtomatizacija-cnc-strojev`, `/resitve/brizganje-plastike` | white ×4 then a muted band | Borderline | ~2,600px, landmarked at both ends — leave |
| `/standardne-celice/imm`, `/flex-25-50`, `/tmx` | white ×3 then F2 | No | ~1,640–1,704px |

**Separator grammar is consistent and healthy.** Every same-tone boundary sitewide carries a 1px `#e5e5e5` rule, with one exception at `/o-nas` §0|§1 where the hero's full-bleed image edge is itself the boundary. Combined with 160–208px of padding at every boundary, section edges are never ambiguous.

The white-run problem is therefore **not** boundary detection. It is **orientation over distance** — scrolling five viewport heights with no tonal landmark.

---

## 5. Mobile readability

The strongest part of the build.

- **No horizontal scroll on any route at 375 or 320.** `scrollWidth === clientWidth` everywhere. Elements extending past the viewport are inside the WikiNav rail, which is intentionally scrollable.
- **Body measure 25–50 CPL, median 39–44** across all routes — correct for 375px.
- **No H1/H2 wrap failures at any width.**
- Dark sections fully legible; no size-dependent contrast loss.
- Only issues: the three H3 orphans in §2 (also present at 768), and the Home hero slogan at 111 CPL / 768 worsening to 142 CPL / 1024 (B9).

---

## 6. Tonal break candidates

**Decision: only `/standardne-celice/middleware` and `/resitve/logistika` qualify.**

**`/standardne-celice/middleware`** — the clear case. Hero (dark) → white ×5 → CTA (dark). Boundaries are ruled and padded, so detection is not the failure; orientation is. 4,614px is roughly five screens with no tonal landmark, and §5 alone (2,107px) is taller than two viewports. Every sibling catalog page breaks its white run with a muted band; Middleware is the outlier in its own family. **Best fix: muted background shift on one section.** Not a dark break — that would fight the CTA. Not a stronger rule — the rule is not the problem.

**`/resitve/logistika`** — weaker, same shape. 2,972px before its E7 band. **Best fix: muted background shift.**

**Everything else: no change.** `/standardne-celice/cnc` and the 4-white solution details reach a muted band before the CTA; 2,600px is long but landmarked at both ends. IMM, FLEX 25/50 and TMX at ~1,650px are fine.

In both flagged cases the recommendation is to make the page **match its own family**, not to introduce a new pattern.

---

## 7. Explicitly healthy patterns — do not touch

- **Heading system.** Every heading clears 13.88:1; `text-balance` on the three display roles eliminates H1/H2 orphans at all five widths.
- **Separator grammar.** One rule value, applied to every same-tone boundary sitewide, with 160–208px of padding.
- **Mobile.** Zero overflow, correct measure, correct density.
- **Home's tonal sequence.** The two-step muted descent (F2 → E7) is doing real work.
- **`/servis` rhythm.** Muted bands bracket the task flow correctly.
- **On-dark body copy.** `white/65`–`white/80`.
- **All five hubs.** All alternate properly.

## Locked and untouched

Nothing in this document opens any of: font family, typography scale, global spacing, Visual System V1, Accent Signal, Interaction Weight, Colour Families tokens, card width system, section layout/composition, image normalization, CTA hierarchy, funding factual copy, navigation architecture, SEO/launch infrastructure.

---

## 8. Recommendation

**Fix before preview**

1. **Cap the editorial measure at `--prose-max-width`** — news article, reference detail, development-project detail, legal. Largest single readability gain and the only finding blocking on its own.
2. **Darken the CTA blue enough to clear 4.5:1 on white text.** Zero geometry.
3. **Lift the sub-3:1 text**: `neutral-400` → `neutral-600` on "Iz projekta" labels and index numerals; footer `white/32` → `white/40` minimum, ideally the whole footer label tier to ~`white/55`.
4. **`neutral-500` → `neutral-600` on muted surfaces**, starting with the Home systems lead (body copy at 3.83:1).
5. **Cap the Home hero slogan's measure.**

Items 2–5 are single-value tonal changes. None moves a box, re-wraps a paragraph, or touches a composition.

**Keep locked.** Everything in §7 plus the full locked list. The three heading orphans could be closed with `text-balance` on four heading roles; that is a genuine typography-token change and is explicitly deferred, not bundled.

**Is a tonal-break pass justified?** Barely, and only scoped to the two sections named in §6.

**Summary.** The site's structure is in good shape and the rhythm complaint is smaller than expected. The readability debt is almost entirely a cluster of faint one-off literals, plus one real measure failure on the pages people actually read.

---

## Addendum — post-audit measurement (same day, during implementation planning)

Scoping the tonal-break work required reading the template mechanics, which produced evidence that **revises §6**. Recorded here rather than silently folded in.

**The tonal rhythm is slot-driven, not per-page.** `CatalogPageTemplate` declares a fixed slot order with fixed surfaces — `applications` is the F2 band and `proof` is the E7 band. `SolutionPageTemplate` assigns `surface-soft` to `proofProject`/`proofGrid` and white to everything else. A page has a long white run precisely when it does not fill those slots. No page "forgot" to alternate.

**Two pages not sampled during the audit are worse than `/resitve/logistika`:**

| Route | Longest light run (excl. hero) | Tonal break before CTA |
|---|---|---|
| `/standardne-celice/middleware` | **4,662px** | **none** |
| `/resitve/namenski-sistemi` | **3,693px** | E7, only at the very end |
| `/resitve/manipulacija` | **3,408px** | **none** |
| `/resitve/logistika` | 3,020px | E7 at end |
| `/resitve/kolaborativni-roboti` | 2,689px | E7 at end |
| `/resitve/brizganje-plastike` | 2,647px | E7 at end |
| `/resitve/avtomatizacija-proizvodnje` | 2,645px | E7 mid-page |
| `/resitve/avtomatizacija-cnc-strojev` | 2,639px | E7 at end |

`/resitve/manipulacija` (`materialHandling`) has **no `proofProject` section at all**, so like Middleware it runs hero-to-CTA with zero tonal landmark. `/resitve/namenski-sistemi` has one extra body section than its peers.

**Consequence.** §6 selected `/resitve/logistika` on incomplete sampling. On the full measurement it ranks fourth. The two pages with *no* tonal break at all are Middleware and manipulacija. §6's decision is preserved above as the audit delivered it; the scope question is open and belongs to the project owner, not to this document.
