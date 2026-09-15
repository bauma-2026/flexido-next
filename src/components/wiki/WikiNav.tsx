"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { anchorLine, contentTopOf } from "@/lib/sectionAnchors";

type WikiNavItem = {
  href: string;
  label: string;
};

type WikiNavProps = {
  items: WikiNavItem[];
  /** `pills` stays on service pages. Solution family uses `index`. */
  variant?: "pills" | "index";
  /**
   * Accessible name for the landmark. Every page carries a second `<nav>` (the
   * header), so a name is what tells the two apart in a landmark list. Left
   * unset the landmark is still exposed, just unnamed — which beats announcing
   * an untranslated string on a Slovene or German page.
   */
  label?: string;
};

/**
 * Shared in-page section index.
 *
 * The rail is one row on every viewport and is deliberately NOT user-pannable:
 * it reads as a stable page navigation, not a carousel. `overflow: hidden`
 * keeps the element a scroll container — so `scrollTo` and the browser's own
 * focus-reveal still work — while the UA refuses every user scroll input
 * (touch, wheel, trackpad, scrollbar). Horizontal position therefore belongs
 * to navigation state alone.
 *
 * The UA's focus-reveal only covers an item that is wholly outside the
 * scrollport, so it does nothing for one clipped by a few pixels at the end of
 * an overflowing rail — which is where the edge fade also sits. Items
 * therefore reveal themselves on focus through the same minimal-movement
 * maths the active item uses; nothing about the interaction model changes,
 * and no user scroll input is accepted.
 *
 * Movement is minimal by design: the rail stays put whenever the active item
 * is already seated inside the padding edges, and otherwise travels the
 * smallest distance that brings it back in. Below ~700px is the only place any
 * of this runs; at every desktop width the row fits and each effect returns
 * early, so desktop behaviour is unchanged.
 */

/** Distance from the rail's own padding edge at which an item counts as seated. */
const EDGE_SLACK = 1;

/**
 * Subpixel forgiveness on the active-section read. Rail heights are
 * fractional (47.5px on the index variant), so a section can land a fraction
 * below a threshold it is meant to satisfy exactly.
 */
const ACTIVE_TOLERANCE = 2;

/**
 * The rail's base hairline, drawn as a non-layout `::after` rather than as a
 * border on the nav.
 *
 * It cannot be `border-b`, for a reason that only shows up at the pixel level.
 * The hairline has to sit *underneath* the index variant's 2px brand rule, so
 * that rule reads as one welded segment of the baseline instead of a second
 * line stacked above it. The item borrows that 1px with `-mb-px` — but the
 * rail must clip (`overflow: hidden` is what makes it a scroll container the
 * user cannot pan), and overflow clips at the padding box, which sits above
 * the element's own border. The borrowed pixel was being shaved off by that
 * clip, halving the visible rule to 1px and leaving the grey fully exposed
 * beneath it.
 *
 * Taking the hairline off the box lets the rail claim that pixel as padding
 * instead: the clip boundary moves down by exactly what the item needs, and
 * the nav's height is unchanged because a pseudo-element costs no layout.
 *
 * `neutral-300`, deliberately: this is where the chrome ends and the page
 * begins, and it is the firmest line in the stack. The header's own seam stays
 * the quieter `neutral-200` — it only divides one part of the chrome from
 * another, and on the many pages with no rail it is the sole boundary against
 * whatever section happens to be scrolling past, so it cannot afford to soften.
 */
const RAIL_HAIRLINE =
  "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-neutral-300 after:content-['']";

/**
 * Paint-order counterpart to `RAIL_HAIRLINE`. An absolutely positioned
 * pseudo-element outranks static in-flow content, so without lifting the rail
 * the hairline would paint over the very rule it is meant to sit beneath.
 */
const RAIL_ABOVE_HAIRLINE = "relative z-10";

type FadeState = "none" | "start" | "end" | "both";

export default function WikiNav({ items, variant = "pills", label }: WikiNavProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const [fade, setFade] = useState<FadeState>("none");

  const navRef = useRef<HTMLDivElement | null>(null);
  /**
   * The sticky wrapper. Its height feeds the shared anchor line via
   * `stickyStackBottom()`, so it is observed for resize; the offsets
   * themselves are written by `SectionAnchors`, not here.
   */
  const wrapRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  /** The first positioning pass after mount lands instantly — no load-time slide. */
  const hasRevealedRef = useRef(false);
  /** Lets the stable viewport listeners reach the current reveal. */
  const revealRef = useRef<(instant?: boolean, focusTarget?: HTMLAnchorElement | null) => void>(() => {});
  /** Same, for the active-section read, which owns its own `sections` closure. */
  const recomputeActiveRef = useRef<() => void>(() => {});
  /**
   * The active href as of *now*, not as of the last commit. A late-layout pass
   * recomputes the active section and reveals it in one synchronous handler,
   * which is a tick before React re-renders; without this the reveal would
   * chase the item it just superseded and then slide again to correct itself.
   */
  const activeHrefRef = useRef(activeHref);

  /**
   * Several call sites build `items` inline, so its identity changes on every
   * render. Key the effects on the hrefs themselves, not the array, or they
   * tear down and re-subscribe each time.
   */
  const itemKey = items.map((item) => item.href).join("|");

  useEffect(() => {
    const sectionIds = itemKey
      .split("|")
      .map((href) => href.replace("#", ""))
      .filter(Boolean);

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    let frame = 0;

    const getActiveSection = () => {
      /**
       * The same line a click lands on, tested against the same edge a click
       * lands — both read `anchorLine()` from `@/lib/sectionAnchors`, so
       * "entered" means one thing here and in `SectionAnchors`.
       *
       * Testing `rect.top` instead marked a section current while its empty
       * `padding-top` crossed the line, 112–128px of scrolling before any of
       * its ink arrived, and by a different amount per variant. The reader saw
       * the previous section's text under an item that had already moved on.
       */
      const offset = anchorLine() + ACTIVE_TOLERANCE;

      let current = sections[0];

      for (const section of sections) {
        if (contentTopOf(section) <= offset) {
          current = section;
        }
      }

      if (current?.id) {
        activeHrefRef.current = `#${current.id}`;
        setActiveHref(activeHrefRef.current);
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        getActiveSection();
      });
    };

    getActiveSection();
    recomputeActiveRef.current = getActiveSection;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [itemKey]);

  /**
   * Edge fade state. Gated on real overflow so a rail that fits — every
   * desktop width, and short navs on wide phones — carries no phantom fade.
   */
  const measureFade = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;

    const max = nav.scrollWidth - nav.clientWidth;

    if (max <= EDGE_SLACK) {
      setFade("none");
      return;
    }

    const atStart = nav.scrollLeft <= EDGE_SLACK;
    const atEnd = nav.scrollLeft >= max - EDGE_SLACK;

    setFade(atStart ? "end" : atEnd ? "start" : "both");
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    measureFade();

    /**
     * A late layout pass — webfont swap above all — is the one moment the rail
     * gains overflow without any viewport event firing. Measuring the fade
     * alone used to be the whole response, which left a deep-linked page
     * showing the correct fade next to an active item still parked off-screen:
     * the reveal that would have corrected it only ever ran on `resize`. It
     * lands instantly, because the reader did not ask for this movement.
     *
     * The active read has to be redone first, and for the same reason. On a
     * deep link the reader arrives already scrolled, so no scroll event ever
     * follows hydration to correct a section list that was measured against
     * pre-webfont geometry — leaving the wrong item marked current with
     * nothing left to nudge it.
     */
    const onRailResize = () => {
      recomputeActiveRef.current();
      measureFade();
      revealRef.current(true);
    };

    const observer = new ResizeObserver(onRailResize);
    observer.observe(nav);
    // The wrapper's own height is what anchor offsets are measured from.
    if (wrapRef.current) observer.observe(wrapRef.current);
    // Item boxes change on font load and on label reflow, not just on resize.
    for (const child of Array.from(nav.children)) observer.observe(child);

    // Fires for programmatic reveals and for the browser's own focus-reveal.
    nav.addEventListener("scroll", measureFade, { passive: true });
    // Rotation and the iOS address bar resize the rail without resizing any
    // item, and ResizeObserver delivery is tied to the rendering lifecycle.
    const onViewportChange = () => {
      measureFade();
      revealRef.current(true);
    };

    window.addEventListener("resize", onViewportChange);
    window.addEventListener("orientationchange", onViewportChange);

    return () => {
      observer.disconnect();
      nav.removeEventListener("scroll", measureFade);
      window.removeEventListener("resize", onViewportChange);
      window.removeEventListener("orientationchange", onViewportChange);
    };
  }, [itemKey, measureFade]);

  /**
   * Minimal-movement reveal. `instant` is used when the rail itself moved
   * under the reader (rotation, address-bar collapse) — animating a
   * correction they did not ask for would read as drift.
   *
   * `focusTarget` overrides the item to seat. It exists for keyboard focus: the
   * UA's own focus-reveal only fires for an item that is wholly outside the
   * scrollport, so a tab clipped by a few pixels at the end of an overflowing
   * rail stayed clipped — and under the edge fade — while carrying the focus
   * ring. Same maths, same minimal travel, just aimed at the item the reader
   * actually moved to.
   */
  const revealActive = useCallback((instant = false, focusTarget?: HTMLAnchorElement | null) => {
    const nav = navRef.current;
    const activeItem = focusTarget ?? itemRefs.current[activeHrefRef.current];

    if (!nav || !activeItem) return;

    const max = nav.scrollWidth - nav.clientWidth;

    // Desktop and any rail that fits: nothing to reveal.
    if (max <= EDGE_SLACK) {
      hasRevealedRef.current = true;
      return;
    }

    const inset = Number.parseFloat(getComputedStyle(nav).paddingLeft) || 0;
    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    const left = itemRect.left - navRect.left;
    const right = left + itemRect.width;

    let delta = 0;

    if (left < inset) {
      delta = left - inset;
    } else if (right > nav.clientWidth - inset) {
      delta = right - (nav.clientWidth - inset);
    } else {
      // Already seated — the rail does not move on section change.
      hasRevealedRef.current = true;
      return;
    }

    const target = Math.max(0, Math.min(max, nav.scrollLeft + delta));

    if (Math.abs(target - nav.scrollLeft) <= EDGE_SLACK) {
      hasRevealedRef.current = true;
      return;
    }

    const prefersReducedMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (instant || !hasRevealedRef.current || prefersReducedMotion) {
      // Direct assignment rather than `behavior: "instant"`, which older
      // WebKit rejects as an invalid enum value.
      nav.scrollLeft = target;
    } else {
      nav.scrollTo({ left: target, behavior: "smooth" });
    }

    hasRevealedRef.current = true;
    measureFade();
  }, [measureFade]);

  useEffect(() => {
    revealRef.current = revealActive;

    /**
     * A commit whose `activeHref` the ref has already moved past is a stale
     * pass: a synchronous handler recomputed the section and revealed it
     * before React got here. Re-running would only re-reveal the item it
     * already superseded, and then slide back.
     */
    if (activeHrefRef.current === activeHref) revealActive();
  }, [activeHref, revealActive]);

  if (variant === "index") {
    return (
      <nav
        ref={wrapRef}
        aria-label={label}
        className={cn("sticky top-[var(--header-h)] z-30 bg-neutral-50", RAIL_HAIRLINE)}
      >
        {/* `pb-px` is the pixel the nav's border used to occupy: it moves the
            clip boundary down so the active item's 2px rule survives whole.
            Net height is identical — one pixel moved from border to padding. */}
        <div
          ref={navRef}
          data-fade={fade}
          className={cn(
            "wiki-nav-rail mx-auto flex w-full max-w-[1280px] flex-nowrap gap-x-4 overflow-hidden px-5 pb-px sm:gap-6 sm:px-6 lg:px-8",
            RAIL_ABOVE_HAIRLINE,
          )}
        >
          {items.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={item.href}
                ref={(node) => {
                  itemRefs.current[item.href] = node;
                }}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                onFocus={(event) => revealRef.current(false, event.currentTarget)}
                className={cn(
                  // `font-normal`, not `font-medium`: the rail used to be set a
                  // weight heavier than the global nav above it, which ranked
                  // the local index over its own parent. Size and padding are
                  // untouched, so the row's height and hit areas are unchanged.
                  "-mb-px shrink-0 border-b-2 pt-3.5 pb-3 text-[13px] font-normal tracking-[-0.01em] transition-colors",
                  isActive
                    ? "border-[var(--color-brand)] text-neutral-900"
                    : "border-transparent text-neutral-500 hover:text-neutral-900",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    );
  }

  return (
    <nav
      ref={wrapRef}
      aria-label={label}
      /* `pb-px` sits on the nav here, not on the rail. Pills carry no bottom
         border of their own, so nothing needs unclipping — the pixel is only
         replacing the one the nav's border used to contribute, keeping this
         variant's height identical too. */
      className={cn("sticky top-[var(--header-h)] z-30 bg-neutral-50 pb-px", RAIL_HAIRLINE)}
    >
      <div
        ref={navRef}
        data-fade={fade}
        className={cn(
          "wiki-nav-rail mx-auto flex w-full max-w-[1280px] flex-nowrap gap-2 overflow-hidden px-5 py-3 sm:px-6 lg:px-8",
          RAIL_ABOVE_HAIRLINE,
        )}
      >
        {items.map((item) => {
          const isActive = activeHref === item.href;

          return (
            <a
              key={item.href}
              ref={(node) => {
                itemRefs.current[item.href] = node;
              }}
              href={item.href}
              aria-current={isActive ? "true" : undefined}
              onFocus={(event) => revealRef.current(false, event.currentTarget)}
              className={[
                // `min-h` rather than padding: the pill clears the 44px touch
                // minimum without the label drifting off its optical centre.
                // Same weight step as the index variant, same reason.
                "inline-flex min-h-[44px] shrink-0 items-center rounded-full border px-4 text-[13px] font-normal transition",
                /*
                  Current is a white ground lifted off the `neutral-50` rail,
                  edged in brand, with the label in ink. The old treatment was
                  a solid brand fill with white text — the loudest element in
                  the whole chrome, sitting underneath a global nav whose
                  strongest gesture is a 2px line.

                  Brand stays a border and never becomes the label: at 13px it
                  measures 4.16:1 on white, which fails AA for text.

                  Idle drops its white ground so it reads as part of the rail
                  rather than a filter chip, and the geometry — 44px min-height,
                  radius, padding — is untouched.
                */
                isActive
                  ? "border-[var(--color-brand)] bg-white text-neutral-900"
                  : "border-neutral-200 bg-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-900",
              ].join(" ")}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
