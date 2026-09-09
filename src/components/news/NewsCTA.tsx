export default function NewsCTA() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-[28px] bg-[var(--color-dark-band)]">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/flexido/legacy/s-3.jpg.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark-band)] via-[var(--color-dark-band)]/60 to-transparent" />

      <div className="relative p-8 sm:p-10 lg:p-12">
        <p className="eyebrow-on-dark">Naslednji korak</p>
        <h2 className="mt-4 max-w-[16ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] text-white sm:text-4xl">
          Poglejmo vaš proces.
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-7 text-white/75 sm:text-[16px]">
          Če želite preveriti, kako bi podobna rešitev delovala v vašem procesu,
          nam pošljite osnovne informacije o stroju, kosih in trenutnem toku dela.
        </p>
        <div className="mt-7">
          <a
            href="mailto:info@flexido.eu"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-[14px] font-medium text-neutral-950 transition hover:bg-white/90"
          >
            Pošljite povpraševanje <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
