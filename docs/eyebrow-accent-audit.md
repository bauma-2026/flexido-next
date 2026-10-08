# Eyebrow Visibility & Accent Signal — Audit and V1 Decision

**Status: complete — neutral base and accent signal both landed** (2026-09-19)

> **Purpose.** This document records why the eyebrow role was opened after the visual system was otherwise locked, what the audit found, and what was decided. It is the durable record for both halves of the question — the neutral base and the accent signal, implemented in that order and for that reason.
>
> **It opens nothing else.** Typography, layout, widths and containment, image normalization, Funding copy, Interaction Weight, Colour Families and launch architecture all remain locked and are cited here only as constraints.
>
> **Deferred items in §7 are not to be picked up opportunistically.** They are recorded so the reasoning survives, not so they can be scheduled.

---

## 0. Relationship to the locked visual system

`docs/visual-system-audit.md` names the eyebrow as *"the strongest single act of systematization on the site"* (349 uses of one class) and says plainly: **"Do not rebuild the eyebrow."** `docs/visual-system-decisions.md` lists the eyebrow system as locked and untouched.

That guidance stands and this pass does not contradict it. The instruction protects the eyebrow's *grammar* — one 11px uppercase tracked label, used everywhere, subordinate to the heading it labels. This pass changes **one declared value inside that grammar** because the value fails an accessibility threshold. It adds no roles, no tokens, no variants and no geometry.

The distinction matters for future passes: *the eyebrow is closed to redesign, not to correction.* A measured accessibility failure in a locked role is a defect in the role's implementation, not an invitation to reopen the role.

---

## 1. Why this was opened

The eyebrow is a small, low-contrast, uppercase, letter-spaced label — the exact combination that is hardest to read and easiest to under-specify. It sits above nearly every section heading on the site, so whatever it does, it does several hundred times.

Two independent problems were suspected:

1. **The canonical `.eyebrow` was too weak on muted and soft light surfaces.** Confirmed — see §3.
2. **A large body of hand-rolled small labels at `text-neutral-400` was a worse failure than the canonical class.** Confirmed, and it was the larger of the two — see §4.

A third question was raised at the same time: whether the eyebrow should be able to carry an **accent signal** (brand blue) to mark a section as special. That question is answered in §6 — yes, but never by recolouring the text.

---

## 2. The role set as found

Four small-label roles existed in `app/globals.css`:

| role | definition | uses |
|---|---|---|
| `.eyebrow` | `11px uppercase tracking-[0.16em] text-neutral-500`, weight 400 | 68 direct + 53 via `SectionHeader` |
| `.eyebrow-on-dark` | `11px uppercase tracking-[0.16em] text-white/50` | 33 |
| `.spec-label` | `11px font-medium uppercase tracking-[0.14em] text-neutral-600` | 3 |
| `.index-label` | `12px font-semibold tabular-nums tracking-[0.14em] text-[var(--color-brand)]` | 10 |

`SectionHeader` hardcodes `className="eyebrow"` internally, so every call site that passes an `eyebrow` prop inherits the canonical class with no opportunity to drift. This is why the base fix is one line: the component absorbs 53 of the sites by itself.

Only **five** call sites override `.eyebrow`'s colour at all — two on dark surfaces (intentional), one hover-only (`DecisionBlock`), and two inside a dead component. The role had almost no colour drift. Its problem was that its single declared colour was wrong.

---

## 3. Finding 1 — the canonical eyebrow failed on muted surfaces

At 11px the eyebrow is **normal text** under WCAG (the large-text exemption begins at 18pt/24px, or 14pt bold). It therefore owes **4.5:1**, not 3:1.

Measured against the compiled palette (`neutral-400 #a1a1a1`, `neutral-500 #737373`, `neutral-600 #525252`) and the declared surfaces (`--surface: #f2f2f2`, `--surface-soft: #e7e7e7`):

| | white | neutral-50 | `--surface` | `--surface-soft` |
|---|---|---|---|---|
| neutral-400 | 2.58 ✗ | 2.48 ✗ | 2.31 ✗ | 2.09 ✗ |
| **neutral-500** *(as found)* | 4.74 ✓ | 4.54 ✓ | **4.24 ✗** | **3.83 ✗** |
| **neutral-600** *(decided)* | 7.81 ✓ | 7.49 ✓ | 6.98 ✓ | 6.32 ✓ |

The failure is live, not theoretical. Eyebrows sit directly on `.surface-muted` / `.surface-soft` sections in `SolutionsHubTemplate`, `ServicePageTemplate`, `ProcessPageTemplate`, `blocks/home/Solutions` and `FundingCertification`.

Note also that neutral-500 cleared neutral-50 by **0.04** — a margin thin enough that any future surface darkening would have broken it silently. The role had no headroom on any surface but white.

---

## 4. Finding 2 — `text-neutral-400` was the larger debt

**49 uses across 22 files**, every one below 2.6:1 — a worse failure than the canonical class, and invisible to anyone auditing `.eyebrow` alone.

The critical insight is that these were **not one problem**. They were five different roles that happened to share a colour. Replacing all 49 would have been wrong: it would have recoloured icons, renumbered index labels into eyebrow grammar, and dragged the header into a pass that had nothing to do with it.

### 4.1 Semantic role map

| # | role | what it is | n | disposition |
|---|---|---|---|---|
| A | **Hand-rolled eyebrow** | `11px uppercase tracking-[0.16em]` — byte-identical to `.eyebrow` but for the neutral level | 19 | **normalized to `.eyebrow`** |
| A′ | **Hand-rolled eyebrow with local drift** | same role, one carrying a stray `font-medium`, one at `tracking-[0.12em]` | 2 | **normalized to `.eyebrow`** |
| B | **Index / number labels** | `tabular-nums` ordinals and their hover chrome | 8 | deferred — `.index-label` debt |
| C | **Icon fills** | `aria-hidden` SVG chevrons in the header | 6 | **excluded — not text** |
| D | **Navigation chrome** | `10px / 0.18em` menu-group headings in header dropdowns and the mobile drawer | 5 | deferred — navigation pass |
| E | **Component-local / meta** | consent modal label, a nav-card meta sub-line, an arrow glyph | 3 | deferred |
| F | **Dead components** | `CaseCNC`, `ProjectProof`, `SystemBlock` — no imports anywhere | 6 | excluded — delete, don't calibrate |
| G | **Lab routes** | `lab/hero-index`, `lab/resitve-register` | 2 | excluded — not production |

Groups A and A′ are the only ones that were eyebrow debt. The other 28 are other roles with their own separate futures.

**The test used to draw the line:** a label is eyebrow debt only if it carries eyebrow *geometry* — 11px, uppercase, tracked — and labels a heading or a value beneath it. An ordinal is not an eyebrow because it identifies position, not category. An icon is not an eyebrow because it is not text. A menu-group heading is not an eyebrow because it organizes navigation, not content.

### 4.2 One acknowledged ambiguity inside group A

Of the 19, some label a *heading* (`NewsArticleTemplate`, `SystemsHubTemplate`, `SolutionPageTemplate` section tags) and some label a *value* (`ProofCard` `resultLabel`, `ContactPageTemplate` email/phone/company labels). The second kind is arguably `.spec-label` territory — a field label above data.

They were all mapped to `.eyebrow` because they already carried eyebrow geometry exactly (`0.16em`, not `.spec-label`'s `0.14em`), so mapping them to `.eyebrow` changes colour only, whereas mapping them to `.spec-label` would change tracking and weight as well. **Label-above-value versus label-above-heading is a real distinction and remains an open question** — but it is a question about role boundaries, not about contrast, and it did not belong in an accessibility pass.

---

## 5. Decision — the neutral eyebrow

```
.eyebrow  →  text-[11px] uppercase tracking-[0.16em] text-neutral-600
```

**Changed:** the neutral level, 500 → 600.
**Unchanged:** size, weight, tracking, and `.eyebrow-on-dark`.

### Reasoning

**Why colour and nothing else.** Colour alone clears 4.5:1 on every light surface with margin. Adding `font-medium` would buy no accessibility while making the eyebrow visually heavier — and the eyebrow's job is to stay subordinate to the H2 it labels. An accessibility fix should not become a hierarchy change.

**Why one value, not a surface-conditional variant.** A per-surface colour would keep eyebrows marginally lighter on white, at the cost of two treatments to reason about and a rule that every future call site has to get right. The eyebrow's entire value is that it is one thing used everywhere; splitting it to save 3 points of luminance on one surface would trade the role's best property for its least important one.

**Why neutral-600 and not neutral-700.** 600 clears the threshold on the worst surface at 6.32 — comfortable headroom without pushing a subordinate label toward heading weight. 700 would buy margin nobody needs and cost subordination.

**Why no new token.** The value is a Tailwind neutral step that the site already uses in two other roles. A token would be a new name for an existing thing.

### The accepted trade

neutral-600 is also `.text-body`'s colour. The eyebrow and body copy now share a hue, with hierarchy carried by **size, case and tracking** rather than tone.

This was considered and accepted. `.spec-label` already sits at neutral-600 beside body copy without reading as equal to it, which is the precedent. But it is the honest cost of the decision and it is the reason the change is visible sitewide rather than only on the muted surfaces that failed. If the eyebrow ever reads as competing with body copy, *that* is the symptom to act on — not the contrast ratio, which is now settled.

**Correction to an assumption made when this pass was scoped:** `.spec-label` was cited as evidence that neutral-600 works for small technical labels. It has only **3 uses in 3 files** — it establishes the precedent but does not prove it at scale. The stronger evidence is `.text-body`, which is already neutral-600 across the entire site.

---

## 6. Decision — accent signal

**Implemented** in a second pass, after the neutral base. Exactly two semantic states:

1. **neutral eyebrow** — the default, now settled
2. **accent-signal eyebrow** — a *modifier* of the neutral base, not a parallel role

Sequencing was deliberate: the neutral base had to be correct first, because a modifier inherits whatever it modifies. Introducing an accent variant on top of a base that failed contrast would have propagated the failure into a second state and made both harder to fix.

### The constraint that must survive this document

**Accent is carried by chrome, never by small blue text.**

The reasoning is a contrast trap, and it is worth writing down because it is not obvious. Measured, on the three light surfaces:

| | white | `--surface` | `--surface-soft` |
|---|---|---|---|
| `--color-brand #0082ca` | 4.16 ✗ | 3.72 ✗ | 3.37 ✗ |
| `--color-accent-line #0089d6` | 3.78 ✗ | 3.38 ✗ | 3.06 ✗ |
| `--color-interactive #0b8fd3` | 3.57 ✗ | 3.19 ✗ | 2.89 ✗ |

**Every blue in the system fails 4.5:1 on every light surface**, including on white. Recolouring an eyebrow to brand blue would therefore **reintroduce, in a new state, exactly the failure this pass just removed** — and it would do so while looking like an upgrade.

Darkening brand blue to make small text pass is explicitly out of bounds: it would change the brand colour sitewide to serve one label.

So the accent signal, when it is built, must be carried by something that is **not** small text and is **not** required to meet text contrast — a rule, a marker, a border, a leading hairline. The site already has the vocabulary for this: `--color-accent-line` exists, and `ProblemSplitBlock` already draws a `border-[var(--color-brand)]/30` hairline directly above its label. **The eyebrow text itself stays neutral in both states.**

That is the design constraint, and the implementation honours it.

### What was built

`.eyebrow-accent`, a modifier used as `class="eyebrow eyebrow-accent"`. A **24x2px `--color-accent-line` rule directly above the label**, with the text unchanged — still `.eyebrow`, still neutral-600. No new token.

Composition from `ProblemSplitBlock` (a rule above the label), weight from `ReferencePageTemplate` (`--color-accent-line`, full opacity). The two existing patterns disagreed on weight; at label scale `brand/30` on a 24px rule would have been invisible, so the signal takes the stronger of the two.

**The conceptual split that keeps these from colliding:**

| | weight | job |
|---|---|---|
| `ProblemSplitBlock` faint full-width `brand/30` 1px hairline | quiet | **structural separation** |
| `.eyebrow-accent` short `--color-accent-line` 24x2px rule | visible, spatially small | **semantic signal** |

`ProblemSplitBlock`'s 42 instances were deliberately left alone. They are not a weaker version of the accent signal; they are a different job.

### Where it is allowed

Two roles only — a machine/system category, or a documented-proof/evidence layer. Four call sites:

| site | role |
|---|---|
| `blocks/home/ProductProof.tsx` | machine/system category |
| `systems/catalog/CatalogProof.tsx` | documented-proof marker ("Referenca") |
| `solutions/SolutionPageTemplate.tsx` — `proofProject` tag only | documented-proof marker |
| `ui/ProofCard.tsx` — `resultLabel` divider recoloured | documented-result marker |

`ProofCard` recolours its existing divider rather than adding a marker, so no card carries two accent lines; its own `proof.area` eyebrow stays neutral even though it would pass the category gate.

**25 accented against 620 neutral — 4% sitewide, about one per page where it appears.**

`ProductProof` was not an addition but a **conversion**: it was already rendering its category as 11px semibold `--color-brand` text on `--surface-soft`, measuring **3.37:1**. That is the exact trap described above, live in production and missed by the first pass because it grepped `neutral-400` rather than blue. It is now neutral-600 at 6.32:1 with the accent moved to chrome.

### Deliberately not accented

`comparisonSplit` and `crossSell` tags (decisions and cross-sell, not proof), `SystemsHub` card eyebrows, every `SectionHeader` orientation eyebrow, and all roles listed in §7. `resultTone` behaviour and the unrendered `.proof-callout` branch were left exactly as they are.

---

## 7. Deferred debt

Recorded so the reasoning survives. None of this is scheduled, and none of it should be picked up because a file is already open.

**`.index-label` (group B, 8 live sites).** Ordinals in `RuledRowList`, `SolutionPageTemplate`, `ServicePageTemplate` render at `text-neutral-400`, while the declared `.index-label` role is brand blue. The role and its call sites disagree, and the call sites fail contrast. This is a genuine role inconsistency and a separate decision — it interacts with the accent question in §6, since `.index-label` is currently the only small-text role that *is* brand blue.

**Header navigation chrome (group D, 5 sites).** `10px / 0.18em` menu-group headings at 2.58:1. A real failure, but a navigation-chrome role at a different size inside a component with its own sticky-stack constraints. Reopening the header is its own pass.

**Broader small-text accessibility debt.** This pass fixed the eyebrow role. It did not audit the site for text contrast generally. Known remaining instances include `ConsentProvider:293`, the nav-card meta sub-line at `razvojni-projekti/page.tsx:300`, and every dead-component site listed below. **A general contrast audit has not been done and should not be assumed from this document.**

**Dead components (group F).** `blocks/cases/CaseCNC.tsx`, `blocks/home/ProjectProof.tsx`, `solutions/SystemBlock.tsx` have no imports. Consistent with the typography audit's dead-block guidance: delete them, do not calibrate them. `CaseCNC` is notable as the purest form of the debt — it applies `.eyebrow` and then overrides it *down* to neutral-400.

**Label-above-value vs label-above-heading.** See §4.2.

---

## 8. What changed

**13 files.**

`app/globals.css` — the role, plus the reasoning as a code comment.

Normalized to `.eyebrow` (21 instances, 12 files):

| file | n |
|---|---|
| `contact/ContactPageTemplate.tsx` | 4 |
| `solutions/SolutionPageTemplate.tsx` | 3 |
| `news/NewsArticleTemplate.tsx` | 3 |
| `razvojni-projekti/` detail pages — polycom, smartim, spodbude | 3 |
| `ui/ProofCard.tsx` | 2 |
| `references/ReferencePageTemplate.tsx` | 2 |
| `news/NewsHubTemplate.tsx` | 1 |
| `systems/SystemsHubTemplate.tsx` | 1 |
| `solutions/ProblemSplitBlock.tsx` | 1 — also drops a local `font-medium` |
| `templates/EditorialPage.tsx` | 1 — also normalizes `tracking-[0.12em]` → `0.16em` |

The last two are eyebrow-grammar normalization, not page-composition changes: they bring two drifted labels back onto the canonical role.

**Result:** `text-neutral-400` fell from 49 to 28, and every one of the remaining 28 belongs to a deliberately excluded role in the §4.1 map. No live light-surface eyebrow remains below 4.5:1.

---

## 9. Stop condition

The eyebrow system is finished when these hold:

- **One neutral eyebrow, one accent modifier.** No third state, no per-surface variants, no per-family eyebrows.
- **Every small uppercase label resolves to a declared role.** No call site restates `11px uppercase tracking-[…]` inline.
- **No small text carries the accent.** The signal is chrome; the text stays neutral.
- **Every light-surface label clears 4.5:1**, including the roles this pass deferred.

The first and fourth hold for the eyebrow role today. The second holds for the eyebrow role and not yet for `.index-label`. The third is a constraint on work not yet done.
