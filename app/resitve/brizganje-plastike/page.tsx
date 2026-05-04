import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import ProcessBand from "@/components/blocks/home/ProcessBand";
import FinalCTA from "@/components/blocks/home/FinalCTA";
import WikiNav from "@/components/wiki/WikiNav";
import SystemBlock from "@/components/solutions/SystemBlock";
import UseCasesBlock from "@/components/solutions/UseCasesBlock";

const pageNavItems = [
  { href: "#proces", label: "Problem" },
  { href: "#pristop", label: "Rešitev" },
  { href: "#rezultat", label: "Rezultat" },
  { href: "#sistem", label: "Sistem" },
  { href: "#primeri", label: "Primeri uporabe" },
  { href: "#za-koga", label: "Za koga" },
  // { href: "#arhitektura", label: "Arhitektura" },
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <video
            src="/video/hero-plastika.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[720px]">
              <a
                href="/resitve"
                className="inline-flex text-[13px] text-white/55 transition hover:text-white"
              >
                ← Vse rešitve
              </a>

             <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">
  Brizganje plastike
</p>
<h1 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
  <span className="block max-w-[13ch]">Stabilen cikel</span>
  <span className="block max-w-[13ch]">po vsakem brizgu.</span>
</h1>

<p className="mt-5 max-w-[56ch] text-[16px] leading-7 text-white/75">
  Avtomatiziramo odvzem, odlaganje, kontrolo in tok kosov po ciklu — da
  proizvodnja teče bolj stabilno, z manj ročnega dela in manj zastojev.
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
          Cikel je hiter. Izgube nastanejo po njem.
        </h2>

        <p className="mt-5 text-[16px] leading-7 text-neutral-600">
          Pri brizganju plastike stroj dela stabilno — ampak proces se ustavlja pri odvzemu, odlaganju ali prenosu kosov.
        </p>

        <p className="mt-5 text-[15px] leading-7 text-neutral-500">
          To niso posamezni problemi. To je tok, ki ni povezan.
        </p>
      </div>

      <div>
        <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-neutral-500">
          Kje nastajajo zastoji
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Ročni odvzem kosov",
            "Nestabilno odlaganje",
            "Čakanje po ciklu",
            "Odvisnost od operaterja",
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
          Rezultat: takt ni stabilen, čeprav bi lahko bil.
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
        Uredimo tok kosov po ciklu.
      </h2>

      <p className="mt-5 text-[16px] leading-7 text-neutral-600">
        Robot prevzame odvzem, kos se pravilno odloži ali pripravi za naslednji korak, proces pa postane stabilen in predvidljiv.
      </p>

      <p className="mt-5 text-[15px] leading-7 text-neutral-500">
        Ne optimiziramo enega koraka. Uredimo celoten tok.
      </p>
    </div>

    <div className="mt-10 grid gap-5 lg:grid-cols-3">
      {[
        {
          title: "1. Pregled cikla",
          desc: "Pogledamo tok po brizgu, ročne korake in mesta, kjer proces stoji.",
        },
        {
          title: "2. Stabilizacija toka",
          desc: "Določimo, kje avtomatizacija prinese največji učinek za stabilen takt.",
        },
        {
          title: "3. Integracija v proces",
          desc: "Rešitev povežemo s strojem, operaterjem in nadaljnjim tokom kosov.",
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
{/* RESULTS */}
<Section id="rezultat" className="scroll-mt-24 bg-white border-b border-neutral-200/60">
  <Container>
    <div className="max-w-[720px]">
      <p className="eyebrow">Rezultat</p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        Stabilen cikel brez ročnih prekinitev
      </h2>

      <p className="mt-5 text-[16px] leading-7 text-neutral-600">
        Ko povežemo tok kosov po ciklu, proces deluje bolj enakomerno, predvidljivo in z manj napakami.
      </p>
    </div>

    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        "Stabilen takt",
        "Manj čakanja",
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
      Proces ne temelji več na improvizaciji, ampak na stabilnem sistemu.
    </p>
  </Container>
</Section>
<SystemBlock
  title="IMM celice za stabilen tok po ciklu"
  desc="Robotska celica prevzame odvzem, odlaganje, sortiranje ali pripravo kosov po brizganju — da se proces ne ustavlja pri ročnih korakih."
  note="Izvedba se prilagodi tipu stroja, kosom, ciklu in zahtevnosti aplikacije."
  mainImage={{
    src: "/images/imm/system/flex-7-imm-slim.webp",
    alt: "FLEX 7 IMM robotska celica",
  }}
  itemsAspect="wide"
  itemsLabel="Možne izvedbe sistema"
  items={[
    {
      title: "FLEX 7 IMM",
      desc: "Standardna robotska celica za odvzem in tok kosov po ciklu.",
      image: "/images/imm/system/flex-7-imm-slim.webp",
    },
    {
      title: "FLEX 25/50",
      desc: "Rešitev za kompleksnejše aplikacije in zahtevnejše procese.",
      image: "/images/imm/system/flex-7-xl.webp",
    },
    {
      title: "TMX platforma",
      desc: "Mobilna kolaborativna platforma za fleksibilne naloge.",
      image: "/images/imm/system/TMX.webp",
    },
  ]}
/>
     <UseCasesBlock
  id="primeri"
  title="Kje ima avtomatizacija pri brizganju največ smisla"
  desc="Ko ročni odvzem ali manipulacija omejuje hitrost ali stabilnost cikla."
  cases={[
    {
      title: "Visok ciklus",
      desc: "Ročni odvzem ne dohaja hitrosti stroja.",
    },
    {
      title: "Občutljivi kosi",
      desc: "Potrebna je konsistentna manipulacija brez poškodb.",
    },
    {
      title: "Sortiranje kosov",
      desc: "Ločevanje OK / NOK ali več variant.",
    },
    {
      title: "Pakiranje",
      desc: "Direktno zlaganje ali priprava za nadaljnjo obdelavo.",
    },
    {
      title: "Čistoča procesa",
      desc: "Manj kontaminacije zaradi ročnega dela.",
    },
    {
      title: "Stabilnost proizvodnje",
      desc: "Manj odvisnosti od operaterja.",
    },
  ]}
/>
        {/* FOR WHO */}
<Section id="za-koga" className="scroll-mt-24 bg-[#f6f9fc]">
  <Container>
    <div className="max-w-[720px]">
      <p className="eyebrow">Za koga je to</p>

      <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
        Kdaj ima avtomatizacija pri brizganju največji smisel
      </h2>

      <p className="mt-5 text-[16px] leading-7 text-neutral-600">
        Največji učinek dosežemo tam, kjer je cikel že stabilen — ampak proces okoli njega povzroča izgube, čakanje ali nestabilen tok kosov.
      </p>
    </div>

    <div className="mt-10 grid gap-5 sm:grid-cols-2">
      {[
        "Serijska proizvodnja plastike",
        "Ročni odvzem ali odlaganje kosov",
        "Nestabilen takt ali čakanje po ciklu",
        "Velika odvisnost od operaterja",
      ].map((item) => (
        <div
          key={item}
          className="rounded-[22px] bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
        >
          <p className="text-[15px] font-medium text-neutral-950">
            {item}
          </p>
        </div>
      ))}
    </div>

    <p className="mt-6 max-w-[600px] text-[14px] leading-6 text-neutral-500">
      Če proces že teče, ga lahko stabiliziramo in pohitrimo.
    </p>
  </Container>
</Section>

        <ProcessBand />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}