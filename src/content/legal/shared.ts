/**
 * Recurring legal/company facts used by all three legal documents.
 * Surrounding labels localize; these values stay identical across locales
 * unless the locale file is translating a proper name (court style).
 *
 * Source: current V1 legal pages + contact page company block.
 * Not present in the legal documents: VAT / tax number, registration number.
 */
export const legalFacts = {
  companyShort: "Flexido",
  companyDoO: "Flexido d.o.o.",
  companyDoOComma: "Flexido, d.o.o.",
  companyUpper: "FLEXIDO, d.o.o.",
  companyUpperShort: "FLEXIDO d.o.o.",
  registeredStreet: "Veliki Otok 44D",
  registeredPostcode: "6230 Postojna",
  registeredAddress: "Veliki Otok 44D, 6230 Postojna",
  registeredAddressWithCountry: "Veliki Otok 44D, 6230 Postojna, Slovenija",
  businessUnitAddress: "Poslovna cona A34, 4208 Šenčur, Slovenija",
  deliveryPlace: "Šenčur",
  deliveryPlaceLocative: "Šenčurju",
  websiteUrl: "http://www.flexido.eu",
  email: "info@flexido.eu",
  emailHref: "mailto:info@flexido.eu",
  phoneDisplay: "0593 51100",
  phoneHref: "tel:+38659351100",
  courtOfficial: "Okrožno sodišče v Kranju",
  courtEn: "the District Court in Kranj",
  courtDe: "das Bezirksgericht in Kranj",
  governingLaw: "Republike Slovenije",
  incoterms: "INCOTERMS 2010",
  processors: [
    "Vasco d.o.o.",
    "Cores d.o.o.",
    "Hitrost.com d.o.o.",
    "KMS d.o.o.",
    "Vercel Inc. (spletna analitika, ob soglasju uporabnika)",
  ] as const,
  zvop2: "ZVOP-2, Ur. l. RS, št. 163/2022",
  gdprCitation: "(EU) 2016/679",
  privacyEffectiveDate: "26. 1. 2023",
  storageFeePercent: "5%",
  complaintDays: "8",
  hiddenDefectMonths: "6",
  installmentDelayDays: "15",
  twoInstallmentDelayDays: "8",
  collectionBusinessDays: "5",
  extensionRequestWeeks: "2",
  contractRetentionYears: "20",
  disputeRetentionYears: "25",
} as const;
