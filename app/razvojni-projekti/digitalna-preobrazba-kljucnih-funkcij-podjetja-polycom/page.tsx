import EditorialPage from "@/components/templates/EditorialPage";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import DevelopmentProjectNav from "@/components/blocks/editorial/DevelopmentProjectNav";

function MobileDetails() {
  const details = [
    { label: "Kategorija", value: "Razvojni projekti" },
    { label: "Projekt", value: "Poly Digit" },
    { label: "Program", value: "Načrt za okrevanje in odpornost" },
    { label: "Trajanje", value: "marec 2022 – marec 2024" },
    { label: "Vrednost", value: "3.344.675,70 EUR" },
    { label: "Sofinanciranje", value: "1.375.706,40 EUR" },
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
    { label: "Projekt", value: "Poly Digit" },
    { label: "Program", value: "Načrt za okrevanje in odpornost" },
    { label: "Trajanje", value: "marec 2022 – marec 2024" },
    { label: "Vrednost", value: "3.344.675,70 EUR" },
    { label: "Sofinanciranje", value: "1.375.706,40 EUR" },
  ];

  return (
    <EditorialPage
      eyebrow="Razvojni projekti"
      title="Projekt: Digitalna preobrazba ključnih funkcij podjetja Polycom Škofja Loka d.o.o."
      date="2022–2024"
      details={details}
    >
      <DevelopmentProjectNav />

      {/* CONTENT */}
      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          Naše podjetje je skupaj s konzorcijskima partnerjema POLYCOM d.o.o.
          in LOTRIČ Meroslovje d.o.o. uspešno zaključilo sodelovanje na projektu
          digitalne preobrazbe pod imenom Poly Digit.
        </p>

        <p>
          V okviru projekta je podjetje Polycom vpeljalo nove tehnologije in
          pristope v šestih poslovnih funkcijah, skupaj pa smo izboljšali stopnjo
          digitaliziranosti pri konzorcijskih partnerjih.
        </p>

        <p>
          Vse vpeljane digitalne tehnologije se medsebojno dopolnjujejo in
          tvorijo celovit sistem.
        </p>

        <p>
          Z uporabo razvitih in uvedenih tehnologij bomo dosegli zastavljene
          cilje projekta, izboljšali raven digitalizacije ter dvignili stopnjo
          digitalne pismenosti zaposlenih pri vseh konzorcijskih partnerjih.
        </p>

        <p>Projekt je sofinanciran iz Načrta za okrevanje in odpornost.</p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Konzorcij
        </h2>

        <p>
          Polycom Škofja Loka d.o.o. kot koordinator ter Lotrič Meroslovje d.o.o.
          in Flexido d.o.o. kot partnerja.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Namen in cilji projekta
        </h2>

        <p>
          V okviru projekta bo veliko podjetje Polycom v tesnem partnerskem
          sodelovanju z dvema tehnološko vrhunskima MSP digitalno preobrazilo
          šest ključnih poslovnih funkcij: razvoj, proizvodnjo, logistiko,
          nabavo, prodajo in upravo s poslovnim načrtovanjem.
        </p>

        <p>
          Pričakovani rezultati digitalne preobrazbe so povečanje učinkovitosti
          in produktivnosti poslovanja, znižanje proizvodnih stroškov in stroškov
          poslovanja ter izboljšanje učinkovitosti obstoječih digitalnih izdelkov,
          storitev in razvojno-proizvodnih aktivnosti pri partnerjih.
        </p>

        <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
          Cilji Strategije digitalne transformacije gospodarstva
        </h2>

        <ol className="list-decimal space-y-3 pl-5 text-neutral-700">
          <li>
            Povečanje učinkovitosti, produktivnosti in konkurenčnosti velikih
            podjetij z uvedbo digitalnih inovacij, avtomatizacije, robotizacije
            ter tehnologij 4IR in 5IR.
          </li>
          <li>
            Povečanje uporabe naprednih digitalnih tehnologij v mikro, malih in
            srednje velikih podjetjih.
          </li>
          <li>
            Spremenjeni poslovni modeli, procesne inovacije ter razvoj novih
            inovacijskih platform v podjetjih.
          </li>
          <li>
            Razvoj in uvajanje standardov na področju razvoja in uporabe novih
            naprednih digitalnih tehnologij.
          </li>
          <li>
            Dvig uporabe digitalnih javnih storitev za podjetja, pametna mesta,
            skupnosti in prebivalce.
          </li>
        </ol>

        <p>
          S projektom partnerji prispevamo k doseganju ciljev Strategije
          digitalne transformacije gospodarstva in k cilju Slovenije, da se
          uvrsti med vodilne države na področju uporabe naprednih digitalnih
          tehnologij po indeksu DESI.
        </p>
      </div>

      <MobileDetails />

      {/* CALLOUT */}
      <div className="not-prose mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
        Financira Evropska unija – NextGenerationEU.
      </div>

      {/* LINKS */}
      <div className="not-prose mt-6 space-y-2 text-[14px] text-neutral-600">
        <p>
          <a
            href="https://www.gov.si/zbirke/projekti-in-programi/nacrt-za-okrevanje-in-odpornost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-skin-600 underline"
          >
            www.noo.gov.si
          </a>
        </p>
        <p>
          <a
            href="https://www.evropskasredstva.si/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-skin-600 underline"
          >
            www.evropskasredstva.si
          </a>
        </p>
      </div>

      {/* FUNDING LOGOS */}
      <FundingLogos
        logos={[
          {
            src: "/images/funding/mgts.webp",
            alt: "Ministrstvo za gospodarstvo, turizem in šport",
            href: "https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarstvo-turizem-in-sport/",
          },
          {
            src: "/images/funding/noo.webp",
            alt: "Načrt za okrevanje in odpornost",
            href: "https://www.gov.si/zbirke/projekti-in-programi/nacrt-za-okrevanje-in-odpornost",
          },
          {
            src: "/images/funding/nextgenerationeu.webp",
            alt: "NextGenerationEU",
            href: "https://www.eu-skladi.si/",
          },
          {
            src: "/images/funding/polycom.webp",
            alt: "Polycom",
            href: "https://www.polycom.si/en/",
          },
          {
            src: "/images/funding/lotric.webp",
            alt: "Lotrič Meroslovje",
            href: "https://www.lotric.si/",
          },
          {
            src: "/images/funding/flexido.webp",
            alt: "Flexido",
            href: "https://www.flexido.eu/",
          },
        ]}
      />
    </EditorialPage>
  );
}