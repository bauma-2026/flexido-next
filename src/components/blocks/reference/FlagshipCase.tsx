import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const before = [
  "Ročno nalaganje in odlaganje kosov.",
  "Čakanje materiala med fazami.",
  "Tempo je odvisen od operaterja.",
];

const after = [
  "Avtomatizirano nalaganje in odvzem.",
  "Povezan tok med stroji in fazami.",
  "Bolj stabilen in predvidljiv proces.",
];

const results = [
  "manj ročnih prenosov",
  "manj čakanja med fazami",
  "bolj stabilen tok proizvodnje",
  "večja fleksibilnost procesa",
];

export default function FlagshipCase() {
  return (
    <Section
      id="reference"
      variant="large"
      className="border-b border-neutral-200 bg-white"
    >
      <Container>
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">
              Primer uporabe
            </p>

            <h2 className="mt-4 max-w-[15ch] text-4xl font-semibold leading-[0.96] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Ko stroji delajo, proces pa izgublja ritem.
            </h2>
          </div>

          <p className="max-w-[62ch] text-base leading-7 text-neutral-600 sm:text-lg">
            Pri avtomatizaciji ni dovolj rešiti samo ene operacije. Ključno je,
            kako se material premika med fazami, kje nastajajo čakanja in kako
            stabilno teče celoten proces.
          </p>
        </div>

        {/* MAIN CASE */}
        <div className="mt-12 overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-neutral-950 text-white">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <div className="p-7 sm:p-9 lg:p-12">
              <div className="flex flex-wrap gap-2">
                {["CNC", "Manipulacija", "Mobilna celica"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="mt-7 max-w-[17ch] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Povezan tok med stroji, ne samo robot ob stroju.
              </h3>

              <p className="mt-6 max-w-[56ch] text-base leading-7 text-white/68">
                Tipičen izziv ni v tem, da CNC stroj ne deluje. Izziv je, da
                operater med fazami ročno prenaša, nalaga in odlaga kose — zato
                proces izgublja ritem.
              </p>

              <div className="mt-8">
                <Link
                  href="#kontakt"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  Poglejmo vaš proces
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="border-t border-white/10 bg-white/[0.035] p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-12">
              <p className="eyebrow-on-dark">
                Kaj se uredi
              </p>

              <div className="mt-7 grid gap-3">
                {results.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 rounded-[var(--radius-structural)] border border-white/10 bg-white/[0.045] px-4 py-4"
                  >
                    <span className="text-sm leading-5 text-white/72">
                      {item}
                    </span>
                   <span className="text-sm text-white/35">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

     {/* BEFORE / AFTER */}
<div className="mt-5 grid overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-white lg:grid-cols-2">
  {/* BEFORE */}
  <div className="border-b border-neutral-200 bg-neutral-50 p-6 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 text-[12px] font-semibold text-neutral-500">
        −
      </span>

      <p className="eyebrow">
        Pred
      </p>
    </div>

   <h3 className="mt-5 max-w-[22ch] text-2xl font-semibold leading-[1.1] tracking-[-0.035em] text-neutral-950">
  Proces je odvisen od
  <br />
  ročnega dela.
</h3>

    <div className="mt-7 grid gap-3">
      {before.map((item) => (
        <div
          key={item}
          className="rounded-[var(--radius-structural)] border border-neutral-200 bg-white px-4 py-3"
        >
          <p className="text-sm leading-6 text-neutral-600">{item}</p>
        </div>
      ))}
    </div>
  </div>

  {/* AFTER */}
  <div className="bg-white p-6 sm:p-7 lg:p-8">
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[12px] font-semibold text-[#0ea5e9]">
        ✓
      </span>

      <p className="eyebrow">
        Po
      </p>
    </div>

  <h3 className="mt-5 max-w-[18ch] text-2xl font-semibold leading-[1.1] tracking-[-0.035em] text-neutral-950">
  Tok postane bolj
  <br />
  predvidljiv.
</h3>

    <div className="mt-7 grid gap-3">
      {after.map((item) => (
        <div
          key={item}
          className="rounded-[var(--radius-structural)] border border-[#0ea5e9]/20 bg-[#f0f9ff] px-4 py-3"
        >
          <p className="text-sm leading-6 text-[#0a2540]">{item}</p>
        </div>
      ))}
    </div>
  </div>
</div>
      </Container>
    </Section>
  );
}