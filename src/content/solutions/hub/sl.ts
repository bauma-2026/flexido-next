import type { HubContent } from "../types";

/**
 * Faithful structural port of `app/(default)/resitve/page.tsx`'s current
 * copy. One deliberate fix while porting: the final CTA's mailto used
 * `info@flexido.si` while every other CTA on this page (and all 7 solution
 * pages) uses `info@flexido.eu` — standardized to `.eu` here (flagged in
 * the migration report; not a content/claim change).
 */
export const hubContent: HubContent = {
  hero: {
    eyebrow: "Rešitve",
    heading: "Rešitve za stabilnejšo proizvodnjo",
    subhead: "Izberite področje, kjer vaš proces potrebuje avtomatizacijo.",
    ctaLabel: "Izberi področje",
  },
  gridHeading: "Kje se vaš proces ustavlja?",
  gridBody:
    "Začnite pri delu proizvodnje, kjer nastajajo zastoji, ročni koraki ali čakanje med fazami.",
  gridItems: [
    { routeKey: "solutionCnc", title: "CNC stroji", desc: "Nalaganje, odvzem in boljši izkoristek stroja.", label: "Proces stroja", icon: "cnc" },
    { routeKey: "solutionInjectionMolding", title: "Brizganje plastike", desc: "Stabilen cikel, odvzem kosov in manj ročnega dela.", label: "Cikel proizvodnje", icon: "imm" },
    { routeKey: "solutionManipulation", title: "Manipulacija materiala", desc: "Premikanje, obračanje in prenos kosov med fazami.", label: "Prenos materiala", icon: "manipulation" },
    { routeKey: "solutionLogistics", title: "Paletizacija in interna logistika", desc: "Ko material ne teče gladko skozi proizvodnjo.", label: "Tok materiala", icon: "materialFlow" },
  ],
  gridReadMoreLabel: "Preberi več",
  widerApproach: {
    eyebrow: "Širši pristop",
    heading: "Ko problem presega eno področje.",
    linkLabel: "Poglej rešitev",
    paths: [
      {
        title: "Avtomatizacija proizvodnje",
        body: "Ko želite povezati več korakov procesa v stabilen tok.",
        routeKey: "solutionProductionAutomation",
      },
      {
        title: "Namenski sistemi",
        body: "Ko standardna rešitev ne pokrije prostora, kosov in realnega poteka dela.",
        routeKey: "solutionCustomSystems",
      },
    ],
    footNote: {
      template: "Za ponavljajoče naloge ob operaterju poglejte tudi {0}.",
      link: { label: "kolaborativne robote", routeKey: "solutionCobots" },
    },
  },
  proof: {
    eyebrow: "Realizirani projekti",
    heading: "Rešitve v praksi.",
    body: "Dva konkretna primera avtomatizacije proizvodnega procesa.",
    readMoreLabel: "Preberi projekt",
    items: [
      {
        area: "Brizganje plastike",
        title: "Robotska celica za nabrizgavanje",
        body: "Avtomatizacija nabrizgavanja kosov in optimizacija zahtevane količine v proizvodnem procesu.",
        result: "Skoraj tretjina več kosov od prvotno predvidene količine.",
        routeKey: "referenceOvermolding",
        image: {
          src: "/images/systems/raw/robotska-celica-za-nabrizgavanje.png",
          width: 757,
          height: 1024,
        },
      },
      {
        area: "CNC in tok materiala",
        title: "Vhodno-izhodna tračna proga",
        body: "Za povečanje avtonomije kolaborativne celice ob različnih CNC strojih smo pripravili tračno progo za KLT zaboje.",
        result:
          "Samostojno neprekinjeno obratovanje z različnimi obdelovanci v kombinaciji z integrirano kamero.",
        routeKey: "referenceConveyor",
        image: {
          src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png",
          width: 757,
          height: 1024,
          objectPosition: "object-[50%_27%] scale-[1.17] origin-[100%_58%] group-hover:scale-[1.2]",
        },
      },
    ],
  },
  unsure: {
    eyebrow: "Niste prepričani?",
    heading: "Začnite pri procesu.",
    body: "Najprej pogledamo stroj, kos, tok materiala, prostor in proizvodni ritem.",
    cta: { label: "Kako poteka projekt", routeKey: "process" },
  },
  finalCta: {
    eyebrow: "Naslednji korak",
    heading: "Poglejmo vaš proces.",
    body: "Povejte nam, kaj želite avtomatizirati. Skupaj bomo preverili, katera rešitev ima največ smisla za vaš proces.",
    ctaLabel: "Pošlji povpraševanje",
    mailto: "info@flexido.eu",
  },
};
