import EditorialPage from "@/components/templates/EditorialPage";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import DevelopmentProjectNav from "@/components/blocks/editorial/DevelopmentProjectNav";

function MobileDetails() {
  const details = [
    { label: "Kategorija", value: "Razvojni projekti" },
    { label: "Projekt", value: "SmartIM" },
    { label: "Program", value: "JR Digit NOO" },
    { label: "Vrednost", value: "5.306.454,00 EUR" },
    { label: "Sofinanciranje", value: "2.199.300,98 EUR" },
  ];

  return (
    <div className="not-prose mt-10 rounded-[24px] border border-neutral-200 bg-white p-5 lg:hidden">
      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
        Podrobnosti
      </p>

      <div className="mt-5 divide-y divide-neutral-200">
        {details.map((item) => (
          <div key={item.label} className="py-4 first:pt-0">
            <p className="text-[13px] font-medium text-neutral-950">{item.label}</p>
            <p className="mt-1 text-[14px] leading-6 text-neutral-600">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const details = [
    { label: "Kategorija", value: "Razvojni projekti" },
    { label: "Projekt", value: "SmartIM" },
    { label: "Program", value: "JR Digit NOO" },
    { label: "Vrednost", value: "5.306.454,00 EUR" },
    { label: "Sofinanciranje", value: "2.199.300,98 EUR" },
  ];

  return (
    <EditorialPage
      eyebrow="Razvojni projekti"
      title="Naziv projekta: SmartIM – Pametna tovarna Iskra Mehanizmi"
      date="2022"
      details={details}
    >
      <DevelopmentProjectNav />

      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          Namen projekta je razviti in implementirati koncept pametne tovarne
          Iskra Mehanizmi.
        </p>

        <p>
          Za vzpostavitev pametne tovarne bomo digitalno preobrazili procese od
          nabave do proizvodnje in logistike ter vpeljali napredne metode in
          tehnologije robotizacije, umetne inteligence, komunikacije stroj-stroj
          ter izobrazili kadre za rokovanje s programsko opremo.
        </p>

        <p>
          Končni cilj projekta je razvijati pametne izdelke s pametno opremo ter
          pametnim vodenjem.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Rezultat projekta
        </h2>

        <p>
          Rezultat projekta bo vzpostavljena pametna tovarna SmartIM z
          digitalnimi procesi vodenja, upravljanja proizvodnje in logistike ter
          novimi metodami prodaje.
        </p>

        <p>
          Projektne aktivnosti vključujejo razvoj digitalne strategije, ki bo
          naslovila celotno verigo vrednosti in procese pametne tovarne,
          tehnološko krepitev za razvoj rešitev nad stanjem trenutne tehnike ter
          implementacijo rešitev v realno okolje.
        </p>

        <p>
          V sklopu projekta bodo izvedena usposabljanja zaposlenih, ki bodo
          pridobivali ustrezne digitalne kompetence in delovali kot osrednji člen
          pametne tovarne.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Konzorcijski partnerji
        </h2>

        <ul className="list-disc space-y-2 pl-5 text-neutral-700">
          <li>ISKRA MEHANIZMI d.o.o.</li>
          <li>GENIS d.o.o.</li>
          <li>COMCOM d.o.o.</li>
          <li>Pareto d.o.o.</li>
          <li>FLEXIDO d.o.o.</li>
        </ul>

        <p>
          Operacija je bila za sofinanciranje izbrana na Javnem razpisu
          »Digitalna preobrazba gospodarstva« (JR Digit NOO).
        </p>
      </div>

      <MobileDetails />

      <div className="not-prose mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
        Naložba je del ukrepov Načrta za okrevanje in odpornost in jo
        sofinancira Evropska unija iz naslova Sklada za okrevanje in odpornost –
        NextGenerationEU.
      </div>

      <FundingLogos
        logos={[
          {
            src: "/images/funding/mgrt.webp",
            alt: "Ministrstvo za gospodarski razvoj in tehnologijo",
            href: "https://www.gov.si/",
          },
          {
            src: "/images/funding/nextgenerationeu.webp",
            alt: "NextGenerationEU",
            href: "https://www.eu-skladi.si/",
          },
          {
            src: "/images/funding/noo.webp",
            alt: "Načrt za okrevanje in odpornost",
            href: "https://www.gov.si/zbirke/projekti-in-programi/nacrt-za-okrevanje-in-odpornost",
          },
        ]}
      />
    </EditorialPage>
  );
}