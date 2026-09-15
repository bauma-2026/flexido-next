"use client";

import { useEffect, useRef, useState } from "react";

type Viewport = { label: string; width: number; height: number };

const VIEWPORTS: Viewport[] = [
  { label: "1440 × 900", width: 1440, height: 900 },
  { label: "1600 × 1000", width: 1600, height: 1000 },
  { label: "1920 × 1080", width: 1920, height: 1080 },
];

const LOCALES = ["sl", "en", "de"] as const;

/** Extra height rendered below the stated viewport so you can see what is cut. */
const OVERSCAN = 260;

/** Rough browser chrome (tab strip + address bar) on a screen of the stated height. */
const CHROME = 90;

const CONCEPTS = [
  {
    id: "a",
    name: "A — Contents page",
    specs: [
      "H1 56px / 17ch — SL 2 lines, EN+DE 4 (production: 2 / 4)",
      "Index 300px, flush to the container right edge",
      "~217px of empty hero between statement and index",
      "Titles 14px @ 78%, numerals 9.5px @ 22%, rules @ 8%",
      "Rows 38px; index starts below the H1 cap-height",
    ],
  },
  {
    id: "b",
    name: "B — Two-column register",
    specs: [
      "H1 52px / 12ch — SL 3 lines, EN+DE 5 (production: 2 / 4)",
      "Index 493px (cols 8–12) = 2 × 246px, 388px tall",
      "Left column 590px (6 of 12)",
      "Right scrim 80 → 40 → 62 — heaviest of the three",
      "3 group labels + descriptors truncated to one line",
    ],
  },
  {
    id: "c",
    name: "C — Baseline rail",
    specs: [
      "H1 68px / 18ch — production, unchanged",
      "Hero fixed 700px, 760px at ≥1536 — no viewport math",
      "Rail left-aligned, ragged right, gaps 24 / 60px",
      "Right scrim 78 → 45 → 20 — production, unchanged",
      "Local 180px foot lift only; hero image untouched",
    ],
  },
];

export default function HeroIndexLab() {
  const [viewport, setViewport] = useState(VIEWPORTS[0]);
  const [locale, setLocale] = useState<(typeof LOCALES)[number]>("sl");
  const [sideBySide, setSideBySide] = useState(false);
  const [actualSize, setActualSize] = useState(false);

  const measureRef = useRef<HTMLDivElement>(null);
  const [avail, setAvail] = useState(1200);

  useEffect(() => {
    const node = measureRef.current;
    if (!node) return;

    const observer = new ResizeObserver(([entry]) => {
      setAvail(entry.contentRect.width);
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const frameHeight = viewport.height + OVERSCAN;
  const slotWidth = sideBySide ? (avail - 2 * 24) / 3 : avail;
  const scale = actualSize ? 1 : Math.min(1, slotWidth / viewport.width);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-300 bg-white/95 px-6 py-3 backdrop-blur">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              Lab — hero offer index
            </p>
            <p className="text-[13px] text-neutral-700">
              A / B / C against the real hero video · not linked from the site
            </p>
          </div>

          <Group label="Viewport">
            {VIEWPORTS.map((option) => (
              <Toggle
                key={option.label}
                active={option.width === viewport.width}
                onClick={() => setViewport(option)}
              >
                {option.label}
              </Toggle>
            ))}
          </Group>

          <Group label="Locale">
            {LOCALES.map((option) => (
              <Toggle
                key={option}
                active={option === locale}
                onClick={() => setLocale(option)}
              >
                {option.toUpperCase()}
              </Toggle>
            ))}
          </Group>

          <Group label="Layout">
            <Toggle active={!sideBySide} onClick={() => setSideBySide(false)}>
              Stacked
            </Toggle>
            <Toggle active={sideBySide} onClick={() => setSideBySide(true)}>
              Side by side
            </Toggle>
          </Group>

          <Group label="Zoom">
            <Toggle active={!actualSize} onClick={() => setActualSize(false)}>
              Fit ({Math.round(scale * 100)}%)
            </Toggle>
            <Toggle active={actualSize} onClick={() => setActualSize(true)}>
              100%
            </Toggle>
          </Group>
        </div>

        <p className="mt-2 text-[12px] leading-5 text-neutral-500">
          Container is <strong>1216px at every width tested</strong> (max-width 1280 − 2 × 32 px).
          Beyond 1280 only the video bleed changes, not the layout. Solid line = stated viewport
          height. Dotted line = same screen minus ~{CHROME}px of browser chrome.
        </p>
      </header>

      <div ref={measureRef} className="px-6 py-6">
        <div
          className={
            sideBySide
              ? "flex gap-6 overflow-x-auto"
              : "flex flex-col gap-10"
          }
        >
          {CONCEPTS.map((concept) => (
            <section
              key={concept.id}
              className={sideBySide ? "shrink-0" : undefined}
              style={sideBySide ? { width: viewport.width * scale } : undefined}
            >
              <div className="mb-3">
                <h2 className="text-[15px] font-semibold tracking-[-0.02em]">
                  {concept.name}
                </h2>
                <ul
                  className={`mt-1 gap-x-4 gap-y-0.5 text-[12px] leading-5 text-neutral-600 ${
                    sideBySide ? "flex flex-col" : "flex flex-wrap"
                  }`}
                >
                  {concept.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
              </div>

              <div
                className="relative overflow-hidden border border-neutral-300 bg-white"
                style={{
                  width: viewport.width * scale,
                  height: frameHeight * scale,
                }}
              >
                <iframe
                  key={`${concept.id}-${viewport.width}-${viewport.height}-${locale}`}
                  src={`/lab/hero-index/frame/${concept.id}?vh=${viewport.height}&locale=${locale}`}
                  title={concept.name}
                  style={{
                    width: viewport.width,
                    height: frameHeight,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    border: 0,
                  }}
                />

                <FoldLine
                  top={(viewport.height - CHROME) * scale}
                  dotted
                  label={`≈ real fold on a ${viewport.height}px screen`}
                />
                <FoldLine
                  top={viewport.height * scale}
                  label={`Fold — ${viewport.label} viewport`}
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-neutral-400">
        {label}
      </p>
      <div className="flex gap-1">{children}</div>
    </div>
  );
}

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-2.5 py-1 text-[12px] transition ${
        active
          ? "border-neutral-900 bg-neutral-900 text-white"
          : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
      }`}
    >
      {children}
    </button>
  );
}

function FoldLine({
  top,
  label,
  dotted = false,
}: {
  top: number;
  label: string;
  dotted?: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 z-10"
      style={{ top }}
    >
      <div
        className={dotted ? "border-t border-dotted border-red-400/70" : "border-t border-red-500"}
      />
      <span
        className={`absolute right-0 top-0 px-1.5 py-0.5 text-[10px] font-medium ${
          dotted ? "bg-red-400/80 text-white" : "bg-red-500 text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
