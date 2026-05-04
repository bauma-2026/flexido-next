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
          { label: "Dogodek", value: "Fakuma 2024" },
          { label: "Lokacija", value: "Nemčija" },
          { label: "Področje", value: "Avtomatizacija proizvodnje" },
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
  title="Uspešna predstavitev podjetja Flexido na sejmu Fakuma 2024 v Nemčiji"
  date="29. marec 2026"
  details={[
    { label: "Kategorija", value: "Novice" },
    { label: "Dogodek", value: "Fakuma 2024" },
    { label: "Lokacija", value: "Nemčija" },
    { label: "Področje", value: "Avtomatizacija proizvodnje" },
  ]}
>
  {/* HERO IMAGE */}
  <img
    src="/images/news/flexido-na-sejmu-fakuma-2024.webp"
    alt="Flexido na sejmu Fakuma 2024"
    className="mb-8 w-full rounded-[22px]"
  />

  {/* CONTENT */}
  <div className="space-y-6">
    <p className="text-[18px] leading-8 text-neutral-800">
      Podjetje Flexido se je predstavilo na sejmu Fakuma 2024 v Nemčiji,
      enem pomembnejših dogodkov na področju predelave plastike in
      industrijske avtomatizacije.
    </p>

    <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
      Predstavitev rešitev za avtomatizacijo
    </h2>

    <p>
      Na sejmu smo predstavili rešitve za avtomatizacijo proizvodnje,
      robotizacijo procesov ter optimizacijo proizvodnih tokov.
    </p>

    <p>
      Poudarek je bil na stabilnosti procesa, ponovljivosti proizvodnje in
      praktičnih rešitvah za podjetja, ki želijo zmanjšati ročno delo ter
      izboljšati pretočnost proizvodnje.
    </p>

    <h2 className="pt-4 text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
      Prisotnost na tujih trgih
    </h2>

    <p>
      Udeležba na sejmu je bila pomembna priložnost za krepitev prisotnosti
      podjetja na tujih trgih, vzpostavljanje novih poslovnih povezav ter
      spremljanje aktualnih trendov v industriji.
    </p>
  </div>
<MobileDetails />
  {/* CALLOUT */}
  <div className="not-prose mt-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-600">
    Udeležbo na sejmu sofinancira Evropska unija v okviru podpore
    internacionalizaciji podjetij.
  </div>
<FundingLogos
  logos={[
    {
      src: "/images/funding/mgts.webp",
      alt: "Ministrstvo za gospodarstvo, turizem in šport",
      href: "https://www.gov.si/drzavni-organi/ministrstva/ministrstvo-za-gospodarstvo-turizem-in-sport/",
    },
    {
      src: "/images/funding/spirit-slovenia.webp",
      alt: "SPIRIT Slovenija",
      href: "https://www.spiritslovenia.si",
    },
    {
      src: "/images/funding/i-feel-slovenia.webp",
      alt: "I feel Slovenia",
      href: "https://www.slovenia.info",
    },
    {
      src: "/images/funding/eu-financing.webp",
      alt: "Financira Evropska unija",
      href: "https://european-union.europa.eu",
    },
  ]}
/>

    <ArticleNav slug="flexido-na-sejmu-fakuma-2024" />
</EditorialPage>
  );
}