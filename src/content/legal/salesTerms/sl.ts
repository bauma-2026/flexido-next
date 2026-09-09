import type { LegalPageContent } from "../types";
import { p, strong } from "../blocks";
import { legalFacts } from "../shared";

export const salesTermsContent: LegalPageContent = {
  routeKey: "salesTerms",
  meta: {
    title: "Splošni prodajni pogoji | Flexido",
    description:
      "Splošni pogoji za ponudbe, naročila, dobavo blaga in storitev podjetja Flexido.",
  },
  eyebrow: "Pravno",
  title: `Splošni prodajni pogoji ${legalFacts.companyUpperShort}`,
  desc: "Splošni pogoji za ponudbe, naročila, dobavo blaga in storitev podjetja Flexido.",
  sections: [
    {
      id: "general",
      heading: "1. Splošno",
      blocks: [
        p(
          strong("1.1."),
          " Ti splošni prodajni pogoji določajo izključno podlago za vse naše ponudbe in vsako prodajo oziroma dobavo blaga ali storitev podjetja FLEXIDO, d.o.o."
        ),
        p(
          strong("1.2."),
          " Drugačni pogoji od splošnih prodajnih pogojev veljajo le, če so bili pisno potrjeni s strani podjetja FLEXIDO, d.o.o."
        ),
        p(
          strong("1.3."),
          " Drugačni prodajni pogoji, ki jih kupec navede na svojem naročilu, veljajo le v primeru, ko jih FLEXIDO, d.o.o. pisno potrdi."
        ),
        p(
          strong("1.4."),
          " Za pisno potrditev se šteje potrditev po pošti, elektronski pošti in faksu."
        ),
        p(
          strong("1.5."),
          " Potrjeni dogovor o odstopanju posamezne točke od točke iz splošnih prodajnih pogojev podjetja FLEXIDO, d.o.o. ne vpliva na veljavnost ostalih določil teh pogojev."
        ),
        p(
          strong("1.6."),
          " Ti Splošni prodajni pogoji veljajo do preklica ali spremembe, ki bo objavljena na spletni strani prodajalca."
        ),
      ],
    },
    {
      id: "offers",
      heading: "2. Ponudbe in naročila",
      blocks: [
        p(
          strong("2.1."),
          " Ponudba podjetja FLEXIDO, d.o.o. je veljavna v roku, navedenem na vsaki posamezni ponudbi. Rok začne teči z dnem oddaje ponudbe."
        ),
        p(
          strong("2.2."),
          " Izdaja predračuna se šteje kot potrditev naročila. Rok izpolnitve obveznosti začne teči od izpolnitve obveznosti s strani kupca po ponudbi oziroma s plačilom po predračunu."
        ),
        p(
          strong("2.3."),
          " Ponudba in vse priloge so poslovna skrivnost in se brez našega pisnega dovoljenja ne smejo razmnoževati ali dajati na razpolago tretjim osebam."
        ),
      ],
    },
    {
      id: "prices",
      heading: "3. Cene in plačilni pogoji",
      blocks: [
        p(
          strong("3.1."),
          " Dogovorjene cene so neto cene. Če ni drugače določeno veljajo vse cene brez zavarovanja in drugih dodatnih stroškov, dobavljeno na lokaciji podjetja FLEXIDO, d.o.o., nenatovorjeno. Davek na dodano vrednost ni vključen v ceno in se obračuna ločeno. Stroški pošiljanja oziroma prevozov niso vključeni v ceno in se obračunajo ločeno."
        ),
        p(
          strong("3.2."),
          " Rok plačila je določen v vsaki posamezni ponudbi posebej. V primeru da le-ta v ponudbi ni posebej določen, je naknadno določen v pogodbi."
        ),
        p(strong("3.3."), " V primeru zamude plačila zaračunavamo zakonite zamudne obresti."),
        p(
          strong("3.4."),
          ` Prodajalec si v primeru, da dolžnik zamuja s plačilom enega obroka več kot ${legalFacts.installmentDelayDays} dni ali dveh obrokov več kot ${legalFacts.twoInstallmentDelayDays} dni, pridržuje pravico, da brez dodatnega roka odstopi od pogodbe ter zahteva povračilo škode, ki mu je s tem nastala.`
        ),
        p(
          strong("3.5."),
          ` Če kupec zamuja s plačilom enega obroka več kot ${legalFacts.installmentDelayDays} dni ali dveh obrokov več kot ${legalFacts.twoInstallmentDelayDays} dni, zapadejo v plačilo vsi obroki.`
        ),
      ],
    },
    {
      id: "delivery-period",
      heading: "4. Dobavni rok",
      blocks: [
        p(
          strong("4.1."),
          " Dobavni rok začne teči v primeru, da je po ponudbi določena obveznost plačila po predračunu, s plačilom le-tega, sicer pa z dnem, ko FLEXIDO, d.o.o. prejme sprejem ponudbe. V primeru, da se tehnične dobavne podrobnosti ali finančni pogoji po navedenem dodatno spremenijo ali uskladijo, pa začne rok teči s potrditvijo sprememb oziroma podrobnosti iz strani obeh strank."
        ),
        p(
          strong("4.2."),
          " Za dobavni rok oziroma za datum dobave štejemo dan, ko je blago dostavljeno kupcu ali dan, ko je bil kupec obveščen, da je blago pripravljeno za prevzem."
        ),
        p(strong("4.3."), " Pridržujemo si pravico delnih dobav."),
        p(
          strong("4.4."),
          " Potrjeni dobavni rok se lahko podaljša v primeru naknadne spremembe kupčevega naročila, količina, tehnična specifikacija blaga ipd., in v primeru višje sile ter zamude s strani dobavitelja FLEXIDO, d.o.o. in objektivnih vzrokov na katere prodajalec nima vpliva."
        ),
        p(
          strong("4.5."),
          " Če podjetje FLEXIDO, d.o.o. iz objektivnih vzrokov ne more dobaviti določenega stroja oziroma opreme, se kupnina vrne brez obresti. V primeru, da se s kupcem dogovorita o spremembi pogodbe oziroma naročila, se predmetno plačilo šteje kot predplačilo po tej novi pogodbi."
        ),
        p(
          strong("4.6."),
          " V primeru, če kupec ne prevzame skladno s pogodbo pripravljenega blaga v dogovorjenemu trenutku skladno s pogodbo ali naročilom, je podjetje FLEXIDO, d.o.o. upravičeno, zahtevati izpolnitev pogodbe ali naročila s strani kupca."
        ),
        p(
          strong("4.7."),
          ` Podjetje ${legalFacts.companyUpper} ima v primeru zamude kupca pri prevzemu blaga za vsak izpolnjen koledarski teden pravico zaračunati ležarino v višini ${legalFacts.storageFeePercent} od zneska naročila. Kupec ima pravico iz objektivnih razlogov zaprositi za podaljšanje roka prevzema blaga pod pogojem, da prošnja za podaljšanje prispe vsaj ${legalFacts.extensionRequestWeeks} tedna pred dogovorjenim rokom za prevzem blaga. V času zamude pri prevzemu blaga na strani kupca ali podaljšanja roka prevzema na prošnjo kupca, preide nevarnost naključnega uničenja na kupca z dnem roka za prevzem blaga.`
        ),
        p(
          strong("4.8."),
          " Če je transport oziroma odprema dogovorjena ob sklenitvi pogodbe, se opravi le-ta izključno na tveganje in stroške kupca. Transportno zavarovanje sklene podjetje FLEXIDO, d.o.o. samo po nalogu in za račun kupca. V primeru da dogovora o prevozu ni, izvedbo in plačilo prevoza prevzame kupec."
        ),
      ],
    },
    {
      id: "shipment",
      heading: "5. Odprema in dostava blaga ter prehod tveganja",
      blocks: [
        p(
          strong("5.1."),
          ` Za razlago dobavnega pogoja oziroma odpreme blaga veljajo določila Mednarodne trgovinske zbornice ${legalFacts.incoterms}.`
        ),
        p(
          strong("5.2."),
          ` Izročitveni oziroma odpremni kraj za dobavo blaga je v kolikor ni drugače dogovorjeno na sedežu podjetja ${legalFacts.companyUpper}, v ${legalFacts.deliveryPlaceLocative}.`
        ),
        p(
          strong("5.3."),
          ` Dobave podjetja ${legalFacts.companyUpper} veljajo za izpolnjene: a) pri dobavi franko podjetje ${legalFacts.companyUpper}, ${legalFacts.deliveryPlace} s prejemom obvestila, da je blago razpoložljivo za dobavo; b) pri dobavi s prevzemom blaga – s prevzemom blaga s strani osebe / podjetja, ki izvaja transport; c) pri klavzuli CIP kupec: ob dobavi na dogovorjen kraj (prevoz in zavarovanje blaga do dogovorjenega kraja plača prodajalec).`
        ),
        p(
          strong("5.4."),
          ` Blago, pripravljeno za osebni prevzem, mora kupec prevzeti v roku ${legalFacts.collectionBusinessDays} delovnih dni od prejetja obvestila, da je blago pripravljeno na prevzem.`
        ),
        p(
          strong("5.5."),
          " Morebitni tehnični prevzem blaga, to je sam postopek in kraj ter čas tehničnega prevzema, mora biti dogovorjen najkasneje pred iztekom dobavnega roka. Stroški tehničnega prevzema bremenijo kupca. V primeru, da kupec ne opravi tehničnega prevzema blaga, kot je bilo dogovorjeno, blago lahko na stroške in na tveganje kupca pošljemo ali uskladiščimo."
        ),
      ],
    },
    {
      id: "retention",
      heading: "6. Lastninski pridržek",
      blocks: [
        p(
          strong("6.1."),
          " Nad dobavljenim blagom si pridržujemo lastninsko pravico do popolne izpolnitve kupčevih obveznosti v zvezi z dobavljenim blagom, vključno s plačilom morebitnih stroškov opominov in zamudnih obresti."
        ),
        p(
          strong("6.2."),
          " Kupec pred iztekom plačilnega roka nima pravice prodati blaga naprej tretji osebi, ga obremeniti ali oddati brez soglasja v uporabo tretji osebi."
        ),
        p(
          strong("6.3."),
          " Vsa tveganja, ne glede na lastninski pridržek, od prevzema stroja/dostave dalje, nosi kupec."
        ),
        p(
          strong("6.4."),
          " Kupec je dolžan sodelovati pri vseh ukrepih za zaščito naše lastnine oziroma lastninske pravice nad našim blagom do izpolnitve vseh njegovih obveznosti."
        ),
        p(
          strong("6.5."),
          " Prodajalec ima, za čas do popolnega poplačila s strani kupca pravico zavarovati blago proti kraji, požaru, poškodbam, vodi in drugim tveganjem na račun kupca. Razen v primeru, ko kupec dokaže prodajalcu da je kupec sklenil zavarovanje ter vinkuliral zavarovalno polico v korist prodajalca za poplačilo kupnine za nakup stroja."
        ),
        p(
          strong("6.6."),
          " Prodajalec si v primeru, da kupec prevzame opremo v posest pred poplačilom celotne kupnine pridrži pravico, da vidno označi predmet prodaje kot svojo last (z napisi, nalepkami), pri čemer se kupec zaveže, da takšnih označb ne bo odstranil do poplačila celotne kupnine."
        ),
      ],
    },
    {
      id: "warranty",
      heading: "7. Garancija",
      blocks: [
        p(
          strong("7.1."),
          ` Kupec lahko količinsko ali kakovostno odstopanje dobavljenega blaga pisno javi oziroma reklamira najkasneje v ${legalFacts.complaintDays} dneh po prejemu blaga.`
        ),
        p(
          strong("7.2."),
          ` Kupec lahko skrite napake oziroma skrita odstopanja kakovosti pisno javi oziroma reklamira takoj po odkritju, vendar najkasneje ${legalFacts.hiddenDefectMonths} mesecev od prevzema blaga.`
        ),
        p(
          strong("7.3."),
          " V primeru predhodnega tehničnega prevzema blaga kupec ni upravičen do naknadne reklamacije blaga."
        ),
        p(
          strong("7.4."),
          " Kupec mora v primeru naše zahteve takoj vrniti ali prenehati uporabljati reklamirano blago zaradi ugotavljanja upravičenosti reklamacije. O prekinitvi ali omejitvi uporabe se lahko kupec in podjetje FLEXIDO, d.o.o. dogovorita tudi drugače. Če kupec ne upošteva navodil dobavitelja izgubi pravico do pritožbe oziroma reklamacije."
        ),
        p(
          strong("7.5."),
          " Ne upoštevamo nobene reklamacije, nastale zaradi nestrokovne uporabe in nepooblaščene ali nestrokovne montaže, zaradi nepooblaščenega in nestrokovnega posega v samo blago, zaradi nestrokovnega zagona, kot tudi ne zaradi nestrokovnega, pomanjkljivega ali neskrbnega ravnanja z blagom ali v nasprotju s karakteristikami in priporočili proizvajalca."
        ),
        p(
          strong("7.6."),
          " Vsi zahtevki za uveljavljanje garancije morajo biti pisni z razvidnimi podatki o vrsti okvare, o času nastanka okvare in podatki, potrebnimi za identifikacijo blaga. Točnost navedenih podatkov in okoliščine okvare sme preveriti naš strokovnjak na mestu okvare."
        ),
        p(
          strong("7.7."),
          " V nobenem primeru podjetje FLEXIDO, d.o.o. ne prevzema nobenega jamstvenega zahtevka in nobene odškodninske odgovornosti za morebitno škodo izpada dohodka, povzročeno zaradi prekinitve ali zastoja proizvodnje."
        ),
      ],
    },
    {
      id: "ip",
      heading: "8. Intelektualna lastnina",
      blocks: [
        p(
          strong("8.1."),
          " Načrti, skice in drugi tehnični dokumenti, prav tako kot katalogi z vzorci, prospekti, slike, spletne informacije in podobni dokumenti, ostajajo intelektualna lastnina podjetja FLEXIDO, d.o.o. oziroma njegovih dobaviteljev in so zaščiteni z zakonskimi predpisi glede razmnoževanja, ponarejanja in uporabe v konkurenčne namene. Kupec uporablja rešitve podjetja FLEXIDO, d.o.o. izključno za vnaprej dogovorjen namen. Uporaba rešitev, ki presegajo okvir dogovorov, morajo biti pisno dogovorjene. Koncepti, strategije in sistemi, ki jih razvilo podjetje FLEXIDO, d.o.o. so izdelani izključno samo za uporabo ene pravne osebe. Uporaba rešitev podjetja FLEXIDO, d.o.o. s strani pridruženih in povezanih podjetij mora biti posebej dogovorjena s pogodbo."
        ),
      ],
    },
    {
      id: "disputes",
      heading: "9. Reševanje sporov",
      blocks: [
        p(
          strong("9.1."),
          " Za vse sodne postopke med kupcem in prodajalcem veljajo izključno zakoni Republike Slovenije."
        ),
        p(
          strong("9.2."),
          ` Pristojno sodišče za reševanje vseh sporov je ${legalFacts.courtOfficial}.`
        ),
      ],
    },
  ],
};
