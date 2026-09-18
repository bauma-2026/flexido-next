# Visual System — V1 Decisions

> **Purpose.** This document converts the visual-system diagnostic in `docs/visual-system-audit.md` into V1 decisions. The audit records what the visual language does and where its logic breaks down. This document decides what is eligible to be acted on.
>
> **This is not a general redesign brief.** It opens nothing that is not named here, and it does not revisit page-level architecture, copy or hierarchy.
>
> **Only A-class findings are eligible for V1 implementation.** B and C findings are recorded so the reasoning survives, not so they can be scheduled.
>
> **Each A-class finding still requires its own narrow implementation pass**, scoped and measured separately. Classification as A is eligibility, not approval.
>
> **B and C items must not be opened opportunistically.** They are not to be picked up because a file is already open for another reason, and they are not to be bundled into an A-class pass.

---

## Correction to the diagnostic audit

The audit named the right-edge problem the single largest gap. That is true as system debt and misleading as visible damage. The vertical distance between every near-miss pair was measured:

| Page | Pair delta | Vertical separation | Ever co-visible |
|---|---|---|---|
| About | 3px | 1350px | No |
| About | 18px | 1315px | No |
| About | 15px | 2665px | No |
| Service | 40px | 552px | Yes |

Almost every near-miss is more than a full screen from its partner. A reader never sees them together. Only the Service case is genuinely co-visible, and there the page already runs one value four times, so the outlier is a single literal rather than a system failure.

The cause the audit identified is real. The symptom it led with is mostly imperceptible. This flips finding 1 from first priority to deferred.

The **co-visible versus non-co-visible distinction** established here governs the whole decision pass. A defect that can be seen within one viewport carries weight. A defect that requires scrolling a full screen to compare carries system debt but little perceptual cost, and does not justify a high-blast-radius intervention in V1.

---

## Classification

| # | Finding | Class | Files | Call sites | Locked families touched |
|---|---|---|---|---|---|
| 1 | Width system | B | 53 | 286 | All |
| 2 | Rule length | A | 8 | 8 | Home only |
| 3 | Containment | B | 2 pages | concentrated | Contact |
| 4 | Interaction weight | A | 12 and 16 | ~47 | All, non-geometric |
| 5 | Colour families | A | 15 | ~60 | All, non-geometric |
| 6 | Hero variants | C | 15 | 15 | All |
| 7 | Image normalization | B | 1 code, 11+ assets | 1 | Home, catalog |

---

## Decision by finding

### 1. Width system — B, VALID BUT DEFER

**Why.** The debt is real and it is the largest in the set. It is also the least deliverable. The fix is 286 literals across 53 files, and a width change moves where text wraps. The typography pass was validated against specific line counts at specific measures, so migrating widths would invalidate measured work that is already locked.

**Cross-site leverage.** Highest in theory, low in practice. Most of the misalignment it would fix is never seen.

**Blast radius.** Every page family, every template, both hubs, all five catalog pages and all five development-project pages.

**Regression risk.** High. Re-wrapping changes line counts, card heights and vertical rhythm on approved compositions.

**Locked families touched.** Yes, all of them.

**Measurability.** Yes. Count of distinct widths, count of co-visible near-miss pairs.

**Narrow shared-pass viability.** No. Declaring the ladder is narrow and delivers nothing visible. Migrating to it is the opposite.

### 2. Rule length — A, IMPLEMENT

**Why.** Eight sites total. The Home competency divider is capped at a fixed length and covers roughly half the column it sits in, repeated six times in one viewport. That is the rare case where the defect is visible within a single screen rather than across a scroll.

**Cross-site leverage.** Narrow but concentrated. Two genuinely co-visible defects, one on Home desktop, one on Home at tablet where a rule ends 88px short of the heading above it.

**Blast radius.** Eight declarations. The smallest in the set.

**Regression risk.** Low. Rule length changes no wrapping and no content.

**Locked families touched.** Home only, and the change corrects an error rather than altering composition.

**Measurability.** Yes. Ratio of rule length to the width of the element it divides, target 1.0.

**Narrow shared-pass viability.** Yes, cleanly, with no external dependency.

### 3. Containment grammar — B, VALID BUT DEFER

**Why.** The audit called this systemic. The data says concentrated. Ratio of bordered containers to ruled marks:

| Page | Ratio |
|---|---|
| Catalog | 0.08 |
| Process | 0.08 |
| Home | 0.16 |
| Solution detail | 0.18 |
| About | 0.22 |
| References | 0.24 |
| Contact | 2.6 |
| News | 6.3 |

Six of eight surfaces already share one grammar. Two invert it. The site is far more coherent here than the audit implied.

**Cross-site leverage.** Low. Fixing it means fixing two pages, which is page work, not system work.

**Blast radius.** Contained, but Contact is locked and News is a full page recomposition.

**Regression risk.** Moderate to high, and the decisions are taste-led. Which box earns its keep is a judgement call per instance.

**Locked families touched.** Contact, which should not be reopened.

**Measurability.** Partly. The ratio is measurable, the correctness of each removal is not.

**Narrow shared-pass viability.** No. The only genuinely narrow item is reconciling the references and news card radius, which is one value.

### 4. Interaction weight — A, IMPLEMENT

**Why.** It scores on every preference criterion and on none of the penalties. Six rest colours for the tertiary link, four renderings of the on-dark secondary button, four on-dark hairline opacities, three card-lift values and five image-zoom values. All of it is ink, none of it is geometry.

**Cross-site leverage.** Highest deliverable leverage in the set. The arrow link is the most-used action on the site and appears on every page.

**Blast radius.** Around 47 call sites across 28 files, consolidating into the existing Button component and one link role.

**Regression risk.** Low. Changing a link from one grey to another causes zero reflow.

**Locked families touched.** Yes, but non-geometrically. No composition, content or hierarchy moves.

**Measurability.** Yes, exactly. Distinct rest colours from six to three. Secondary button renderings from four to one. Lift values from three to one. Zoom values from five to one.

**Narrow shared-pass viability.** Yes. This is the textbook case for one.

### 5. Colour families — A, IMPLEMENT

**Why.** Nine blues where the tokens declare four. Four dark surfaces where the token file declares one. The consequence is visible on every page: the conversion band sits at luminance 31 directly on a footer at luminance 10, with a hairline between them. That seam is co-visible, unlike most of finding 1.

**Cross-site leverage.** Highest in the set, because every page ends with that band and footer pair.

**Blast radius.** 15 files for the blues, 15 for the dark tones, 7 for the surviving navy headings.

**Regression risk.** Low for the dark base and the blues, which are value swaps. Moderate for the navy-to-neutral heading migration, which changes heading colour on Home, though it still moves no geometry.

**Locked families touched.** Yes, non-geometrically.

**Measurability.** Yes, precisely. Distinct blues from nine to one. Distinct darks from four to one. Band-to-footer luminance delta from 21 to zero.

**Narrow shared-pass viability.** Yes.

### 6. Hero variants — C, DO NOT OPEN

**Why.** Fifteen files carry the display role, and every locked family's approved composition is its hero. The variation may also be deliberate: Home at 720 and interior pages at 620 is a defensible landing-versus-interior hierarchy, not obviously an error. Collapsing it risks destroying intentional variation.

**Cross-site leverage.** Low in perceived terms. Nobody sees two heroes side by side, so the inconsistency is felt only as a vague drift.

**Blast radius.** Fifteen templates, the first screen of every page.

**Regression risk.** High, and it lands on the most scrutinised surface of every page family.

**Locked families touched.** All of them, at their most sensitive point.

**Measurability.** The inputs are measurable, the benefit is not.

**Narrow shared-pass viability.** No. It is a template refactor wearing a token's clothes.

### 7. Image normalization — B, VALID BUT DEFER

**Why.** This is the strongest deferral and it loses only on deliverability. Across eleven renders that all claim one visual world:

| Property | Range |
|---|---|
| Backdrop luminance | 141 to 214 |
| Backdrop hue bias | +1 to +21 |
| Source aspect ratio | 0.80 to 2.24 |

"Studio render" is a label, not a standard. Unlike finding 1, the damage is co-visible: the two Home product cards sit side by side with backdrops 18 luminance levels apart.

**Cross-site leverage.** Good. Renders appear on Home, all five catalog pages, solutions, references and news.

**Blast radius.** One file in code, the per-slug optical ternary keyed to a slug name. Eleven or more assets outside it.

**Regression risk.** Low in code, reversible in assets.

**Locked families touched.** Home and catalog visually, but no layout moves at all.

**Measurability.** The most measurable finding in the set. Backdrop variance and hue bias are single numbers.

**Narrow shared-pass viability.** Half. The code half is a one-file cleanup. The asset half is a production workstream, not a system pass, and that is what disqualifies it from a minimal-intervention V1.

---

## V1 recommendation

In this order:

**1. Colour families.** One accent blue, one dark base, one muted surface pair. Highest co-visible payoff, zero geometry, measurable to three numbers.

**2. Interaction weight.** Three link weights, one secondary button, one on-dark line scale, one lift value, one zoom value. Largest reduction in literals with no reflow anywhere.

**3. Rule length.** Eight declarations. The only remaining defect in the set that is visible six times within a single viewport.

Together these reduce roughly 115 literals, touch no page composition, move no content, and are verifiable by counting rather than by opinion. This is the realistic shape of the intended increment.

---

## Recommended first pass

**Colour families only.**

It comes first for a dependency reason, not a preference. Interaction normalization has to decide what a tertiary link does on hover, what opacity an on-dark secondary border carries, and what colour an active state resolves to. Every one of those answers is expressed in the vocabulary that the colour pass defines. Running interaction weight first means consolidating 47 call sites onto nine competing blues, then reopening all 47 once the accent is settled. That is avoidable churn.

It is also the cheapest proof that the method works. The band-to-footer seam is a single token reconciliation visible at the bottom of every page, so the pass produces a result that can be seen before deciding whether to fund the next one.

Rule length can run after either, since it shares no vocabulary with the other two.

---

## Explicit deferrals

- **Width ladder.** 286 literals, 53 files, every locked family, and the misalignment it fixes is almost never co-visible. Revisit only if a page family is being rebuilt for another reason, and declare the ladder then rather than migrating to it.
- **Hero geometry.** Fifteen templates, the first screen of every page, and the variation may be intentional. The eyebrow-gap inconsistency should ride along only if a hero is ever opened for an unrelated reason.
- **Contact containment.** Locked, and the most box-heavy surface on the site. Reopening it is a page redesign, not a system pass.
- **News containment.** Valid and unlocked, but it is single-page work with no cross-site leverage. It does not qualify under minimal intervention.
- **Image asset normalization.** The strongest deferral. Promote it the moment render capacity exists, because it scores better than rule length on visible payoff and loses only on being a production workstream rather than a code pass. The per-slug optical ternary is the one piece that can be cleaned up cheaply and independently.

---

## Locked and untouched

Nothing in this document opens any of the following. They remain settled and are cited only as evidence of what already works.

- typography and rhythm
- CTA hierarchy
- left-axis geometry
- eyebrow system
- elevation restraint
- gradient discipline
- ruled-register grammar
- approved compositions of Home, Solutions hub, Solution detail, Service, Contact, Careers
- shared navigation systems
