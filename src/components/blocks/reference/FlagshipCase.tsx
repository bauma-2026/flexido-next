import Link from "next/link";

import Container from "@/components/layout/Container";


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

const steps = [
  {
    title: "Pregled procesa",
    desc: "Najprej poiščemo, kje nastajajo čakanja, ročni prenosi in izguba ritma.",
  },
  {
    title: "Načrt toka",
    desc: "Določimo, kako naj se material premika med stroji, fazami in odlagalnimi mesti.",
  },
  {
    title: "Fleksibilna celica",
    desc: "V proces vključimo robotsko celico, ki podpira nalaganje, odvzem in manipulacijo kosov.",
  },
];

const results = [
  "manj ročnih prenosov",
  "manj čakanja med fazami",
  "bolj stabilen tok proizvodnje",
  "večja fleksibilnost procesa",
];

export default function FlagshipCase() {
  return (
    <section id="reference" className="bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        {/* HEADER */}
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
              Primer uporabe
            </p>

            <h2 className="mt-4 max-w-[15ch] text-4xl font-semibold leading-[0.96] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Ko stroji delajo, proces pa izgublja ritem.
            </h2>
          </div>

          <p className="max-w-[64ch] text-base leading-7 text-neutral-600 sm:text-lg">
            Pri avtomatizaciji ni dovolj rešiti samo ene operacije. Ključno je,
            kako se material premika med fazami, kje nastajajo čakanja in kako
            stabilno teče celoten proces.
          </p>
        </div>

        {/* MAIN CASE */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-950 text-white shadow-sm">
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

              <h3 className="mt-7 max-w-[16ch] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Povezan tok med stroji, ne samo robot ob stroju.
              </h3>

              <p className="mt-6 max-w-[58ch] text-base leading-7 text-white/68">
                Tipičen izziv ni v tem, da CNC stroj ne deluje. Izziv je, da
                operater med fazami ročno prenaša, nalaga in odlaga kose. Zato
                proces izgublja ritem, čeprav posamezen stroj deluje pravilno.
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
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/40">
                Kaj se je uredilo
              </p>

              <div className="mt-7 grid gap-3">
                {results.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4"
                  >
                    <span className="text-sm leading-5 text-white/72">
                      {item}
                    </span>
                    <span className="text-sm text-white/30">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BEFORE / AFTER */}
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6 sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
              Pred
            </p>

            <h3 className="mt-3 max-w-[22ch] text-2xl font-semibold tracking-[-0.035em] text-neutral-950">
              Proces je odvisen od ročnega dela.
            </h3>

            <ul className="mt-6 space-y-3">
              {before.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-neutral-600"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.75rem] border border-neutral-200 bg-white p-6 shadow-sm sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
              Po
            </p>

            <h3 className="mt-3 max-w-[22ch] text-2xl font-semibold tracking-[-0.035em] text-neutral-950">
              Tok postane bolj predvidljiv.
            </h3>

            <ul className="mt-6 space-y-3">
              {after.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-neutral-600"
                >
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* APPROACH */}
        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Pristop
              </p>

              <h3 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                Ne začnemo z robotom. Začnemo s procesom.
              </h3>
            </div>

            <p className="max-w-[62ch] text-base leading-7 text-neutral-600">
              Rešitev ni samo v tem, da se doda robot. Najprej je treba razumeti,
              kje proces izgublja čas, kje se material ustavlja in kateri del
              avtomatizacije ima največji učinek.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-xs font-medium text-neutral-400">
                  0{index + 1}
                </span>

                <h4 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-neutral-950">
                  {step.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RESULT */}
        <div className="mt-16 overflow-hidden rounded-[2rem] bg-neutral-100 p-7 sm:p-9 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                Rezultat
              </p>

              <h3 className="mt-4 max-w-[13ch] text-3xl font-semibold leading-[1.02] tracking-[-0.04em] text-neutral-950 sm:text-4xl">
                Proces, ki teče brez improvizacije.
              </h3>
            </div>

            <div>
              <p className="max-w-[68ch] text-base leading-7 text-neutral-600">
                Robot ni cilj. Mobilna celica ni cilj. Cilj je proizvodni tok,
                v katerem so stroj, manipulacija in material povezani v enoten
                sistem — z manj ročnega dela, manj čakanja in več stabilnosti.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {results.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}