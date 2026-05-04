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

const pageNavItems = [
  { href: "#proces", label: "Problem" },
  { href: "#pristop", label: "Rešitev" },
  { href: "#rezultat", label: "Rezultat" },
  { href: "#sistem", label: "Sistem" },
  { href: "#primeri", label: "Primeri uporabe" },
  { href: "#za-koga", label: "Za koga" },
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden bg-neutral-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.18),transparent_26%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <Container className="relative z-10 py-20 sm:py-24 lg:py-28">
            <div className="max-w-[760px]">
              <a href="/resitve" className="inline-flex text-[13px] text-white/55 hover:text-white">
                ← Vse rešitve
              </a>

              <p className="mt-6 text-[11px] uppercase tracking-[0.16em] text-white/50">
                Kolaborativni roboti
              </p>

              <h1 className="mt-4 max-w-[13ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Operater dela ponavljajoče naloge.
              </h1>

              <p className="mt-5 max-w-[58ch] text-[16px] leading-7 text-white/75">
                Ročno pobiranje, vstavljanje, obračanje kosov — naloge, ki jemljejo čas in fokus.
                Coboti prevzamejo ponavljanje, operater pa nadzor in odločanje.
                <span className="mt-3 block font-medium text-white">
                  Ne nadomestimo človeka. Odstranimo ponavljanje.
                </span>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#proces" className="rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950">
                  Poglej problem →
                </a>

                <a href="#kontakt" className="rounded-full border border-white/20 px-6 py-3 text-[14px] text-white/80 hover:bg-white/10">
                  Poglejmo vaš proces →
                </a>
              </div>
            </div>
          </Container>
        </section>

        <WikiNav items={pageNavItems} />

        {/* PROBLEM */}
        <Section id="proces" className="scroll-mt-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="eyebrow">Problem</p>
                <h2 className="mt-3 text-3xl font-semibold">
                  Proces se ustavi pri človeku.
                </h2>

                <p className="mt-5 text-neutral-600">
                  Ko operater izvaja ponavljajoče naloge, tempo procesa ni več stabilen.
                  Pojavijo se zamiki, utrujenost in napake.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Ročno pobiranje kosov",
                  "Vstavljanje v stroj",
                  "Obračanje kosov",
                  "Ponavljajoči gibi",
                ].map((item) => (
                  <div key={item} className="border p-6 rounded-[20px]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* APPROACH */}
        <Section id="pristop" className="bg-neutral-50 scroll-mt-24">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Rešitev</p>

              <h2 className="mt-3 text-3xl font-semibold">
                Cobot prevzame ponavljajoče naloge.
              </h2>

              <p className="mt-5 text-neutral-600">
                Namesto da operater izvaja enake gibe, cobot prevzame manipulacijo.
                Operater ostane v procesu — kot nadzor in odločanje.
              </p>
            </div>
          </Container>
        </Section>

        {/* RESULT */}
        <Section id="rezultat" className="scroll-mt-24">
          <Container>
            <div className="max-w-[720px]">
              <p className="eyebrow">Rezultat</p>

              <h2 className="mt-3 text-3xl font-semibold">
                Stabilen proces brez utrujenosti
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Manj napak",
                "Stabilen tempo",
                "Manj fizičnega dela",
                "Več fokusiran operater",
              ].map((item) => (
                <div key={item} className="border p-6 rounded-[20px]">
                  {item}
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* SYSTEM */}
        <SystemBlock
          title="Cobot kot del procesa"
          desc="Kolaborativni robot, ki prevzame ponavljanje in se prilagodi delovnemu mestu."
          note="Enostavna integracija, fleksibilna uporaba."
          mainImage={{
            src: "/images/cobot/system/tmx.webp",
            alt: "Cobot",
          }}
          items={[
  {
    title: "Delovno mesto",
    desc: "Pripravljeno okolje za stabilno delo cobota",
    image: "/images/cobot/system/packaging-box-holders.webp",
  },
  {
    title: "Prijemanje kosov",
    desc: "Prilagojeno obliki, teži in poziciji kosov",
    image: "/images/cobot/system/electro-pneumatic-interfaces.webp",
  },
  {
    title: "Varnost",
    desc: "Senzorji in nadzor za varno sodelovanje s človekom",
    image: "/images/cobot/system/3d-safety-scanner.webp",
  },
]}
        />

        {/* USE CASES */}
        <UseCasesBlock
          id="primeri"
          title="Kje imajo coboti največ smisla"
          desc="Kjer operater izvaja ponavljajoče naloge."
          cases={[
            { title: "Pick & place", desc: "Pobiranje in odlaganje" },
            { title: "Stroji", desc: "Nalaganje / odvzem" },
            { title: "Pakiranje", desc: "Zlaganje kosov" },
            { title: "Kontrola", desc: "Vizualni pregled" },
          ]}
        />

        {/* FOR WHO */}
        <ForWhoBlock
          id="za-koga"
          title="Kdaj imajo coboti največ smisla"
          desc="Ko človek postane ozko grlo."
          items={[
            { title: "Ponavljanje", desc: "Enaki gibi" },
            { title: "Utrujenost", desc: "Napake zaradi ritma" },
            { title: "Stabilnost", desc: "Neenakomeren tempo" },
          ]}
        />

        <ProcessBand />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}