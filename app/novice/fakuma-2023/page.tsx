import EditorialPage from "@/components/templates/EditorialPage";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import ArticleNav from "@/components/blocks/editorial/ArticleNav";

function MobileDetails() {
  return (
    <div className="not-prose mt-10 rounded-[24px] border border-neutral-200 bg-white p-5 lg:hidden">
      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
        Podrobnosti
      </p>

      <div className="mt-5 divide-y divide-neutral-200">
        {[
          { label: "Kategorija", value: "Novice" },
          { label: "Dogodek", value: "Fakuma 2023" },
          { label: "Lokacija", value: "Nemčija" },
          { label: "Področje", value: "Predelava plastike / avtomatizacija" },
        ].map((item) => (
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
    </div>
  );
}

export default function Page() {
  return (
    <EditorialPage
      eyebrow="Novice"
      title="Fakuma 2023"
      date="25. oktober 2023"
      details={[
        { label: "Kategorija", value: "Novice" },
        { label: "Dogodek", value: "Fakuma 2023" },
        { label: "Lokacija", value: "Nemčija" },
        { label: "Področje", value: "Predelava plastike / avtomatizacija" },
      ]}
    >
      {/* HERO IMAGE */}
      <img
        src="/images/news/fakuma-2023.webp"
        alt="Fakuma 2023"
        className="mb-8 w-full rounded-[22px]"
      />

      {/* CONTENT */}
      <div className="space-y-6">
       <p className="text-[18px] leading-8 text-neutral-800">
  Med 17. in 21. oktobrom smo sodelovali na največjem mednarodnem sejmu
  za predelavo plastičnih mas in gume v Evropi.
</p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Predstavitev rešitev in produktov
        </h2>

        <p>
          Na sejmu smo predstavili naše storitve in produkte, ki prinašajo večjo
          učinkovitost, stabilnost procesov ter večjo konkurenčnost v proizvodnji.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Povezovanje in pregled trendov
        </h2>

        <p>
          Fakuma velja za enega ključnih industrijskih dogodkov v Evropi, kjer
          podjetja predstavljajo najnovejše tehnologije in trende na področju
          avtomatizacije, digitalizacije in predelave plastike.
        </p>

        <p>
          Udeležba nam omogoča neposreden stik s partnerji, izmenjavo znanja ter
          vpogled v prihodnje smeri razvoja industrije.
        </p>

        <p>
          Več si lahko ogledate v videu:
          <br />
          <a
            href="https://youtu.be/-kDQjzZmMco?feature=shared"
            target="_blank"
            className="text-skin-600 underline"
          >
            https://youtu.be/-kDQjzZmMco
          </a>
        </p>
      </div>

      <MobileDetails />

      {/* (NI CALLOUTA → ker original nima EU financiranja) */}


       <ArticleNav slug="fakuma-2023" />
    </EditorialPage>
  );
}