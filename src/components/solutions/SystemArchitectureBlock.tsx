import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type Layer = {
  title: string;
  items: string[];
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  desc: string;
  layers: Layer[];
};

export default function SystemArchitectureBlock({
  id = "arhitektura",
  eyebrow = "Arhitektura",
  title,
  desc,
  layers,
}: Props) {
  return (
    <Section id={id} className="bg-white">
      <Container>
        {/* HEADER */}
        <div className="max-w-[720px]">
          <p className="eyebrow">{eyebrow}</p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            {title}
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-neutral-600">
            {desc}
          </p>
        </div>

        {/* LAYERS */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="relative rounded-[20px] border border-neutral-200 bg-neutral-50 p-5"
            >
              {/* LINE (flow feel) */}
              <div className="pointer-events-none absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-neutral-200" />

              <h3 className="text-[13px] font-medium text-neutral-950">
                {layer.title}
              </h3>

              <ul className="mt-3 flex flex-col gap-2">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] leading-5 text-neutral-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}