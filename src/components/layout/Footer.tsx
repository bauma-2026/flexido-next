import Container from "./Container";

const solutions = [
  {
    label: "Avtomatizacija proizvodnje",
    href: "/resitve/avtomatizacija-proizvodnje",
  },
  {
    label: "CNC stroji",
    href: "/resitve/avtomatizacija-cnc-strojev",
  },
  {
    label: "Brizganje plastike",
    href: "/resitve/brizganje-plastike",
  },
  {
    label: "Kolaborativni roboti",
    href: "/resitve/kolaborativni-roboti",
  },
  {
    label: "Manipulacija materiala",
    href: "/resitve/manipulacija",
  },
  {
    label: "Interna logistika",
    href: "/resitve/logistika",
  },
  {
    label: "Namenski sistemi",
    href: "/resitve/namenski-sistemi",
  },
];

const nav = [
  { label: "Proces", href: "/proces" },
    { label: "E-katalog", href: "/e-katalog" },
  { label: "O nas", href: "/o-nas" },
  { label: "Reference", href: "/reference" },
  { label: "Novice", href: "/novice" },
  { label: "Zaposlitev", href: "/zaposlitev" },
  { label: "Video", href: "/video" },
];

const trustLogos = [
  {
    href: "/razvojni-projekti",
    src: "/logos/trust/eu-regional-development-fund.webp",
    alt: "Evropska unija — Evropski sklad za regionalni razvoj",
    note: "Projekt sofinancirata Republika Slovenija in Evropska unija.",
  },
  {
    href: "https://www.flexido.eu/images/pdf/FLEXIDO-9001-CERT-Certificate-SLO-24092021.pdf",
    src: "/logos/trust/bureau-veritas-iso-9001.webp",
    alt: "ISO 9001 Bureau Veritas Certification",
    note: "ISO 9001 — Bureau Veritas Certification.",
  },
];
const legalLinks = [
  {
    label: "Pravno obvestilo",
    href: "/pravno-obvestilo",
  },
  {
    label: "Splošni prodajni pogoji",
    href: "/splosni-prodajni-pogoji",
  },
  {
    label: "Varstvo osebnih podatkov",
    href: "/varstvo-osebnih-podatkov",
  },
];
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:pb-12">
          {/* LEFT */}
          <div className="max-w-[560px]">
            <img
              src="/logo/flexido-footer.svg"
              alt="Flexido"
              className="h-9 w-auto"
            />

            <p className="mt-6 max-w-[52ch] text-[15px] leading-7 text-white/65">
              Urejamo in avtomatiziramo proizvodne procese — od posameznega
              stroja do povezanega toka materiala, ljudi in podatkov.
            </p>

            <p className="mt-5 text-[14px] leading-6 text-white/40">
              Od pregleda procesa do delujoče rešitve in podpore po zagonu.
            </p>

      {/* TRUST / OFFICIAL */}
<div className="mt-8 max-w-[620px] border-t border-white/10 pt-6">
  <div className="grid gap-3 sm:grid-cols-2">
    {trustLogos.map((logo) => (
      <a
        key={logo.src}
        href={logo.href}
        target={logo.href.startsWith("http") ? "_blank" : undefined}
        rel={logo.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex min-h-[92px] gap-4 border border-white/10 bg-white/[0.025] p-3.5 transition hover:border-white/20 hover:bg-white/[0.04]"
      >
        <div className="flex h-[50px] w-[116px] shrink-0 items-center justify-center bg-white px-3 py-2">
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-[36px] w-auto max-w-full object-contain"
          />
        </div>

        <p className="max-w-[17ch] text-[11px] leading-[1.45] text-white/42 transition group-hover:text-white/58">
          {logo.note}
        </p>
      </a>
    ))}
  </div>
</div>
</div>
         {/* RIGHT */}
<div className="grid gap-8 sm:grid-cols-3 lg:justify-self-end lg:gap-14">
  {/* SOLUTIONS */}
  <div>
    <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
      Rešitve
    </p>

    <nav className="mt-4 flex flex-col gap-3">
      {solutions.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-[15px] leading-[1.35] text-white/70 transition hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>

  {/* NAV */}
  <div>
    <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
      Navigacija
    </p>

    <nav className="mt-4 flex flex-col gap-3">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-[15px] leading-[1.35] text-white/70 transition hover:text-white"
        >
          {item.label}
        </a>
      ))}
    </nav>
  </div>

  {/* CONTACT */}
  <div>
    <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
      Kontakt
    </p>

    <div className="mt-4 space-y-4 text-[15px] leading-6 text-white/70">
      <div>
        <p className="text-white/40">E-pošta</p>
        <a
          href="mailto:info@flexido.eu"
          className="transition hover:text-white"
        >
          info@flexido.eu
        </a>
      </div>

      <div>
        <p className="text-white/40">Telefon</p>
        <a
          href="tel:+38659351100"
          className="transition hover:text-white"
        >
          0593 51100
        </a>
      </div>

      <a
        href="/kontakt"
        className="inline-flex rounded-full border border-white/15 px-4 py-2 text-[14px] font-medium text-white/70 transition hover:border-white/30 hover:text-white"
      >
        Kontakt →
      </a>
    </div>

   <div className="mt-9">
  <p className="text-[11px] uppercase tracking-[0.18em] text-white/32">
    Pravno
  </p>

  <nav className="mt-5 flex flex-col gap-3">
    {legalLinks.map((item) => (
      <a
        key={item.href}
        href={item.href}
        className="max-w-[18ch] text-[13px] leading-[1.45] text-white/45 transition hover:text-white/75"
      >
        {item.label}
      </a>
    ))}
  </nav>
</div>
  </div>
</div>  </div>        {/* BOTTOM */}
        <div className="flex flex-col gap-3 pt-6 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flexido</p>
          <p>Avtomatizacija proizvodnih procesov</p>
        </div>
      </Container>
    </footer>
  );
}