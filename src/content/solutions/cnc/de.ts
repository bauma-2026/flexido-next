import type { SolutionPageContent } from "../types";

/** German translation of `sl.ts`. Same structure, block-for-block. */
export const cncContent: SolutionPageContent = {
  routeKey: "solutionCnc",
  hero: {
    backLabel: "← Alle Lösungen",
    eyebrow: "Automatisierung von CNC-Maschinen",
    titleLines: ["Ein CNC-Prozess,", "nicht nur eine Zelle."],
    subhead:
      "Wenn die CNC-Fertigung mehr erfordert als die wiederkehrende Beschickung einer einzelnen Maschine, gestalten wir die Automatisierung rund um Maschinen, Teile, Stationen und Materialfluss.",
    ctas: [
      { label: "Standard oder kundenspezifisch", anchor: "#resitev" },
      { label: "Schauen wir uns Ihren Prozess an", anchor: "#kontakt" },
    ],
    videoSrc: "/video/flexido/hero-cnc.mp4",
  },
  wikiNav: [
    { id: "cnc-proces", label: "CNC-Prozess" },
    { id: "moznosti", label: "Umsetzungsmöglichkeiten" },
    { id: "resitev", label: "Standard oder kundenspezifisch" },
    { id: "projekt", label: "Projekt" },
  ],
  sections: [
    {
      type: "problemSplit",
      id: "cnc-proces",
      eyebrow: "CNC-Fertigungsprozess",
      heading: "Die Automatisierung beginnt rund um die Bearbeitung.",
      body: "Die CNC-Maschine ist nur ein Teil des Prozesses. Die Anforderungen wachsen, sobald Teilehandling, zusätzliche Arbeitsschritte und Ausrüstung rund um die Bearbeitung aufeinander abgestimmt werden müssen.",
      itemsEyebrow: "Wo Anforderungen entstehen",
      items: [
        "Be- und Entladen von Teilen",
        "Unterschiedliche Werkstücke und Greifarten",
        "Mehrere CNC-Maschinen oder zusätzliche Arbeitsschritte",
        "Materialfluss, Prüfung und Abstimmung der Ausrüstung",
      ],
      result: "Ergebnis: die Lösung muss um den tatsächlichen Prozess herum gestaltet werden, nicht nur um die CNC-Maschine.",
    },
    {
      type: "capabilityGroups",
      id: "moznosti",
      eyebrow: "Umsetzungsmöglichkeiten",
      heading: "Wir bauen die CNC-Lösung rund um den tatsächlichen Prozess auf.",
      body: "Die einzelnen Bausteine werden anhand der Maschinen, Teile, des Raums, der Abfolge der Arbeitsschritte und des benötigten Materialflusses ausgewählt.",
      groups: [
        {
          title: "Maschinen und Bewegung",
          items: [
            "Beschickung einer oder mehrerer CNC-Maschinen",
            "Roboter mit zusätzlicher servogetriebener Linearachse bei Bedarf",
          ],
        },
        {
          title: "Teilehandling",
          items: [
            "Unterschiedliche Teiletypen und angepasste Greifarten",
            "ToolChanger — automatischer Werkzeug- oder Greiferwechsel für mehrere Teiletypen, sofern konfiguriert",
          ],
        },
        {
          title: "Zusätzliche Arbeitsschritte",
          items: [
            "Bildverarbeitung, Prüfung und Messung",
            "Waschen, Entgraten, Gravieren oder andere Prozessstationen",
          ],
        },
        {
          title: "Fluss und Integration",
          items: [
            "Materialzufuhr, -abfuhr und Zwischenpufferung",
            "Anbindung von CNC-Maschinen, Roboter, Stationen und vorhandener Ausrüstung",
          ],
        },
      ],
    },
    {
      type: "comparisonSplit",
      id: "resitev",
      eyebrow: "Lösungswahl",
      heading: "Standardzelle oder umfassendere CNC-Automatisierung.",
      body: "Der tatsächliche Prozess bestimmt den Ausgangspunkt: ob eine konfigurierbare Zelle ausreicht oder eine Konfiguration rund um mehrere verbundene Elemente nötig ist.",
      left: {
        tag: "Standard-CNC-Zelle",
        title: "Für die wiederkehrende Beschickung einer CNC-Maschine.",
        body: "FLEX 7 CNC Slim ist eine konfigurierbare Basis für Be- und Entladen sowie Standardstationen und -module in einem wiederkehrenden Prozess.",
        link: { label: "Standard-CNC-Zelle ansehen", routeKey: "standardCellsCnc" },
      },
      right: {
        tag: "Kundenspezifische CNC-Automatisierung",
        title: "Für einen Prozess, der über eine Zelle hinausgeht.",
        body: "Die Lösung vereint mehrere Maschinen, Bewegungsabläufe, unterschiedliche Teile, zusätzliche Stationen, Materialfluss und die Anbindung vorhandener Ausrüstung.",
        link: { label: "Kundenspezifische Systeme ansehen", routeKey: "solutionCustomSystems" },
      },
    },
    {
      type: "crossSell",
      id: "standardna-osnova",
      eyebrow: "Standardbasis",
      heading: "Wenn eine konfigurierbare Zelle den Prozess abdeckt.",
      body: "FLEX 7 CNC Slim bleibt der Ausgangspunkt für die wiederkehrende CNC-Beschickung.",
      right: {
        kind: "image",
        src: "/images/systems/raw/flex-7-cnc-slim-studio.png",
        alt: "FLEX 7 CNC Slim",
        reversed: true,
        size: "feature",
        link: { label: "FLEX 7 CNC Slim ansehen", routeKey: "standardCellsCnc" },
      },
    },
    {
      type: "proofProject",
      id: "projekt",
      eyebrow: "Realisiertes Projekt",
      heading: "Ein- und Ausgangsförderband.",
      tag: "CNC, Cobot und Materialfluss",
      title: "Mehr Autonomie an unterschiedlichen CNC-Maschinen.",
      body: "Ein Förderband für Standard-KLT-Behälter unterstützt eine kollaborative Zelle an unterschiedlichen CNC-Maschinen. Mit integrierter Kamera und einem TM-Roboter ermöglicht es einen eigenständigen, durchgehenden Betrieb mit unterschiedlichen Werkstücken.",
      result: "Das System verwendet fünf Eingangs- und fünf Ausgangs-KLT-Behälter mit den Maßen 600 × 400 mm.",
      image: { src: "/images/systems/raw/vhodno-izhodna-tracna-proga.png", alt: "Ein- und Ausgangsförderband", objectPosition: "object-[50%_38%]" },
      routeKey: "referenceConveyor",
      readMoreLabel: "Projekt lesen",
      chrome: "open",
      resultTone: "quiet",
    },
  ],
  kontakt: {
    eyebrow: "Kontakt",
    heading: "Werfen wir einen Blick auf Ihren CNC-Prozess.",
    body: "Senden Sie uns grundlegende Informationen zu Maschinen, Teilen, zusätzlichen Arbeitsschritten und Materialfluss. Gemeinsam prüfen wir, ob eine Standardzelle den Prozess abdeckt oder eine umfassendere CNC-Automatisierung nötig ist.",
    ctaLabel: "Anfrage senden",
    mailto: "info@flexido.eu",
    imageSrc: "/images/flexido/legacy/image_8.jpg.jpeg",
    imageAlt: "CNC-Automatisierung des Produktionsprozesses",
    captionEyebrow: "Erster Schritt",
    captionText: "Wo müssen CNC-Maschinen, Teile und Materialfluss zu einem Prozess zusammenkommen?",
    variant: "photo",
  },
};
