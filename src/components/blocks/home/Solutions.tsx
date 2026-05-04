import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

type Solution = {
  href: string;
  title: string;
  desc: string;
  meta?: string;
  label?: string;
  signal?: string;
  kind: "featured" | "text" | "image";
  image?: string;
};

type Props = {
  title?: string;
  desc?: string;
};

const solutions: Solution[] = [
  {
    href: "/resitve/avtomatizacija-proizvodnje",
    title: "Avtomatizacija proizvodnje",
    desc: "Ne začnemo z robotom. Najprej razumemo proces — nato določimo, kaj ima smisel avtomatizirati.",
    meta: "Sistemski pristop",
    signal: "Za podjetja, ki želijo urediti več kot en sam korak.",
    kind: "featured",
  },
  {
    href: "/resitve/avtomatizacija-cnc-strojev",
    title: "CNC stroji",
    desc: "Težave pri nalaganju, odvzemu ali izkoristku stroja.",
    label: "Proces stroja",
    signal: "Najpogosteje: zastoji med operacijami",
    kind: "text",
  },
  {
    href: "/resitve/brizganje-plastike",
    title: "Brizganje plastike",
    desc: "Nestabilen cikel, odvzem ali priprava kosov.",
    label: "Cikel proizvodnje",
    signal: "Najpogosteje: ročni odvzem kosov",
    kind: "text",
  },
  {
    href: "/resitve/kolaborativni-roboti",
    title: "Kolaborativni roboti",
    desc: "Fleksibilna avtomatizacija za procese, ki se spreminjajo.",
    label: "Tehnologija",
    signal: "Najpogosteje: pomoč operaterju",
    kind: "text",
  },
  {
    href: "/resitve/logistika",
    title: "Paletizacija in interna logistika",
    desc: "Material se ustavlja med fazami proizvodnje.",
    label: "Tok materiala",
    signal: "Najpogosteje: nepovezan proces",
    kind: "image",
    image: "/images/robot.jpg",
  },
  {
    href: "/resitve/manipulacija",
    title: "Manipulacija materiala",
    desc: "Ročno prelaganje in nestabilen potek dela.",
    label: "Prenos materiala",
    signal: "Najpogosteje: čakanje med fazami",
    kind: "text",
  },
  {
    href: "/resitve/servis",
    title: "Servis in podpora",
    desc: "Podpora za stabilno delovanje sistema tudi po zagonu.",
    label: "Podpora",
    signal: "Najpogosteje: stabilnost po zagonu",
    kind: "image",
    image: "/images/flexido-process.jpg",
  },
];

export default function Solutions({
  title = "Kje uporabljamo avtomatizacijo",
  desc = "Razvijamo in integriramo rešitve za različne tipe proizvodnje in procesov.",
}: Props) {
  const featured = solutions.find((item) => item.kind === "featured");

  const gridItems = [
    solutions.find((item) => item.title === "CNC stroji"),
    solutions.find((item) => item.title === "Brizganje plastike"),
    solutions.find((item) => item.title === "Kolaborativni roboti"),
    solutions.find((item) => item.title === "Manipulacija materiala"),
    solutions.find((item) => item.title === "Paletizacija in interna logistika"),
    solutions.find((item) => item.title === "Servis in podpora"),
  ].filter(Boolean) as Solution[];

  return (
    <Section
      id="use-cases"
      variant="default"
      className="bg-neutral-50 text-[#0a2540]"
    >
      <Container>
        <SectionHeader eyebrow="Rešitve" title={title} desc={desc} />

        {/* FEATURED */}
        {featured && (
          <Link href={featured.href} className="group mt-12 block">
            <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[28px] bg-neutral-950 px-7 py-7 text-white shadow-[0_20px_70px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_28px_90px_rgba(15,23,42,0.20)] sm:px-9 sm:py-9 lg:min-h-[340px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-45"
              >
                <source src="/video/hero-cnc.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="relative z-10 max-w-[560px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                  {featured.meta}
                </p>

                <h3 className="mt-3 max-w-[18ch] text-[28px] font-semibold leading-[1] tracking-[-0.04em] sm:text-[36px]">
                  {featured.title}
                </h3>

                <p className="mt-5 max-w-[48ch] text-[15px] leading-7 text-white/75">
                  {featured.desc}
                </p>

                {featured.signal && (
                  <p className="mt-5 max-w-[42ch] text-[13px] leading-6 text-white/52">
                    {featured.signal}
                  </p>
                )}
              </div>

              <div className="relative z-10 mt-8 inline-flex items-center text-[14px] font-medium text-white/85 transition group-hover:text-white">
                <span>Poglej sistemski pristop</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* GRID */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gridItems.map((item) => {
            if (item.kind === "image") {
              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group relative block min-h-[240px] overflow-hidden rounded-[24px] bg-neutral-950 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-80"
                  />

                  <div className="absolute inset-0 bg-black/45 transition duration-300 group-hover:bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/55">
                      {item.label}
                    </p>

                    <h3 className="mt-2 text-[19px] font-semibold leading-tight">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-[30ch] text-[14px] leading-6 text-white/75">
                      {item.desc}
                    </p>

                    {item.signal && (
                      <p className="mt-4 text-[12px] leading-5 text-white/50">
                        {item.signal}
                      </p>
                    )}

                    <div className="mt-5 inline-flex items-center text-[14px] font-medium text-white/85 transition group-hover:text-white">
                      <span>Preberi več</span>
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            }

            return (
              <Link href={item.href} key={item.title} className="group block">
                <Card className="relative flex min-h-[240px] cursor-pointer flex-col justify-between overflow-hidden rounded-[24px] border border-transparent bg-white px-7 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#dbe6f1] hover:shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:px-8 sm:py-8">
<div className="absolute inset-x-0 top-0 h-[3px] bg-[#0a2540]/20 opacity-0 transition duration-300 group-hover:opacity-100" />                  <div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#6b7a90]">
                      {item.label}
                    </p>

                    <h3 className="mt-3 text-[18px] font-semibold leading-tight text-[#0a2540]">
                      {item.title}
                    </h3>

                    <p className="mt-4 max-w-[31ch] text-[15px] leading-6 text-[#425466]">
                      {item.desc}
                    </p>

                    {item.signal && (
                      <p className="mt-5 text-[12px] leading-5 text-[#6b7a90]">
                        {item.signal}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 inline-flex items-center text-[14px] font-medium text-[#0a2540]/70 transition group-hover:text-[#0a2540]">
                    <span>Preberi več</span>
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}