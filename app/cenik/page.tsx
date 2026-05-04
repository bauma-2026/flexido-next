import EditorialPage from "@/components/templates/EditorialPage";

export default function Page() {
  const details = [
    { label: "Kategorija", value: "Servis" },
    { label: "Tip", value: "Cenik servisnih storitev" },
    { label: "Veljavnost", value: "od 01.01.2026 dalje" },
    { label: "Območje", value: "Slovenija" },
  ];

  return (
    <EditorialPage
      eyebrow="Servis"
      title="Cenik servisnih storitev za Slovenijo"
      date="2026"
      details={details}
    >
      <div className="space-y-10">
        <section className="space-y-5">
          <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
            1. Cena za uro popravila
          </h2>

          <p>
            Cena za uro popravila v času rednega delovnega časa, tj. od
            ponedeljka do petka, razen praznikov, v času med 7.00 in 16.00 uro:
          </p>

          <div className="not-prose overflow-hidden rounded-2xl border border-neutral-200">
            <table className="w-full border-collapse text-left text-[14px]">
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-5 py-4 text-neutral-700">
                    Serviser tehnik II (enostavna mehanika)
                  </td>
                  <td className="px-5 py-4 font-medium text-neutral-950">
                    51,20 EUR
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-neutral-700">
                    Serviser tehnik I (zahtevna mehanika, pnevmatika, elektro)
                  </td>
                  <td className="px-5 py-4 font-medium text-neutral-950">
                    58,60 EUR
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-neutral-700">
                    Serviser elektronike II (roboti, preprosto krmiljenje)
                  </td>
                  <td className="px-5 py-4 font-medium text-neutral-950">
                    63,80 EUR
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-neutral-700">
                    Serviser elektronike I (kamere, zahtevno krmiljenje)
                  </td>
                  <td className="px-5 py-4 font-medium text-neutral-950">
                    72,60 EUR
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[14px] italic text-neutral-600">
            V čas za obračun se šteje tudi čas na poti, priprava na popravilo in
            eventualni čakalni čas.
          </p>
        </section>

        <section className="space-y-5 border-t border-neutral-200 pt-10">
          <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
            2. Dodatki za delo izven rednega delovnega časa
          </h2>

          <div className="not-prose overflow-hidden rounded-2xl border border-neutral-200">
            <table className="w-full border-collapse text-left text-[14px]">
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-5 py-4 text-neutral-700">
                    Nadurno delo, delo ob sobotah
                  </td>
                  <td className="px-5 py-4 font-medium text-neutral-950">
                    dodatno 50 %
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-neutral-700">
                    Nočno delo po 20.00 uri in delo ob nedeljah in praznikih
                  </td>
                  <td className="px-5 py-4 font-medium text-neutral-950">
                    dodatno 100 %
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-5 border-t border-neutral-200 pt-10">
          <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-neutral-900">
            3. Stroški prevoza
          </h2>

          <p className="text-[18px] font-medium text-neutral-900">
            0,58 EUR / km
          </p>

          <p>
            Morebitni dodatni stroški, kot so stroški nočitev, cestnin, drugi
            prevozni stroški in podobni direktni stroški, se obračunajo posebej
            po dejanskih stroških.
          </p>

          <ul className="list-disc space-y-2 pl-5 text-neutral-700">
            <li>Na zgoraj navedene cene se obračuna DDV.</li>
            <li>
              Plačilni rok za servisne storitve in rezervne dele je 30 dni po
              opravljeni storitvi oziroma po dobavi.
            </li>
            <li>
              Cenik velja za nedoločen čas in se lahko spremeni v primeru, da
              nastopijo razlogi za spremembo.
            </li>
          </ul>
        </section>

        <div className="not-prose rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-[14px] leading-6 text-neutral-700">
          <strong>Cenik velja od 01.01.2026 dalje.</strong>
          <br />
          <span>Flexido d.o.o.</span>
        </div>
      </div>
    </EditorialPage>
  );
}