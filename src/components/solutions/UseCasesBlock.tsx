import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type UseCase = {
  title: string;
  desc: string;
};

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  desc?: string;
  cases: UseCase[];
};

export default function UseCasesBlock({
  id,
  eyebrow = "Primeri uporabe",
  title,
  desc,
  cases,
}: Props) {
  return (
 <Section id={id} className="scroll-mt-24">
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
          {cases.map((item) => (
            <div
              key={item.title}
              className="rounded-[18px] border border-neutral-200 bg-neutral-50 p-5 transition hover:bg-white hover:shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
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