import EditorialPage from "@/components/templates/EditorialPage";
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
          { label: "Tip rešitve", value: "Avtomatsko oblikovanje in lepljenje" },
          { label: "Uporaba", value: "Kartonska embalaža" },
          { label: "Področje", value: "Avtomatizacija pakiranja" },
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
      title="Avtomatsko oblikovanje in lepljenje škatel"
      date="08. marec 2022"
      details={[
        { label: "Kategorija", value: "Novice" },
        { label: "Tip rešitve", value: "Avtomatsko oblikovanje in lepljenje" },
        { label: "Uporaba", value: "Kartonska embalaža" },
        { label: "Področje", value: "Avtomatizacija pakiranja" },
      ]}
    >
      {/* HERO IMAGE */}
      <img
        src="/images/news/avtomatsko-oblikovanje-in-lepljenje-skatel.webp"
        alt="Avtomatsko oblikovanje in lepljenje škatel"
        className="mb-8 w-full rounded-[22px] border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
      />

      {/* CONTENT */}
      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          Za naročnika smo pripravili rešitev za avtomatizacijo oblikovanja in
          lepljenja kartonske embalaže.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Avtomatizacija zahtevnega procesa
        </h2>

        <p>
          Sama izdelava embalaže je bila zahtevna zaradi različnih in tudi
          nepredvidljivih variabil, zato je bila potrebna rešitev, ki omogoča
          bolj stabilen in nadzorovan potek dela.
        </p>

        <p>
          Sistem pomaga zmanjšati ročno delo, izboljšati ponovljivost procesa
          in zagotoviti bolj predvidljivo pripravo embalaže.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Stabilnejši potek pakiranja
        </h2>

        <p>
          Rešitev je primerna za proizvodna okolja, kjer sta pomembni
          zanesljivost procesa in prilagodljivost pri delu z embalažo.
        </p>
      </div>

      <MobileDetails />

    
      <ArticleNav slug="avtomatsko-oblikovanje-in-lepljenje-skatel" />
    </EditorialPage>
  );
}