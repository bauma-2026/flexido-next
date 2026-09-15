# Typography + Vertical Rhythm Calibration Audit

Status: **audit only, nothing implemented.** Measured 2026-09-15 against the
local dev server (current working tree, 40+ uncommitted files), Chrome, at
390 / 768 / 1024 / 1440, in SL / EN / DE.

> `www.flexido.eu` is still the **old page-builder site** (`section-id-16016…`,
> inline `pt:70/20/40`). It shares no classes with this rebuild and was not a
> valid audit target. `flexido-next.vercel.app` lags the working tree. All
> numbers below come from the live local render of the current system.

Method: per-heading line boxes reconstructed with `Range.getBoundingClientRect()`
per character, grouped by line top. `lastR` = last-line width ÷ longest-line
width. `lastR ≤ 0.55` is the orphan band.

---

## 0. Hypotheses that did NOT hold

Recorded first, because they redirect the pass.

| Hypothesis | Verdict | Evidence |
|---|---|---|
| Section padding is drifting | **False** | Rendered rhythm is **96/96 body + 112/112 dark close** on Home, Solutions hub, Solution detail, Catalog, Process, References. Consistent across all five families. |
| The 8 stray `py-*` variants are live drift | **False** | They live almost entirely in **unmounted components** — `WhyFlexido` (py-36 = 144px), `MidCTA` (py-32), `FAQ`, `HowToChoose`, `Diagnostics`, `FundingTrust`, `ProjectProof` are imported by **0** files. |
| Top/bottom padding asymmetry is a problem | **False** | Every live section is symmetric. The only asymmetry is hero `pt-40/pb-24`, which clears the sticky header by design. |
| Locale-specific hacks are widespread | **False** | Exactly **one** exists sitewide (`ProductProof.tsx:74`). |
| Same-surface transitions are unseparated | **False** | Home §4→§5 is white→white at 96+96 = 192px, but §4 carries `border-bottom:1px`. Confirms the locked boundary convention. |
| `text-wrap: pretty` would fix orphans | **False** | Measured a **no-op** on every heading. Chrome's `pretty` only adjusts the last line of longer flows. `balance` is the only lever that works here. |

**Consequence:** this is not a spacing pass. It is a **heading-wrap and body-role pass.**

---

## 1. The 8 highest-value issues

### A1 — `.text-section-title` has no `text-balance` *(SYSTEMIC)*

The single highest-value fix on the site. `.text-display` and
`.text-document-title` both carry `text-balance`; the H2 role does not, so every
section heading wraps greedily and orphans its last line.

Measured `lastR`, 1024–1440:

| Heading | Locale | lastR | Orphan |
|---|---|---|---|
| Od pregleda procesa do podpore po zagonu | SL | **0.21** | `zagonu` |
| Kje lahko avtomatizacija pomaga (390) | SL | **0.35** | `pomaga` |
| What we cover within a project | EN | **0.40** | `a project` |
| Let's look at your process | EN | **0.48** | `process` |
| Schauen wir uns Ihren Prozess an | DE | **0.49** | `Prozess an` |
| Von der Standardzelle zur Umsetzung… | DE | **0.52** | `Produktion.` |
| Was wir im Projekt abdecken | DE | **0.55** | `abdecken` |

`0.21` is the worst line-break on the site — a 44px heading ending in one
six-letter word.

With `text-wrap: balance` applied and nothing else changed:

| Heading | before | after |
|---|---|---|
| Schauen wir uns Ihren Prozess an | 0.49 | **0.99** |
| Was wir im Projekt abdecken | 0.55 | **1.00** |
| Von der Standardzelle… | 0.52 | **0.80** |

Line count never increased. **Balance fixes every orphan without adding a line.**

**Canonical value:** add `text-balance` to `.text-section-title` in
`app/globals.css:112` **and** to `SECTION_BASE` in `catalog/roles.ts:14`.
Both, or the catalog family silently diverges.

---

### A2 — Heading measure has seven ad-hoc values and one locale ternary *(SYSTEMIC)*

`.text-section-title` is capped with **`max-w-[13ch]`, `[14ch]`, `[15ch]`,
`[16ch]`, `[18ch]`, `[20ch]` and `lg:max-w-[480px]`** across 30+ call sites — all
hand-tuned against Slovenian, then patched per locale:

```tsx
// src/components/blocks/home/ProductProof.tsx:74
locale === "en" ? "max-w-[13ch]" : "max-w-[16ch]"
```

DE falls into the SL `16ch` branch, which is why
*"Von der Standardzelle zur Umsetzung in der Produktion."* runs to **3 lines
with a `Produktion.` orphan** in DE but 2 clean lines in SL.

Measured, with balance on, DE Home at 1024:

| cap | result |
|---|---|
| 16ch | 3–4 lines, `lastR` 0.80 / 0.86 |
| 18ch | 3 lines |
| **20ch** | **2 lines, `lastR` 0.99–1.00 on every heading** |
| none | collapses to 1 line — loses the column mass |

**Direction — collapse 7 values to 2 shared tokens:**
- **default:** no cap; inherit `SectionHeader`'s 760px measure + balance.
- **`.measure-column` ≈ 20ch:** for headings that intentionally form a narrow
  column beside a grid.

`.text-display` already uses `sm:max-w-[20ch]` — 20ch is an existing precedent,
not a new number. Deleting the ternary is then free.

> Caveat worth a decision: a blanket 20ch cap turns currently-1-line headings
> ("Wo Automatisierung helfen kann") into 2 lines. That is why the default must
> be **uncapped**, with 20ch opt-in — not the reverse.

---

### A3 — `SectionHeader` is the source of truth in name only *(SYSTEMIC)*

`ui/SectionHeader.tsx` encodes the canonical trio — `eyebrow` → `mt-3` h2 →
`mt-5 max-w-[60ch]` body. It is imported by **3 files**. `.eyebrow` appears
**153 times**, hand-rolled.

The trio survived by luck: eyebrow→heading is `mt-3` in **63 of 66** cases
(12px measured everywhere, matching the locked Pass-3 convention). But the
downstream gaps did not:

| gap | values found |
|---|---|
| eyebrow → heading | mt-3 (63), mt-4 (2), mt-5 (1), **mt-2** (hub band) |
| heading → body | mt-4, **mt-5** (white), **mt-6** (dark), **mt-1.5** (hub band) |
| body class | `.text-body`, `text-[16px] leading-7`, `text-[15px] leading-6`, `text-[16px] leading-8` |

**Direction:** make `SectionHeader` mandatory for the trio and give it a
`tone="light|dark"` prop, so the dark CTA stops re-inventing `mt-6` +
`text-[16px] text-white/72`. This is the change that stops the drift recurring.

---

### A4 — The body type roles are effectively dead *(SYSTEMIC)*

The heading roles took; the body roles did not.

| role | uses | competing inline |
|---|---|---|
| `.text-section-title` | 75 | — (healthy) |
| `.text-display` | 15 | — (healthy) |
| `.text-body` | **3** | `text-[15px]` ×103, `text-[16px]` ×107 |
| `.text-body-compact` | **0** | `text-[14px]` ×154 |
| `.text-subsection-title` | **0** | duplicated verbatim in `roles.ts:25` |
| `.text-list-title` | 1 | — |

`.text-subsection-title` is **dead and duplicated** — `roles.ts` re-declares its
exact string rather than referencing the class, while `roles.ts` *does* correctly
reference `text-display` and `text-card-title`. `SECTION_BASE` likewise
re-declares `.text-section-title`'s values; its own comment admits the risk
("Keep the two in sync").

Leading is inconsistent even within one inline size:
`text-[15px]` pairs with `leading-7` (44×), `leading-6` (32×), `leading-[1.35]`,
`leading-5`, `leading-tight`, `leading-[1.6]`.

**Direction:** decide the body ladder once (A), then sweep (B). Delete the two
dead classes or adopt them; do not leave both.

---

### A5 — `.text-body` leading is 1.87 — too airy *(SYSTEMIC)*

`.text-body` = `text-[15px] leading-7` → **15/28 = 1.867** at mobile, relaxing to
16/28 = 1.75 at `sm`.

At 390px this renders **42 characters per line at 1.87 leading** — the lines are
short and far apart, so the paragraph reads as a list of strips. 1.5–1.6 is the
right band for a 15px/42cpl measure.

**Canonical direction:** `15/24 (1.6)` mobile → `16/26–28 (1.63–1.75)` at `sm`.

---

### A6 — Measure has four unit systems and a dead token *(SYSTEMIC)*

- **16 distinct `ch` values**: 46, 48, 52, 54, 56, 58, 60, 62, 64, 68, 70, 72…
- **20 distinct `px` values**: 720 (×37), 560 (×20), 760 (×16), 820, 680…
- **rem**: `max-w-[42rem]`
- **Tailwind scale**: `max-w-xl`, `max-w-2xl`, `max-w-3xl`

And `--prose-max-width: 65ch` is declared in `globals.css:29` and **referenced by
nothing**. `--layout-max-width` is used properly by `Container`; its sibling is dead.

**Direction:** three measure tokens — `--measure-lead` (~52ch),
`--measure-body` (~62ch), `--measure-note` (~46ch) — and wire `--prose-max-width`
or delete it.

---

### B1 — `SolutionsHubTemplate` "unsure" band bypasses the whole system *(LOCAL, worst instance)*

`src/components/solutions/SolutionsHubTemplate.tsx:123` — a raw `<section>`
that opts out of every shared rule at once:

```tsx
<section className="border-t border-neutral-200 bg-white py-7 sm:py-9">   // 28/36 — a 4th rhythm
  <p className="eyebrow">…</p>
  <h2 className="mt-2 text-xl font-semibold … sm:text-2xl">…</h2>          // bespoke 20/24 scale
  <p className="mt-1.5 text-[15px] leading-6 …">…</p>                      // mt-1.5, not mt-5
  <div className="max-w-xl">                                              // 4th measure unit
```

Rendered at **36/36 against a 96/96 neighbourhood**. The final CTA directly below
is also raw (`py-20 sm:py-28`), skipping `Section variant="large"` and its
`lg:` step, so it sits at 112 from `sm` up instead of 96→112.

Fix locally, but it is the template for how the drift happens.

---

### B2 — Same editorial role, two rhythms *(LOCAL)*

The "Rešitve v praksi." proof band renders at **64/64** on `/proces`
(`ProcessPageTemplate.tsx:192`, `variant="tight"`) and **96/96** on `/resitve`
(`SolutionsHubTemplate.tsx:97`, default). Same role, same copy, two rhythms.
Pick one — 96 matches the rest of the site.

---

## 2. Remaining findings by class

### B — local page polish
- `ProductProof.tsx:73` `lg:text-[38px]` — the **only** font-size override of a
  heading role sitewide. Once A1+A2 land, test whether it is still needed.
- `Competencies` body `max-w-[28ch]` collapses to a **265px box / 34cpl** at
  390px. The cap should be `sm:`-gated. Symptom of A6.
- `/resitve/avtomatizacija-cnc-strojev` has four consecutive 24/24 anchor
  sections with no headings between two 96/96 bands.
- Catalog `flex-25-50` has a 64/64 section between 96s.
- `razvojni-projekti/*` (5 pages) is a fully bespoke family: raw sections,
  `py-14 sm:py-16 lg:py-20` (80 at lg vs 96 canon), `h2` at `text-[24px]`.
  Low traffic — do it last or accept it as an editorial register.

### C — leave alone
- **Section padding.** 96/96 + 112/112 is correct and consistent. Do not touch.
- **Symmetry.** Correct everywhere; hero asymmetry is intentional.
- **Eyebrow→heading 12px.** Correct sitewide; locked in Pass 3.
- **Home §4→§5 white→white at 192px.** Rule-separated, reads as intended.
- **Hero H1 "doubled" text.** `sm:hidden` / `hidden sm:inline` responsive copy
  swap, not a defect.
- **Dead blocks** (`WhyFlexido`, `MidCTA`, `FAQ`, `HowToChoose`, `Diagnostics`,
  `FundingTrust`, `ProjectProof`). Do not calibrate them. Delete separately.

---

## 3. Recommended order

**Globally, before any page-level polish:**
1. **A1** `text-balance` on `.text-section-title` + `SECTION_BASE`. One line each, fixes 7 measured orphans across 3 locales.
2. **A2** collapse heading measures to uncapped + one 20ch token; delete the locale ternary.
3. **A5** re-set `.text-body` leading to ~1.6.
4. **A6** land the measure tokens.
5. **A3** make `SectionHeader` mandatory, add `tone`.
6. **A4** decide the body ladder; kill the `roles.ts` / `globals.css` duplication.

A1 and A2 must land **together** — balance changes which caps are still needed,
so tuning caps first would be wasted work.

**Then, locally:** B1, B2, and the B-list above.

## 4. Re-measure protocol
Re-run at 390 / 768 / 1024 / 1440 in SL / EN / DE. Gate on:
- no `lastR < 0.6` on any H1/H2
- no H2 above 3 lines in DE
- body 45–75 cpl desktop, 35–45 cpl mobile
- section padding unchanged at 96/96 and 112/112

---

# A1 + A2 — IMPLEMENTED 2026-09-15

Scope was A1 + A2 only. A3/A4/A5/A6 and all B items remain open.

## Source of truth (2 files)
- `app/globals.css` — `.text-section-title` gains `text-balance`; new `.measure-heading` (`max-w-[20ch]`), the one opt-in heading measure.
- `src/components/systems/catalog/roles.ts` — `SECTION_BASE` gains `text-balance`, keeping `HEADING.section` / `.lead` / `.dark` in sync with the CSS role.

## Call sites (21 files)
**Cap dropped — the layout column is the measure** (13): `Competencies` · `ProcessPageTemplate` ×2 · `ReferencesHubTemplate` · `CompanyPageTemplate` ×3 · `NewsHubTemplate` · `VideoPageTemplate` · `FinalCTA` · `ProblemSplitBlock` (`lg:max-w-[480px]`) · `zaposlitev` · `razvojni-projekti` ×2

**Swapped to `.measure-heading`** — heading's only parent is a 620–720px body-width wrapper (13): `SystemsHubTemplate` ×2 · `SolutionPageTemplate` ×2 · `ProcessPageTemplate` · `ReferencesHubTemplate` · `ServicePageTemplate` · `CatalogCta` · `NewsHubTemplate` · `CompanyPageTemplate` ×2 · `ContactPageTemplate` · `system-map`

**Ternaries removed** (2): `ProductProof` (`locale === "en" ? 13ch : 16ch`) and `DarkBand` (`variant === "compact" ? 14ch : 15ch`) — both now `.measure-heading`.

Net: **13 distinct heading widths → 1 token + the column**. Zero `max-w-[Nch]` remain on `.text-section-title`. Zero locale-conditional styling remains sitewide.

## Deliberately NOT changed
- **H1 caps** on `.text-display` / `.text-document-title` (13 sites). Those roles already balanced; their caps are hero composition, not balance compensation. Out of A2's stated scope ("compensating for missing balance").
- `ProductProof`'s `lg:text-[38px]` — a size override, not a measure, and not per-locale.
- H3 `subsection` measures in the catalog family.
- Dead components (`FAQ`, `HowToChoose`, `Diagnostics`, `ProjectProof`, `FlagshipCase`, `CaseCNC`, `ServiceSupportBand`, `DecisionBlock`, `SolutionPage`) — 0 importers.

## Measured result — Home H2s at 1440

| Heading | SL before → after | EN before → after | DE before → after |
|---|---|---|---|
| Where automation can help | 1L 1.00 → 1L 1.00 | 1L 1.00 → 1L 1.00 | 1L 1.00 → 1L 1.00 |
| From a standard cell… | 2L 0.88 → 2L 0.88 | **3L 0.68 → 2L 1.00** | **3L 0.52 → 2L 1.00** |
| What we cover within a project | 2L 1.00 → 2L 1.00 | **2L 0.40 → 2L 1.00** | **2L 0.55 → 2L 1.00** |
| From process review to… support | **2L 0.21 → 2L 1.00** | 2L 0.82 → 2L 0.82 | **2L 0.55 → 2L 1.00** |
| Let's look at your process | 1L 1.00 → 1L 1.00 | **2L 0.48 → 1L 1.00** | **2L 0.49 → 2L 0.99** |

The site's worst line-break (SL 0.21, orphan `zagonu`) is now 1.00. No heading gained a line anywhere; two lost one.

## Sweep at 390 / 768 / 1024 / 1440
Home SL/EN/DE, Solutions hub, Solution detail (CNC), Catalog detail (FLEX 25/50), Process, References — 24 page×width combinations. No horizontal overflow at any width. Remaining flags, all **pre-existing and not H2-role**:

- `/resitve` H1 "Rešitve za stabilnejšo proizvodnjo" — 2L, lastR 0.55 at 768/1440. `.text-display`, untouched this pass.
- `/reference` H2 "Kje se rešitve najpogosteje pokažejo v praksi" — 2L, lastR 0.65 at 1440. Was already uncapped. Tested: applying `.measure-heading` leaves it at 0.65 — no geometric fix helps; the sibling heading gets *worse* (1L 1.00 → 2L 0.83). Correctly left alone; needs an editorial rewrite, if anything.
- `/de` Home "Wo Automatisierung helfen kann" — 2L, lastR 0.56 at 390 only. A four-word phrase at 30px; balance has no better split.

## Gates
`tsc --noEmit` clean · `eslint` 4 errors, all pre-existing raw-anchor errors in `resitve/servis` and `resitve/system-map` · `npm run build` exit 0.

---

# A5 — IMPLEMENTED 2026-09-15

Scope was A5 only. A3 / A4 / A6 and all B items remain open.

## Canonical values

`app/globals.css` — `.text-body`, the only file changed.

```
- @apply text-[15px] leading-7 text-neutral-600 sm:text-base;
+ @apply text-[15px] leading-6 text-neutral-600 sm:text-base sm:leading-[26px];
```

| | before | after |
|---|---|---|
| mobile | 15 / 28 = **1.87** | 15 / 24 = **1.60** |
| `sm` and up | 16 / 28 = 1.75 | 16 / 26 = **1.63** |

Leading is now set per breakpoint. The old rule paired one `leading-7` with a
size that changes at `sm`, so the ratio drifted with the viewport rather than
being chosen for either step.

**28px desktop was tested and rejected.** The longest measured line in the role
is 74 CPL, and it renders as a *single* line at 1440 — leading never applies to
it. The two-line cases sit at 63 and 45 CPL, where 1.63 is comfortable. Nothing
in the role's live copy justifies the extra 2px.

## Measured reduction — Home at 390

| paragraph | CPL | lines | before | after | saved |
|---|---|---|---|---|---|
| Solutions intro ("Od posameznega stroja…") | 42 | 3 | 84px | **72px** | −12px (−14%) |
| Competencies intro ("Konstrukcijo, programiranje…") | 34 | 2 | 56px | **48px** | −8px (−14%) |
| Process intro ("Začnemo pri procesu…") | 37 | 2 | 56px | **48px** | −8px (−14%) |

At 768/1440 each drops 56 → 52px (−4px) and the single-line one 28 → 26px.
**Line counts are unchanged at every width** — this is pure density, no reflow.

## Components that become too dense
None. Verified 390 / 768 / 1024 / 1440 across Home SL/EN/DE, Solutions hub,
Solution detail, Catalog detail, Process, References: no horizontal overflow,
no reflow, computed values exactly `15px/24px` and `16px/26px` everywhere.

No dense technical block is affected, structurally: the role is not used by any
spec, matrix, tile or table component. Those read `BODY.*` from
`catalog/roles.ts` or inline classes, none of which this pass touched.

## Local exceptions needed
**None.** No call site needed an override.

## The honest caveat — this role governs 4 paragraphs

`.text-body` has **3 occurrences in source**, one of which
(`lab/resitve-register/DecisionRegister.tsx`) is a lab route, not production.
Live reach is `Competencies` plus `SectionHeader`'s optional `desc`:

| page | `.text-body` elements |
|---|---|
| Home | 3 |
| Solutions hub | 1 |
| Solution detail, Catalog detail, Process, References | **0** |

So A5 corrected the *role* but moved four paragraphs. The airiness the audit
flagged is overwhelmingly in inline classes. Paragraphs still at ratio ≥ 1.7 at
390px, after this pass:

| page | airy / total |
|---|---|
| `/proces` | **13 / 15** |
| `/standardne-celice/flex-25-50` | 7 / 16 |
| `/reference` | 6 / 12 |
| Home | 7 / 17 |

Their specs: `15px/28px`, `16px/28px`, `16px/32px`, `17px/32px`. Bringing those
into the band is **A4** (adopt the role / kill the inline ladder), not A5. A5's
value is that the canonical target now exists and is correct for A4 to sweep
toward.

## Gates
`tsc --noEmit` clean · `npm run build` exit 0 · `eslint` 4 errors, all
pre-existing raw-anchor errors in `resitve/servis` and `resitve/system-map`.

---

# A4 — IMPLEMENTED 2026-09-15

Scope was A4 only (adopt the canonical body role). A3 and A6 remain open.
`.text-body`'s values are untouched — still 15/24 mobile, 16/26 desktop from A5.

## Files changed (18)

| file | declarations migrated |
|---|---|
| `solutions/SolutionPageTemplate.tsx` | 14 |
| `company/CompanyPageTemplate.tsx` | 4 |
| `news/NewsHubTemplate.tsx` | 4 |
| `app/(default)/razvojni-projekti/page.tsx` (hub) | 4 |
| `service/ServicePageTemplate.tsx` | 3 |
| `app/(default)/zaposlitev/page.tsx` | 3 |
| `app/(default)/resitve/system-map/page.tsx` | 3 |
| `app/(default)/resitve/servis/page.tsx` | 3 |
| `systems/SystemsHubTemplate.tsx` | 2 |
| `process/ProcessPageTemplate.tsx` | 2 |
| `references/ReferencesHubTemplate.tsx` | 2 |
| `references/ReferencePageTemplate.tsx` | 1 |
| `contact/ContactPageTemplate.tsx` | 1 |
| `company/VideoPageTemplate.tsx` | 1 |
| `solutions/ProblemSplitBlock.tsx` | 1 |
| `blocks/editorial/ProjectPracticeLink.tsx` | 1 |
| `app/(default)/konstrukter/page.tsx` | 1 |
| `systems/catalog/roles.ts` | `BODY.base` → `text-body` |

## Counts

- **50 ad-hoc body declarations removed** — 49 paragraph class strings + 1 role definition.
- `.text-body` call sites: **3 → 51** (49 new + the 2 pre-existing production ones).
- Layout classes preserved in every case: `mt-*`, `max-w-*`, `lg:pr-*` all kept; only the
  type tokens (`text-[15px]` / `text-[16px]` / `leading-7` / `text-neutral-600` /
  `sm:text-[16px]`) were removed. Verified: zero call sites carry both `text-body`
  and a leftover type token.

**`BODY.base` was 16/32 — ratio 2.0, the airiest body on the site.** It is documented as
"continuation paragraphs", which is exactly the canonical role's job, so it now defers
to `text-body` instead of restating a second set of numbers. `roles.ts` is a shared
source of truth, so this was in scope.

## Rendered `.text-body` paragraphs per page (390px)

| page | before | after |
|---|---|---|
| Home | 3 | 3 |
| Solutions hub | 1 | 1 |
| Solution detail (CNC) | 0 | **5** |
| Process | 0 | **2** |
| References hub | 0 | **2** |
| Reference detail | 0 | **1** |
| Catalog hub | 0 | **3** |
| About | 0 | **3** |
| Service | 0 | **3** |
| Jobs | 0 | **3** |

## Height change and reflow — Solution detail (CNC)

| paragraph | 390 before → after | 1440 before → after |
|---|---|---|
| "CNC stroj je le en del procesa…" | 84 → **72px** (3L) | 84 → **78px** (3L) |
| "Posamezni gradniki so izbrani…" | 84 → **72px** (3L) | 56 → **52px** (2L) |
| "Izhodišče določa dejanski proces…" | 84 → **72px** (3L) | 56 → **52px** (2L) |
| "Na voljo z robotom nosilnosti…" | 56 → **48px** (2L) | 28 → **26px** (1L) |
| "Tračna proga za standardne KLT…" | 168 → **144px** (6L) | 84 → **78px** (3L) |

**Zero line-count change at any width on any migrated paragraph.** Mobile drops
8–24px per block (−14%), desktop 2–6px. Note the mobile font also steps 16 → 15px
where a declaration had no `sm:` step; measured line counts were identical, so this
produced no reflow.

## Intentionally NOT migrated — 21 declarations remain

| what | count | category | why |
|---|---|---|---|
| `razvojni-projekti/*` detail pages (5) | 8 | C | editorial project articles; bespoke family, not in the priority list |
| Type-cascading `<div>` wrappers (`SolutionPageTemplate` ×3, `ServicePageTemplate` ×1) | 4 | B | the class sits on a container and cascades to children — not a 1:1 paragraph role |
| Card / step / item descriptions (`step.desc`, `item.desc` ×2, news excerpt) | 4 | B | card copy, deliberately a step below body |
| `NewsArticleTemplate` article blocks | 2 | C | editorial article prose |
| `LegalPage` | 1 | C | legal prose |
| `ProjectFundingBlock` | 1 | C | editorial funding block |
| `ProcessPageTemplate` step desc | 1 | B | step card |

Also untouched by design: **all dark-band copy** (`text-white/65…/75`, ~15 declarations
— category C, and a different colour role), **all `BODY.lead` / 17px leads**
(category C), **all 14px small copy**, and the catalog's technical ladder
(`BODY.matrix`, `.peer`, `.small`, `.micro`, `.card`).

`BODY.strong` (16/32, `text-neutral-700`) was left: it differs from the canonical role
only by colour, so folding it in needs the colour-variant decision that belongs with
A3/A6, not a silent colour change here.

## Local exceptions retained
**None.** No migrated call site needed a type override.

## Gates
`tsc --noEmit` clean · `npm run build` exit 0 · `eslint` 4 errors, all pre-existing
raw-anchor errors in `resitve/servis` and `resitve/system-map` (unchanged count).
Verified 390 / 768 / 1024 / 1440 on Home SL/EN/DE, Process, Solutions hub, Solution
detail, FLEX 25/50, Catalog hub, References hub + detail, About, Service, Jobs:
computed spec uniformly `15px/24px` and `16px/26px`, no horizontal overflow.

---

# A3 — IMPLEMENTED 2026-09-15

Scope was A3 only. A6 remains open. Heading roles, `.text-body`, `.measure-heading`
and all section padding are untouched.

## Canonical gaps (unchanged — confirmed, not chosen anew)

| gap | value | basis |
|---|---|---|
| eyebrow → heading | `mt-3` — **12px** | already universal (63 of 66 sites pre-pass) |
| heading → body | `mt-5` — **20px** | live majority; already what `SectionHeader` used |

Three sites were off-majority and normalised by migration:
`SolutionPageTemplate` desc `mt-4`→`mt-5`, `NewsHubTemplate` desc `mt-6`→`mt-5`,
`ServicePageTemplate` desc `mt-4`→`mt-5`. Net effect ±4px on three paragraphs.

## SectionHeader API changes

```diff
- className = "max-w-[760px]"        // silent default
+ className?: string                 // no default — the call site owns geometry
+ headingClassName?: string          // structural additions to the H2
+ descClassName?: string             // structural additions to the desc
```

Two new props, both structural-only and both *extending* the roles via `cn()`
rather than replacing them. The removed default is the important one: the
component used to apply a 760px measure to anything that adopted it, which is a
geometry decision that belongs to the column, not the header role. The four
original call sites now pass `className="max-w-[760px]" descClassName="max-w-[60ch]"`
explicitly, so their rendering is byte-identical to before.

## Counts

- **55 duplicated eyebrow/H2/body compositions removed.**
- `SectionHeader` call sites: **4 → 59**, across **19 files**.
- Files changed: **21** (19 call-site files + `ui/SectionHeader.tsx` + the 4
  original call sites, which overlap).

| file | call sites |
|---|---|
| `solutions/SolutionPageTemplate.tsx` | 15 |
| `company/CompanyPageTemplate.tsx` | 5 |
| `service/ServicePageTemplate.tsx` | 5 |
| `process/ProcessPageTemplate.tsx` | 4 |
| `systems/SystemsHubTemplate.tsx`, `solutions/SolutionsHubTemplate.tsx`, `references/ReferencesHubTemplate.tsx`, `news/NewsHubTemplate.tsx`, `resitve/system-map`, `resitve/servis`, `razvojni-projekti/page.tsx` | 3 each |
| `blocks/home/Solutions.tsx` | 2 |
| `blocks/home/{Process,Competencies,ProductProof}`, `contact/ContactPageTemplate`, `company/VideoPageTemplate`, `solutions/ProblemSplitBlock`, `zaposlitev` | 1 each |

## Intentionally left local

| composition | n | why |
|---|---|---|
| **Dark CTA closes** (`eyebrow-on-dark` + `text-white`) | 11 | Category C. Their support copy is *not* normalised — three colours (`white/65`, `/72`, `/75`), three sizes (15/16/17px) and three measures (52/54/58ch). A `tone="dark"` prop would force picking one, i.e. a visual change. Deferred as its own decision. |
| Hero H1 blocks (`text-display` / `text-document-title`) | 13 | Category B — different role, different gap (`mt-4`). |
| Catalog slot headers (`CatalogIntro`/`Identity`/`Specs`/`Options`/…) | 12 | Category B — technical register with its own `BODY.*` ladder and `HEADING.subsection` H3s. |
| Editorial/news article + legal headers | 6 | Category B/C. |
| `razvojni-projekti` **detail** pages | 10 | Category C editorial family (the *hub* did migrate). |
| `SolutionsHubTemplate` "unsure" band | 1 | bespoke `text-xl` H2, `mt-2`/`mt-1.5` — not the section role at all (audit item B1). |
| `TrustStrip`, `FundingCertification`, `DevelopmentProjectNav` | 3 | eyebrow with no H2 following. |

## SectionHeader limitations found

1. **Multi-paragraph bodies.** `desc` is a single `ReactNode` rendered inside one
   `<p>`, so a `paragraphs.map(...)` body cannot pass through it without nesting
   `<p>` in `<p>`. Five sites (`ProblemSplitBlock`, `VideoPageTemplate`,
   `SystemsHubTemplate` modules, `ServicePageTemplate` coverage,
   `CatalogIntro`) therefore adopted it for **eyebrow + heading only** and kept
   their mapped paragraphs as siblings. Rendering is unchanged; the duplication
   that mattered is still gone. A `desc: ReactNode[]` overload would fix it, but
   that grows the API beyond what this pass allows.
2. **No dark-surface mode** — see the table above.
3. **No `id`/anchor pass-through** — anchors currently live on the parent
   `Section`, so this has not bitten yet.

## Verification

390 / 768 / 1024 / 1440 on Home SL/EN/DE, Solutions hub + detail, Catalog hub +
FLEX 25/50, Process, References hub + detail, About, Service, Jobs.

- Every **migrated** composition measures exactly **12px / 20px**.
- Every gap that deviates belongs to a **deliberately non-migrated** block:
  24px (dark CTA `mt-6`), 16px (DarkBand `mt-4`, hero `mt-4`), 8px/6px
  (the bespoke hub band).
- Heading box widths unchanged where the wrapper was preserved (e.g. About:
  485 / 420 / 482 / 620px — the original grid columns and `max-w-[620px]`).
- No horizontal overflow at any width. No copy changed: 24 JSX text literals
  were converted to string props and audited for HTML entities — none present,
  em-dashes and diacritics preserved verbatim.

## Visual regressions
**None found.** The only intended deltas are the three ±4px desc gaps listed above.

## Gates
`tsc --noEmit` clean · `npm run build` exit 0 (119 static pages) · `eslint`
4 errors, all pre-existing raw-anchor errors in `resitve/servis` and
`resitve/system-map` (count unchanged through all five passes).

---

# A6 — IMPLEMENTED 2026-09-15

Final pass. Heading roles, `.measure-heading`, `.text-body` type values and
`SectionHeader` gaps are untouched.

## 1. Token chosen — `--prose-max-width: 58ch` (was 65ch, unused)

**65ch was wrong, and measurement is why.** First-line character counts at 1440,
`.text-body` at 16px, on live SL copy:

| cap | box | first-line chars |
|---|---|---|
| none (the 720px section wrapper most prose sits in) | 720px | **84–103** |
| 65ch — the declared token | 655px | **84–93** |
| 62ch | 625px | 84–90 |
| 60ch | 605px | 77–85 |
| **58ch — chosen** | **585px** | **75–82** |
| 54ch | 544px | 71–80 |

The 45–75 band puts 65ch and uncapped clearly out. 54ch reads best in isolation
but re-wraps most existing paragraphs; **58ch** lands 75–82, and is already the
site's most-used measure (17 occurrences), so adopting it moves the fewest.

`ch` scales with font-size, so the token is inert below `sm` — at 390px every
prose box is the 350px viewport column, which is correct.

New utility, in `app/globals.css`:

```css
.measure-prose { max-width: var(--prose-max-width); }
```

## 2. Files changed — 18
`app/globals.css` (token + utility) plus 17 call-site files: `SolutionPageTemplate`
(11) · `ServicePageTemplate`, `resitve/servis` (3 each) · `ReferencesHubTemplate`,
`NewsHubTemplate`, `blocks/home/Solutions`, `resitve/system-map`,
`razvojni-projekti/page.tsx` (2 each) · `SolutionsHubTemplate`,
`ReferencePageTemplate`, `ProcessPageTemplate`, `ContactPageTemplate`,
`CompanyPageTemplate`, `blocks/home/Process`, `ProjectPracticeLink`,
`zaposlitev`, `konstrukter` (1 each).

## 3. Declarations removed / normalised — 40
- **14** ad-hoc wide measures swapped to the token
  (`max-w-[58ch]` ×4, `[60ch]` ×4, `[62ch]` ×3, `[64ch]`, `[68ch]`, `[620px]`).
- **22** `SectionHeader` descs that had **no** measure and were running at the
  full 720px wrapper — the real defect — now `descClassName="measure-prose"`.
- **4** bare `<p className="text-body">` in 680–760px wrappers.

`.measure-prose` call sites: **40**. Remaining `max-w` on the body role: **10**,
all ≤52ch or column-matched px.

## 4. Left local, on purpose

| what | n | why |
|---|---|---|
| ≤52ch measures (`28ch`, `42ch` ×2, `46ch` ×2, `50ch`, `52ch` ×3, `560px`) | 10 | **narrower than the token** — the 2-up grid column or card is deliberately the measure. Forcing 58ch here would *widen* them. |
| `ProcessPageTemplate` intro (`max-w-[560px]` parent), `SolutionPageTemplate` card body (`p-10` card), `SolutionPageTemplate` cross-link body | 3 | parent already narrower than 585px — the token would be inert; adding it is noise. |
| `NewsHubTemplate` hero body (`max-w-[42ch]` parent) | 1 | Category C hero support copy. |
| All dark-band copy, 17px leads, `BODY.*` technical ladder, editorial/article/legal prose | — | Categories C/D/E, explicitly out of scope. |

## 5. Before → after CPL (first line), 1440

| page | before | after | lines |
|---|---|---|---|
| Solution detail — "Posamezni gradniki so izbrani…" | 720px / **97** | 585px / **81** | 2 → 2 |
| Solution detail — "Izhodišče določa dejanski proces…" | 720px / **103** | 585px / **75** | 2 → 2 |
| Process — "Od pregleda procesa do delujočega…" | 720px / **89** | 585px / **76** | 2 → 2 |
| About — approach body | 694px / **95** | 585px / **80** | 2 → 2 |
| Jobs — "Flexido razvija in integrira…" | 680px / **95** | 585px / **82** | 2 → 2 |
| Service — "Obseg podpore je vezan…" | 720px / **84** | 585px / **77** | **1 → 2** |
| Service — "Urne postavke, dodatki…" | 720px / **97** | 585px / **82** | **1 → 2** |

Every prose box on every audited page is now ≤585px. Verified 390 / 768 / 1024 /
1440 on Home SL/EN/DE, Process, Solutions hub + detail, Catalog hub + FLEX 25/50,
References hub + detail, About, Service, Jobs — no horizontal overflow anywhere.

## 6. Awkward reflow — two paragraphs, and a recommendation I did NOT apply

The two `/servis` one-liners above now break to a second line, and they orphan:

| paragraph | last line | last-line ratio |
|---|---|---|
| "Obseg podpore je vezan…" | `opreme.` | **0.11** |
| "Urne postavke, dodatki…" | `ločenem ceniku.` | **0.21** |

This is a real cost of the cap, caused by this pass. Measured fixes:

| | 0.11 case | 0.21 case | 0.51 case |
|---|---|---|---|
| `text-wrap: pretty` | 0.21 | 0.21 | 0.51 |
| `text-wrap: balance` | **1.00** | **1.00** | **0.99** |

`balance` fixes all three; `pretty` is close to useless here (same finding as A1).
**I did not apply it.** Adding `text-balance` to `.text-body` changes how every
paragraph on the site wraps, and Chrome stops balancing past ~6 lines — that is a
body-copy decision, not a measure decision, and outside this pass's scope. The
trade as it stands: a 97-character line is a readability defect, a short last line
is a cosmetic one, so the cap is still the right call. Flagging it for your call.

## 7. Is `--prose-max-width` the source of truth?
**Yes.** It was declared and referenced by nothing. It is now consumed by
`.measure-prose`, which is the only prose width on the canonical body role — 40
call sites, zero restating the number. The remaining 10 widths are all
*narrower*-than-token column geometry, which the token is not meant to govern.

## 8. Gates
`tsc --noEmit` clean · `npm run build` exit 0 · `eslint` 4 errors, the same
pre-existing raw-anchor ones in `resitve/servis` and `resitve/system-map`.

> **Dev-server note:** verification for this pass ran against a production build
> on port 3100, not the dev server. Running `npm run build` alongside `next dev`
> left a stale CSS chunk in `.next/dev/static/chunks/` — it kept serving
> `--prose-max-width: 65ch` and no `.measure-prose` long after the file changed,
> and a touch/reload did not clear it. The compiled `.next/static` CSS was
> correct throughout. To clear it: stop the dev server, `rm -rf .next/dev`,
> restart.

---

# A6-follow-up — `text-balance` on `.text-body` — KEPT 2026-09-15

One line changed: `.text-body` in `app/globals.css` gains `text-balance`.
Nothing else — no measure, spacing, size, leading or content change.

## 1. The two `/servis` orphans — fixed

| paragraph | before | after |
|---|---|---|
| "Obseg podpore je vezan…" — last line `opreme.` | **0.11** | **1.00** (`…dobavi Flexido, in dogovorjeni o…`) |
| "Urne postavke, dodatki…" — last line `ločenem ceniku.` | **0.21** | **1.00** (`…servisnih storitev so objavljeni`) |
| "Več kot je osnovnih podatkov…" (same block) | 0.51 | **0.99** |

Verified in the shipped build (`textWrap: "balance"` computed), not by DOM toggle.

## 2. Lines gained or lost — none

Zero, across every live `.text-body` on Home SL/EN/DE, Process, Solution detail,
Catalog hub, References, About, Service, Jobs and Development projects, at
390 / 768 / 1024 / 1440. Balance never added or removed a line; it only
redistributed words between existing lines.

## 3. Awkward distribution on long paragraphs — none found

Every measured paragraph improved or held. Worst-case last-line ratios all rose:

| paragraph | lines | before → after |
|---|---|---|
| CNC conveyor note (390) | **6** | 0.32 → **1.00** |
| About "Flexido ni samo dobavitelj…" (390) | **5** | 0.32 → **0.84** |
| About "Flexido ni samo dobavitelj…" (1440) | 4 | 0.66 → 0.92 |
| CNC "CNC stroj je le en del…" (1440) | 3 | 0.16 → **1.00** |
| CNC "Posamezni gradniki…" (1440) | 2 | 0.32 → **1.00** |
| Home DE longest (390) | 4 | — → 0.99 |

**Zero paragraphs worsened** by more than the 0.02 measurement threshold, at any
width, on any page.

## 4. Chromium's balancing cutoff — not reached

Chromium stops balancing past ~6 lines. The longest live `.text-body` paragraph
in the whole site is **exactly 6 lines** (the CNC conveyor note at 390px), and it
balances correctly — 0.32 → 1.00. Nothing is at or over the limit today, and the
failure mode if copy ever grows past it is a silent fallback to normal wrapping,
i.e. today's behaviour — a no-op, not a regression.

For the record, `text-wrap: pretty` was measured first and rejected: 0.11 → 0.21,
and no change on the other two. Same result as the A1 heading finding.

## 5. Gates
`tsc --noEmit` clean · `npm run build` exit 0 · `eslint` 4 errors, the same
pre-existing raw-anchor ones. Compiled CSS confirmed to contain `text-wrap:balance`.

**Verdict: kept.** The 58ch measure and body balancing now work together — the
cap fixes line length, balance pays its only cost.

---

# Home — LOCKED

Closes the Home series. The global typography/rhythm system was already locked
before this pass; this records the final **local, Home-only** polish (A1–A5 of
the Home visual polish audit) and freezes the page.

## Status

- Home visual polish **A1–A5 implemented**
- commit: `82dc6afc2abf2f38607eb0b141f624c41b5ef27e`
- pushed to `origin/main`
- local `main` and `origin/main` **in sync** (0 ahead, 0 behind)

## Locked areas

No further changes without an explicit unlock:

- Hero composition and H1 wrapping across SL / EN / DE
- Section tone sequence
- Standard-cell section
- Competencies register
- Process section
- Dark CTA band
- Funding/certification block
- Footer desktop **and** mobile composition
- Global typography/rhythm system
- Heading balance and measures
- `.text-body` leading and adoption
- prose measure system
- `SectionHeader` composition

## Final Home polish changes that landed

Three files, +26 / −8. Every change is a mobile-breakpoint qualifier on a local
utility — desktop output is byte-identical.

| # | Change | File |
|---|---|---|
| A1 | mobile footer right rail → 2-column layout with Solutions spanning | `src/components/layout/Footer.tsx` |
| A2 | footer legal-spacing issue **resolved indirectly** by the new row gap — `mt-9` left untouched | — |
| A3 | Process mobile title cap relaxed (`max-w-none sm:max-w-[18ch]`) | `src/components/blocks/home/Process.tsx` |
| A4 | Process mobile paragraph cap relaxed (`max-w-none sm:max-w-[32ch]`) | `src/components/blocks/home/Process.tsx` |
| A5 | EN/DE duplicate funding micro-label removed | `src/components/blocks/home/FundingCertification.tsx` |

## Measured impact — final pass

Footer, mobile:

| locale | before | after | Δ |
|---|---|---|---|
| SL | 1808 | **1469** | −339 |
| EN | 1925 | **1510** | −415 |
| DE | 1972 | **1538** | −434 |

Process, mobile:

| locale | before | after | Δ |
|---|---|---|---|
| SL | 901 | **857** | −44 |
| EN | 997 | **889** | −108 |
| DE | 1043 | **1001** | −42 |

Whole page:

| locale | before | after | Δ |
|---|---|---|---|
| SL | 7682 | **7299** | −383 |
| EN | 7689 | **7135** | −554 |
| DE | 7965 | **7458** | −507 |

## Verification

- `tsc --noEmit` **exit 0**
- `next build` **exit 0**
- no horizontal overflow at **375 / 390 / 768 / 1024 / 1440**
- desktop unchanged except the intended EN/DE funding-label cleanup — proven by
  stash/re-measure A/B, not assertion: SL at 768 / 1024 / 1440 matches baseline
  to the sub-pixel (grid tracks, gaps, column heights, page totals)
- SL funding unchanged (711px mobile, 632px desktop, all three labels)
- no unrelated files changed

## CLOSED — leave alone

Verified correct in the final pass. Do not reopen:

- Competencies spacing / divider / icon grammar
- Funding padding / logo sizing / legal-note spacing
- Standard-cell bottom transition
- Process divider rhythm and desktop grid
- Footer desktop hierarchy
- page-level surface ramp and section order

B1–B5 from the Home visual polish audit stay **deferred and unopened**. No new
recommendations are carried forward.
