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
          { label: "Produkt", value: "FLEX 7 IMM" },
          { label: "Tip rešitve", value: "Robotska celica za IMM stroje" },
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
      title="FLEX 7 IMM predstavitev"
      date="08. marec 2022"
      details={[
        { label: "Kategorija", value: "Novice" },
        { label: "Produkt", value: "FLEX 7 IMM" },
        { label: "Tip rešitve", value: "Robotska celica za IMM stroje" },
        { label: "Področje", value: "Avtomatizacija brizganja plastike" },
      ]}
    >
      {/* HERO IMAGE */}
      <img
        src="/images/news/flex-7-imm-predstavitev.webp"
        alt="FLEX 7 IMM"
     className="mb-8 w-full rounded-[22px] border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
      />

      {/* CONTENT */}
      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          FLEX 7 IMM je odlična alternativa tradicionalnim rešitvam
          avtomatizacije z linearnimi manipulatorji, saj omogoča večjo
          fleksibilnost in širši nabor operacij.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Več kot samo odvzem kosov
        </h2>

        <p>
          Rešitev vključuje integrirane 6-osne robote, ki poleg osnovne
          funkcije odvzemanja kosov omogočajo tudi dodatne operacije.
        </p>

        <p>
          Med njimi so odstranjevanje odlivka, preverjanje zalitosti kosov,
          kontrola prisotnosti srha ter pregled prelitij na brizgancih.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Nadzor kakovosti in procesov
        </h2>

        <p>
          Sistem omogoča zaznavanje površinskih napak ter zagotavlja bolj
          stabilen in ponovljiv proizvodni proces.
        </p>

        <p>
          Zaradi fleksibilnosti robotske celice je rešitev primerna za
          podjetja, ki želijo nadgraditi obstoječe procese brez kompleksnih
          posegov v proizvodnjo.
        </p>
      </div>

      <MobileDetails />

        <ArticleNav slug="flex-7-imm-predstavitev" />
    </EditorialPage>
  );
}