import type { ReactNode } from "react";

import Container from "@/components/layout/Container";
import DarkBand from "@/components/ui/DarkBand";

/**
 * LAB — dark-tone A/B/C.
 *
 * Overrides `--color-dark-band` locally. Production `globals.css` is untouched.
 * Fixtures are production markup: /resitve photo CTA, DarkBand (careers/funding),
 * /resitve hub hero surface, footer chrome at bg-neutral-950.
 */

type Variant = {
  id: "a" | "b" | "c";
  name: string;
  hex: string;
  note: string;
  whiteContrast: string;
  footerContrast: string;
  brandContrast: string;
};

const VARIANTS: Variant[] = [
  {
    id: "a",
    name: "A — Current navy",
    hex: "#082F5F",
    note: "Production --color-dark-band. Hue-separated from the footer.",
    whiteContrast: "13.3:1",
    footerContrast: "1.49:1 + hue",
    brandContrast: "3.19:1",
  },
  {
    id: "b",
    name: "B — Neutral charcoal",
    hex: "#171717",
    note: "Tailwind neutral-900. Same family as footer #0A0A0A.",
    whiteContrast: "17.9:1",
    footerContrast: "1.10:1",
    brandContrast: "4.31:1",
  },
  {
    id: "c",
    name: "C — Softer industrial",
    hex: "#1F1F1F",
    note: "Lifted charcoal. Same family as footer, slightly more band.",
    whiteContrast: "16.5:1",
    footerContrast: "1.20:1",
    brandContrast: "3.96:1",
  },
];

export default function DarkToneLab() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-300 bg-white/95 px-6 py-3 backdrop-blur">
        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
          Lab — dark-tone normalization
        </p>
        <p className="mt-1 max-w-[72ch] text-[13px] leading-5 text-neutral-700">
          Local override of <code>--color-dark-band</code> only. Light surfaces, brand
          blue, buttons, Home hero, and footer stay production. Not linked from the
          site.
        </p>
        <p className="mt-2 text-[12px] leading-5 text-neutral-500">
          Light system: white → #F2F2F2 → #E7E7E7. Footer: <code>bg-neutral-950</code>{" "}
          #0A0A0A. Brand blue: #0082CA. Photography and copy are production.
        </p>
      </header>

      <div className="flex flex-col gap-16 px-6 py-8">
        {VARIANTS.map((variant) => (
          <VariantStack key={variant.id} variant={variant} />
        ))}
      </div>
    </div>
  );
}

function VariantStack({ variant }: { variant: Variant }) {
  return (
    <section>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-[15px] font-semibold tracking-[-0.02em]">
            {variant.name}
          </h2>
          <p className="mt-1 text-[12px] leading-5 text-neutral-600">
            <span className="font-mono">{variant.hex}</span>
            {" — "}
            {variant.note}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 text-[11px] text-neutral-500">
          <li>white {variant.whiteContrast}</li>
          <li>vs footer {variant.footerContrast}</li>
          <li>#0082CA {variant.brandContrast}</li>
        </ul>
      </div>

      <div
        className="overflow-hidden border border-neutral-300 bg-white"
        style={{ ["--color-dark-band" as string]: variant.hex }}
      >
        <LightContext />
        <ResitvePhotoCta />
        <FooterChrome />

        <LabCaption>
          /resitve hub hero — token is the section surface, not a black scrim
        </LabCaption>
        <ResitveHeroSurface />

        <LabCaption>
          DarkBand tone=&quot;brand&quot; — careers / funding conclusion
        </LabCaption>
        <DarkBand
          tone="brand"
          eyebrow="Odprta prijava"
          title="Ne vidite pravega mesta?"
          body="Pošljite nam svojo predstavitev, izkušnje in področje, kjer bi lahko prispevali. Če se pojavi prava priložnost, vas kontaktiramo."
          primaryAction={{
            href: "mailto:info@flexido.eu",
            label: "Pošljite odprto prijavo →",
          }}
          backgroundImage={{
            src: "/images/flexido/legacy/s-3.jpg.jpeg",
            alt: "",
          }}
        />
        <FooterChrome />
        <SignalStrip hex={variant.hex} />
      </div>
    </section>
  );
}

/** Production light ramp above the dark band — surfaces only, no layout change. */
function LightContext() {
  return (
    <div>
      <div className="flex items-center justify-between bg-white px-8 py-5">
        <img
          src="/logo/flexido-header.svg"
          alt="Flexido"
          width={126}
          height={36}
          className="h-8 w-auto"
        />
        <span
          className="text-[11px] uppercase tracking-[0.16em]"
          style={{ color: "#0082CA" }}
        >
          #0082CA
        </span>
      </div>
      <div className="px-8 py-6" style={{ background: "#F2F2F2" }}>
        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
          Previous section — #F2F2F2
        </p>
        <p className="mt-2 max-w-[52ch] text-[15px] leading-6 text-neutral-700">
          Light editorial surface immediately above a dark conclusion band.
        </p>
      </div>
      <div className="px-8 py-5" style={{ background: "#E7E7E7" }}>
        <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
          Proof surface — #E7E7E7
        </p>
      </div>
    </div>
  );
}

/** Exact /resitve hub final CTA construction. */
function ResitvePhotoCta() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark-band)] py-20 sm:py-28">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/flexido/legacy/s-3.jpg.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      <Container className="relative">
        <div className="max-w-3xl">
          <p className="eyebrow-on-dark">Naslednji korak</p>
          <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl">
            Poglejmo vaš proces.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-7 text-white/72 sm:text-lg">
            Povejte nam, kaj želite avtomatizirati. Skupaj bomo preverili, katera
            rešitev ima največ smisla za vaš proces.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:info@flexido.eu"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
            >
              Pošlji povpraševanje <span className="ml-2">→</span>
            </a>
            <a
              href="mailto:info@flexido.eu"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white"
            >
              info@flexido.eu
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Production footer surface only — logo, tagline, junction. Not the token. */
function FooterChrome() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <Container className="py-10">
        <img
          src="/logo/flexido-footer.svg"
          alt="Flexido"
          width={126}
          height={36}
          className="h-9 w-auto"
        />
        <p className="mt-3 text-[13px] font-medium text-white/45">
          We make automation easier.
        </p>
        <p className="mt-2 text-[12px] text-white/35">
          Footer <code>bg-neutral-950</code> #0A0A0A — unchanged in this test
        </p>
      </Container>
    </footer>
  );
}

function LabCaption({ children }: { children: ReactNode }) {
  return (
    <p className="border-t border-neutral-200 bg-neutral-100 px-8 py-2 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
      {children}
    </p>
  );
}

/** Exact /resitve hub hero overlay recipe, cropped in height for comparison. */
function ResitveHeroSurface() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark-band)] pb-16 pt-20 text-white">
      <div className="absolute inset-0">
        <img
          src="/images/standardne-celice/hero.webp"
          alt=""
          className="h-full w-full object-cover object-[70%_center] lg:object-[42%_center]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/75 to-[var(--color-dark-band)]/40" />
      <Container className="relative">
        <p className="eyebrow-on-dark mb-5">Rešitve</p>
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
            Rešitve za stabilnejšo proizvodnjo
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/72">
            Izberite področje, kjer vaš proces potrebuje avtomatizacijo.
          </p>
        </div>
      </Container>
    </section>
  );
}

function SignalStrip({ hex }: { hex: string }) {
  return (
    <div
      className="flex flex-wrap items-center gap-6 border-t border-white/10 px-8 py-5 text-white"
      style={{ background: hex }}
    >
      <span className="text-[11px] uppercase tracking-[0.16em] text-white/50">
        Brand signal on this dark
      </span>
      <span
        className="inline-block h-2.5 w-2.5 rounded-full"
        style={{ background: "#0082CA" }}
      />
      <span className="text-[14px] font-medium" style={{ color: "#0082CA" }}>
        #0082CA
      </span>
      <span className="text-[14px] text-white">White heading</span>
      <span className="text-[14px] text-white/72">Body at 72%</span>
    </div>
  );
}
