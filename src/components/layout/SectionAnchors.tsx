"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  anchorOffsetFor,
  anchorTargets,
  contentTopOf,
  stickyStackBottom,
  SECTION_CLEARANCE,
} from "@/lib/sectionAnchors";

/**
 * Applies the shared section-anchor rule to every in-page link on the site.
 *
 * Mounted once per root layout rather than per template, deliberately. The
 * per-template alternative was the obvious one and it is the reason this
 * component exists: hand-enumerating the consumers missed `#kontakt`, which is
 * linked from more places than any other anchor on the site, belongs to no
 * WikiNav item list, and was landing 22px *behind* the sticky chrome on
 * `/servis`. A mount that covers `section[id]` unconditionally cannot miss one.
 *
 * It is also the sole writer. WikiNav used to set these offsets for its own
 * sections and correct its own deep links; it no longer does either, so there
 * is exactly one place where landing geometry is decided, and no way for two
 * writers to disagree.
 *
 * Renders nothing.
 */
export default function SectionAnchors() {
  const pathname = usePathname();

  useEffect(() => {
    const sections = anchorTargets();
    if (!sections.length) return;

    const apply = () => {
      const stackBottom = stickyStackBottom();

      for (const section of sections) {
        section.style.scrollMarginTop = `${anchorOffsetFor(section, stackBottom)}px`;
      }
    };

    apply();

    /**
     * A deep link has already landed by the time this runs — the browser used
     * whatever static `scroll-mt-*` the markup carries, which cannot account
     * for the section's padding. Correct it once the webfonts that would move
     * it again have settled, and only if the reader has not scrolled in the
     * meantime: their position is theirs, not ours.
     */
    const hash = decodeURIComponent(window.location.hash);
    const target = hash.length > 1 ? document.getElementById(hash.slice(1)) : null;

    let cancelled = false;
    const landedAt = window.scrollY;

    const correctLanding = () => {
      if (cancelled || !target || window.scrollY !== landedAt) return;

      const delta = contentTopOf(target) - (stickyStackBottom() + SECTION_CLEARANCE);

      // A sub-pixel delta is rounding, not a mis-landing; scrolling by it would
      // only introduce the drift it is meant to remove.
      if (Math.abs(delta) > 1) window.scrollBy(0, delta);
    };

    if (target) {
      if (document.fonts?.ready) void document.fonts.ready.then(correctLanding);
      else window.requestAnimationFrame(correctLanding);
    }

    /**
     * Padding is breakpoint-dependent and the chrome's own height is not fixed
     * either, so the offsets are re-derived whenever either could have moved.
     * The observer catches a late layout pass — a webfont swap above all —
     * which changes the rail's height without any viewport event firing.
     */
    const observer = new ResizeObserver(apply);
    for (const element of document.querySelectorAll<HTMLElement>("header, nav")) {
      if (getComputedStyle(element).position === "sticky") observer.observe(element);
    }

    window.addEventListener("resize", apply);
    window.addEventListener("orientationchange", apply);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("resize", apply);
      window.removeEventListener("orientationchange", apply);

      // Hand the sections back to their own static fallback.
      for (const section of sections) {
        section.style.removeProperty("scroll-margin-top");
      }
    };
  }, [pathname]);

  return null;
}
