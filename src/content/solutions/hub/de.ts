import type { HubContent } from "../types";

/** Faithful structural port of `hub/sl.ts`. */
export const hubContent: HubContent = {
  hero: {
    eyebrow: "Lösungen",
    heading: "Lösungen für eine stabilere Produktion",
    subhead: "Wählen Sie den Bereich, in dem Ihr Prozess Automatisierung braucht.",
    ctaLabel: "Bereich wählen",
  },
  gridHeading: "Wo stockt Ihr Prozess?",
  gridBody:
    "Beginnen Sie bei dem Teil der Produktion, in dem Engpässe, manuelle Schritte oder Wartezeiten zwischen den Phasen entstehen.",
  gridItems: [
    { routeKey: "solutionCnc", title: "CNC-Maschinen", desc: "Be- und Entladen sowie eine bessere Maschinenauslastung.", label: "Maschinenprozess", icon: "cnc" },
    { routeKey: "solutionInjectionMolding", title: "Spritzguss", desc: "Ein stabiler Zyklus, Teileentnahme und weniger manuelle Arbeit.", label: "Produktionszyklus", icon: "imm" },
    { routeKey: "solutionManipulation", title: "Materialhandhabung", desc: "Bewegen, Wenden und Übergeben von Teilen zwischen den Phasen.", label: "Materialtransfer", icon: "manipulation" },
    { routeKey: "solutionLogistics", title: "Palettierung und interne Logistik", desc: "Wenn Material nicht reibungslos durch die Produktion fließt.", label: "Materialfluss", icon: "materialFlow" },
    { routeKey: "solutionProductionAutomation", title: "Produktionsautomatisierung", desc: "Wenn Sie mehrere Prozessschritte zu einem stabilen Ablauf verbinden möchten." },
    { routeKey: "solutionCustomSystems", title: "Kundenspezifische Systeme", desc: "Wenn eine Standardlösung den Platz, die Teile und den tatsächlichen Arbeitsablauf nicht abdeckt." },
    { routeKey: "solutionCobots", title: "Kollaborative Roboter", desc: "Unterstützung bei sich wiederholenden Aufgaben neben dem Bediener." },
  ],
  gridReadMoreLabel: "Mehr erfahren",
  widerApproach: {
    eyebrow: "Ein breiterer Ansatz",
    heading: "Wenn das Problem über ein Fachgebiet hinausgeht.",
    linkLabel: "Lösung ansehen",
    paths: [
      {
        title: "Produktionsautomatisierung",
        body: "Wenn es bei der Entscheidung nicht mehr um eine Maschine geht, sondern um die Verbindung mehrerer Arbeitsschritte.",
        routeKey: "solutionProductionAutomation",
      },
      {
        title: "Kundenspezifische Systeme",
        body: "Wenn die Abfolge der Arbeitsschritte, Stationen und Umsetzungsbedingungen eine gemeinsame Planung erfordert.",
        routeKey: "solutionCustomSystems",
      },
    ],
    footNote: {
      template: "Für sich wiederholende Aufgaben neben dem Bediener sehen Sie sich auch {0} an.",
      link: { label: "kollaborative Roboter", routeKey: "solutionCobots" },
    },
  },
  proof: {
    eyebrow: "Realisierte Projekte",
    heading: "Lösungen in der Praxis.",
    body: "Zwei konkrete Beispiele für die Automatisierung eines Produktionsprozesses.",
    readMoreLabel: "Projekt lesen",
    items: [
      {
        area: "Spritzguss",
        title: "Roboterzelle zum Umspritzen",
        body: "Automatisierung des Umspritzens von Teilen und Optimierung der geforderten Stückzahl im Produktionsprozess.",
        result: "Fast ein Drittel mehr Teile als ursprünglich geplant.",
        routeKey: "referenceOvermolding",
        image: {
          src: "/images/systems/raw/robotska-celica-za-nabrizgavanje.png",
          width: 757,
          height: 1024,
        },
      },
      {
        area: "CNC und Materialfluss",
        title: "Ein- und Ausgangs-Förderstrecke",
        body: "Um die Autonomie einer kollaborativen Zelle an mehreren CNC-Maschinen zu erhöhen, haben wir eine Förderstrecke für KLT-Behälter realisiert.",
        result:
          "Eigenständiger, durchgehender Betrieb mit unterschiedlichen Werkstücken in Kombination mit einer integrierten Kamera.",
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
    eyebrow: "Nicht sicher?",
    heading: "Beginnen Sie beim Prozess.",
    body: "Wir schauen uns zunächst die Maschine, das Teil, den Materialfluss, den Platz und den Produktionstakt an.",
    cta: { label: "Wie ein Projekt abläuft", routeKey: "process" },
  },
  finalCta: {
    eyebrow: "Nächster Schritt",
    heading: "Schauen wir uns Ihren Prozess an.",
    body: "Beschreiben Sie die Maschine, das Werkstück und den Prozessschritt, den Sie automatisieren möchten. Gemeinsam prüfen wir, welcher Bereich der richtige Ausgangspunkt ist.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
  },
};
