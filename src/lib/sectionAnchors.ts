/**
 * Where an in-page section link lands, for the whole site.
 *
 * One rule, stated once:
 *
 *     visible section start = sticky stack bottom + clearance
 *
 * The subtlety is that `scroll-margin-top` acts on a section's *border* box,
 * while the reader perceives the section as starting at its *content* box —
 * `Section` carries 48–112px of `padding-top` depending on variant and
 * breakpoint, and all of it is empty. Aiming at the border box therefore
 * misses by however much padding that particular section happens to carry,
 * which is why the site had landings anywhere from 22px *behind* the sticky
 * chrome to 160px below it.
 *
 * Nothing here is authored per page. Every value is measured, so a new section
 * variant, a new breakpoint or a change to the chrome's height corrects itself
 * with no edit to this file and none to any page.
 */

/**
 * Distance from the sticky stack's bottom edge to the first thing the reader
 * can see in the section that lands under it.
 *
 * Measured, not chosen: the anchors that already looked right before any of
 * this existed — Home's `#use-cases` and `#process`, and `#odprta-mesta` —
 * landed at 31–32px, and it matches the sections' own internal
 * eyebrow-to-heading step (~29px). The same value is correct under the tall
 * header+rail stack and under the header alone; the stack height is already
 * accounted for separately, so no page family needs its own number.
 */
export const SECTION_CLEARANCE = 32;

function paddingTopOf(element: HTMLElement): number {
  return Number.parseFloat(getComputedStyle(element).paddingTop) || 0;
}

/**
 * How far down the viewport the pinned chrome reaches.
 *
 * Read from layout rather than from a constant, because it differs by page:
 * the header alone on most of the site, header plus the WikiNav rail on the
 * solution, catalog and service families. Each sticky layer contributes its
 * own `top` plus its height, so the rail — which pins at `--header-h` rather
 * than at 0 — is counted where it actually sits.
 */
export function stickyStackBottom(): number {
  let bottom = 0;

  for (const element of document.querySelectorAll<HTMLElement>("header, nav")) {
    const style = getComputedStyle(element);
    if (style.position !== "sticky") continue;

    const top = Number.parseFloat(style.top) || 0;
    bottom = Math.max(bottom, top + element.getBoundingClientRect().height);
  }

  return bottom;
}

/** A section's visual start: the top of its content box, where the eyebrow sits. */
export function contentTopOf(section: HTMLElement): number {
  return section.getBoundingClientRect().top + paddingTopOf(section);
}

/**
 * The `scroll-margin-top` that makes *this* section land its content edge on
 * the shared line. The section's own padding is subtracted back out, so the
 * empty band slides up under the chrome and the ink arrives at the clearance.
 */
export function anchorOffsetFor(section: HTMLElement, stackBottom: number): number {
  return Math.round(stackBottom + SECTION_CLEARANCE - paddingTopOf(section));
}

/** The line a section's content edge has to reach to count as arrived. */
export function anchorLine(): number {
  return stickyStackBottom() + SECTION_CLEARANCE;
}

/** Every section the rule applies to — the same set on every page. */
export function anchorTargets(): HTMLElement[] {
  return [...document.querySelectorAll<HTMLElement>("section[id]")];
}
