import type { LegalPageContent } from "../types";
import { emailLink, h3, p, strong, ul } from "../blocks";
import { legalFacts } from "../shared";

export const privacyContent: LegalPageContent = {
  routeKey: "privacyPolicy",
  meta: {
    title: "Varstvo osebnih podatkov | Flexido",
    description: "Politika varstva osebnih podatkov podjetja Flexido.",
  },
  eyebrow: "Pravno",
  title: "Varstvo osebnih podatkov",
  desc: "Politika varstva osebnih podatkov podjetja Flexido.",
  sections: [
    {
      id: "uvodno",
      heading: "1. Uvodno",
      blocks: [
        p(
          `V podjetju ${legalFacts.companyDoOComma}, ${legalFacts.registeredAddress} (v nadaljevanju: “${legalFacts.companyShort}” ali “upravljavec”) se zavedamo odgovornosti ravnanja z osebnimi podatki svojih strank, potencialnih strank, obiskovalcev spletnega mesta ${legalFacts.companyShort} ter vseh posameznikov, ki nam ob stiku razkrijejo osebne podatke (v nadaljevanju: “uporabniki”), zato sprejemamo to Politiko varstva osebnih podatkov (v nadaljevanju: “Politika”), s katero svoje uporabnike na pregleden, razumljiv in preprost način seznanjamo z nameni, pravno podlago obdelave njihovih osebnih podatkov in pravicami v zvezi z obdelavo, kot so jim te zagotovljene z Zakonom o varstvu osebnih podatkov (${legalFacts.zvop2}) in Uredbo ${legalFacts.gdprCitation} Evropskega parlamenta in Sveta z dne 27. aprila 2016 o varstvu posameznikov pri obdelavi osebnih podatkov in o prostem pretoku takih podatkov ter o razveljavitvi Direktive 95/46/ES (v nadaljevanju: “Splošna uredba o varstvu podatkov”).`
        ),
        p(
          "Izrazi, kot so »upravljavec«, »obdelava«, »omejitev obdelave«, »obdelovalec«, »oblikovanje profilov«, »psevdomizacija«, »tretja oseba« in »podjetje«, uporabljeni v tej Politiki, imajo pomen, kot ga določa Splošna uredba o varstvu osebnih podatkov."
        ),
        p(
          strong(
            "Politika skladno s Splošno uredbo o varstvu osebnih podatkov ureja naslednja področja:"
          )
        ),
        ul(
          "kontaktne informacije upravljavca in kontakt pooblaščene osebe za varstvo podatkov,",
          "namene in pravne podlage za obdelavo različnih vrst osebnih podatkov uporabnikov, vključno s profiliranjem osebnih podatkov uporabnikov,",
          "uporabnike osebnih podatkov, pogodbeno obdelavo in posredovanje podatkov v tretje države,",
          "čas hrambe posameznih vrst osebnih podatkov,",
          "skrb za varnost osebnih podatkov,",
          "pravice uporabnikov v zvezi z obdelavo osebnih podatkov,",
          "postopek uveljavljanja uporabnikovih pravic v zvezi z obdelavo osebnih podatkov,",
          "pravico do vložitve pritožbe v zvezi z obdelavo osebnih podatkov."
        ),
      ],
    },
    {
      id: "podatki",
      heading: "2. Podatki o upravljavcu in osebi, pooblaščeni za varstvo podatkov",
      blocks: [
        p(
          `Upravljavec osebnih podatkov uporabnikov je podjetje ${legalFacts.companyDoO}, ${legalFacts.registeredAddress}. V podjetju ${legalFacts.companyShort} je imenovana pooblaščena oseba za varstvo osebnih podatkov, ki je dosegljiva na elektronskem naslovu `,
          emailLink,
          "."
        ),
      ],
    },
    {
      id: "osebni",
      heading: "3. Osebni podatki",
      blocks: [
        p(
          strong(
            "Osebni podatek je informacija, ki vas identificira kot določenega ali določljivega posameznika. Uporabnik je določljiv takrat, ko ga je mogoče neposredno ali posredno določiti, zlasti z navedbo identifikatorja, kot je ime, identifikacijska številka, podatki o lokaciji, spletni identifikator, ali z navedbo enega ali več dejavnikov, ki so značilni za uporabnikovo fizično, fiziološko, genetsko, duševno, gospodarsko, kulturno ali družbeno identiteto. Upravljavec skladno z nameni, opredeljenimi v nadaljevanju Politike, zbira naslednje osebne podatke:"
          )
        ),
        ul(
          "osnovne podatke o uporabniku (ime in priimek, naziv, delovno mesto in drugi podatki o delodajalcu),",
          "kontaktne podatke in podatke o uporabnikovi komunikaciji z upravljavcem (e-poštni naslov, telefonska številka, datum, ura in vsebina poštne ali e-mail komunikacije, datum, ura in trajanje telefonskih klicev),",
          `podatke o udeležbi na dogodkih, ki jih organizira ${legalFacts.companyShort} (podatek o dogodku, ki ste se ga udeležili, kraj in datum dogodka),`,
          "podatke o uporabnikovi uporabi spletnega mesta upravljavca (datumi in ure obiskov spletnega mesta, obiskane strani oz. URL-ji, čas zadrževanja na posamezni strani, število obiskanih strani, skupni čas obiska spletnega mesta, opravljene nastavitve na spletnem mestu) ter podatki o uporabi prejetih sporočil (e-pošta, SMS) upravljavca,",
          "podatke iz prostovoljno izpolnjenih obrazcev s strani uporabnika,",
          "druge podatke, ki jih uporabnik prostovoljno poda upravljavcu ob zahtevi na določene storitve, ki te podatke zahtevajo."
        ),
        p(
          "Upravljavec ne zbira in ne obdeluje uporabnikovih osebnih podatkov, razen kadar mu ta to omogoči oz. v to privoli, tj. ob naročilu izdelkov ali storitev, ob srečanjih na sejmih ali drugih strokovnih dogodkih, kadar za zbiranje osebnih podatkov obstaja zakonska podlaga, je obdelava potrebna za izvrševanje pogodbenih obveznosti ali kadar je obdelava potrebna zaradi zakonitih interesov, za katere si prizadeva upravljavec (v nadaljevanju: “zakonit interes”)."
        ),
      ],
    },
    {
      id: "podlage",
      heading: "4. Podlage za obdelavo in nameni obdelave",
      blocks: [
        p(
          strong(
            `Flexido bo obdeloval vaše osebne podatke za enega izmed v nadaljevanju navedenih namenov na podlagi naslednjih pravnih podlag:`
          )
        ),
        ul(
          "vaše soglasje oziroma privolitev,",
          "izpolnitev zakonskih obveznosti upravljavca,",
          "na podlagi zakonitega interesa,",
          "izpolnjevanje pogodbene obveznosti."
        ),
        p(
          `Vaše osebne podatke bo ${legalFacts.companyShort} obdeloval zgolj za namene, za katere jih je pridobil in jih ne bo obdeloval za namene, ki niso združljivi z nameni, za katere so bili zbrani. ${legalFacts.companyShort} od uporabnika zbira zgolj tiste osebne podatke, ki so nujno potrebni za dosego posameznega namena.`
        ),
        h3("Obdelava za izpolnitev pogodbenih obveznosti"),
        p(
          "V določenih primerih je obdelava osebnih podatkov nujno potrebna za izpolnitev upravljavčevih pogodbenih obveznosti. V primeru, da mu uporabnik potrebnih podatkov ne zagotovi, upravljavec z uporabnikom ne more skleniti pogodbe oziroma izvesti storitev."
        ),
        p(
          "Upravljavec bo obdeloval vaše osebne podatke za izpolnitev pogodbenih obveznosti za naslednje namene:"
        ),
        ul(
          "pogodbeno ureditev poslovnega sodelovanja,",
          "izvajanje aktivnosti, določene s pogodbo o sodelovanju,",
          "komunikacija z izvajalci in drugimi kontaktnimi osebami stranke za namen izvajanja aktivnosti, določene s pogodbo o sodelovanju,",
          `prijava uporabnika na dogodek, ki ga organizira ${legalFacts.companyShort} oziroma kateri od upravljavčevih partnerjev.`
        ),
        h3("Obdelava na podlagi soglasja oziroma privolitve"),
        p(
          `${legalFacts.companyShort} bo na podlagi vašega pisnega soglasja obdeloval vaše osebne podatke za naslednje namene:`
        ),
        ul(
          "pošiljanja vabil na dogodke v industriji,",
          "informiranja o novostih v industriji,",
          "občasno pošiljanje ponudb,",
          "za kontaktiranje po telefonu z namenom predstavitve prodajnega programa,",
          "za spremljanje branja poslanih e-poštnih sporočil, in sicer katero e-poštno sporočilo ste odprli oziroma niste odprli, katere povezave ste odprli oziroma kliknili, koliko časa ste jih brali ali si ogledovali posamezno vsebino,",
          "za segmentiranje uporabnikov na podlagi dejstev iz prejšnje alineje in nadaljnje pošiljanje prilagojenih (individualiziranih) e-poštnih sporočil,",
          "za namene analize življenjske poti uporabnika na spletni strani: od kod je uporabnik prispel na spletno mesto, za spremljanje zadrževanja na spletni strani, katere spletne strani je obiskoval, katere vsebine je prenesel oziroma si jih ogledal,",
          "za segmentiranje uporabnikov na podlagi dejstev iz prejšnje alineje in nadaljnje pošiljanje prilagojenih (individualiziranih) sporočil skozi večkanalno komunikacijo,",
          "za vse druge namene, za katere se specifično strinjate pri sodelovanju z upravljavcem."
        ),
        p(
          "V vseh primerih, ko podate privolitev za obdelavo vaših osebnih podatkov, lahko to privolitev kadarkoli prekličete prek e-naslova ",
          emailLink,
          "."
        ),
        h3(`Obdelava je potrebna za izpolnitev zakonskih obveznosti ${legalFacts.companyShort}`),
        p(
          "Vaše osebne podatke obdelujemo tudi takrat, ko to od nas zahteva zakon. Primer namena take obdelave je obdelava vaših osebnih podatkov za potrebe sodnih ali upravnih postopkov."
        ),
        h3(
          `Obdelava na podlagi zakonitega interesa, za katerega si prizadeva ${legalFacts.companyShort}`
        ),
        p(
          "Upravljavec lahko podatke obdeluje tudi na podlagi zakonitega interesa, razen kadar nad takimi interesi prevladajo interesi ali temeljne pravice in svoboščine uporabnika, na katerega se nanašajo osebni podatki, ki zahtevajo varstvo osebnih podatkov. V primeru uporabe zakonitega interesa upravljavec vedno opravi presojo skladno s Splošno uredbo o varstvu podatkov."
        ),
        p(
          `V določenih primerih bo lahko ${legalFacts.companyShort} za nadaljnjo obdelavo vaših osebnih podatkov na podlagi zakonitega interesa, zbranih na podlagi ene izmed zgoraj navedenih pravnih podlag (privolitve, pogodba), sprejel določene varovalke za varstvo vaših osebnih podatkov, kot so psevdomizacija, kriptiranje, obdelava v agregirani obliki ali/in brisanje določenih vrst osebnih podatkov. ${legalFacts.companyShort} bo vaše osebne podatke na podlagi zakonitega interesa obdeloval za naslednje namene:`
        ),
        ul(
          "Trženjske, poslovne in druge tehnične analize, kot na primer analiziranje in ugotavljanje, iz katerih organizacij prihajajo udeleženci dogodkov in kakšne funkcije zasedajo v teh organizacijah, za vodenje evidenc, koliko in katerih dogodkov se je udeležil uporabnik, za vodenje evidenc v zvezi s podeljenimi potrdili, certifikati in licencami udeležencev dogodkov.",
          "Preprečevanje zlorab, zagotavljanje varnosti, uveljavljanje zahtevkov ali obrambo pred zahtevki v upravnih in sodnih postopkih.",
          "Neposredno trženje, vključno z oblikovanjem profilov uporabnikov, na podlagi predhodno zakonito pridobljenih osebnih podatkov."
        ),
        h3("Spletna analitika"),
        p(
          "Ob soglasju uporabljamo Vercel Web Analytics za anonimno statistiko obiskov spletnega mesta. Orodje se ne aktivira pred vašim soglasjem in ne uporabljamo za oglaševalske ali profilne namene. Privolitev lahko kadarkoli prekličete v nastavitvah piškotkov v nogi strani."
        ),
      ],
    },
    {
      id: "uporabniki",
      heading:
        "5. Uporabniki osebnih podatkov, pogodbena obdelava in posredovanje podatkov v tretje države",
      blocks: [
        p(
          `Do vaših osebnih podatkov smejo dostopati zgolj zaposleni v podjetju ${legalFacts.companyShort} in obdelovalci osebnih podatkov, ki so za to neposredno pooblaščeni.`
        ),
        p(
          `${legalFacts.companyShort} vaših osebnih podatkov ne bo nikoli posredoval nepooblaščenim tretjim osebam.`
        ),
        p(
          `Z uporabo ${legalFacts.companyShort} spletnih mest in drugih storitev soglašate, da lahko ${legalFacts.companyShort} posamezna opravila v zvezi z vašimi osebnimi podatki zaupa spodaj naštetim obdelovalcem. Navedeni obdelovalci lahko vaše osebne podatke obdelujejo izključno v imenu in v skladu s pisnimi navodili Flexida, v mejah pooblastila, kot izhaja iz pogodbe med ${legalFacts.companyShort} in obdelovalcem, in skladno z nameni, ki so opredeljeni v Politiki.`
        ),
        p(strong(`${legalFacts.companyShort} sodeluje z naslednjimi obdelovalci:`)),
        ul(...legalFacts.processors),
      ],
    },
    {
      id: "cas",
      heading: "6. Čas hrambe osebnih podatkov",
      blocks: [
        p(
          "Upravljavec osebnih podatkov ne obdeluje dlje, kot je treba za doseganje namenov, za katere so bili osebni podatki zbrani in nadalje obdelovani."
        ),
        p(
          `Osebne podatke, ki jih ${legalFacts.companyShort} obdeluje zaradi izvedbe pogodbe, hrani ${legalFacts.companyShort} za obdobje, ki je potrebno za izvršitev pogodbe in še ${legalFacts.contractRetentionYears} let po njenem prenehanju, razen v primerih, ko pride med vami in upravljavcem do spora v zvezi s pogodbo. V takem primeru hrani ${legalFacts.companyShort} podatke še ${legalFacts.disputeRetentionYears} let po pravnomočnosti sodne ali arbitražne odločbe ali poravnave ali, če sodnega spora ni bilo, ${legalFacts.disputeRetentionYears} let od dneva mirne rešitve spora.`
        ),
        p(
          `Osebne podatke, ki jih ${legalFacts.companyShort} obdeluje na podlagi zakona, hrani ${legalFacts.companyShort} za obdobje, ki ga predpisuje zakon.`
        ),
        p(
          `Osebne podatke, ki jih upravljavec obdeluje na podlagi vaše osebne privolitve ali zakonitega interesa, hrani ${legalFacts.companyShort} trajno, do preklica vaše privolitve oz. zahteve po prekinitvi obdelave. ${legalFacts.companyShort} take podatke izbriše pred preklicem le v primeru, da je namen obdelave osebnih podatkov že dosežen ali če tako določa zakon.`
        ),
        p(
          `Po preteku obdobja hrambe bo ${legalFacts.companyShort} vaše osebne podatke učinkovito in trajno zbrisal ali anonimiziral, tako da jih ne bo več mogoče povezati z vami.`
        ),
      ],
    },
    {
      id: "skrb",
      heading: "7. Skrb za varnost osebnih podatkov",
      blocks: [
        p(
          strong(
            `${legalFacts.companyShort} je zavezan k zaščiti vaših osebnih podatkov. Nepooblaščen dostop do njih, njihovo uporabo in razkritje preprečuje z naslednjimi ukrepi:`
          )
        ),
        ul(
          "podatke varujejo prostori, oprema in sistemska programska oprema, vključno z vhodno-izhodnimi enotami,",
          "podatke varuje aplikativna programska oprema, s katero se obdelujejo osebni podatki,",
          `${legalFacts.companyShort} preprečuje nepooblaščen dostop do osebnih podatkov pri njihovem prenosu, vključno s prenosom po telekomunikacijskih sredstvih in omrežjih,`,
          `${legalFacts.companyShort} zagotavlja učinkovit način blokiranja, uničenja, izbrisa ali anonimiziranja osebnih podatkov, ko preneha namen, za katerega so bili zbrani,`,
          `${legalFacts.companyShort} omogoča poznejše ugotavljanje, kdaj so bili posamezni podatki vnešeni v zbirko osebnih podatkov, uporabljeni, posredovani ali drugače obdelani in kdo je to storil.`
        ),
        p(
          strong(
            `Nepooblaščen dostop do osebnih podatkov, njihovo uporabo in razkritje ${legalFacts.companyShort} preprečuje z naslednjimi varnostnimi tehnologijami ter postopki:`
          )
        ),
        ul(
          "kontrolo fizičnih dostopov,",
          "zaklepanjem prostorov, omar, računalnikov,",
          "hranjenjem nosilcev osebnih podatkov v varovanih prostorih,",
          "preprečitvijo vpogleda v osebne podatke vzdrževalcem prostorov, strankam in drugim obiskovalcem prostorov pogodbenega obdelovalca,",
          "preprečitvijo uporabe gesel osebam, ki jim geslo ni bilo neposredno dodeljeno oziroma za drug namen, kot je določeno,",
          "omejitvijo iznosov podatkov s strani zaposlenih,",
          "kontroliranjem kopij in iznosov podatkov,",
          "omejenim, evidentiranim in zavarovanim prenosom podatkov preko telekomunikacijskih omrežij,",
          "odvzemom podatkov osebam, ki jim preneha pogodba pri pogodbenem obdelovalcu,",
          "strogo ločitvijo od podatkov morebitnih drugih upravljavcev."
        ),
      ],
    },
    {
      id: "pravice",
      heading: "8. Pravice uporabnikov v zvezi z varstvom osebnih podatkov",
      blocks: [
        p(
          `V skladu s Splošno uredbo o varstvu osebnih podatkov vam ${legalFacts.companyShort} zagotavlja naslednje pravice v zvezi z varstvom osebnih podatkov, ki so podrobneje razdelane v nadaljevanju:`
        ),
        ul(
          "pravico dostopa do podatkov,",
          "pravico do popravka,",
          "pravico do izbrisa (»pravica do pozabe«),",
          "pravico do omejitve obdelave,",
          "pravico do prenosljivosti podatkov,",
          "pravico do ugovora."
        ),
        h3("Pravica dostopa do podatkov"),
        p(
          `Od Flexida imate pravico dobiti potrditev, ali ${legalFacts.companyShort} obdeluje vaše osebne podatke, in kadar je temu tako, imate pravico dobiti dostop do vaših osebnih podatkov in naslednjih informacij v zvezi z obdelavo osebnih podatkov:`
        ),
        ul(
          "nameni obdelave,",
          "vrste osebnih podatkov,",
          "kadar je mogoče, predvideno obdobje hrambe osebnih podatkov ali, če to ni mogoče, merila, ki se uporabijo za določitev tega obdobja,",
          "obstoj pravice, da se od upravljavca zahteva popravek ali izbris osebnih podatkov ali omejitev obdelave osebnih podatkov,",
          "pravica do vložitve pritožbe pri nadzornem organu,",
          "kadar osebni podatki niso zbrani od uporabnika, vse razpoložljive informacije v zvezi z njihovim virom,"
        ),
        p(
          `Na podlagi vaše zahteve vam bo ${legalFacts.companyShort} zagotovil brezplačno kopijo vaših osebnih podatkov, ki se obdelujejo.`
        ),
        h3("Pravica do popravka"),
        p(
          `Od Flexida imate pravico zahtevati, da ta brez nepotrebnega odlašanja popravi netočne osebne podatke v zvezi z vami. Ob upoštevanju namenov obdelave imate pravico do dopolnitve nepopolnih osebnih podatkov, vključno s predložitvijo dopolnilne izjave.`
        ),
        h3("Pravica do izbrisa (»pravica do pozabe«)"),
        p(
          `Od Flexida imate pravico zahtevati, da brez nepotrebnega odlašanja izbriše osebne podatke v zvezi z vami, ${legalFacts.companyShort} pa mora vaše osebne podatke brez nepotrebnega odlašanja izbrisati v naslednjih primerih:`
        ),
        ul(
          "kadar osebni podatki niso več potrebni za namene, za katere so bili zbrani ali kako drugače obdelani,",
          "kadar prekličete privolitev, ki je podlaga za obdelavo vaših osebnih podatkov, pa za obdelavo ne obstaja nobena druga pravna podlaga,",
          "kadar ugovarjate obdelavi na podlagi zakonitega interesa upravljavca, pa za njihovo obdelavo ne obstajajo nobeni prevladujoči zakoniti razlogi,",
          "kadar ugovarjate obdelavi za potrebe neposrednega trženja,",
          "kadar je osebne podatke treba izbrisati za izpolnitev pravne obveznosti v skladu s pravom EU ali slovenskim pravnim redom."
        ),
        h3("Pravica do omejitve obdelave"),
        p(
          `Pravico imate zahtevati, da ${legalFacts.companyShort} omeji obdelavo vaših osebnih podatkov, kadar velja en od naslednjih primerov:`
        ),
        ul(
          "kadar oporekate točnosti podatkov, in sicer za obdobje, ki upravljavcu omogoča preveriti točnost vaših osebnih podatkov,",
          "kadar je obdelava nezakonita in nasprotujete izbrisu osebnih podatkov ter namesto tega zahtevate omejitev njihove uporabe,",
          `kadar ${legalFacts.companyShort} osebnih podatkov ne potrebuje več za namene obdelave, temveč jih vi potrebujete za uveljavljanje, izvajanje ali obrambo pravnih zahtevkov,`,
          "kadar ste vložili ugovor v zvezi z obdelavo, dokler se ne preveri, ali zakoniti razlogi upravljavca prevladajo nad vašimi razlogi."
        ),
        h3("Pravica do prenosljivosti podatkov"),
        p(
          `Pravico imate, da prejmete osebne podatke v zvezi z vami, ki jih je posedoval ${legalFacts.companyShort}, v strukturirani, splošno uporabljani in strojno berljivi obliki, in pravico, da te podatke posredujete drugemu upravljavcu, ne da bi vas ${legalFacts.companyShort}, ki so mu bili osebni podatki zagotovljeni, pri tem oviral, kadar:`
        ),
        ul(
          "obdelava temelji na vaši privolitvi ali pogodbi in",
          "se obdelava izvaja z avtomatiziranimi sredstvi."
        ),
        h3("Pravica do ugovora"),
        p(
          `Na podlagi razlogov, povezanih z vašim posebnim položajem, imate pravico, da kadarkoli ugovarjate obdelavi osebnih podatkov, če ta temelji na zakonitih interesih, za katere si prizadeva ${legalFacts.companyShort} ali tretja oseba. ${legalFacts.companyShort} bo prenehal obdelovati osebne podatke, razen če dokaže nujne razloge za obdelavo, ki prevladajo nad vašimi interesi, pravicami in svoboščinami ali za uveljavljanje, izvajanje ali obrambo pravnih zahtevkov.`
        ),
        p(
          "Kadar se osebni podatki obdelujejo za namene neposrednega trženja, imate pravico, da kadarkoli ugovarjate obdelavi vaših osebnih podatkov za namene takega trženja, vključno s profiliranjem, če je povezano s takim neposrednim trženjem. Če neposredno trženje temelji na privolitvi, se pravica do ugovora lahko izvede s preklicem dane osebne privolitve."
        ),
      ],
    },
    {
      id: "postopek",
      heading: "9. Postopek uveljavljanja pravic",
      blocks: [
        p(
          "Vse zgoraj navedene zahteve, ki se tičejo uveljavljanja pravic v zvezi z vašimi osebnimi podatki, lahko uveljavljate preko e-naslova ",
          emailLink,
          ` ali po pošti na naslov ${legalFacts.companyDoO}, ${legalFacts.registeredAddress}.`
        ),
        p(
          "Če boste zahtevo v skladu z zgornjim odstavkom predložili z elektronskimi sredstvi, se vam bodo informacije, v kolikor bo to mogoče, zagotovile z elektronskimi sredstvi, razen v primeru, da boste zahtevali drugače."
        ),
        p(
          "Upravljalec lahko za potrebe zanesljive identifikacije v primeru uveljavljanja vaših pravic v zvezi z osebnimi podatki od vas zahteva dodatne podatke, ki so potrebni za potrditev vaše identitete, ukrepanje pa v skladu s tem poglavjem lahko zavrne le v primeru, da dokaže, da vas ne more zanesljivo identificirati."
        ),
        p(
          `Upravljalec bo na zahtevo, s katero uveljavljate svoje pravice v zvezi s svojimi osebnimi podatki, odgovoril brez nepotrebnega odlašanja in najpozneje v enem mesecu od prejema zahteve. ${legalFacts.companyShort} lahko rok za uresničevanje pravic podaljša za največ dva dodatna meseca ob upoštevanju kompleksnosti in števila zahtev.`
        ),
        p(
          strong(
            `Če so vaše zahteve v skladu s tem poglavjem očitno neutemeljene ali pretirane, zlasti ker se ponavljajo, lahko ${legalFacts.companyShort}:`
          )
        ),
        ul(
          "zaračuna razumno pristojbino, pri čemer upošteva administrativne stroške posredovanja informacij ali sporočila ali izvajanja zahtevanega ukrepa,",
          "zavrne ukrepanje v zvezi z zahtevo."
        ),
      ],
    },
    {
      id: "pravica",
      heading: "10. Pravica do vložitve pritožbe v zvezi z obdelovanjem osebnih podatkov",
      blocks: [
        p(
          "Morebitno pritožbo v zvezi z obdelovanjem vaših osebnih podatkov lahko pošljete na elektronski naslov ",
          emailLink,
          ` ali po pošti na naslov ${legalFacts.companyDoO}, ${legalFacts.registeredAddress}.`
        ),
        p(
          "Pravico imate, da vložite pritožbo tudi neposredno pri informacijskem pooblaščencu, če menite, da obdelava osebnih podatkov v zvezi z vami krši slovenske predpise ali predpise EU na področju varstva osebnih podatkov."
        ),
      ],
    },
    {
      id: "veljavnost",
      heading: "11. Veljavnost Politike",
      blocks: [
        p(
          `Politika velja od ${legalFacts.privacyEffectiveDate} dalje in se lahko kadarkoli spremeni ali dopolni.`
        ),
      ],
    },
  ],
};
