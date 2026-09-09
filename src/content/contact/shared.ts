import { legalFacts } from "../legal/shared";

/**
 * Contact-page factual values shared across locales.
 * Labels localize in locale modules; these values stay identical.
 *
 * Source: V1 `/kontakt` + `src/content/legal/shared.ts` (same facts, no conflicts).
 */
export const contactFacts = {
  companyName: legalFacts.companyUpper,
  registeredAddress: legalFacts.registeredAddressWithCountry,
  businessUnitAddress: legalFacts.businessUnitAddress,
  email: legalFacts.email,
  emailHref: legalFacts.emailHref,
  phoneDisplay: legalFacts.phoneDisplay,
  phoneHref: legalFacts.phoneHref,
} as const;
