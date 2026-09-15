import Container from "@/components/layout/Container";

const trustItems = [
  {
    href: "/razvojni-projekti",
    src: "/logos/trust/eu-regional-development-fund.webp",
    alt: "Evropska unija — Evropski sklad za regionalni razvoj",
  },
  {
    href: "https://www.flexido.eu/images/pdf/FLEXIDO-9001-CERT-Certificate-SLO-24092021.pdf",
    src: "/logos/funding/bureau-veritas-iso9001.svg",
    alt: "ISO 9001 Bureau Veritas Certification",
    external: true,
  },
];

export default function TrustStrip() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <Container>
        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow">
            Certifikati in razvojni projekti
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {trustItems.map((item) => (
              <a
                key={item.src}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex h-10 items-center border border-neutral-200 bg-white px-3 transition hover:border-neutral-300"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-6 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}