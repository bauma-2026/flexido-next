# Visual System Audit

> **Audit date:** 18 September 2026
> **Subject:** Flexido V1, as rendered by the local development server. Audited at 1440, 834 and 375 viewport widths, with DOM geometry measured directly rather than assessed by eye.
>
> **This document is a visual-system diagnostic, not an implementation checklist.** It records what the visual language currently does, where its internal logic breaks down, and what principle should govern a correction. It does not schedule work.
>
> **Implementation requires a separate narrow-pass decision.** Nothing here is approved for implementation. Each finding would need its own scoped pass, with its own before/after measurement, agreed separately.
>
> **Page-level UX/content audits remain authoritative for locked page families.** This audit does not revisit information architecture, copy, navigation logic or conversion paths. Where this document and a locked page-level audit appear to disagree, the page-level audit governs.
>
> **Out of scope by prior lock:** typography roles and scale, CTA hierarchy, left-axis container geometry, the eyebrow system, elevation restraint, gradient discipline, and the ruled-register grammar. These are treated here as settled and are cited only as evidence of what already works.

---

## Visual-system verdict

Flexido has a real visual system, not a collection of styled pages. Type is a closed role set with documented reasoning. Elevation is essentially absent. Gradients are legibility scrims, not decoration. The left container axis is exact across every page.

What it does not yet have is a **width system**. Type was systematized. Spacing was systematized. Measure and column width never were. The result is a site whose left edge is a rule and whose right edge is an accident.

That single gap produces most of what still reads as "very good" rather than "deliberate". In a minimal, hairline-driven layout the right edge is where every rule terminates, so an unsystematized right edge is visible in a way it would not be in a busier design. The system is mature in its parts and under-specified in its relationships.

---

## What is already high-level

These are working and should be locked.

- **Elevation restraint.** No card shadows anywhere. The only drop shadows are on the consent banner and its modal, which is correct. Two stray `shadow-sm` are the entire deviation.
- **Gradient discipline.** Of 63 gradients, 62 are `inset-0` scrims over an image or video. They serve legibility, never surface decoration.
- **The left axis.** On Home at 1440, thirty-eight text and image elements start on exactly the same x. That is not luck, and it is the backbone of the whole minimal read.
- **The radius vocabulary.** Three shapes only: pill, 12px structural, 16px panel. Four stray `rounded-lg` are the only leak.
- **The open ruled register.** The catalog spec grid and the ruled row list are the site's most distinctive and most industrial pattern. They carry high density without a single box.
- **The on-dark primary button.** Twenty-two instances, one identical string. This is what a locked component looks like.
- **The eyebrow as technical register.** 349 uses of one class. The strongest single act of systematization on the site.
- **The funding-logo optical map.** Per-asset heights tuned by visual mass with the reasoning written down. This is the correct model for optical work and it already exists.

---

## Where the remaining ~20% lives

### 1. The right edge is unsystematized

**Problem.** The site declares two measures, one for prose and one for headings, and both are well adopted. Beside them sit fifty-eight other width literals, including twenty-one distinct pixel column widths.

**Where it recurs.** Every page. The right edge of the leading text block per section:

| Page | Right edges, top to bottom |
|---|---|
| Home | 1032, 872, 1328, 556, 872, 672 |
| About | 814, 597, 532, 594, 732, 612 |
| Service | 880, 832, 573, 872, 832, 832, 832 |
| Development projects | 932, 602, 619, 573, 792 |

**Why it matters.** The damage is not the variation, it is the near-misses. About has two section blocks ending three pixels apart. Development projects has two ending seventeen apart. Service runs 832, 872 and 880. None of those differences is a decision, and each reads as a failed alignment rather than a change of measure. Because many of these blocks carry a hairline, the mismatch is drawn rather than implied.

**Type.** SYSTEMIC. This is the single largest remaining gap.

**Governing principle.** A column width is a system value, not a call-site value. Declare a short ladder of column widths the way `Section` already declares a spacing ladder, and let every section header, bridge note and rule resolve to a member of it.

### 2. A line's length is set by a literal, not by what it divides

**Problem.** Rules are drawn to hardcoded lengths that bear no relationship to the content they separate.

**Where it recurs.** The clearest case is the Home competencies list. Its divider is capped at 22rem while the column it sits in is 740px at desktop and 786px at tablet. The rule covers roughly half the row and stops in mid-air. The editorial bridge note, a short quiet paragraph under a hairline, appears on six surfaces at seven different rule lengths: 22rem, 42rem, 2xl, 70ch, 620px, 560px and 520px.

**Why it matters.** A rule is the system's only structural mark. When its length is arbitrary it stops being information and becomes texture. At 834px the Home solutions rules stop at x=696 while the heading directly above them runs to 784, leaving a visible 88px step and a dead right margin.

**Type.** SYSTEMIC, with the competencies divider as the emblematic LOCAL case.

**Governing principle.** A rule takes its length from the element it divides or from a declared column, never from its own literal. If a rule should be short, shorten the column.

### 3. Two containment grammars are competing

**Problem.** The same object class is rendered both as an open composition and as a bordered card, and the 1px neutral hairline is used both as "this is an image frame" and as "this is a card boundary".

**Where it recurs.** On the news hub, the featured item puts the border on the image and leaves the text open. The six grid items below put the border on the card and leave the image unframed. Same page, inverted logic. Across pages, the same project card is 12px radius on the references hub and 16px on the news hub. The solution detail page stacks three consecutive bordered grids on plain white, where the border encloses nothing the grid gap does not already separate. Contact is the most box-heavy surface on the site: a bordered hero panel, two bordered fact cards, and a bordered panel containing pills.

**Why it matters.** The catalog page carries higher information density than Contact using no boxes at all, and reads far more technical. Where the box survives on a tonal change, such as white cards on the grey references surface, it is doing work. Where it sits on white it is inherited SaaS reflex.

**Type.** SYSTEMIC.

**Governing principle.** A container is justified only by a change of surface or by framing an image. Grouping is the grid's job. Where neither applies, the ruled register is already the stronger pattern and it already exists.

### 4. Interaction weight is not systematically differentiated

**Problem.** The primary action is perfectly locked. Everything below it drifts.

**Where it recurs.** The tertiary arrow link, the site's most-used action, has six rest colours and two different hover destinations:

| Rest colour | Instances |
|---|---|
| neutral-950 | 26 |
| neutral-700 | 18 |
| neutral-500 | 9 |
| neutral-600 | 6 |
| neutral-900 | 3 |
| navy `#24415f` | 1 |

The on-dark secondary button exists in four renderings that differ in border opacity, label opacity and hover model. The solutions hub hero and the service hero sit one click apart and render the same control at different weights. On-dark hairlines run four opacities with no rule.

**Why it matters.** A reader cannot learn the language. If grey means link in one place and quiet text in another, the arrow is doing the work the colour should be doing. Hover magnitude compounds it: card lift has three values and image zoom has five, and on Home two adjacent product cards zoom at 1.065 and 1.03.

**Type.** SYSTEMIC.

**Governing principle.** Importance should be readable from weight alone, before the arrow. Three link weights, one secondary button, one on-dark line scale, one lift value, one zoom value.

### 5. Two colour families are running in parallel

**Problem.** An earlier navy family survives inside a site that has since standardized on neutral.

**Where it recurs.** Sixteen raw uses of navy `#0a2540` for headings, all in Home and solutions blocks, sitting beside canonical roles that specify near-black. A cool blue-grey surface family of seven pale tints runs against the canonical warm greys. The accent is nine distinct blues where the tokens declare four, and the two nearest differ by nine units in one channel. Four dark surfaces exist where the token file declares one.

**Why it matters.** The dark case is visible, not theoretical. Every page closes with a conversion band at luminance 31 sitting directly on a footer at luminance 10, separated by a white hairline. The moment the page should resolve into one dark base, it shows a seam instead.

**Type.** SYSTEMIC.

**Governing principle.** A value that is not a decision should not exist. One accent blue, one dark base, one muted surface pair. Near-identical values are worse than clearly different ones because they read as error rather than intent.

### 6. The hero is five sibling implementations, not one role

**Problem.** Each page family carries its own hero geometry, and the numbers are close enough that the differences read as drift.

**Where it recurs.** Minimum heights at desktop run 720, 620, 620, 620 and 640. Top padding is 32, 36 or absent. The gap between eyebrow and H1 is 12px in section headers, 16px in three hero families and 20px in two more. The supporting paragraph runs three sizes, three leadings and three on-dark opacities. The component's own documentation already admits this, noting that dark-surface supporting copy "runs three colours and three measures".

**Why it matters.** The hero is the first seven hundred pixels of every page and sets the proportional contract for everything below. Moving between Home, Solutions, a cell page and About produces small unexplained shifts in entry mass.

**Type.** SYSTEMIC.

**Governing principle.** The hero is a role with variants, not a per-family implementation. If a family genuinely needs a different entry mass, that should be one declared variant, not five sets of literals.

### 7. The image world is not normalized

**Problem.** Renders carry different source aspect ratios and different backdrop values, and frames enforce a ratio the assets do not share. Optical correction is patched per instance.

**Where it recurs.** The two Home product cards:

| Asset | Source aspect | Backdrop luminance | Dark pixel share |
|---|---|---|---|
| FLEX 7 CNC Slim | 1.50 | 159 | 5.9% |
| FLEX 7 IMM Slim | 1.25 | 141 | 14.6% |

Both are forced into a 4:3 frame, which is why one carries a hand-tuned 3.5% upscale and a 51% focal offset keyed to its slug. In the CNC option row, four tiles share a clean backdrop but one carries 27% dark pixels against 1.2% to 7.7% for its row-mates, so it dominates a row meant to read evenly. The news hub grid places documentary photography, trade-fair photography, an untextured grey clay CAD export and finished blue-livery renders at equal size in one grid. Image frames run five aspect ratios.

**Why it matters.** Optical mass is being corrected at call sites by slug name. That is a per-instance patch masquerading as a design decision, and it does not survive new assets.

**Type.** SYSTEMIC.

**Governing principle.** The correct model already exists in the funding-logo optical map: per-asset optical values, declared once, with the reasoning recorded. Extend it to product renders, normalize backdrop value at the source, and pick one aspect ratio per image role.

---

## Highest-leverage 3 changes

These are stated as leverage, not as tasks. Each is a reduction. None adds a visual element.

### 1. Declare the width ladder

Four or five column widths, named, sitting beside the existing prose and heading measures. Every section header, bridge note, hero block and rule would resolve to a member of it. This is the one change that touches every page and every breakpoint. It resolves finding 1 outright, most of finding 2, the hero geometry half of finding 6, and the tablet dead margins. It changes no visual idea, only which number each block resolves to.

### 2. Make containment a rule rather than a default

A border appears only when the surface changes or when it frames an image. Everywhere else, the ruled register. This retires the boxed grids on solution detail and Contact, reconciles the references and news cards to one radius and one border logic, and stops the hairline carrying two meanings. It moves the whole site toward the pattern that is already its best, and it removes elements rather than adding them.

### 3. Collapse the interaction and colour surface in one pass

One accent blue, one dark base, one on-dark line scale, three link weights, one secondary button, one lift value, one zoom value. Every page carries a conversion band, arrow links and a footer, so this lands everywhere at once. It also closes the band-to-footer seam, which is the most visible single artifact on the site.

---

## What NOT to change

- **Do not add elevation.** The complete absence of card shadows is the single strongest signal the site sends. It is why the layout reads as industrial rather than as software.
- **Do not touch the type roles.** The scale, the leading-per-breakpoint decision and the 58ch derivation are correct and documented. The typography pass is finished work.
- **Do not add surfaces or tones.** The problem is that five darks exist, not that four are missing.
- **Do not decorate the ruled register.** The catalog spec grid and the ruled row list should stay exactly as plain as they are.
- **Do not add motion.** There is no parallax, no scroll animation and no reveal. Keep it that way. The fix for hover inconsistency is fewer magnitudes, not richer ones.
- **Do not widen the gradient brief.** Scrims for legibility only. The one decorative wash on the Contact hero should go, not be joined by others.
- **Do not rebuild the eyebrow.** It is the most successful piece of standardization on the site.
- **Keep the left axis untouched.** It is already exact.

---

## Stop condition

The visual system is finished enough when these hold:

**Every number in a layout resolves to a named value.** No call site invents a width, a rule length, a dark tone or a hover magnitude. When a designer asks "why is this 720," the answer is the name of a ladder step, not a commit.

**Every drawn line can be explained by what it separates.** No rule terminates at a length it does not measure. No border encloses something the grid already grouped.

**Weight predicts importance without reading the label.** Primary, secondary and tertiary actions are distinguishable at a glance on both light and dark surfaces, and each has exactly one rendering.

**Right edges either match exactly or differ obviously.** No pair of blocks lands within twenty pixels of each other unintentionally. Near-misses are the failure mode; a deliberate half-column is not.

**A new page can be built from declared parts with no new literals.** This is the real test. If adding a page requires inventing a width, the system is still under-specified.

Past that point, further work becomes a change of visual idea rather than a resolution of the existing one. Adding a tone, a frame style, a motion or an accent would be churn. The correct next act after these five hold is to stop, not to refine.
