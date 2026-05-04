import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

type DetailItem = {
  label: string;
  value: string;
};

type Props = {
  eyebrow?: string;
  title: string;
  date?: string;
  details?: DetailItem[];
  children: React.ReactNode;
};

export default function EditorialPage({
  eyebrow,
  title,
  date,
  details = [],
  children,
}: Props) {
  return (
    <>
      <Header />

    <main className="bg-white text-neutral-950">
  <section className="relative border-b border-neutral-200/60 bg-white">
    
    {/* subtle bg layer */}
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.02),transparent)]" />

    <Container className="relative py-10 sm:py-12">
            <a
              href="/novice"
              className="text-[13px] text-neutral-500 transition hover:text-neutral-950"
            >
              ← Nazaj na novice
            </a>

          <div className="mt-8 max-w-[760px]">
  {eyebrow && (
    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
      {eyebrow}
    </p>
  )}

  <h1 className="mt-3 max-w-[18ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-[52px]">
    {title}
  </h1>

  {date && (
    <p className="mt-4 text-[14px] text-neutral-500">{date}</p>
  )}
</div>
          </Container>
        </section>

    <section className="bg-white py-10 sm:py-14 lg:py-16">
  <Container>
    <div className="grid gap-10 lg:grid-cols-[minmax(0,760px)_280px] lg:items-start lg:gap-14">
      <article
        className="prose prose-neutral max-w-none
        prose-p:leading-7
        prose-p:text-neutral-700
        prose-h2:mt-10 prose-h2:text-2xl prose-h2:font-semibold
        prose-h3:mt-8 prose-h3:text-xl prose-h3:font-semibold
        prose-img:rounded-2xl
        prose-strong:text-neutral-950"
      >
        {children}
      </article>

      {details.length > 0 && (
      <aside className="hidden rounded-[24px] border border-neutral-200 bg-white p-6 lg:sticky lg:top-24 lg:block">
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
            Podrobnosti
          </p>

          <div className="mt-5 divide-y divide-neutral-200">
            {details.map((item) => (
              <div key={item.label} className="py-4 first:pt-0">
                <p className="text-[13px] font-medium text-neutral-950">
                  {item.label}
                </p>
                <p className="mt-1 text-[14px] leading-6 text-neutral-600">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </aside>
      )}
    </div>
  </Container>
</section>
      </main>

      <Footer />
    </>
  );
}