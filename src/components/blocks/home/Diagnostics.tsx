import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import {
  CncMachineIcon,
  ManipulationIcon,
  MaterialFlowIcon,
  CustomSystemIcon,
} from "@/components/icons/FlexidoProcessIcons";

const items = [
  {
    number: "01",
    title: "Material čaka",
    desc: "Kosi niso pravočasno pri naslednji operaciji.",
    Icon: MaterialFlowIcon,
  },
  {
    number: "02",
    title: "Operater prestavlja",
    desc: "Ročni premiki jemljejo čas in ustvarjajo zastoje.",
    Icon: ManipulationIcon,
    iconClassName: "h-10 w-10",
  },
  {
    number: "03",
    title: "Stroj dela, proces stoji",
    desc: "Posamezen stroj deluje, tok med fazami pa se prekinja.",
    Icon: CncMachineIcon,
  },
  {
    number: "04",
    title: "Podatki niso povezani",
    desc: "Oprema, postaje in sistemi ne delujejo kot enoten proces.",
    Icon: CustomSystemIcon,
  },
];

export default function Diagnostics() {
  return (
    <Section
      variant="tight"
      className="bg-white !pb-16 !pt-12 sm:!pt-14 lg:!pt-16"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* LEFT */}
          <div>
            <p className="eyebrow">Kaj rešujemo</p>

            <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] text-[#0a2540] sm:text-4xl lg:text-5xl">
              Kje proces
              <br />
              izgublja ritem
            </h2>
          </div>

          {/* RIGHT */}
          <div>
            <p className="max-w-[62ch] text-[18px] leading-8 text-[#425466]">
              Proces se redko ustavi zaradi enega samega stroja. Največ izgub
              nastane med koraki — pri nalaganju, odvzemu, prestavljanju,
              čakanju ali ročnem delu.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {items.map((item) => {
                const Icon = item.Icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[20px] border border-neutral-200 bg-white px-5 py-4 shadow-[0_12px_34px_rgba(15,23,42,0.035)]"
                  >
                    <div className="flex items-start gap-4">
                     <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#1693e6]">
 <Icon className={item.iconClassName ?? "h-8 w-8"} />
</div>
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#0ea5e9]">
                          {item.number}
                        </p>

                        <h3 className="mt-1 text-[15px] font-semibold tracking-[-0.02em] text-[#0a2540]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[13px] leading-6 text-[#425466]">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}