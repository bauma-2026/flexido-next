import Container from "@/components/layout/Container";

const trustItems = [
  {
    href: "/razvojni-projekti",
    src: "/logos/trust/eu-regional-development-fund.webp",
    alt: "Evropska unija — Evropski sklad za regionalni razvoj",
  },
  {
    href: "https://www.flexido.eu/images/pdf/FLEXIDO-9001-CERT-Certificate-SLO-24092021.pdf",
    src: "/logos/trust/bureau-veritas-iso-9001.webp",
    alt: "ISO 9001 Bureau Veritas Certification",
    external: true,
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <Container>
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
            Certifikati in razvojni projekti
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {trustItems.map((item) => (
          <a
  key={item.src}
  href={item.href}
  target={item.external ? "_blank" : undefined}
  rel={item.external ? "noopener noreferrer" : undefined}
  className="flex h-11 items-center border border-neutral-200 bg-white px-4 transition hover:border-neutral-300"
>
  <img
    src={item.src}
    alt={item.alt}
    className="h-7 w-auto object-contain"
  />
</a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}