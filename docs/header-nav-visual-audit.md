# Header / Navigation Visual Audit

> **Purpose.** Evaluate how the existing desktop header and dropdown navigation can be visually strengthened so it feels less template-like, more intentional and more distinctly Flexido — without changing its core geometry or information architecture.
>
> **This is not** an IA audit, a routing audit, a navigation-content rewrite, a header redesign or a mobile-nav redesign. The current header architecture is considered structurally sound.
>
> **Audit only.** No implementation accompanies this document.

---

## Methodology

Rendered production build at 1440×900. Every dropdown was opened by real hover and then measured in the live DOM — not inferred from source. Source was consulted only to confirm what the rendered evidence already showed.

- **Colour resolution.** Tailwind v4 emits computed colours as `lab()` / `oklab()`. Every value was converted to sRGB (CIE Lab → XYZ D50 → Bradford → D65 → linear sRGB → gamma) before any contrast maths.
- **Contexts compared.** A dark photographic hero (`/standardne-celice/cnc`, `/`) and a white page (`/kontakt`), because the panel's perceived presence turned out to depend entirely on what sits beneath it.
- **Menus compared.** Rešitve, E-katalog, Podjetje, plus the Razvojni projekti flyout, the locale switcher, the Kontakt CTA, disclosure carets and the top-level active marker.

---

## 1. Executive finding

**Is it structurally sound?** Yes. Geometry is disciplined and no defect was found in it: 65px header, 1280px container with 32px insets, nav items on a uniform 24px rhythm, logo and CTA both inset 32px from the container edge. The active-state logic is thoughtful and documented — location is marked with a 2px rule, never a weight swap, and the marker is neutral rather than brand specifically so it does not compete with the WikiNav rail 65px below. That is authored reasoning, not default behaviour.

**Does it genuinely feel template-like?** Yes — but not where it is usually assumed. It is not the shadow being "generic" in isolation, not the list rhythm, and not a weak active state.

**Where the feeling comes from:** *the header is built almost entirely from generic neutrals and stock utilities, and in the three places where it could have used the site's own signature vocabulary, it uses a near-miss instead.*

| The site has | The header uses instead |
|---|---|
| `.eyebrow` — 11px / 0.16em / `neutral-600` (7.81:1), on every page | bespoke **10px / 0.18em / `neutral-400`** → **2.58:1** |
| `--shadow-float: 0 12px 40px rgba(15,23,42,.12)` — the one declared elevation | Tailwind's stock **`shadow-sm`** (`0 1px 3px` + `0 1px 2px -1px`) |
| `--radius-structural: 12px` / `--radius-panel: 16px` | rows at **`rounded-lg` = 8px**, a fourth radius |

The eyebrow case is the clearest. The eyebrow system — neutral label, optional 24×2px accent rule — is one of the most distinctly Flexido things on the site, closed and documented in `docs/eyebrow-accent-audit.md`. The dropdown group labels ("SISTEMI", "PODROČJA", "SERVIS", "PODJETJE") are *almost* that role but one step smaller, one step wider-tracked and three neutral steps lighter. A reader cannot name the difference; they simply register that the menu does not feel like it came from the same place as the page.

**Second contributing cause: the panel is chromatically identical to a page card.** The dropdown is `rounded-[12px] border border-neutral-200 bg-white` — the same declaration as `.content-panel`, which builds the content cards on the very pages the menu opens over. On `/kontakt` the open E-katalog panel and the "KAKO ZAČETI" card are the same surface. Navigation never establishes itself as a distinct layer; it reads as a card that happens to be near the top.

**Is a narrow strengthening pass justified?** Yes, and it is unusually cheap. The fixes are token substitutions, not design decisions — the correct values already exist and are already used elsewhere. It also clears a real accessibility defect (2.58:1) sitting in global chrome on every page.

---

## 2. Menu comparison

| Menu | Visual resolution | Strongest quality | Weakest quality |
|---|---|---|---|
| **E-katalog** | **1st — resolved** | The only complete row grammar: 28px brand icon + title + desc on every row, a featured hub row (74px, `border-b`) that earns its prominence, and a proven active state (2×37px `--color-brand` rail + `neutral-950` title) | Its caret stays `neutral-400` even when the trigger is the active section at `neutral-950` — the one place its own logic does not follow through |
| **Podjetje** | **2nd — uniform but flat** | Perfectly consistent: five identical 53px title+desc rows, no exceptions | Total uniformity with no icons and no emphasis means nothing leads; the flyout row is distinguished only by a 16px `neutral-400` caret |
| **Rešitve** | **3rd — least resolved** | Correct use of two groups ("PODROČJA" / "SERVIS") to separate offer from support | 8 of 9 rows are title-only 33px; exactly **one** row carries a desc and is 53px. That single exception does not read as "featured" — it reads as an oversight, and it breaks the list rhythm at an arbitrary point |

**They should not be made identical.** The correct end state is one family with three legitimate densities: E-katalog is a product catalogue and earns icons; Rešitve is a category index and is right to be a compact list; Podjetje is a short utility set. What needs to be consistent is the *grammar within each menu*, not across them.

A fourth grammar exists: the **Razvojni projekti flyout** is a separate fully-bordered rounded card with its own `shadow-sm`, holding five title-only 33px rows, floating free in the middle of the hero. It is the single most generic-looking element in the navigation.

---

## 3. Measured reference

**Masthead**

| Property | Value |
|---|---|
| Height / background / border | 65px, `#ffffff`, 1px `neutral-200` bottom, **no shadow** |
| Container | `max-width: 1280px`, 32px side padding |
| Logo | 126×36 image at x=112 (32px inset) |
| Nav items | 14px/400, h-40, `px-3`, pill radius, **24px** gaps, x 443→996 |
| Nav idle / hover / active | `neutral-600` (7.81) / `neutral-800` / `neutral-950` (19.8) |
| Active marker | 2px `neutral-500`, `inset-x-3 bottom-1` |
| Hover marker | 2px `neutral-300`, opacity 0→1 |
| Carets | 16px, `neutral-400`, on Rešitve / E-katalog / Podjetje only |
| Element types | Rešitve + E-katalog are `<a>`; Podjetje is `<button>` |
| Locale | SL 13px/**600** `neutral-950` **underlined** (4px offset); EN/DE 13px/400 `neutral-500` (4.74); 16–17×20px, no padding |
| Kontakt CTA | `#0078bd`, 14px/500 white, radius 12px, 99×45 |

**Dropdown panels — identical chrome across all three**

| Property | Value |
|---|---|
| Width | **330px** exactly |
| Radius / border / padding | `0 0 12px 12px` / `border-x` + `border-b` 1px `neutral-200` / `p-2` |
| Shadow | **`shadow-sm`** — `0 1px 3px rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)` |
| Row radius | **8px** (`rounded-lg`) |
| Row hover | `bg-neutral-100` |
| Group label | **10px / 0.18em / `neutral-400` → 2.58:1** |
| Row title | 14px/400 `neutral-600` → `neutral-950` when current |
| Row desc | 12px `neutral-500` (4.74) |
| Active rail | 2×37px `--color-brand`, `inset-y-2 left-0` |
| Icons | 28px glyph in a 36px box, `--color-brand`, bare (no chip) |

**Row grammars**

- **Rešitve** — 9 rows: 8 title-only (33px) + 1 title+desc (53px); no icons; 2 groups.
- **E-katalog** — 6 rows: 1 featured hub (74px, `border-b`) + 5 title+desc (53px); icons on all; 1 group.
- **Podjetje** — 5 rows: all title+desc (53px); no icons; 1 flyout; 1 group.

`--shadow-float` is declared in `globals.css` and used **only** by the consent banner and modal.

---

## 4. Template-like patterns — actual causes

| # | Component / area | Evidence | Why it reads generic |
|---|---|---|---|
| **T1** | Dropdown group label | `text-[10px] uppercase tracking-[0.18em] text-neutral-400` → **2.58:1**; site role is 11px / 0.16em / `neutral-600` → 7.81:1 | The site's signature label system exists and is used everywhere else. The menu uses a near-miss, so the one element that could say "Flexido" says "generic dropdown heading" — and is unreadable besides |
| **T2** | Panel elevation | `shadow-sm` (Tailwind default); `--shadow-float` used only by the consent banner | The site declares exactly one floating-layer elevation and its primary floating layer does not use it. A 1px/3px stock shadow is the most recognisable default-UI signature there is |
| **T3** | Panel surface vs page card | Dropdown and `.content-panel` carry identical border, background and radius; verified co-visible on `/kontakt` | Navigation and content share one surface treatment, so the menu never establishes itself as a different layer |
| **T4** | Row grammar inconsistency within a menu | Rešitve: 8 rows at 33px title-only, 1 row at 53px with desc | A single unexplained exception in a nine-item list is the visual fingerprint of a menu that was assembled rather than designed |
| **T5** | Off-system row radius | Rows use `rounded-lg` = 8px; system declares 12px and 16px | A fourth radius nobody chose. Individually invisible; collectively it is why the panel does not feel machined |
| **T6** | Caret weight vs label state | Carets are `neutral-400` in all states; on E-katalog the active label is `neutral-950` (19.8) while its caret stays `neutral-400` (2.58) | The active state strengthens the word but abandons the glyph attached to it — the disclosure affordance reads as decoration rather than part of the control |

**Explicitly not a cause.** The uniform vertical rhythm is fine — a 53px row repeated five times is correct for a menu. The active state is not weak; it is the best-resolved thing in the header. Nothing here is solved by making the header taller, bolder or more decorated.

---

## 5. Priority opportunities

| # | Area | Current issue | Conceptual direction | Expected gain | Risk |
|---|---|---|---|---|---|
| **1** | Dropdown group labels | Bespoke 10px/0.18em/`neutral-400` at 2.58:1 | Adopt the site's existing eyebrow role rather than approximating it | Highest authored-feel gain per unit of change; clears a live AA failure in global chrome | **Very low** — colour + 1px + tracking; labels are short and will not re-wrap |
| **2** | Panel elevation | Stock `shadow-sm`; `--shadow-float` unused by navigation | Use the site's one declared floating elevation | Panel stops reading as a default component; gains presence on white pages where it currently nearly vanishes | **Low** — shadow only; must be visually checked on dark heroes so it does not smudge |
| **3** | Rešitve row grammar | 8 title-only rows + 1 with desc | One menu, one row shape | Removes the clearest "assembled" tell; restores list rhythm | **Low-moderate** — changes panel height; no copy rewrite required |
| **4** | Active state completion | Brand rail proven in E-katalog; caret ignores label state | Extend the rail where a current row is unambiguous; let the caret inherit its label's state | Makes the strongest existing pattern into the system's pattern | **Low** — reuses a shipped component |
| **5** | Locale switcher | SL uses weight 600 + underline; nav rule is explicitly "marker, never a weight swap." EN/DE at `neutral-500` (4.74) are weaker than nav idle `neutral-600` (7.81) | Bring the switcher under the header's own stated active-state rule | Removes the one element that visibly contradicts the header's documented logic | **Low** — three tiny items, no layout change |

---

## 6. Healthy patterns — do not touch

- **Panel width discipline.** All three panels are exactly 330px.
- **The seam construction.** The panel has no top border and no top radius — it hangs from the header's own bottom hairline rather than drawing a second edge 1px below it.
- **Active-state philosophy.** Colour + 2px marker, never a weight swap; `neutral-500` active against `neutral-300` hover, one step apart so hover never reads as "active stuck on."
- **The E-katalog active rail.** 2×37px `--color-brand`, `inset-y-2 left-0`.
- **Geometry.** 65px height, 24px nav rhythm, 32px symmetric insets, 1280px container, `aria-current="page"` correctly applied.
- **Kontakt CTA.** `#0078bd` / 4.75:1, `--radius-structural`, correctly the only filled element in the bar.
- **Restraint.** No gradient, no blur, no header shadow, no oversized logo.

## What NOT to change

Logo, icons, route structure / IA, x/y geometry, header height (65px — the source of truth for the whole sticky stack via `--header-h`), nav ordering, CTA hierarchy, mobile architecture, panel width (330px), and the borderless-top seam.

One behavioural note, recorded but not proposed for change: Rešitve and E-katalog render as `<a>` (navigate *and* disclose) while Podjetje renders as `<button>` (disclose only), yet all three look identical. That is an IA/interaction question, outside this audit's scope.

---

## 7. Recommended pass scope

**Four rules. No new design language — every value already exists in the system.**

> **R1 — The header uses the site's label role.** Dropdown group labels adopt the existing eyebrow role instead of a bespoke near-miss.
>
> **R2 — One floating elevation.** The nav panel and its flyout use the site's declared float shadow. Row radius comes from the system radius scale.
>
> **R3 — One active grammar.** Current page = brand rail + `neutral-950` label. Current section = the existing 2px neutral marker, and the caret follows its label's state.
>
> **R4 — One row shape per menu.** Within any single menu, every row carries the same elements. Density may differ *between* menus; it may not differ *within* one.

R1 and R2 are pure token substitution and carry nearly all the perceived gain. R3 and R4 are consistency work. If only two rules survive scoping, keep **R1 and R2** — they convert "default UI" into "this site's UI," and R1 additionally fixes an accessibility defect.

---

## 8. Stop condition

The pass stops the moment any of these becomes true:

1. **A proposal needs a value that is not already in the system.** Every change must resolve to an existing token or an existing shipped pattern. A new shadow, a new radius, a new label size or a new accent colour means the pass has become a redesign.
2. **Geometry moves.** If header height, panel width (330px), nav spacing (24px), container insets (32px) or row height changes as an *intent* rather than as a consequence of R4, stop.
3. **Any menu's structure changes.** No added or removed rows, groups, labels, icons or copy.
4. **A change exists to make the header "special."** Every rule above removes an inconsistency. Nothing is added for character.
5. **The three menus start converging on one shape.** The goal is one family with three densities.
6. **Mobile, IA or CTA hierarchy is opened.**

Completion test: *after the pass, can every visual decision in the header be traced to a token or pattern that already existed before it?* If yes, it was a strengthening pass. If no, it became a redesign.
