import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

type ServiceSupportBandProps = {
  variant?: "light" | "soft";
};

export default function ServiceSupportBand({
  variant = "soft",
}: ServiceSupportBandProps) {
  const isSoft = variant === "soft";

  return (
    <Section
      className={[
        "border-y border-neutral-200/70",
        isSoft ? "bg-neutral-50" : "bg-white",
      ].join(" ")}
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">
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
              <Button href="/servis">Več o servisu →</Button>

              <Button href="/cenik" variant="secondary">
                Cenik servisa →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
