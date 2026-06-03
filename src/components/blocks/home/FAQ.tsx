"use client";

import { useState } from "react";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

export default function FAQ() {
  const items = [
    {
      q: "Kdaj je avtomatizacija procesa smiselna?",
      a: "Takrat, ko se isti zastoj ponavlja vsak dan — ročno nalaganje, čakanje materiala, nestabilen cikel ali preveč dela med posameznimi fazami.",
    },
    {
      q: "Ali moramo zamenjati obstoječe stroje?",
      a: "Ne nujno. Rešitev praviloma prilagodimo obstoječim strojem, prostoru in načinu dela, kjer je to tehnično smiselno.",
    },
    {
      q: "Ali je sistem uporaben za različne izdelke?",
      a: "Da. Pri zasnovi upoštevamo tipe izdelkov, serije in spremembe v proizvodnji, da sistem ni vezan samo na en primer.",
    },
    {
      q: "Kako se začne projekt?",
      a: "Začnemo s pregledom procesa. Pogledamo, kje nastajajo zastoji, kaj se ponavlja in kateri del avtomatizacije bi imel največji učinek.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faq"
      variant="default"
      className="border-b border-neutral-200 bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* LEFT */}
          <div>
            <p className="eyebrow">FAQ</p>

          <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-[46px]">
  Najpogostejša vprašanja
</h2>

            <p className="mt-6 max-w-[46ch] text-[17px] leading-8 text-neutral-600">
              Kratki odgovori na vprašanja, ki se običajno pojavijo pred
              začetkom avtomatizacije procesa.
            </p>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-2 shadow-[0_18px_60px_rgba(15,23,42,0.05)]">
            {items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.q}
                  className="border-b border-neutral-200 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                   className="group flex w-full items-start justify-between gap-6 rounded-[22px] px-5 py-4 text-left transition hover:bg-white sm:px-6"
                    aria-expanded={isOpen}
                  >
                   <span className="text-[16px] font-semibold leading-snug tracking-[-0.02em] text-neutral-900 sm:text-[17px]">
  {item.q}
</span>

                  <span
  className={[
    "relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition",
    isOpen
      ? "border-[#0ea5e9]/20 bg-[#0ea5e9]/10 text-[#0ea5e9]"
      : "border-neutral-200 bg-white text-neutral-500 group-hover:border-neutral-300",
  ].join(" ")}
  aria-hidden="true"
>
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[54%] text-[20px] leading-none">
    {isOpen ? "−" : "+"}
  </span>
</span>
                  </button>

                  <div
                    className={[
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0",
                    ].join(" ")}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 pr-16 text-[15px] leading-7 text-neutral-600 sm:px-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}