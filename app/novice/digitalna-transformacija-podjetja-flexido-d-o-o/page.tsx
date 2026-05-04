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
          { label: "Projekt", value: "Digitalna transformacija" },
          { label: "Program", value: "P4D ReactEU" },
          { label: "Področje", value: "Digitalizacija podjetja" },
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
      title="Digitalna transformacija podjetja Flexido d.o.o."
      date="2022"
      details={[
        { label: "Kategorija", value: "Novice" },
        { label: "Projekt", value: "Digitalna transformacija" },
        { label: "Program", value: "P4D ReactEU" },
        { label: "Področje", value: "Digitalizacija podjetja" },
      ]}
    >
      {/* CONTENT */}
      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          V okviru javnega razpisa Spodbude za digitalno transformacijo MSP
          (P4D ReactEU), ki ga je objavil Slovenski podjetniški sklad, smo
          pridobili subvencijo za izvedbo digitalne transformacije podjetja.
        </p>

        <p>
          Operacija je v celoti financirana iz Evropskega sklada za regionalni
          razvoj in virov ReactEU, skupna vrednost projekta pa znaša 151.507,00 EUR.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Cilji digitalne transformacije
        </h2>

        <p>
          Glavni cilj operacije je izvedba celovite digitalne transformacije
          podjetja na naslednjih področjih:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-neutral-700">
          <li>Izkušnja kupca</li>
          <li>Podatkovna strategija</li>
          <li>Procesi in digitalni poslovni modeli</li>
          <li>Kibernetska varnost</li>
          <li>Industrija 4.0</li>
        </ul>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Učinki projekta
        </h2>

        <p>
          Skozi izvedeno transformacijo pričakujemo pozitivne učinke na prodajo,
          razvoj kadrov, optimizacijo procesov ter večjo inovacijsko sposobnost
          podjetja.
        </p>

        <p>
          Projekt se izvaja v poslovni enoti v Šenčurju.
        </p>

        <p>
          Več informacij:
          <br />
          <a
            href="http://www.eu-skladi.si/"
            target="_blank"
            className="text-skin-600 underline"
          >
            www.eu-skladi.si
          </a>
        </p>
      </div>

      <MobileDetails />

      {/* CALLOUT */}
      <div className="not-prose mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
        Naložbo sofinancirata Republika Slovenija in Evropska unija iz
        Evropskega sklada za regionalni razvoj (ESSR) v okviru odziva
        Unije na pandemijo COVID-19.
      </div>

      {/* FUNDING LOGOS */}
      <FundingLogos
        logos={[
          {
            src: "/images/funding/mgrt.webp",
            alt: "Republika Slovenija, Ministrstvo za gospodarski razvoj in tehnologijo",
            href: "https://www.gov.si/",
          },
          {
            src: "/images/funding/slovenski-podjetniski-sklad.webp",
            alt: "Slovenski podjetniški sklad",
            href: "https://www.podjetniskisklad.si/",
          },
          {
            src: "/images/funding/eu-skladi.webp",
            alt: "Evropska unija, Evropski sklad za regionalni razvoj",
            href: "https://www.eu-skladi.si/",
          },
        ]}
      />

    
        <ArticleNav slug="digitalna-transformacija-podjetja-flexido-d-o-o" />
    </EditorialPage>
  );
}