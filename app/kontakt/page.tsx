import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

const contactDetails = [
  {
    label: "E-pošta",
    value: "info@flexido.eu",
    href: "mailto:info@flexido.eu",
  },
  {
    label: "Telefon",
    value: "0593 51100",
    href: "tel:+38659351100",
  },
];

const companyDetails = [
  {
    label: "Podjetje",
    value: "FLEXIDO d.o.o.",
  },
  {
    label: "Sedež",
    value: "Veliki Otok 44D, 6230 Postojna, Slovenija",
  },
  {
    label: "Poslovna enota",
    value: "Poslovna cona A34, 4208 Šenčur, Slovenija",
  },
];

const topics = [
  "avtomatizacija proizvodnje",
  "CNC avtomatizacija",
  "brizganje plastike",
  "manipulacija materiala",
  "interna logistika",
  "kolaborativni roboti",
  "servis in podpora",
];

export default function Page() {
  return (
    <>
      <Header sticky={false} />

      <main className="bg-white text-neutral-950">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.025),transparent)]" />

          <Container className="relative py-20 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div className="max-w-[720px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kontakt
                </p>

                <h1 className="mt-4 max-w-[13ch] text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-neutral-950 sm:text-6xl lg:text-[68px]">
                  Poglejmo vaš proces
                </h1>

                <p className="mt-6 max-w-[56ch] text-[17px] leading-8 text-neutral-600">
                  Opišite, kje se v proizvodnji pojavljajo zastoji, ročni koraki
                  ali nejasen tok materiala. Skupaj preverimo, kateri del
                  procesa ima največ smisla avtomatizirati.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="mailto:info@flexido.eu">
                    Pošljite povpraševanje →
                  </Button>

                  <a
                    href="tel:+38659351100"
                    className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-6 py-3 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
                  >
                    Pokličite →
                  </a>
                </div>
              </div>

              <div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-7 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
                  Kako začeti
                </p>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      title: "1. Opišite proces",
                      desc: "Kje nastaja čakanje, ročno delo ali nestabilen tok?",
                    },
                    {
                      title: "2. Dodajte kontekst",
                      desc: "Kateri stroji, faze, kosi ali omejitve so pomembni?",
                    },
                    {
                      title: "3. Dogovorimo naslednji korak",
                      desc: "Na osnovi procesa ocenimo, kaj ima smisel preveriti naprej.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="border-b border-neutral-200 pb-5 last:border-b-0 last:pb-0"
                    >
                      <h2 className="text-[16px] font-semibold text-neutral-950">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CONTACT DETAILS */}
        <Section className="bg-white">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="max-w-[520px]">
                <p className="eyebrow">Podatki</p>

                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  Najhitrejši način je kratek opis procesa.
                </h2>

                <p className="mt-5 text-[16px] leading-7 text-neutral-600">
                  Ni treba imeti pripravljene tehnične specifikacije. Dovolj je,
                  da opišete problem, proizvodni korak ali del procesa, kjer se
                  pojavlja zastoj.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {contactDetails.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-[24px] border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                      {item.label}
                    </p>

                    <p className="mt-3 text-[18px] font-semibold tracking-[-0.02em] text-neutral-950">
                      {item.value}
                    </p>
                  </a>
                ))}

                <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-6 sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Podjetje
                  </p>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {companyDetails.map((item) => (
                      <div key={item.label}>
                        <p className="text-[13px] font-medium text-neutral-950">
                          {item.label}
                        </p>

                        <p className="mt-1 text-[14px] leading-6 text-neutral-600">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[24px] border border-neutral-200 bg-neutral-50 p-6 sm:col-span-2">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-400">
                    Področja
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-[13px] font-medium text-neutral-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FINAL */}
        <section className="bg-neutral-950 text-white">
          <Container className="py-16 sm:py-20 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[680px]">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/45">
                  Naslednji korak
                </p>

                <h2 className="mt-4 max-w-[14ch] text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">
                  Pošljite kratek opis procesa.
                </h2>

                <p className="mt-5 max-w-[54ch] text-[16px] leading-7 text-white/65">
                  Pogledamo, kje nastajajo zastoji, ročni koraki ali nejasen tok
                  — in ali ima avtomatizacija tam smiseln učinek.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a
                  href="mailto:info@flexido.eu"
                  className="inline-flex w-fit items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
                >
                  info@flexido.eu →
                </a>

                <a
                  href="tel:+38659351100"
                  className="inline-flex w-fit items-center rounded-full border border-white/15 px-6 py-3 text-[14px] font-medium text-white/75 transition hover:border-white/30 hover:text-white"
                >
                  0593 51100 →
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}