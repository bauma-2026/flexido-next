import type { CompanyAboutContent } from "../types";

export const aboutContent: CompanyAboutContent = {
  routeKey: "aboutUs",
  meta: {
    title: "Über uns | Flexido",
    description:
      "Bei Flexido entwickeln und integrieren wir Robotierzellen für CNC und Spritzguss. Der Fokus liegt auf einem stabilen Prozess, weniger Handarbeit und einem klaren Fluss zwischen den Operationen.",
  },
  hero: {
    eyebrow: "Über uns",
    heading: "Produktionsautomatisierung ohne Umstände.",
    subhead:
      "Bei Flexido entwickeln und integrieren wir Robotierzellen für CNC und Spritzguss. Der Fokus liegt auf einem stabilen Prozess, weniger Handarbeit und einem klaren Fluss zwischen den Operationen.",
    primaryCta: { label: "Sehen wir uns Ihren Prozess an →", href: "#kontakt" },
    secondaryCtaLabel: "Wie wir arbeiten →",
    image: {
      src: "/images/robot.jpg",
      alt: "Flexido-Robotierzelle in der Produktion",
    },
    imageCaptionEyebrow: "In der Praxis",
    imageCaption: "Entwicklung, Integration und Unterstützung für Zellen und Produktionsprozesse.",
  },
  whatWeDo: {
    eyebrow: "Was wir tun",
    heading: "Lösungen für einen stabileren Produktionsprozess.",
    items: [
      {
        title: "Robotierzellen",
        desc: "Entwicklung und Integration von Zellen für unterschiedliche Produktionsprozesse.",
      },
      {
        title: "Prozesse verbinden",
        desc: "Wir verbinden Beladen, Entladen und Materialbewegung zwischen den Operationen.",
      },
      {
        title: "Ein vollständiger Ansatz",
        desc: "Von der Idee zur Umsetzung — Projekt, Konstruktion, Programmierung und Inbetriebnahme.",
      },
    ],
  },
  team: {
    eyebrow: "Team",
    heading: "Ein Team, das Lösungen in der Praxis entwickelt und integriert.",
    body: "Flexido ist nicht nur ein Anbieter von Robotierzellen. Hinter den Lösungen steht ein Team, das Konstruktion, Programmierung, Integration und Inbetriebnahme in einem realen Produktionsumfeld verbindet.",
    image: {
      src: "/images/flexido/about/flexido-team.jpg",
      alt: "Das Flexido-Team",
    },
  },
  video: {
    eyebrow: "Video",
    heading: "Wie Flexido in der Praxis arbeitet.",
    body: "Das Präsentationsvideo zeigt das reale Umfeld, die Systeme und die Arbeitsweise — von Standardzellen bis zu Lösungen, die sich dem Produktionsprozess anpassen.",
    src: "/video/flexido-company-video.mp4",
    poster: "/images/flexido/video/flexido-company-video-poster.jpg",
    ctaLabel: "Unternehmensvideo ansehen →",
    aside: "Ein weiteres Video zeigt Flexido-Systeme und Automatisierung in Bewegung.",
  },
  approach: {
    eyebrow: "Unser Vorgehen",
    heading: "Zuerst der Prozess. Dann die Lösung.",
    items: [
      {
        title: "Wir verstehen den Prozess",
        desc: "Zuerst schauen wir, wo Verzögerungen und manuelle Arbeit entstehen.",
      },
      {
        title: "Wir schlagen eine Lösung vor",
        desc: "Wir planen den Materialfluss und die Rolle der Robotierzelle.",
      },
      {
        title: "Wir setzen um und nehmen in Betrieb",
        desc: "Wir stellen das System auf und bringen es zu einem stabilen Betrieb.",
      },
    ],
  },
  cta: {
    id: "kontakt",
    eyebrow: "Kontakt",
    heading: "Sehen wir uns Ihren Prozess an",
    body: "Wenn Sie über Automatisierung nachdenken, ist es sinnvoll, zuerst zu prüfen, wo der Prozess seinen Rhythmus verliert.",
    label: "Anfrage senden →",
    mailto: "info@flexido.eu",
  },
};
