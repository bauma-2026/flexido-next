import type { LegalPageContent } from "../types";
import { p } from "../blocks";
import { legalFacts } from "../shared";

export const legalNoticeContent: LegalPageContent = {
  routeKey: "legalNotice",
  meta: {
    title: "Pravno obvestilo | Flexido",
    description: "Pogoji uporabe spletnega mesta Flexido.",
  },
  eyebrow: "Pravno",
  title: "Pravno obvestilo",
  desc: "Pogoji uporabe spletnega mesta Flexido.",
  sections: [
    {
      id: "usage",
      heading: "1. Pogoji uporabe",
      blocks: [
        p(
          `Dobrodošli na spletnem mestu ${legalFacts.companyDoOComma} na naslovu ${legalFacts.websiteUrl}. Namen spletnega mesta je obveščati o ponudbi in storitvah, ki jih nudi podjetje ${legalFacts.companyDoO}. Z ogledom tega spletnega mesta potrjujete, da se strinjate s pogoji in jih v celoti sprejemate.`
        ),
      ],
    },
    {
      id: "general",
      heading: "2. Splošno",
      blocks: [
        p(
          `Lastnik spletnega mesta ${legalFacts.companyDoO} si pridržuje pravico, da spreminja vsebino spletnega mesta in/ali preneha z njegovim dopolnjevanjem kadarkoli, brez vnaprejšnjega obveščanja. Hkrati ne prevzema odgovornosti za nedosegljivost spletnega mesta, izpad gostiteljskega strežnika ali objavo morebitno pomanjkljivih informacij.`
        ),
      ],
    },
    {
      id: "liability",
      heading: "3. Omejitev odgovornosti",
      blocks: [
        p(
          `${legalFacts.companyDoO} ne odgovarja za nikakršno posredno, neposredno, izredno ali slučajno škodo, ki bi nastala zaradi obiskovalčevega napačnega razumevanja vsebin spletnega mesta. Za morebitne tipkarske napake ne odgovarjamo in se zanje opravičujemo.`
        ),
      ],
    },
    {
      id: "copyright",
      heading: "4. Avtorske pravice",
      blocks: [
        p(
          "Vsa besedila, slike ter ostale vsebine na spletnem mestu je zbral in uredil lastnik spletnega mesta in so zgolj informativne narave. Vsebina spletnega mesta ne sme biti uporabljena ali prikazana na kakršenkoli način brez uradnega dovoljenja lastnika spletnega mesta. Logotipi so blagovne znamke ali registrirane blagovne znamke svojih lastnikov. Ni jih dovoljeno kopirati, uporabljati, razmnoževati ali objavljati za javne in komercialne namene."
        ),
      ],
    },
    {
      id: "privacy",
      heading: "5. Varovanje zasebnosti",
      blocks: [
        p(
          `Na spletnem mestu zbiramo kontaktne informacije o tistih obiskovalcih, ki bi radi prišli do informacij in v ta namen kontaktirajo podjetje ${legalFacts.companyDoO}. Izključno odgovornost za verodostojnost osebnih podatkov in kontaktnih informacij prevzamejo obiskovalci.`
        ),
        p(
          "Kontaktne informacije uporabljamo za vzpostavitev stika z obiskovalcem, kadar je to potrebno ali obiskovalec to sam želi. Osebnih podatkov in kontaktnih informacij ne uporabljamo v druge namene in jih ne razkrivamo tretjim osebam."
        ),
        p(
          `Naše spletno mesto vsebuje tudi povezave na spletna mesta tretjih oseb. ${legalFacts.companyDoO} ne prevzema odgovornosti za spoštovanje zasebnosti in vsebino teh spletnih mest. Za delovanje strani uporabljamo nujne piškotke in shranjevanje vaše izbire glede piškotkov. Analitična orodja za anonimno statistiko obiskov (Vercel Web Analytics) se aktivirajo le, če z njimi soglašate. Svojo izbiro lahko kadarkoli spremenite v nastavitvah piškotkov v nogi strani.`
        ),
      ],
    },
  ],
};
