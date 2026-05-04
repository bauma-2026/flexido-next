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
          { label: "Tip rešitve", value: "Vhodno-izhodna tračna proga" },
          { label: "Uporaba", value: "Manipulacija KLT zabojev" },
          { label: "Področje", value: "Avtomatizacija CNC procesov" },
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
      title="Vhodno-izhodna tračna proga"
      date="29. maj 2022"
      details={[
        { label: "Kategorija", value: "Novice" },
        { label: "Tip rešitve", value: "Vhodno-izhodna tračna proga" },
        { label: "Uporaba", value: "Manipulacija KLT zabojev" },
        { label: "Področje", value: "Avtomatizacija CNC procesov" },
      ]}
    >
      {/* HERO IMAGE */}
      <img
        src="/images/news/vhodno-izhodna-tracna-proga.webp"
        alt="Vhodno-izhodna tračna proga"
        className="mb-8 w-full rounded-[22px]"
      />

      {/* CONTENT */}
      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          Za povečanje avtonomije delovanja kolaborativne celice v kombinaciji
          z različnimi CNC stroji smo pripravili vhodno-izhodno tračno progo,
          ki je prirejena za manipulacijo s standardnimi KLT zaboji.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Avtonomno obratovanje celice
        </h2>

        <p>
          V kombinaciji z integrirano kamero je TM robot primerna rešitev za
          samostojno neprekinjeno obratovanje z različnimi obdelovanci.
        </p>

        <p>
          Faze obdelav se lahko priredijo iz vnaprej določenega zaporedja,
          zato je rešitev uporabna pri procesih, kjer je pomembna stabilna
          manipulacija materiala med obdelavo.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Kapaciteta sistema
        </h2>

        <p>
          Rešitev omogoča uporabo petih vhodnih in petih izhodnih KLT zabojev
          dimenzije 600 × 400 mm.
        </p>

        <p>
          Za več informacij nam pišite na{" "}
          <a
            href="mailto:info@flexido.eu"
            className="text-skin-600 underline"
          >
            info@flexido.eu
          </a>
          .
        </p>
      </div>

      <MobileDetails />


    <ArticleNav slug="vhodno-izhodna-tracna-proga" />
    </EditorialPage>
  );
}