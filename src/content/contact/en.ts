import type { ContactPageContent } from "./types";

export const contactContent: ContactPageContent = {
  routeKey: "contact",
  meta: {
    title: "Contact | Flexido",
    description:
      "Contact Flexido to discuss automation of your production processes.",
  },
  hero: {
    eyebrow: "Contact",
    heading: "Let's look at your process",
    subhead:
      "Describe where bottlenecks, manual steps or unclear material flow appear in production. Together we check which part of the process makes most sense to automate.",
    primaryCtaLabel: "Send an inquiry →",
    secondaryCtaLabel: "Call us →",
    stepsEyebrow: "How to start",
    steps: [
      {
        title: "1. Describe the process",
        desc: "Where does waiting, manual work or an unstable flow occur?",
      },
      {
        title: "2. Add context",
        desc: "Which machines, stages, parts or constraints matter?",
      },
      {
        title: "3. We agree the next step",
        desc: "Based on the process we assess what is worth checking next.",
      },
    ],
  },
  details: {
    eyebrow: "Details",
    heading: "The fastest way is a short description of the process.",
    body:
      "You do not need a prepared technical specification. It is enough to describe the problem, production step or part of the process where a bottleneck appears.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    companyLabel: "Company",
    companyNameLabel: "Company",
    registeredOfficeLabel: "Registered office",
    businessUnitLabel: "Business unit",
    topicsLabel: "Areas",
    topics: [
      "production automation",
      "CNC automation",
      "injection molding",
      "material handling",
      "internal logistics",
      "collaborative robots",
      "service and support",
    ],
  },
  final: {
    eyebrow: "Next step",
    heading: "Send a short description of the process.",
    body:
      "We look at where bottlenecks, manual steps or unclear flow arise — and whether automation has a meaningful effect there.",
    emailCta: "info@flexido.eu →",
    phoneCta: "0593 51100 →",
  },
};
