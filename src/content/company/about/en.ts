import type { CompanyAboutContent } from "../types";

export const aboutContent: CompanyAboutContent = {
  routeKey: "aboutUs",
  meta: {
    title: "About us | Flexido",
    description:
      "At Flexido we develop and integrate robot cells for CNC and injection molding. The focus is on a stable process, less manual work, and a clear flow between operations.",
  },
  hero: {
    eyebrow: "About us",
    heading: "Production automation without complication.",
    subhead:
      "At Flexido we develop and integrate robot cells for CNC and injection molding. The focus is on a stable process, less manual work, and a clear flow between operations.",
    primaryCta: { label: "Let's look at your process →", href: "#kontakt" },
    secondaryCtaLabel: "How we work →",
    image: {
      src: "/images/robot.jpg",
      alt: "Flexido robot cell in production",
    },
    imageCaptionEyebrow: "In practice",
    imageCaption: "Development, integration, and support for cells and production processes.",
  },
  whatWeDo: {
    eyebrow: "What we do",
    heading: "Solutions for a more stable production process.",
    items: [
      {
        title: "Robot cells",
        desc: "Development and integration of cells for different production processes.",
      },
      {
        title: "Connecting processes",
        desc: "We connect loading, unloading, and material movement between operations.",
      },
      {
        title: "A complete approach",
        desc: "From idea to implementation — project, mechanical design, programming, and commissioning.",
      },
    ],
  },
  team: {
    eyebrow: "Team",
    heading: "A team that develops and integrates solutions in practice.",
    body: "Flexido is not only a supplier of robot cells. Behind the solutions is a team that connects mechanical design, programming, integration, and commissioning in a real production environment.",
    image: {
      src: "/images/flexido/about/flexido-team.jpg",
      alt: "The Flexido team",
    },
  },
  video: {
    eyebrow: "Video",
    heading: "How Flexido works in practice.",
    body: "The presentation video shows the real environment, systems, and way of working — from standard cells to solutions that adapt to the production process.",
    src: "/video/flexido-company-video.mp4",
    poster: "/images/flexido/video/flexido-company-video-poster.jpg",
    ctaLabel: "Watch the company presentation video →",
    aside: "An additional video shows Flexido systems and automation in motion.",
  },
  approach: {
    eyebrow: "How we approach it",
    heading: "First the process. Then the solution.",
    items: [
      {
        title: "We understand the process",
        desc: "First we look at where delays and manual work occur.",
      },
      {
        title: "We propose a solution",
        desc: "We plan the material flow and the role of the robot cell.",
      },
      {
        title: "We implement and commission",
        desc: "We install the system and bring it to stable operation.",
      },
    ],
  },
  cta: {
    id: "kontakt",
    eyebrow: "Contact",
    heading: "Let's look at your process",
    body: "If you are considering automation, it makes sense to first look at where the process loses its rhythm.",
    label: "Send an inquiry →",
    mailto: "info@flexido.eu",
    image: {
      src: "/images/flexido/legacy/image_4.jpg.jpeg",
      alt: "Flexido equipment and process station in production",
    },
  },
};
