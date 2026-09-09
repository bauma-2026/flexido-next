import type { ReferencesHubContent } from "../types";

export const referencesHubContent: ReferencesHubContent = {
  routeKey: "references",
  meta: {
    title: "References | Flexido",
    description:
      "Automation has value only when it improves the workflow in practice, reduces manual interruptions, and makes the process more stable.",
  },
  hero: {
    eyebrow: "References",
    heading: "Solutions from real production.",
    subhead:
      "Automation has value only when it improves the workflow in practice, reduces manual interruptions, and makes the process more stable.",
    primaryCta: { label: "See the solutions →", href: "/resitve" },
    secondaryCta: { label: "Let's look at your process →", href: "#kontakt" },
    videoSrc: "/video/flexido/hero-home.mp4",
  },
  projects: {
    eyebrow: "Delivered projects",
    heading: "Concrete examples from production.",
    body: "Three implementations already documented in Flexido content.",
    readMoreLabel: "Read the project",
  },
  areas: {
    eyebrow: "Areas",
    heading: "Where solutions most often show up in practice",
    body: "References are best understood by the part of the process where the effect appears — not only by the technology used.",
    linkLabel: "Read more →",
    items: [
      { title: "CNC automation", body: "Loading, unloading, and a more stable part flow around CNC machines.", routeKey: "solutionCnc" },
      { title: "Injection molding", body: "Unloading, placing, and part flow after the molding cycle.", routeKey: "solutionInjectionMolding" },
      { title: "Material handling", body: "Gripping, moving, turning, positioning, and placing parts.", routeKey: "solutionManipulation" },
      { title: "Internal logistics", body: "Organizing material flow between stages, machines, and stations.", routeKey: "solutionLogistics" },
      { title: "Collaborative robots", body: "Taking over repeatable tasks while the operator stays in control of the process.", routeKey: "solutionCobots" },
      { title: "Custom-built systems", body: "Solutions tailored to the process, space, parts, and existing machines.", routeKey: "solutionCustomSystems" },
    ],
  },
  principles: {
    eyebrow: "What counts as a reference",
    heading: "The solution has to work in practice.",
    items: [
      { title: "Real production", desc: "Solutions have to work in actual production conditions, not only in a presentation." },
      { title: "The complete process", desc: "What matters is not only one machine, but the flow between stages, material, and people." },
      { title: "Support after commissioning", desc: "The system has to remain usable after handover and after production changes." },
    ],
  },
  cta: {
    id: "kontakt",
    eyebrow: "Contact",
    heading: "Let's look at your process",
    body: "If you know where the process stalls, we can review together which solution makes the most sense for the next step.",
    label: "Send an inquiry →",
    mailto: "info@flexido.eu",
  },
};
