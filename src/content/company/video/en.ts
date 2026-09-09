import type { CompanyVideoContent } from "../types";

export const videoContent: CompanyVideoContent = {
  routeKey: "video",
  meta: {
    title: "Video | Flexido",
    description:
      "Watch the Flexido company presentation video — production automation, robot cells, and solutions for a more stable workflow.",
  },
  hero: {
    eyebrow: "Video",
    heading: "Flexido in motion.",
    subhead:
      "Watch the Flexido company presentation video — production automation, robot cells, and solutions for a more stable workflow.",
  },
  player: {
    src: "/video/flexido-predstavitev.mp4",
    poster: "/video/flexido-video-poster.webp",
    fallback: "Your browser does not support video playback.",
  },
  intro: {
    eyebrow: "Presentation",
    heading: "Automation shown through the process.",
    paragraphs: [
      "The video shows the Flexido approach to production automation: from robot cells and standard solutions to custom systems for different industrial processes.",
      "It briefly shows how Flexido thinks about automation: first the process, then a solution that has to work in real production.",
    ],
  },
  cta: {
    label: "Let's look at your process →",
    mailto: "info@flexido.eu",
  },
};
