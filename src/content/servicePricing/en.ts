import type { ServicePricingContent } from "./types";

export const servicePricingContent: ServicePricingContent = {
  routeKey: "servicePricing",
  meta: {
    title: "Service pricing | Flexido",
    description: "Hourly rates, surcharges, travel costs, and terms for Flexido service work.",
  },
  eyebrow: "Service",
  title: "Service price list",
  date: "2026",
  heroImage: {
    src: "/images/systems/raw/flex-7-cnc-slim-studio.png",
    alt: "Flexido CNC robotic cell",
  },
  detailsLabel: "Details",
  details: [
    { label: "Category", value: "Service" },
    { label: "Type", value: "Service price list" },
    { label: "Validity", value: "from 01.01.2026" },
    { label: "Area", value: "Slovenia" },
  ],
  backLabel: "Back to service",
  sections: [
    {
      heading: "1. Hourly repair rate",
      body: "Hourly repair rate during regular working hours, i.e. Monday to Friday, except public holidays, between 7.00 and 16.00:",
      rows: [
        { label: "Service technician II — simple mechanics", value: "51.20 EUR" },
        { label: "Service technician I — complex mechanics, pneumatics, electrical", value: "58.60 EUR" },
        { label: "Electronics technician II — robots, simple controls", value: "63.80 EUR" },
        { label: "Electronics technician I — cameras, complex controls", value: "72.60 EUR" },
      ],
      note: "Travel time, preparation for the repair, and any waiting time are also included in the billed time.",
    },
    {
      heading: "2. Surcharges for work outside regular working hours",
      rows: [
        { label: "Overtime and work on Saturdays", value: "additional 50%" },
        { label: "Night work after 20.00 and work on Sundays and public holidays", value: "additional 100%" },
      ],
    },
    {
      heading: "3. Travel costs",
      highlight: "0.58 EUR / km",
      after:
        "Any additional costs, such as overnight stays, tolls, other transport costs, and similar direct costs, are billed separately at actual cost.",
      bullets: [
        "VAT is charged on the prices listed above.",
        "The payment term for service work and spare parts is 30 days after the service is performed or after delivery.",
        "The price list is valid for an indefinite period and may be changed if reasons for a change arise.",
      ],
    },
  ],
  footerNote: {
    strong: "The price list is valid from 01.01.2026.",
    company: "Flexido d.o.o.",
  },
};
