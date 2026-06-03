import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { flexidoSystems } from "@/data/flexido-systems";

const systemLinks: Record<string, string> = {
  "flex-7-cnc": "/standardne-celice/cnc",
  "flex-7-imm": "/standardne-celice/imm",
  "flex-25-50": "/resitve/namenski-sistemi",
  tmx: "/resitve/kolaborativni-roboti",
  middleware: "/resitve/logistika",
};

const visibleSystems = flexidoSystems.filter((system) =>
  ["flex-7-cnc", "flex-7-imm", "flex-25-50", "tmx", "middleware"].includes(
    system.slug
  )
);

export default function ProductProof() {
  return (
    <Section className="border-y border-neutral-200 bg-[#f6f9fc]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Sistemi</p>

            <h2 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Sistemi, ki jih prilagodimo procesu.
            </h2>
          </div>

          <div>
            <p className="max-w-[64ch] text-[16px] leading-7 text-neutral-600">
              Standardne robotske celice, mobilne platforme in povezovalni
              sistemi so osnova za rešitve, ki jih prilagodimo proizvodnji,
              kosom, prostoru in obstoječi opremi.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/e-katalog"
                className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
              >
                Poglej e-katalog →
              </Link>

              <Link
                href="/standardne-celice"
                className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-[14px] font-medium text-neutral-800 transition hover:border-neutral-300"
              >
                Standardne celice →
              </Link>
            </div>
          </div>
        </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
  {visibleSystems.map((system, index) => (
    <Link
      key={system.slug}
      href={systemLinks[system.slug] ?? "/e-katalog"}
      className={`group overflow-hidden rounded-[26px] border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(15,23,42,0.08)] ${
        index < 3 ? "lg:col-span-2" : "lg:col-span-3"
      }`}
    >
   <div className="relative aspect-[16/11] overflow-hidden bg-neutral-100 sm:aspect-[4/3]">
        <Image
          src={system.image}
          alt={system.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

    <div className="p-5 sm:p-6">
  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-400 sm:text-[11px]">
    {system.category}
  </p>

  <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.04em] text-neutral-950 sm:text-[22px]">
    {system.name}
  </h3>

  <p className="mt-3 text-[14px] leading-6 text-neutral-600 sm:mt-4">
    {system.shortDescription}
  </p>

  <div className="mt-5 hidden space-y-2 sm:block">
    {system.highlights.slice(0, 3).map((item) => (
      <p key={item} className="text-[13px] leading-5 text-neutral-500">
        — {item}
      </p>
    ))}
  </div>

  <p className="mt-5 text-[14px] font-medium text-neutral-500 transition group-hover:text-neutral-950 sm:mt-7">
    Poglej sistem →
  </p>
</div>
    </Link>
  ))}
</div>
      </Container>
    </Section>
  );
}