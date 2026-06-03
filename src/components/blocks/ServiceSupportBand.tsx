import Link from "next/link";
import Container from "@/components/layout/Container";

type ServiceSupportBandProps = {
  variant?: "light" | "soft";
};

export default function ServiceSupportBand({
  variant = "soft",
}: ServiceSupportBandProps) {
  const isSoft = variant === "soft";

  return (
    <section
      className={[
        "border-y border-neutral-200/70",
        isSoft ? "bg-neutral-50" : "bg-white",
      ].join(" ")}
    >
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
              Servis in podpora
            </p>

            <h2 className="mt-3 max-w-[15ch] text-3xl font-semibold leading-[0.98] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
              Podpora po zagonu.
            </h2>
          </div>

          <div className="max-w-[680px]">
            <p className="text-[15px] leading-7 text-neutral-600 sm:text-[16px]">
              Ko je sistem v proizvodnji, je pomembno, da podpora ostane hitra,
              pregledna in zanesljiva. Flexido nudi servisno in poprodajno
              podporo za stabilno delovanje opreme.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/servis"
                className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-[14px] font-medium text-white transition hover:bg-neutral-800"
              >
                Več o servisu →
              </Link>

              <Link
                href="/cenik"
                className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
              >
                Cenik servisa →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}