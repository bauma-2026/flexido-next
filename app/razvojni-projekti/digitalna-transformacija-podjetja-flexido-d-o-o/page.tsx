import EditorialPage from "@/components/templates/EditorialPage";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import DevelopmentProjectNav from "@/components/blocks/editorial/DevelopmentProjectNav";

function MobileDetails() {
  const details = [
    { label: "Kategorija", value: "Razvojni projekti" },
    { label: "Projekt", value: "Digitalna transformacija" },
    { label: "Program", value: "P4D ReactEU" },
    { label: "Subvencija", value: "90.904,00 EUR" },
    { label: "Vrednost", value: "151.507,00 EUR" },
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
    { label: "Projekt", value: "Digitalna transformacija" },
    { label: "Program", value: "P4D ReactEU" },
    { label: "Subvencija", value: "90.904,00 EUR" },
    { label: "Vrednost", value: "151.507,00 EUR" },
  ];

  return (
    <EditorialPage
      eyebrow="Razvojni projekti"
      title="Digitalna transformacija podjetja Flexido d.o.o."
      date="2022"
      details={details}
    >
      <DevelopmentProjectNav />

      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          V okviru Javnega razpisa Spodbude za digitalno transformacijo MSP
          (P4D ReactEU), ki ga je objavil Slovenski podjetniški sklad, smo
          pridobili subvencijo v višini 90.904,00 EUR.
        </p>

        <p>
          Razpis je v celoti financiran iz Evropskega sklada za regionalni
          razvoj in virov ReactEU.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Cilji digitalne transformacije
        </h2>

        <p>
          Glavni cilj operacije Digitalna transformacija podjetja Flexido d.o.o.
          je izvedba celovite digitalne transformacije naslednjih področij:
        </p>

        <ol className="list-decimal space-y-2 pl-5 text-neutral-700">
          <li>Izkušnja kupca</li>
          <li>Podatkovna strategija</li>
          <li>Procesi in digitalne rešitve, digitalni poslovni modeli</li>
          <li>Kibernetska varnost</li>
          <li>Industrija 4.0</li>
        </ol>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Učinki projekta
        </h2>

        <p>
          Skozi izvedeno transformacijo si obetamo neposredne pozitivne učinke
          na prodajo, varstvo okolja, razvoj kadrov, proizvodnjo in inovacijske
          potenciale podjetja.
        </p>

        <p>
          Ocenjena višina stroškov znaša 151.507,00 EUR, operacija pa se izvaja
          v poslovni enoti v Šenčurju.
        </p>

        <p>
          Povezava na spletno stran EKP v Sloveniji:
          <br />
          <a
            href="https://www.eu-skladi.si/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-skin-600 underline"
          >
            www.eu-skladi.si
          </a>
        </p>
      </div>

      <MobileDetails />

      <div className="not-prose mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
        Naložbo sofinancirata Republika Slovenija in Evropska unija iz
        Evropskega sklada za regionalni razvoj (ESSR) v okviru odziva Unije na
        pandemijo COVID-19.
      </div>

      <FundingLogos
        logos={[
          {
            src: "/images/funding/mgrt.webp",
            alt: "Ministrstvo za gospodarski razvoj in tehnologijo",
            href: "https://www.gov.si/",
          },
          {
            src: "/images/funding/slovenski-podjetniski-sklad.webp",
            alt: "Slovenski podjetniški sklad",
            href: "https://www.podjetniskisklad.si/",
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