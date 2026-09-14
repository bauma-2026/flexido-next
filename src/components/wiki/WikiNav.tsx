"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

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
 * Movement is minimal by design: the rail stays put whenever the active item
 * is already seated inside the padding edges, and otherwise travels the
 * smallest distance that brings it back in. Below ~700px is the only place any
 * of this runs; at every desktop width the row fits and each effect returns
 * early, so desktop behaviour is unchanged.
 */

/** Distance from the rail's own padding edge at which an item counts as seated. */
const EDGE_SLACK = 1;

/**
 * Breathing room between the pinned rail's bottom edge and the section that
 * lands under it. The single source of truth for anchor landing: the rail's
 * own measured height is added to it, so the two variants — which are not the
 * same height — land their sections identically, and a future height change
 * corrects itself with no page edits. The `scroll-mt-24` the section markup
 * already carries stays as the no-JS fallback.
 */
const ANCHOR_CLEARANCE = 48;

type FadeState = "none" | "start" | "end" | "both";

export default function WikiNav({ items, variant = "pills", label }: WikiNavProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const [fade, setFade] = useState<FadeState>("none");

  const navRef = useRef<HTMLDivElement | null>(null);
  /** The sticky wrapper — the box whose height anchors have to clear. */
  const wrapRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  /** The first positioning pass after mount lands instantly — no load-time slide. */
  const hasRevealedRef = useRef(false);
  /** Lets the stable viewport listeners reach the current reveal. */
  const revealRef = useRef<(instant?: boolean) => void>(() => {});
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
      const offset = 140;

      let current = sections[0];

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= offset) {
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
   * Anchor landing. Written from the rail's measured height so a tapped item
   * drops its section clear of the pinned rail by `ANCHOR_CLEARANCE`, the same
   * gap on every variant and every viewport. Inline styles on the targets are
   * what let one shared rule reach sections the component does not render.
   */
  const syncAnchorOffsets = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const offset = `${Math.round(wrap.getBoundingClientRect().height) + ANCHOR_CLEARANCE}px`;

    for (const href of itemKey.split("|")) {
      const section = document.getElementById(href.replace("#", ""));
      if (section) section.style.scrollMarginTop = offset;
    }
  }, [itemKey]);

  useEffect(() => {
    syncAnchorOffsets();

    /**
     * A deep link lands before any of this runs, on the static `scroll-mt-24`
     * the section markup carries. That fallback is only right for a rail as
     * tall as the index variant; the taller pills rail eats into it and the
     * heading arrives short of the intended gap. Correct it once, after the
     * webfonts that would move it again have settled — and only if the reader
     * has not scrolled in the meantime, whose position is theirs, not ours.
     */
    const hash = window.location.hash;
    const isOwnAnchor = hash && itemKey.split("|").includes(hash);

    let cancelled = false;
    const landedAt = window.scrollY;

    const correctLanding = () => {
      const section = document.getElementById(hash.slice(1));
      const wrap = wrapRef.current;

      if (cancelled || !section || !wrap || window.scrollY !== landedAt) return;

      const offset = Math.round(wrap.getBoundingClientRect().height) + ANCHOR_CLEARANCE;
      const delta = section.getBoundingClientRect().top - offset;

      if (Math.abs(delta) > EDGE_SLACK) window.scrollBy(0, delta);
    };

    if (isOwnAnchor) {
      if (document.fonts?.ready) void document.fonts.ready.then(correctLanding);
      else window.requestAnimationFrame(correctLanding);
    }

    return () => {
      cancelled = true;
      // Hand the sections back to their own `scroll-mt-24`.
      for (const href of itemKey.split("|")) {
        const section = document.getElementById(href.replace("#", ""));
        if (section) section.style.removeProperty("scroll-margin-top");
      }
    };
  }, [itemKey, syncAnchorOffsets]);

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
      syncAnchorOffsets();
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
      syncAnchorOffsets();
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
  }, [itemKey, measureFade, syncAnchorOffsets]);

  /**
   * Minimal-movement reveal of the active item. `instant` is used when the
   * rail itself moved under the reader (rotation, address-bar collapse) —
   * animating a correction they did not ask for would read as drift.
   */
  const revealActive = useCallback((instant = false) => {
    const nav = navRef.current;
    const activeItem = itemRefs.current[activeHrefRef.current];

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
        className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur-xl"
      >
        <div
          ref={navRef}
          data-fade={fade}
          className="wiki-nav-rail mx-auto flex w-full max-w-[1280px] flex-nowrap gap-x-4 overflow-hidden px-5 sm:gap-6 sm:px-6 lg:px-8"
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
                className={cn(
                  "-mb-px shrink-0 border-b-2 pt-3.5 pb-3 text-[13px] font-medium tracking-[-0.01em] transition-colors",
                  isActive
                    ? "border-[var(--color-brand)] text-neutral-950"
                    : "border-transparent text-neutral-500 hover:text-neutral-950",
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
      className="sticky top-0 z-30 border-b border-neutral-200/70 bg-white/85 backdrop-blur-xl"
    >
      <div
        ref={navRef}
        data-fade={fade}
        className="wiki-nav-rail mx-auto flex w-full max-w-[1280px] flex-nowrap gap-2 overflow-hidden px-5 py-3 sm:px-6 lg:px-8"
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
              className={[
                // `min-h` rather than padding: the pill clears the 44px touch
                // minimum without the label drifting off its optical centre.
                "inline-flex min-h-[44px] shrink-0 items-center rounded-full border px-4 text-[13px] font-medium transition",
                isActive
                  ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300 hover:text-neutral-950",
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
