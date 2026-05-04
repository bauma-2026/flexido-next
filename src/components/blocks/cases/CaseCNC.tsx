import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function CaseCNC() {
  return (
<Section
  id="primeri"
  className="border-y border-neutral-200/60 bg-neutral-50 scroll-mt-24"
>
  <Container>
    <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20">
      {/* HEADER */}
      <div className="max-w-[58ch]">
        <p className="eyebrow text-neutral-500">Primer iz prakse</p>

        <h2 className="mt-4 max-w-[15ch] text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-neutral-950 sm:text-5xl">
          Ročni CNC proces → neprekinjen tok
        </h2>

        <p className="mt-5 max-w-[48ch] text-neutral-600">
          Tipičen primer CNC procesa, kjer izguba ni v samem stroju, ampak v
          čakanju med posameznimi cikli.
        </p>
      </div>

      {/* CONTEXT + PROBLEM */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
          <h3 className="text-base font-semibold text-neutral-900">
            Kontekst
          </h3>

          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
            <li>1 CNC stroj</li>
            <li>Manjši kovinski kosi do približno 10 kg</li>
            <li>Ročno nalaganje in pobiranje kosov</li>
            <li>Operater je del vsakega cikla</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
          <h3 className="text-base font-semibold text-neutral-900">
            Problem
          </h3>

          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-neutral-700">
            <li>Stroj stoji med menjavami kosov</li>
            <li>Operater je vezan na en proces</li>
            <li>Čas cikla ni stabilen</li>
            <li>Več možnosti za napake pri manipulaciji</li>
          </ul>
        </div>
      </div>

      {/* BEFORE / AFTER */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <p className="eyebrow text-neutral-400">Prej</p>
          <p className="mt-3 text-lg font-medium leading-snug text-neutral-950">
            Vsak cikel je bil odvisen od operaterja.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <p className="eyebrow text-neutral-400">Potem</p>
          <p className="mt-3 text-lg font-medium leading-snug text-neutral-950">
            Proces teče avtomatsko, brez ročnega posega med kosi.
          </p>
        </div>
      </div>

      {/* SOLUTION */}
      <div className="max-w-[62ch]">
        <h3 className="text-base font-semibold text-neutral-900">
          Rešitev
        </h3>

        <p className="mt-4 leading-relaxed text-neutral-700">
          Ob CNC stroj je postavljena kompaktna robotska celica FLEX 7 CNC
          SLIM, ki prevzame nalaganje in pobiranje kosov ter avtomatizira
          ponavljajoč del procesa.
        </p>
      </div>

      {/* FLOW */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
        <div className="max-w-[52ch]">
          <h3 className="text-base font-semibold text-neutral-900">
            Kako teče proces
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-neutral-600">
            Robot prevzame ponavljajoče korake okoli stroja, zato CNC ni več
            odvisen od ročne menjave kosov.
          </p>
        </div>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Robot odpre CNC vrata",
            "Pobere končni kos",
            "Odloži kos na izhod",
            "Pobere nov kos",
            "Vstavi kos v CNC",
            "Zapre vrata",
            "CNC začne obdelavo",
            "Cikel se ponovi",
          ].map((item, index) => (
            <li
              key={item}
              className="rounded-xl border border-neutral-200 bg-neutral-50 p-4"
            >
              <span className="text-xs font-medium text-neutral-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-medium leading-snug text-neutral-900">
                {item}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* RESULT + INSIGHT */}
      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-stretch">
        <div className="rounded-2xl bg-neutral-950 p-6 text-white sm:p-8">
          <p className="eyebrow text-white/45">Rezultat</p>

          <h3 className="mt-4 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.03em] sm:text-4xl">
            Več toka z isto opremo.
          </h3>

          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-white/75">
            <li>CNC stroj deluje brez nepotrebnih prekinitev</li>
            <li>Operater lahko nadzira več procesov hkrati</li>
            <li>Manj napak pri manipulaciji kosov</li>
            <li>Proces postane stabilen in ponovljiv</li>
          </ul>
        </div>

        <div className="flex rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
          <p className="self-end text-2xl font-medium leading-tight tracking-[-0.02em] text-neutral-950 sm:text-3xl">
            CNC stroji so hitri.
            <br />
            Problem je, da proces okoli njih ni.
          </p>
        </div>
      </div>
    </div>
  </Container>
</Section>
  );
}