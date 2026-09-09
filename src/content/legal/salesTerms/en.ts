import type { LegalPageContent } from "../types";
import { p, strong } from "../blocks";
import { legalFacts } from "../shared";

export const salesTermsContent: LegalPageContent = {
  routeKey: "salesTerms",
  meta: {
    title: "General terms of sale | Flexido",
    description:
      "General terms for offers, orders, and the delivery of goods and services of Flexido.",
  },
  eyebrow: "Legal",
  title: `General terms of sale of ${legalFacts.companyUpperShort}`,
  desc: "General terms for offers, orders, and the delivery of goods and services of Flexido.",
  sections: [
    {
      id: "general",
      heading: "1. General",
      blocks: [
        p(
          strong("1.1."),
          " These general terms of sale exclusively determine the basis for all our offers and every sale or delivery of goods or services of FLEXIDO, d.o.o."
        ),
        p(
          strong("1.2."),
          " Terms different from the general terms of sale apply only if they have been confirmed in writing by FLEXIDO, d.o.o."
        ),
        p(
          strong("1.3."),
          " Different terms of sale stated by the buyer on its order apply only if FLEXIDO, d.o.o. confirms them in writing."
        ),
        p(
          strong("1.4."),
          " Written confirmation means confirmation by post, e-mail and fax."
        ),
        p(
          strong("1.5."),
          " A confirmed agreement to deviate from an individual point of the general terms of sale of FLEXIDO, d.o.o. does not affect the validity of the remaining provisions of these terms."
        ),
        p(
          strong("1.6."),
          " These General terms of sale apply until revoked or until a change published on the seller's website."
        ),
      ],
    },
    {
      id: "offers",
      heading: "2. Offers and orders",
      blocks: [
        p(
          strong("2.1."),
          " An offer of FLEXIDO, d.o.o. is valid for the period stated on each individual offer. The period starts on the day the offer is submitted."
        ),
        p(
          strong("2.2."),
          " The issue of a proforma invoice is deemed confirmation of the order. The period for performance of obligations starts from the buyer's performance of its obligations under the offer or from payment of the proforma invoice."
        ),
        p(
          strong("2.3."),
          " The offer and all annexes are a business secret and may not be reproduced or made available to third parties without our written permission."
        ),
      ],
    },
    {
      id: "prices",
      heading: "3. Prices and payment terms",
      blocks: [
        p(
          strong("3.1."),
          " Agreed prices are net prices. Unless otherwise specified, all prices apply without insurance and other additional costs, delivered at the premises of FLEXIDO, d.o.o., unloaded. Value added tax is not included in the price and is charged separately. Shipping or transport costs are not included in the price and are charged separately."
        ),
        p(
          strong("3.2."),
          " The payment period is specified in each individual offer. If it is not specifically stated in the offer, it is subsequently specified in the contract."
        ),
        p(strong("3.3."), " In the event of late payment we charge statutory default interest."),
        p(
          strong("3.4."),
          ` If the debtor is more than ${legalFacts.installmentDelayDays} days late with payment of one instalment or more than ${legalFacts.twoInstallmentDelayDays} days late with payment of two instalments, the seller reserves the right to withdraw from the contract without an additional period and to claim compensation for the damage thereby incurred.`
        ),
        p(
          strong("3.5."),
          ` If the buyer is more than ${legalFacts.installmentDelayDays} days late with payment of one instalment or more than ${legalFacts.twoInstallmentDelayDays} days late with payment of two instalments, all instalments become due.`
        ),
      ],
    },
    {
      id: "delivery-period",
      heading: "4. Delivery period",
      blocks: [
        p(
          strong("4.1."),
          " The delivery period starts, where the offer provides for an obligation to pay a proforma invoice, upon payment of that invoice; otherwise on the day FLEXIDO, d.o.o. receives acceptance of the offer. If technical delivery details or financial terms are subsequently changed or aligned after the foregoing, the period starts upon confirmation of the changes or details by both parties."
        ),
        p(
          strong("4.2."),
          " The delivery period or delivery date is deemed to be the day the goods are delivered to the buyer or the day the buyer is notified that the goods are ready for collection."
        ),
        p(strong("4.3."), " We reserve the right to make partial deliveries."),
        p(
          strong("4.4."),
          " A confirmed delivery period may be extended in the event of a subsequent change to the buyer's order, quantity, technical specification of the goods and the like, and in the event of force majeure and delay on the part of the supplier FLEXIDO, d.o.o. and objective causes over which the seller has no influence."
        ),
        p(
          strong("4.5."),
          " If FLEXIDO, d.o.o. is unable for objective reasons to deliver a particular machine or equipment, the purchase price is returned without interest. If the parties agree with the buyer on a change to the contract or order, the payment in question is deemed an advance payment under that new contract."
        ),
        p(
          strong("4.6."),
          " If the buyer does not take over goods prepared in accordance with the contract at the agreed time in accordance with the contract or order, FLEXIDO, d.o.o. is entitled to require the buyer to perform the contract or order."
        ),
        p(
          strong("4.7."),
          ` In the event of the buyer's delay in taking over the goods, ${legalFacts.companyUpper} is entitled to charge a storage fee of ${legalFacts.storageFeePercent} of the order amount for each completed calendar week. The buyer has the right, for objective reasons, to request an extension of the period for taking over the goods, provided that the request for extension arrives at least ${legalFacts.extensionRequestWeeks} weeks before the agreed date for taking over the goods. During the buyer's delay in taking over the goods or an extension of the takeover period at the buyer's request, the risk of accidental destruction passes to the buyer on the date set for taking over the goods.`
        ),
        p(
          strong("4.8."),
          " If transport or dispatch is agreed when the contract is concluded, it is carried out exclusively at the buyer's risk and expense. Transport insurance is taken out by FLEXIDO, d.o.o. only on the buyer's instruction and for the buyer's account. If there is no agreement on transport, the buyer assumes the performance and payment of transport."
        ),
      ],
    },
    {
      id: "shipment",
      heading: "5. Dispatch and delivery of goods and passing of risk",
      blocks: [
        p(
          strong("5.1."),
          ` The provisions of the International Chamber of Commerce ${legalFacts.incoterms} apply to the interpretation of the delivery term or dispatch of the goods.`
        ),
        p(
          strong("5.2."),
          ` Unless otherwise agreed, the place of handover or dispatch for delivery of the goods is the registered office of ${legalFacts.companyUpper} in ${legalFacts.deliveryPlace}.`
        ),
        p(
          strong("5.3."),
          ` Deliveries of ${legalFacts.companyUpper} are deemed performed: a) for delivery ex works ${legalFacts.companyUpper}, ${legalFacts.deliveryPlace}, upon receipt of notice that the goods are available for delivery; b) for delivery with collection of the goods – upon collection of the goods by the person / company performing the transport; c) under the CIP buyer clause: upon delivery to the agreed place (the seller pays transport and insurance of the goods to the agreed place).`
        ),
        p(
          strong("5.4."),
          ` Goods prepared for personal collection must be collected by the buyer within ${legalFacts.collectionBusinessDays} business days of receipt of notice that the goods are ready for collection.`
        ),
        p(
          strong("5.5."),
          " Any technical acceptance of the goods, that is the procedure itself and the place and time of technical acceptance, must be agreed at the latest before expiry of the delivery period. The costs of technical acceptance are borne by the buyer. If the buyer does not carry out technical acceptance of the goods as agreed, we may ship or store the goods at the buyer's cost and risk."
        ),
      ],
    },
    {
      id: "retention",
      heading: "6. Retention of title",
      blocks: [
        p(
          strong("6.1."),
          " We retain title to the delivered goods until full performance of the buyer's obligations in connection with the delivered goods, including payment of any reminder costs and default interest."
        ),
        p(
          strong("6.2."),
          " Before expiry of the payment period the buyer has no right to sell the goods on to a third party, encumber them, or place them at the disposal of a third party without consent."
        ),
        p(
          strong("6.3."),
          " All risks, regardless of retention of title, from takeover of the machine/delivery onwards, are borne by the buyer."
        ),
        p(
          strong("6.4."),
          " The buyer is obliged to cooperate in all measures for the protection of our property or title to our goods until performance of all of its obligations."
        ),
        p(
          strong("6.5."),
          " Until full payment by the buyer, the seller has the right to insure the goods against theft, fire, damage, water and other risks at the buyer's expense. Except where the buyer proves to the seller that the buyer has taken out insurance and assigned the insurance policy in favour of the seller for payment of the purchase price for the purchase of the machine."
        ),
        p(
          strong("6.6."),
          " If the buyer takes the equipment into possession before payment of the full purchase price, the seller reserves the right to visibly mark the object of sale as its property (with inscriptions, stickers), and the buyer undertakes not to remove such markings until payment of the full purchase price."
        ),
      ],
    },
    {
      id: "warranty",
      heading: "7. Warranty",
      blocks: [
        p(
          strong("7.1."),
          " The buyer may notify or complain in writing of a quantitative or qualitative deviation of the delivered goods no later than 8 days after receipt of the goods."
        ),
        p(
          strong("7.2."),
          " The buyer may notify or complain in writing of hidden defects or hidden quality deviations immediately after discovery, but no later than 6 months after takeover of the goods."
        ),
        p(
          strong("7.3."),
          " In the event of prior technical acceptance of the goods the buyer is not entitled to a subsequent complaint about the goods."
        ),
        p(
          strong("7.4."),
          " At our request the buyer must immediately return or cease using the goods subject to complaint so that the justification of the complaint can be established. The buyer and FLEXIDO, d.o.o. may also agree otherwise on interruption or restriction of use. If the buyer does not follow the supplier's instructions it loses the right to complain or to a claim."
        ),
        p(
          strong("7.5."),
          " We do not consider any complaint arising from unprofessional use and unauthorised or unprofessional installation, from an unauthorised and unprofessional intervention in the goods themselves, from unprofessional commissioning, or from unprofessional, deficient or careless handling of the goods or contrary to the characteristics and recommendations of the manufacturer."
        ),
        p(
          strong("7.6."),
          " All claims for warranty must be in writing with visible data on the type of defect, the time the defect occurred, and data needed to identify the goods. The accuracy of the stated data and the circumstances of the defect may be checked by our expert at the place of the defect."
        ),
        p(
          strong("7.7."),
          " In no event does FLEXIDO, d.o.o. assume any warranty claim or any liability for damages for any loss of income caused by interruption or stoppage of production."
        ),
      ],
    },
    {
      id: "ip",
      heading: "8. Intellectual property",
      blocks: [
        p(
          strong("8.1."),
          " Plans, sketches and other technical documents, as well as catalogues with samples, brochures, images, website information and similar documents, remain the intellectual property of FLEXIDO, d.o.o. or its suppliers and are protected by statutory provisions regarding reproduction, counterfeiting and use for competitive purposes. The buyer uses the solutions of FLEXIDO, d.o.o. exclusively for the purpose agreed in advance. Use of solutions that exceed the scope of the agreements must be agreed in writing. Concepts, strategies and systems developed by FLEXIDO, d.o.o. are produced exclusively for use by one legal entity. Use of the solutions of FLEXIDO, d.o.o. by affiliated and related companies must be specifically agreed by contract."
        ),
      ],
    },
    {
      id: "disputes",
      heading: "9. Dispute resolution",
      blocks: [
        p(
          strong("9.1."),
          " The laws of the Republic of Slovenia apply exclusively to all court proceedings between the buyer and the seller."
        ),
        p(
          strong("9.2."),
          ` The competent court for the resolution of all disputes is ${legalFacts.courtEn}.`
        ),
      ],
    },
  ],
};
