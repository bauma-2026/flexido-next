import EditorialPage from "@/components/templates/EditorialPage";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import DevelopmentProjectNav from "@/components/blocks/editorial/DevelopmentProjectNav";

function MobileDetails() {
  const details = [
    { label: "Kategorija", value: "Razvojni projekti" },
    { label: "Projekt", value: "SAFEGUARD" },
    { label: "Tip", value: "Raziskovalno-razvojni projekt" },
    { label: "Vrednost", value: "372.930,00 EUR" },
    { label: "Sofinanciranje", value: "160.231,49 EUR" },
  ];

  return (
    <div className="not-prose mt-10 rounded-[24px] border border-neutral-200 bg-white p-5 lg:hidden">
      <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500">
        Podrobnosti
      </p>

      <div className="mt-5 divide-y divide-neutral-200">
        {details.map((item) => (
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
  const details = [
    { label: "Kategorija", value: "Razvojni projekti" },
    { label: "Projekt", value: "SAFEGUARD" },
    { label: "Tip", value: "Raziskovalno-razvojni projekt" },
    { label: "Vrednost", value: "372.930,00 EUR" },
    { label: "Sofinanciranje", value: "160.231,49 EUR" },
  ];

  return (
    <EditorialPage
      eyebrow="Razvojni projekti"
      title="Naziv operacije: SAFEGUARD - pametna zaščitna komora"
      date="2022"
      details={details}
    >
      <DevelopmentProjectNav />

      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          V okviru javnega razpisa »Spodbude za raziskovalno razvojne projekte
          2« in subvencioniranega projekta razvijamo rešitev, ki je primerna za
          vse, ki želijo avtomatizirati proizvodnjo.
        </p>

        <p>
          S projektom se lotevamo tehnološkega prestrukturiranja orodjarstva,
          obenem pa uvajamo višji nivo avtomatizacije in robotizacije proizvodnje
          v predelovalnih dejavnostih.
        </p>

        <p>
          Iz vidika funkcionalnosti bomo po načelih industrijskega oblikovanja
          naredili uporabniku prijazen in privlačen izdelek: enostavna montaža,
          kompaktnost in cenovna dostopnost.
        </p>

        <p>
          Z našimi tehnologijami uporabnikom omogočamo polno robotsko
          avtomatizacijo procesa na preprost in prilagodljiv način, vključno z
          razreševanjem aspekta varne proizvodnje.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Pametna zaščitna komora SAFEGUARD
        </h2>

        <p>
          Gre za pametno zaščitno komoro SAFEGUARD za kooperativne oziroma
          kolaborativne robote. Izdelek deluje kot pametno prijemalo, ki omogoča
          varno delo in nenehno kontrolira proces.
        </p>

        <p>
          Rešitev zaščiti kos iz vseh strani in na ta način zagotavlja:
        </p>

        <ul className="list-disc space-y-2 pl-5 text-neutral-700">
          <li>tvorjenje kompaktne mehanske zaščite nad izdelkom,</li>
          <li>
            nemoteno sočasno delo kooperativnih robotov in človeka, razen v
            primeru trka, ko se delovanje robota ustavi,
          </li>
          <li>hitrejše delovanje robota oziroma krajši cikel.</li>
        </ul>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Prednosti uporabe
        </h2>

        <p>
          Uporaba pametne zaščite SAFEGUARD v industriji omogoča še več
          avtomatizacije procesov s kooperativnimi roboti.
        </p>

        <ul className="list-disc space-y-2 pl-5 text-neutral-700">
          <li>varno delo,</li>
          <li>hitrejši cikli tudi ob prisotnosti delavca,</li>
          <li>
            minimalni poseg v obstoječi layout — razporeditev strojev in
            delovnih mest lahko ostane nespremenjena.
          </li>
        </ul>

        <p>
          Skupna vrednost projekta znaša 372.930,00 EUR, pričakovana vrednost
          sofinanciranja pa 160.231,49 EUR.
        </p>
      </div>

      <MobileDetails />

      <div className="not-prose mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
        Naložbo sofinancira Republika Slovenija in Evropska unija iz Evropskega
        sklada za regionalni razvoj.
        <br />
        <a
          href="https://www.eu-skladi.si/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-skin-600 underline"
        >
          www.eu-skladi.si
        </a>
      </div>

      <FundingLogos
        logos={[
          {
            src: "/images/funding/mgrt.webp",
            alt: "Ministrstvo za gospodarski razvoj in tehnologijo",
            href: "https://www.gov.si/",
          },
          {
            src: "/images/funding/kameleon.webp",
            alt: "Kameleon",
            href: "#",
          },
          {
            src: "/images/funding/eu-skladi.webp",
            alt: "EU skladi",
            href: "https://www.eu-skladi.si/",
          },
        ]}
      />
    </EditorialPage>
  );
}