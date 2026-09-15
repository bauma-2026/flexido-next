import type { SolutionPageContent } from "../types";

/** Faithful structural port of `app/(default)/resitve/logistika/page.tsx`. */
export const logisticsContent: SolutionPageContent = {
  routeKey: "solutionLogistics",
  hero: {
    backLabel: "← Alle Lösungen",
    eyebrow: "Interne Logistik",
    titleLines: ["Material zwischen Produktionsphasen."],
    subhead:
      "Wir gestalten den physischen Fluss von Paletten, Behältern, KLT-Behältern und Material zwischen Maschinen, Stationen und den nächsten Phasen des Prozesses.",
    ctas: [{ label: "Materialfluss ansehen", anchor: "#tok-materiala" }],
    videoSrc: "/video/flexido/hero-logistika.mp4",
  },
  wikiNav: [
    { id: "tok-materiala", label: "Materialfluss" },
    { id: "sistemi", label: "Systeme" },
    { id: "izvedbe", label: "Übergabe" },
    { id: "paletizacija", label: "Palettierung" },
    { id: "povezovanje", label: "Anbindung" },
    { id: "projekt", label: "Projekt" },
  ],
  sections: [
    {
      type: "problemSplit",
      id: "tok-materiala",
      eyebrow: "Produktionslogistik",
      heading: "Material muss die nächste Phase erreichen.",
      body: [
        "Wenn Maschinen und Stationen getrennt voneinander arbeiten, wartet Material zwischen den Operationen, staut sich an Zwischenpunkten oder bewegt sich ohne eine klare Art der Übergabe.",
        "Die interne Logistik legt fest, wie der Fluss zwischen den einzelnen Phasen verbunden wird.",
      ],
      itemsEyebrow: "Wo Verzögerungen entstehen",
      items: [
        "Material wartet zwischen den Operationen",
        "Stationen sind nicht zu einem einzigen Fluss verbunden",
        "Behälter oder Paletten warten auf die nächste Phase",
        "Transport und Produktion sind nicht aufeinander abgestimmt",
      ],
      result: "solange die Phasen nicht verbunden sind, wartet Material zwischen den Operationen.",
      resultLabel: "Ergebnis",
    },
    {
      type: "capabilityGroups",
      id: "sistemi",
      eyebrow: "Physischer Materialfluss",
      heading: "Die Elemente, die Produktionsphasen verbinden.",
      body: "Wir setzen den Materialfluss aus den Elementen zusammen, die von den jeweiligen Maschinen, Materialeinheiten und dem Weg durch die Produktion gefordert werden. Bei mobilem Transport unterscheiden wir geführte Wege von autonomen mobilen Einheiten, die mit onboard Sensorik navigieren, Routen dynamisch anpassen und sicher neben Menschen arbeiten — ohne feste Führungsinfrastruktur, wo das sinnvoll ist.",
      groups: [
        { title: "KLT, Behälter und Paletten", body: "Materialeinheiten, die zwischen den Phasen in einem festgelegten Fluss bleiben müssen." },
        { title: "Bänder und Transportwege", body: "Verbindungen zwischen Maschinen, Stationen und Übergabepunkten." },
        { title: "Puffer und Zwischenlagerung", body: "Orte, an denen Material wartet, gesammelt oder für die nächste Phase vorbereitet wird." },
        { title: "Lager- und Hebesysteme", body: "Organisation des Materials, wenn der Prozess mehrere Ebenen oder eine Zwischenlagerung erfordert." },
        {
          title: "Mobiler Transport (AMR / SDV)",
          body: "Autonome mobile Einheiten für Wege zwischen Bereichen. Tragfähigkeit und Ausführung passen sich der Umgebung an — von Spritzgussbetrieben bis CNC-Werkstätten.",
        },
        { title: "Anbindung von Maschinen und Stationen", body: "Abgestimmter Fluss von der Materialquelle bis zur nächsten Operation." },
      ],
    },
    {
      type: "capabilityGroups",
      id: "izvedbe",
      eyebrow: "Übergabekonfigurationen",
      heading: "Wie mobiler Transport die Übergabestation anbindet.",
      body: "An der Übergabestation hängt die Ausführung von der Operation, dem Prozessrhythmus und dem erforderlichen Automatisierungsgrad ab. Das sind Implementierungsmuster — keine Standardprodukte oder Referenzprojekte.",
      layout: "openColumns",
      groups: [
        {
          title: "Manuelle Beschickung",
          body: "Übergabestation mit Anlieferung per mobilem Transport. Der Bediener führt den manuellen Handhabungsschritt an der Station aus.",
        },
        {
          title: "Stationärer Roboter",
          body: "Ein fester Industrie- oder Kollaborativroboter an der Übergabestation übernimmt die Übergabe vom mobilen Transport.",
        },
        {
          title: "Beweglicher Roboter",
          body: "Roboter oder Cobot auf einer Linearachse an der Übergabestation; mobiler Transport liefert oder entfernt die Last am Übergabepunkt.",
        },
      ],
    },
    {
      type: "capabilityGroups",
      id: "paletizacija",
      eyebrow: "Palettierung und Depalettierung",
      heading: "Die Palette ist Teil eines umfassenderen Materialflusses.",
      body: "Palettierung verbindet Materialvorbereitung, Stapelung, Zwischenlagerung, Transport und die nächste Phase. Depalettierung ist der umgekehrte Prozess im gleichen logistischen Kontext.",
      layout: "openColumns",
      groups: [
        {
          title: "Sensorik und Sicherheit",
          items: [
            "Vision-System für flexible Erkennung und kürzere Umrüstzeiten",
            "3D-Sicherheitssensorik für sicheres Arbeiten mit Bedienern",
            "Teil- oder Vollautomatisierung, abhängig vom Prozess",
          ],
        },
        {
          title: "Stationen und Autonomie",
          items: [
            "Eine oder zwei Palettenladestellen",
            "Magazin für leere Paletten für längere autonome Betriebszeit",
            "Automatisches Folienumwickeln am Auslauf",
          ],
        },
        {
          title: "Transportanbindung",
          items: [
            "Automatische Palettenanlieferung und Abtransport per mobilem Transport",
            "Depalettierung als umgekehrter Prozess im gleichen Fluss",
            "Geeignet für Lager, Verarbeitungslinien und Lebensmittelproduktion",
          ],
        },
      ],
    },
    {
      type: "crossSell",
      id: "povezovanje",
      eyebrow: "Anbindung von Systemen",
      heading: "Physischer Fluss braucht abgestimmte Übergaben.",
      body: "Für einen abgestimmten Ablauf muss man wissen, woher das Material kommt, wohin es bestimmt ist, wann es verfügbar ist und wie es zwischen Produktions- und Transportausrüstung übergeben wird.",
      right: {
        kind: "box",
        tag: "Middleware",
        title: "Eine Verbindungsschicht für Ausrüstung und Systeme.",
        body: "Middleware verbindet Produktionsausrüstung, Transporteinheiten, Stationen und Produktionssysteme. Produktdetails, Schnittstellen und Transportaufträge finden Sie auf der Middleware-Seite.",
        link: { label: "Middleware ansehen", routeKey: "standardCellsMiddleware" },
      },
    },
    {
      type: "proofProject",
      id: "projekt",
      eyebrow: "Realisiertes Projekt",
      heading: "Ein- und Ausgangsförderband.",
      tag: "CNC, KLT und Materialfluss",
      title: "KLT-Behälter an verschiedenen CNC-Maschinen.",
      body: "Ein Förderband für Standard-KLT-Behälter unterstützt eine kollaborative Zelle an verschiedenen CNC-Maschinen. Mit integrierter Kamera und TM-Roboter ermöglicht es einen selbstständigen, durchgehenden Betrieb mit unterschiedlichen Werkstücken.",
      result: "Das System verwendet fünf Eingangs- und fünf Ausgangs-KLT-Behälter mit den Abmessungen 600 × 400 mm.",
      image: { src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png", alt: "Ein- und Ausgangsförderband", objectPosition: "object-[50%_38%]" },
      routeKey: "referenceConveyor",
      readMoreLabel: "Projekt lesen",
      chrome: "open",
      resultTone: "quiet",
    },
  ],
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Wie bewegt sich Material durch Ihren Prozess?",
    body: "Senden Sie uns grundlegende Informationen zu Material, Behältern oder Paletten, Ursprung und Ziel, Stationen, Wartepunkten und Ihrer aktuellen Transportart.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/home-slide-v2-2.jpg.jpeg",
    imageAlt: "Interne Logistik und Materialfluss in der Produktion",
    captionEyebrow: "Erster Schritt",
    captionText: "Wo wartet Material, wird es gelagert oder geht in die nächste Phase über?",
    variant: "photo",
  },
};
