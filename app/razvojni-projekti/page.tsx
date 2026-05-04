import EditorialPage from "@/components/templates/EditorialPage";
import FundingLogos from "@/components/blocks/editorial/FundingLogos";
import DevelopmentProjectNav from "@/components/blocks/editorial/DevelopmentProjectNav";

function MobileDetails() {
  const details = [
    { label: "Kategorija", value: "Razvojni projekti" },
    { label: "Projekt", value: "Digitalizacija prodajnih poti" },
    { label: "Področje", value: "Promocija na tujih trgih" },
    { label: "Program", value: "Sofinanciranje digitalizacije" },
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
    { label: "Projekt", value: "Digitalizacija prodajnih poti" },
    { label: "Področje", value: "Promocija na tujih trgih" },
    { label: "Program", value: "Sofinanciranje digitalizacije" },
  ];

  return (
    <EditorialPage
      eyebrow="Razvojni projekti"
      title="Sofinanciranje stroškov digitalizacije prodajnih poti ter predstavitvenih in trženjskih gradiv za promocijo na tujih trgih."
      date="2022"
      details={details}
    >
      <DevelopmentProjectNav />

      {/* CONTENT */}
      <div className="space-y-6">
        <p className="text-[18px] leading-8 text-neutral-800">
          V podjetju si v zadnjem letu prizadevamo za večjo prepoznavnost tako
          na domačem kot na tujih trgih. Tako smo se poslužili prodajnih poti in
          predstavitve podjetja v digitalni obliki.
        </p>

        <p>
          Za potrebe prepoznavnosti na tujih trgih smo v sodelovanju z zunanjimi
          sodelavci ustvarili predstavitveni video podjetja, ki prikazuje našo
          dejavnost. Namen vsebine je pritegniti pozornost trga in prispevati k
          prepoznavnosti ter uveljavitvi blagovne znamke.
        </p>

        <p>
          V okviru digitalizacije prodajnih poti smo optimizirali spletno stran
          in digitalne kanale ter vzpostavili sistem merjenja učinkovitosti.
          Namen operacije je pregled aktivnosti in sledenje potencialnim kupcem
          na tujih trgih. Merjenje odziva na digitalnih platformah izboljšuje
          poslovne odločitve in daje jasen pregled nad učinkovitostjo.
        </p>

        <p>
          V sklopu predstavitve podjetja smo izdelali predstavitveni katalog za
          domače in tuje trge, s katerim kupcu predstavimo svojo dejavnost.
          Katalog je dostopen v tiskani in digitalni obliki za vse naprave
          (računalnik, telefon, tablica).
        </p>

        <p>
          V razvojni projekt je bilo vloženega veliko znanja, truda in časa, saj
          smo kot podjetje z manjšo ekipo vključili večino sodelavcev in projekt
          pripeljali od idejne zasnove do končnega rezultata, ki odpira nove
          poslovne priložnosti.
        </p>

        <p>
          Vsem sodelavcem in partnerjem, predvsem Ministrstvu za gospodarski
          razvoj in tehnologijo, se zahvaljujemo za podporo in sodelovanje pri
          izvedbi projekta.
        </p>
      </div>

      <MobileDetails />

      {/* CALLOUT */}
      <div className="not-prose mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
        Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega
        sklada za regionalni razvoj, in sicer v vrednosti 14.284,00 EUR.
      </div>

      {/* EXTRA FUNDING TEXT */}
      <p className="mt-6 text-[14px] text-neutral-600">
        Naložbo sofinancira Republika Slovenija in Evropska unija iz Evropskega
        sklada za regionalni razvoj.
      </p>

      {/* FUNDING LOGOS */}
      <FundingLogos
        logos={[
          {
            src: "/images/funding/mgrt.webp",
            alt: "Ministrstvo za gospodarski razvoj in tehnologijo",
            href: "https://www.gov.si/",
          },
          {
            src: "/images/funding/spirit-slovenia.webp",
            alt: "SPIRIT Slovenija",
            href: "https://www.spiritslovenia.si/",
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