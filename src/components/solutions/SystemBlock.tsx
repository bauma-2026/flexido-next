import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

type SystemItem = {
  title: string;
  desc?: string;
  image: string;
};

type SystemBlockProps = {
  eyebrow?: string;
  title: string;
  desc: string;
  note?: string;
  mainImage: {
    src: string;
    alt: string;
  };
  mainImageFit?: "cover" | "contain";
  items?: SystemItem[];
  itemsLabel?: string;
  itemsAspect?: "square" | "wide";
};

export default function SystemBlock({
  eyebrow = "Sistem",
  title,
  desc,
  note,
  mainImage,
  mainImageFit = "cover",
  items = [],
  itemsLabel = "Možne izvedbe sistema",
  itemsAspect = "square",
}: SystemBlockProps) {
  const itemImageAspect =
    itemsAspect === "wide" ? "aspect-[16/10]" : "aspect-square";

  return (
    <Section id="sistem" className="scroll-mt-24 bg-[#f6f9fc]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* LEFT */}
          <div className="max-w-[560px]">
            <p className="eyebrow">{eyebrow}</p>

            <h2 className="text-section-title mt-3">
              {title}
            </h2>

            <p className="mt-5 text-[16px] leading-7 text-neutral-600">
              {desc}
            </p>

            {note && (
              <p className="mt-5 text-[15px] leading-7 text-neutral-500">
                {note}
              </p>
            )}
          </div>

          {/* RIGHT */}
          <div className="overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-neutral-100">
            <img
              src={mainImage.src}
              alt={mainImage.alt}
              className={`h-full w-full ${
                mainImageFit === "contain" ? "object-contain" : "object-cover"
              }`}
            />
          </div>
        </div>

        {items.length > 0 && (
          <div className="mt-12">
            <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400">
              {itemsLabel}
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <div key={item.title} className="group">
                  <div
                    className={`relative ${itemImageAspect} overflow-hidden rounded-[var(--radius-panel)] border border-neutral-200 bg-neutral-100`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain p-4 opacity-85 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f6f9fc]/30 via-transparent to-transparent" />
                  </div>

                  <div className="mt-3">
                    <h3 className="text-[13px] font-medium text-neutral-950">
                      {item.title}
                    </h3>

                    {item.desc && (
                      <p className="mt-1 max-w-[28ch] text-[12px] leading-5 text-neutral-500">
                        {item.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
