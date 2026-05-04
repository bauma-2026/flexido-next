import Container from "./Container";

const solutions = [
  { label: "CNC avtomatizacija", href: "/resitve/cnc" },
  { label: "Brizganje plastike", href: "/resitve/brizganje" },
  { label: "Manipulacija materiala", href: "/resitve/manipulacija" },
  { label: "Interna logistika", href: "/resitve/logistika" },
  { label: "Kolaborativni roboti", href: "/resitve/cobot" },
  { label: "Servis in podpora", href: "/resitve/servis" },
];

const nav = [
  { label: "Proces", href: "/proces" },
  { label: "O nas", href: "/o-nas" },
  { label: "Reference", href: "/reference" },
  { label: "Novice", href: "/novice" },
  { label: "Zaposlitev", href: "/zaposlitev" },
  { label: "Video", href: "/video" }, // 👉 tukaj
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:pb-12">
          
          {/* LEFT */}
          <div className="max-w-[560px]">
            <img
              src="/logo/flexido-footer.svg"
              alt="Flexido"
              className="h-9 w-auto"
            />

            <p className="mt-6 max-w-[52ch] text-[15px] leading-7 text-white/65">
              Urejamo in avtomatiziramo procese — da proizvodnja teče stabilno,
              brez zastojev in improvizacije.
            </p>

            <p className="mt-5 text-[14px] leading-6 text-white/40">
              Od prve analize do delujočega sistema in podpore po zagonu.
            </p>
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
                    className="text-[15px] text-white/70 transition hover:text-white"
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
                    className="text-[15px] text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* LANGUAGE */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                Jezik
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="/sl"
                  className="rounded-full border border-white/15 px-4 py-2 text-[14px] text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  SL
                </a>
                <a
                  href="/en"
                  className="rounded-full border border-white/15 px-4 py-2 text-[14px] text-white/70 transition hover:border-white/30 hover:text-white"
                >
                  EN
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 pt-6 text-[13px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flexido</p>
          <p>Avtomatizacija proizvodnih procesov</p>
        </div>
      </Container>
    </footer>
  );
}