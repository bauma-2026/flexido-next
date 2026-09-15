import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import RuledRowList from "@/components/ui/RuledRowList";
import SectionHeader from "@/components/ui/SectionHeader";

import {
  CncMachineIcon,
  InjectionMoldingIcon,
  CobotIcon,
  ManipulationIcon,
  MaterialFlowIcon,
  CustomSystemIcon,
  ServiceSupportIcon,
  StandardCellIcon,
} from "@/components/icons/FlexidoProcessIcons";

const icons = {
  cnc: CncMachineIcon,
  imm: InjectionMoldingIcon,
  cobot: CobotIcon,
  manipulation: ManipulationIcon,
  materialFlow: MaterialFlowIcon,
  customSystem: CustomSystemIcon,
  service: ServiceSupportIcon,
  standardCell: StandardCellIcon,
} as const;

type IconName = keyof typeof icons;

type Solution = {
  href: string;
  title: string;
  desc: string;
  meta?: string;
  label?: string;
  signal?: string;
  kind: "featured" | "text" | "image" | "video";
  image?: string;
  video?: string;
  icon?: IconName;
  iconClassName?: string;
};

type CompactOverrideItem = {
  href: string;
  title: string;
  desc: string;
  label?: string;
  icon?: IconName;
};

type Props = {
  title?: string;
  desc?: string;
  compact?: boolean;
  /**
   * Locale-aware override for the compact peer-navigation rows (CNC / IMM /
   * material handling / logistics). Home always passes this; omit to keep
   * the hardcoded SL fallback below.
   */
  compactItems?: CompactOverrideItem[];
  /** Overrides the "Rešitve" eyebrow above the compact grid. */
  eyebrow?: string;
  /**
   * Short problem→response line rendered below the compact rows, previewing
   * the Systems/ProductProof section immediately below. Compact only.
   */
  bridge?: string;
};

const solutions: Solution[] = [
  {
    href: "/resitve/avtomatizacija-proizvodnje",
    title: "Avtomatizacija proizvodnje",
    desc: "Ko želite urediti več kot en sam korak in povezati proces v stabilen tok.",
    meta: "Sistemski pristop",
    signal: "Najprej proces. Potem rešitev.",
    kind: "featured",
  },
  {
    href: "/resitve/avtomatizacija-cnc-strojev",
    title: "CNC stroji",
    desc: "Nalaganje, odvzem in boljši izkoristek stroja.",
    label: "Proces stroja",
    signal: "Ko stroj čaka na naslednji kos.",
    kind: "text",
    icon: "cnc",
  },
  {
    href: "/resitve/brizganje-plastike",
    title: "Brizganje plastike",
    desc: "Stabilen cikel, odvzem kosov in manj ročnega dela.",
    label: "Cikel proizvodnje",
    signal: "Ko odvzem in priprava upočasnita cikel.",
    kind: "text",
    icon: "imm",
  },
  {
  href: "/resitve/kolaborativni-roboti",
  title: "Kolaborativni roboti",
  desc: "Pomoč pri ponavljajočih se nalogah in delu z operaterjem.",
  label: "Fleksibilna pomoč",
  signal: "Ko naloga ni za polno robotsko celico.",
  kind: "text",
  icon: "cobot",
  iconClassName: "h-11 w-11",
},
 {
  href: "/resitve/manipulacija",
  title: "Manipulacija materiala",
  desc: "Premikanje, obračanje in prenos kosov med fazami.",
  label: "Prenos materiala",
  signal: "Ko material izgublja čas med operacijami.",
  kind: "text",
  icon: "manipulation",
 iconClassName: "h-12 w-12",
},
  {
    href: "/resitve/logistika",
    title: "Paletizacija in interna logistika",
    desc: "Ko material ne teče gladko skozi proizvodnjo.",
    label: "Tok materiala",
    signal: "Ko faze niso povezane v enoten tok.",
    kind: "video",
    video: "/video/flexido/hero-logistika.mp4",
    icon: "materialFlow",
  },
  {
    href: "/resitve/namenski-sistemi",
    title: "Namenski sistemi",
    desc: "Rešitve, prilagojene prostoru, strojem in poteku dela.",
    label: "Po meri procesa",
    signal: "Ko standardna rešitev ni dovolj.",
    kind: "image",
    image: "/images/flexido/legacy/s-3.jpg.jpeg",
  },
];

export default function Solutions({
  title = "Kje lahko avtomatizacija pomaga",
  desc = "Od posameznega stroja do povezave več faz — rešitev izberemo glede na to, kje proces izgublja čas, stabilnost ali predvidljivost.",
  compact = false,
  compactItems: compactItemsOverride,
  eyebrow = "Rešitve",
  bridge = "Sisteme prilagodimo stroju, kosu in procesu.",
}: Props) {
  const featured = solutions.find((item) => item.kind === "featured");

  const gridItems = [
    "CNC stroji",
    "Brizganje plastike",
    "Kolaborativni roboti",
    "Manipulacija materiala",
    "Paletizacija in interna logistika",
    "Namenski sistemi",
  ]
    .map((title) => solutions.find((item) => item.title === title))
    .filter(Boolean) as Solution[];

  const compactItems: CompactOverrideItem[] =
    compactItemsOverride ??
    ([
      "CNC stroji",
      "Brizganje plastike",
      "Manipulacija materiala",
      "Paletizacija in interna logistika",
    ]
      .map((title) => solutions.find((item) => item.title === title))
      .filter(Boolean) as Solution[]);

  if (compact) {
    return (
      <Section id="use-cases" className="surface-muted text-[#0a2540]">
        <Container>
          <SectionHeader className="max-w-[760px]" eyebrow={eyebrow} title={title} desc={desc} descClassName="measure-prose" />

          <RuledRowList
            className="mt-8 lg:mt-10"
            variant="solutions"
            items={compactItems.map((item) => ({
              href: item.href,
              title: item.title,
              desc: item.desc,
            }))}
          />

          {bridge ? (
            <p className="mt-6 max-w-[42rem] border-t border-neutral-200 pt-6 text-[13px] leading-6 text-neutral-500 lg:mt-8">
              {bridge}
              {"  "}
              <span aria-hidden="true" className="text-neutral-300">
                →
              </span>
            </p>
          ) : null}
        </Container>
      </Section>
    );
  }

  return (
    <Section
      id="use-cases"
      variant="default"
      className="surface-muted text-[#0a2540]"
    >
      <Container>
        <SectionHeader className="max-w-[760px]" eyebrow="Rešitve" title={title} desc={desc} descClassName="measure-prose" />

        {/* FEATURED */}
        {featured && (
          <Link href={featured.href} className="group mt-12 block">
            <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden border border-neutral-800 bg-neutral-950 px-7 py-7 text-white transition-all duration-300 hover:-translate-y-[1px] sm:px-9 sm:py-9 lg:min-h-[340px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover opacity-30 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-45"
              >
                <source src="/video/hero-2-1.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="relative z-10 max-w-[560px]">
                <p className="eyebrow-on-dark">
                  {featured.meta}
                </p>

                <h3 className="mt-3 max-w-[18ch] text-[28px] font-semibold leading-[1] tracking-[-0.04em] sm:text-[36px]">
                  {featured.title}
                </h3>

                <p className="mt-5 max-w-[44ch] text-[15px] leading-7 text-white/75">
                  {featured.desc}
                </p>

                {featured.signal && (
                  <p className="mt-5 max-w-[40ch] text-[13px] leading-6 text-white/52">
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
            if (item.kind === "image" || item.kind === "video") {
              return (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group relative block min-h-[260px] overflow-hidden border border-neutral-800 bg-neutral-950 transition-all duration-300 hover:-translate-y-[1px] sm:min-h-[240px] lg:min-h-[240px]"
                >
                  {item.kind === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-80"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-[1.05] group-hover:opacity-80"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/45 transition duration-300 group-hover:bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-8 text-white sm:p-7 lg:p-7">
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

            const Icon = item.icon ? icons[item.icon] : null;

            return (
            <Link
  href={item.href}
  key={item.title}
  className="group flex min-h-[260px] flex-col border border-neutral-200 bg-white px-8 py-8 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#8fc9ed]"
>
{Icon && (
  <div className="mb-5 text-[#1693e6]">
    <Icon className={item.iconClassName ?? "h-10 w-10 -ml-1"} />
  </div>
)}

  {item.label && (
    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#7890a8]">
      {item.label}
    </p>
  )}

  <h3 className="mt-2 text-[20px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0a2540]">
    {item.title}
  </h3>

  <p className="mt-4 max-w-[30ch] text-[15px] leading-[1.6] text-[#425466]">
    {item.desc}
  </p>

  {item.signal && (
    <p className="mt-4 max-w-[32ch] text-[13px] leading-[1.55] text-[#7890a8]">
      {item.signal}
    </p>
  )}

  <div className="mt-auto pt-7 inline-flex items-center text-[14px] font-medium text-[#24415f] transition group-hover:text-[#0b8fdc]">
    <span>Preberi več</span>
    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </div>
</Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
