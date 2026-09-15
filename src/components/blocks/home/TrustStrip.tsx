import Container from "@/components/layout/Container";
import type { HomeTrustItem } from "@/content/home/types";

const defaultLabel = "Certifikati in razvojni projekti";

const defaultItems: HomeTrustItem[] = [
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

type Props = {
  label?: string;
  items?: HomeTrustItem[];
};

export default function TrustStrip({
  label = defaultLabel,
  items = defaultItems,
}: Props) {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <Container>
        <div className="flex items-center justify-between gap-4 py-5 sm:gap-8 sm:py-[18px]">
          <p className="eyebrow">
            {label}
          </p>

          <div className="flex flex-wrap items-center gap-7 sm:gap-10">
            {items.map((item) => (
              <a
                key={item.src}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="opacity-90 transition hover:opacity-100"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-14 w-auto object-contain sm:h-10"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
