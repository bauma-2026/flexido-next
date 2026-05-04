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
          { label: "Projekt", value: "Poly Digit" },
          { label: "Partnerji", value: "POLYCOM d.o.o. / LOTRIČ Meroslovje d.o.o." },
          { label: "Področje", value: "Digitalna preobrazba" },
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
      title="Končan projekt digitalne preobrazbe Polydigit"
      date="20. junij 2024"
      details={[
        { label: "Kategorija", value: "Novice" },
        { label: "Projekt", value: "Poly Digit" },
        { label: "Partnerji", value: "POLYCOM d.o.o. / LOTRIČ Meroslovje d.o.o." },
        { label: "Področje", value: "Digitalna preobrazba" },
      ]}
    >
      {/* HERO IMAGE */}
      <img
        src="/images/news/digitalna-transformacija-podjetja-flexido.webp"
        alt="Digitalna transformacija podjetja Flexido"
        className="mb-8 w-full rounded-[22px]"
      />

      {/* CONTENT */}
      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          Podjetje Flexido je skupaj s konzorcijskima partnerjema POLYCOM
          d.o.o. in LOTRIČ Meroslovje d.o.o. uspešno zaključilo sodelovanje
          na projektu digitalne preobrazbe Poly Digit.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Izboljšanje digitaliziranosti procesov
        </h2>

        <p>
          V okviru projekta je podjetje Polycom vpeljalo nove tehnologije in
          pristope v šestih poslovnih funkcijah, skupaj pa smo izboljšali
          stopnjo digitaliziranosti pri konzorcijskih partnerjih.
        </p>

        <p>
          Vpeljane digitalne tehnologije se medsebojno dopolnjujejo in
          tvorijo celovit sistem za bolj pregledno, učinkovito in povezano
          delovanje.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Večja digitalna pismenost in boljši procesi
        </h2>

        <p>
          Z uporabo razvitih in uvedenih tehnologij smo dosegli zastavljene
          cilje projekta, izboljšali raven digitalizacije ter dvignili stopnjo
          digitalne pismenosti zaposlenih pri vseh konzorcijskih partnerjih.
        </p>
      </div>

      <MobileDetails />

      {/* CALLOUT */}
      <div className="not-prose mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
        Projekt je sofinanciran iz Načrta za okrevanje in odpornost.
      </div>

      


        <ArticleNav slug="koncan-projekt-digitalne-preobrazbe-polydigit" />
    </EditorialPage>
  );
}