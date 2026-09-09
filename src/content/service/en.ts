import type { ServicePageContent } from "./types";

export const serviceContent: ServicePageContent = {
  routeKey: "service",
  meta: {
    title: "Service and support | Flexido",
    description:
      "For systems supplied by Flexido, we provide support after commissioning for a reported issue, a request review, and the agreed service action.",
  },
  wikiNav: [
    { href: "#pokritost", label: "What service covers" },
    { href: "#prijava", label: "Reporting an issue" },
    { href: "#potek", label: "What happens next" },
    { href: "#oprema", label: "Supported equipment" },
    { href: "#cenik", label: "Pricing" },
  ],
  hero: {
    eyebrow: "Service and support",
    heading: "Service and support after commissioning.",
    subhead:
      "For systems supplied by Flexido, we provide support after commissioning for a reported issue, a request review, and the agreed service action.",
    primaryCta: { label: "Report a service request →", href: "#kontakt" },
    secondaryCtaLabel: "Service pricing →",
    image: {
      src: "/images/systems/raw/flexido-cnc-machine-studio.png",
      alt: "Flexido CNC robotic cell",
    },
    imageCaptionEyebrow: "Service request",
    imageCaption: "Clear information about the equipment and the issue helps determine the next step.",
  },
  coverage: {
    id: "pokritost",
    eyebrow: "What service covers",
    heading: "Support for a system after handover into production.",
    paragraphs: [
      "Service applies to systems supplied by Flexido, after commissioning. When an issue is reported, we review the information provided and align the appropriate service step.",
      "The purpose of this page is to organize a service request — not to choose a new solution for a production process.",
    ],
  },
  request: {
    id: "prijava",
    eyebrow: "Reporting an issue",
    heading: "Send the context we need to review the request.",
    body: "The more basic information we have about the equipment and how the issue developed, the easier it is to determine the appropriate next step.",
    details: [
      "the system or machine where the issue appeared",
      "identification of the cell or equipment, if available",
      "a description of the fault or symptom",
      "when the issue appeared",
      "the current status or the impact on production",
      "contact details of a person who can provide further information",
    ],
  },
  flow: {
    id: "potek",
    eyebrow: "What happens next",
    heading: "From the report to the next service step.",
    items: [
      {
        step: "01",
        title: "Reporting an issue",
        desc: "You send information about the equipment, the issue, and the current production status.",
      },
      {
        step: "02",
        title: "Request review",
        desc: "We review the report and the equipment context, and determine the appropriate next step.",
      },
      {
        step: "03",
        title: "Service action",
        desc: "Agreed support, preparation, or an intervention follows when that is required.",
      },
    ],
  },
  equipment: {
    id: "oprema",
    eyebrow: "Supported equipment",
    heading: "A request can refer to the supplied system and its related parts.",
    body: "The scope of support is tied to the system supplied by Flexido and the agreed scope of equipment.",
    groups: [
      {
        number: "01",
        title: "Robot cells and systems",
        items: ["robot cells", "custom-built systems"],
      },
      {
        number: "02",
        title: "Connected equipment and controls",
        items: [
          "connected modules and peripheral equipment",
          "transport elements as part of the supplied system",
          "controls and interfaces within the agreed system scope",
        ],
      },
    ],
  },
  pricing: {
    id: "cenik",
    eyebrow: "Pricing and terms",
    heading: "Prices and terms for service work.",
    body: "Hourly rates, surcharges, travel costs, and terms for service work are published in a separate price list.",
    ctaLabel: "View service pricing →",
  },
  cta: {
    id: "kontakt",
    eyebrow: "Service request",
    heading: "Report a service request.",
    body: "Send details about the system or equipment, describe the issue and when it appeared, and include the current production status.",
    label: "Report a service request →",
    mailto: "info@flexido.eu",
    image: {
      src: "/images/systems/raw/flexido-imm-machine-studio.png",
      alt: "Flexido injection molding robotic cell",
    },
    captionEyebrow: "Starting a request",
    caption: "What happened, on which equipment, and what is the current status?",
  },
};
