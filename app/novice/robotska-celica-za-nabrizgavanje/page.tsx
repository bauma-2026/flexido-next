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
          { label: "Tip rešitve", value: "Robotska celica" },
          { label: "Uporaba", value: "Nabrizgavanje kosov" },
          { label: "Področje", value: "Avtomatizacija brizganja plastike" },
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
      title="Robotska celica za nabrizgavanje"
      date="08. marec 2022"
      details={[
        { label: "Kategorija", value: "Novice" },
        { label: "Tip rešitve", value: "Robotska celica" },
        { label: "Uporaba", value: "Nabrizgavanje kosov" },
        { label: "Področje", value: "Avtomatizacija brizganja plastike" },
      ]}
    >
      {/* HERO IMAGE */}
      <img
        src="/images/news/robotska-celica-za-nabrizgavanje.webp"
        alt="Robotska celica za nabrizgavanje"
        className="mb-8 w-full rounded-[22px] "
      />

      {/* CONTENT */}
      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          Za naročnika smo uspešno avtomatizirali nabrizgavanje kosov in
          optimizirali zahtevano količino kosov v proizvodnem procesu.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Večja proizvodna zmogljivost
        </h2>

        <p>
          Z uvedeno rešitvijo naročnik danes izdeluje skoraj tretjino več kosov,
          kot je bilo prvotno predvideno.
        </p>

        <p>
          Robotska celica omogoča bolj stabilen potek dela, manj odvisnosti od
          ročnega poseganja v proces in bolj predvidljivo proizvodnjo.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Avtomatizacija procesa nabrizgavanja
        </h2>

        <p>
          Rešitev je zasnovana za učinkovito manipulacijo kosov v procesu
          brizganja plastike, kjer so pomembni ponovljivost, hitrost in nadzor
          kakovosti.
        </p>
      </div>

      <MobileDetails />

    
          <ArticleNav slug="robotska-celica-za-nabrizgavanje" />
    </EditorialPage>
  );
}