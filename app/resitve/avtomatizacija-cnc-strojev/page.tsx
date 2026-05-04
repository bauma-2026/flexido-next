import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import WikiNav from "@/components/wiki/WikiNav";
import SystemBlock from "@/components/solutions/SystemBlock";
import UseCasesBlock from "@/components/solutions/UseCasesBlock";
import ForWhoBlock from "@/components/solutions/ForWhoBlock";
import SystemArchitectureBlock from "@/components/solutions/SystemArchitectureBlock";
import CaseCNC from "@/components/blocks/cases/CaseCNC";

const pageNavItems = [
  { href: "#proces", label: "Problem" },
  { href: "#pristop", label: "Rešitev" },
  { href: "#primeri", label: "Primer iz prakse" },
  { href: "#rezultat", label: "Rezultat" },
  { href: "#sistem", label: "Sistem" },
  { href: "#uporaba", label: "Primeri uporabe" },
  { href: "#za-koga", label: "Za koga" },
];
// FEATURE FLAGS
const features = {
  architecture: process.env.NODE_ENV === "development",
};

export default function Page() {
  return (
   <>
  <Header sticky={false} />

  <main className="bg-white text-neutral-950">
    {/* HERO */}
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      <video
        src="/video/hero-cnc.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/76 via-black/46 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="max-w-[760px]">
          <a
            href="/resitve"
            className="inline-flex text-[13px] text-white/55 transition hover:text-white"
          >
            ← Vse rešitve
          </a>

          <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">
            CNC avtomatizacija
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            <span className="block max-w-[13ch]">CNC proces</span>
            <span className="block max-w-[13ch]">brez zastojev.</span>
          </h1>

          <p className="mt-5 max-w-[56ch] text-[16px] leading-7 text-white/75">
            Avtomatiziramo nalaganje, odvzem in tok okoli CNC stroja — da
            proizvodnja teče bolj stabilno, z manj čakanja in manj ročnih
            prekinitev.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proces"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
            >
              Poglej problem →
            </a>

            <a
              href="#kontakt"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-[14px] font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Poglejmo vaš proces →
            </a>
          </div>
        </div>
      </Container>
    </section>

    <WikiNav items={pageNavItems} />
{/* PROBLEM */}
<Section id="proces" className="scroll-mt-24 bg-white">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div className="max-w-[560px]">
        <p className="eyebrow">Problem</p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          CNC proces največkrat ne izgublja časa med rezanjem.
        </h2>

        <p className="mt-5 text-[16px] leading-7 text-neutral-600">
          Izgube nastajajo pred in po obdelavi — pri nalaganju, odvzemu,
          čakanju na material, kontroli kosov ali prenosu v naslednjo
          operacijo.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-neutral-500">
          To niso ločeni problemi. To je proces, ki ni dovolj povezan.
        </p>
      </div>

      <div>
        <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
          Kje nastajajo zastoji
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Ročno nalaganje kosov",
            "Ročni odvzem po obdelavi",
            "Čakanje med operacijami",
            "Nestabilen tok materiala",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[22px] border border-neutral-200 bg-white p-6"
            >
              <p className="text-[15px] font-medium text-neutral-950">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[14px] leading-6 text-neutral-500">
          Rezultat: stroj stoji, čeprav bi lahko delal.
        </p>
      </div>
    </div>
  </Container>
</Section>

{/* APPROACH */}
<Section id="pristop" className="scroll-mt-24 bg-[#f6f9fc]">
  <Container>
    <div className="max-w-[720px]">
      <p className="eyebrow">Rešitev</p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        Uredimo celoten tok okoli CNC stroja.
      </h2>

      <p className="mt-5 text-[16px] leading-7 text-neutral-600">
        Robot prevzame ponavljajoče operacije, material se premika bolj
        predvidljivo, pozicija kosov pa je lahko kontrolirana pred naslednjim
        korakom.
      </p>

      <p className="mt-5 text-[15px] leading-7 text-neutral-500">
        Ne optimiziramo enega koraka. Uredimo proces, ki omogoča bolj stabilen
        cikel.
      </p>
    </div>

    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      {[
        {
          title: "1. Pregled procesa",
          desc: "Pogledamo trenutni potek dela, ozka grla, ročne korake in mesta, kjer stroj čaka.",
        },
        {
          title: "2. Smiselna avtomatizacija",
          desc: "Določimo, kateri del procesa ima največji učinek za stabilnost, izkoristek in manj ročnega dela.",
        },
        {
          title: "3. Integracija v proizvodnjo",
          desc: "Rešitev povežemo s strojem, operaterjem in obstoječim tokom materiala.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-[24px] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.045)]"
        >
          <h3 className="text-[17px] font-semibold text-neutral-950">
            {item.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-neutral-600">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </Container>
</Section>
<CaseCNC />
{/* RESULTS */}
<Section
  id="rezultat"
  className="scroll-mt-24 bg-white border-b border-neutral-200/60"
>
  <Container>
    <div className="max-w-[720px]">
      <p className="eyebrow">Rezultat</p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        Kaj se spremeni, ko proces uredimo
      </h2>

      <p className="mt-5 text-[16px] leading-7 text-neutral-600">
        Ko odstranimo ročne prekinitve in povežemo tok materiala, CNC proces
        začne delovati bolj predvidljivo in stabilno.
      </p>
    </div>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        "Višja produktivnost",
        "Stabilen in ponovljiv cikel",
        "Manj napak in izmeta",
        "Manj odvisnosti od operaterja",
      ].map((item) => (
        <div
          key={item}
          className="rounded-[22px] border border-neutral-200 bg-white p-6"
        >
          <p className="text-[15px] font-medium text-neutral-950">
            {item}
          </p>
        </div>
      ))}
    </div>

    <p className="mt-6 max-w-[600px] text-[14px] leading-6 text-neutral-500">
      Proces ne temelji več na improvizaciji, ampak na sistemu, ki deluje vsak dan enako.
    </p>
  </Container>
</Section>
<SystemBlock
  title="FLEX 7 CNC kot osnova avtomatizirane celice"
  desc="Kompaktna robotska celica, ki prevzame nalaganje, odvzem in tok kosov okoli CNC stroja — brez ročnih prekinitev."
  note="Sistem se prilagodi procesu, kosom in ritmu proizvodnje."
  mainImage={{
    src: "/images/cnc/system/flex-7-cnc.webp",
    alt: "FLEX 7 CNC robotska celica",
  }}
  itemsLabel="Možne razširitve sistema"
  itemsAspect="square"
  items={[
    {
      title: "Stacker",
      desc: "Avtomatsko zlaganje kosov po obdelavi.",
      image: "/images/cnc/system/stacker-flex-7-cnc.webp",
    },
    {
      title: "Čistilna postaja",
      desc: "Odstranjevanje ostankov pred naslednjo operacijo.",
      image: "/images/cnc/system/cleaning-station-flex-7-cnc.webp",
    },
    {
      title: "Graviranje",
      desc: "Označevanje kosov znotraj procesa.",
      image: "/images/cnc/system/engraving-flex-7-cnc.webp",
    },
    {
      title: "Vibro sortirna postaja",
      desc: "Organiziran dovod in orientacija kosov.",
      image: "/images/cnc/system/infeed-vibro-sorting-station-flex-7-cnc.webp",
    },
  ]}
/>

{/* SYSTEM ARCHITECTURE */}
{features.architecture && (
  <SystemArchitectureBlock
    id="arhitektura"
    eyebrow="Sistemska arhitektura"
    title="Kako se rešitev poveže v celoten proces"
    desc="Robotska celica ni izoliran kos opreme. Poveže se s strojem, tokom materiala, dodatnimi postajami in po potrebi tudi z obstoječimi informacijskimi sistemi."
    layers={[
      {
        title: "Stroj / operacija",
        items: ["CNC stroji", "IMM stroji", "Drugi stroji"],
      },
      {
        title: "Robotska celica",
        items: ["FLEX 7", "FLEX 25/50", "TMX platforma"],
      },
      {
        title: "Tok materiala",
        items: ["Dovod kosov", "Odvzem", "Sortiranje", "Vmesno odlaganje"],
      },
      {
        title: "Dodatne postaje",
        items: ["Čiščenje", "Kontrola", "Graviranje", "Pakiranje"],
      },
      {
        title: "Middleware",
        items: ["Povezava naprav", "ERP integracija", "Izmenjava podatkov"],
      },
    ]}
  />
)}
 <UseCasesBlock
  id="uporaba"
  title="Kje ima CNC avtomatizacija največ smisla"
  desc="Ko ročni odvzem, nalaganje ali manipulacija omejuje hitrost in stabilnost CNC procesa."
  cases={[
    {
      title: "Ponavljajoči kosi",
      desc: "Ko se enaki ali podobni kosi obdelujejo v stabilnem ritmu.",
    },
    {
      title: "Ročno nalaganje",
      desc: "Ko operater porabi preveč časa za vstavljanje kosov v stroj.",
    },
    {
      title: "Ročni odvzem",
      desc: "Ko stroj čaka, da operater pobere končni kos.",
    },
    {
      title: "Več CNC strojev",
      desc: "Ko en operater težko pokriva več procesov hkrati.",
    },
    {
      title: "Vmesna kontrola",
      desc: "Ko je treba kos pred naslednjim korakom preveriti, očistiti ali označiti.",
    },
    {
      title: "Nočne izmene",
      desc: "Ko želite podaljšati stabilen tek procesa z manj ročnega nadzora.",
    },
  ]}
/>

{/* FOR WHO */}
<ForWhoBlock
  id="za-koga"
  title="Kdaj ima CNC avtomatizacija največ smisla"
  desc="Največji učinek dosežemo tam, kjer ročni koraki zavirajo tok proizvodnje."
  items={[
    {
      title: "Ponavljajoči procesi",
      desc: "Enaki kosi in stabilen ritem proizvodnje.",
    },
    {
      title: "Višji volumni",
      desc: "Ročno delo postane ozko grlo.",
    },
    {
      title: "Več CNC strojev",
      desc: "Potrebna je centralizirana manipulacija kosov.",
    },
    {
      title: "Nočne izmene",
      desc: "Želja po lights-out proizvodnji.",
    },
    {
      title: "Pomanjkanje kadra",
      desc: "Težko je zagotoviti stabilno operatersko ekipo.",
    },
    {
      title: "Visoka zahteva po stabilnosti",
      desc: "Manj variacij, manj napak.",
    },
  ]}
/>
        <ProcessBand />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}