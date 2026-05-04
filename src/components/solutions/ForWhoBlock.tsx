import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type Item = {
  title: string;
  desc: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  items: Item[];
};

export default function ForWhoBlock({
  id,
  eyebrow = "Za koga",
  title,
  desc,
  items,
}: Props){
  return (
<Section id={id} className="scroll-mt-24 bg-[#f6f9fc]">
      <Container>
        {/* HEADER */}
        <div className="max-w-[640px]">
          <p className="eyebrow">{eyebrow}</p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            {title}
          </h2>

          {desc && (
            <p className="mt-5 text-[16px] leading-7 text-neutral-600">
              {desc}
            </p>
          )}
        </div>

        {/* GRID */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] border border-neutral-200 bg-white p-5"
            >
              <h3 className="text-[15px] font-semibold text-neutral-950">
                {item.title}
              </h3>

              <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}