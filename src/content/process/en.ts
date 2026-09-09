import type { ProcessPageContent } from "./types";

export const processContent: ProcessPageContent = {
  routeKey: "process",
  meta: {
    title: "Process | Flexido",
    description:
      "Automation has the greatest effect when we first understand where production loses its rhythm — only then do we choose the technology, robotics, or system.",
  },
  hero: {
    eyebrow: "Process",
    heading: "First the process. Then the solution.",
    subhead:
      "Automation has the greatest effect when we first understand where production loses its rhythm — only then do we choose the technology, robotics, or system.",
    primaryCta: { label: "Let's look at your process →", href: "#kontakt" },
    secondaryCta: { label: "How a project works →", href: "#koraki" },
    videoSrc: "/video/flexido/hero-proces.mp4",
  },
  intro: {
    eyebrow: "Our approach",
    heading: "We don't start with the robot.",
    paragraphs: [
      "A robot, cell, or conveyor system is not an end in itself. The goal is a production flow that runs more stably, more predictably, and with less manual coordination.",
      "That is why we first look at the process as a whole: machines, material, operators, data, space, and the points where delays occur.",
    ],
  },
  steps: {
    id: "koraki",
    eyebrow: "How a project works",
    heading: "From process review to a working solution.",
    body: "We adapt the procedure to the project, but the logic stays the same: first we understand the process, then we design and implement the solution.",
    items: [
      {
        number: "01",
        title: "Process review",
        desc: "First we look at where delays, manual steps, waiting, or an unclear material flow occur.",
      },
      {
        number: "02",
        title: "Solution design",
        desc: "We determine which part of the process has the greatest effect for automation — without unnecessary complexity.",
      },
      {
        number: "03",
        title: "Integration into production",
        desc: "We connect the solution with existing machines, operators, space, and the real work rhythm.",
      },
      {
        number: "04",
        title: "Commissioning and support",
        desc: "We start the system, stabilize it in practice, and adapt it to production changes when needed.",
      },
    ],
  },
  principles: {
    eyebrow: "Why this way",
    heading: "The solution must follow the process.",
    items: [
      {
        title: "First the process",
        desc: "We don't start by choosing a robot, but by understanding the workflow.",
      },
      {
        title: "Less improvisation",
        desc: "The goal is a stable process where movements, waiting, and responsibilities are clear.",
      },
      {
        title: "A solution for practice",
        desc: "The system must work in real production, not only in a presentation.",
      },
    ],
  },
  proof: {
    eyebrow: "References",
    heading: "Solutions in practice.",
    body: "See completed projects and how this process has already played out in real production.",
    ctaLabel: "See the references →",
  },
  cta: {
    id: "kontakt",
    eyebrow: "Next step",
    heading: "Let's look at your process",
    body: "If you know where the process stalls, we can review together which solution makes the most sense for the next step.",
    label: "Send an inquiry →",
    mailto: "info@flexido.eu",
  },
};
