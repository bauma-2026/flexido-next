import type { LegalPageContent } from "../types";
import { p } from "../blocks";
import { legalFacts } from "../shared";

export const legalNoticeContent: LegalPageContent = {
  routeKey: "legalNotice",
  meta: {
    title: "Legal notice | Flexido",
    description: "Terms of use of the Flexido website.",
  },
  eyebrow: "Legal",
  title: "Legal notice",
  desc: "Terms of use of the Flexido website.",
  sections: [
    {
      id: "usage",
      heading: "1. Terms of use",
      blocks: [
        p(
          `Welcome to the website of ${legalFacts.companyDoOComma} at ${legalFacts.websiteUrl}. The purpose of the website is to inform about the offer and services provided by ${legalFacts.companyDoO}. By viewing this website you confirm that you agree to the terms and accept them in full.`
        ),
      ],
    },
    {
      id: "general",
      heading: "2. General",
      blocks: [
        p(
          `The owner of the website, ${legalFacts.companyDoO}, reserves the right to change the content of the website and/or to discontinue updating it at any time, without prior notice. At the same time it assumes no liability for unavailability of the website, failure of the hosting server, or publication of possibly incomplete information.`
        ),
      ],
    },
    {
      id: "liability",
      heading: "3. Limitation of liability",
      blocks: [
        p(
          `${legalFacts.companyDoO} is not liable for any indirect, direct, extraordinary or incidental damage arising from a visitor's incorrect understanding of the website content. We are not liable for any typing errors and we apologise for them.`
        ),
      ],
    },
    {
      id: "copyright",
      heading: "4. Copyright",
      blocks: [
        p(
          "All texts, images and other content on the website have been collected and edited by the website owner and are of an informative nature only. The content of the website may not be used or displayed in any way without the official permission of the website owner. Logos are trademarks or registered trademarks of their owners. They may not be copied, used, reproduced or published for public and commercial purposes."
        ),
      ],
    },
    {
      id: "privacy",
      heading: "5. Protection of privacy",
      blocks: [
        p(
          `On the website we collect contact information about those visitors who wish to obtain information and for that purpose contact ${legalFacts.companyDoO}. Exclusive responsibility for the authenticity of personal data and contact information is assumed by the visitors.`
        ),
        p(
          "We use contact information to establish contact with the visitor when this is necessary or when the visitor so wishes. We do not use personal data and contact information for other purposes and we do not disclose them to third parties."
        ),
        p(
          `Our website also contains links to third-party websites. ${legalFacts.companyDoO} assumes no liability for the observance of privacy and the content of those websites. Necessary cookies and storage of your cookie choice are used to run the site. Analytics tools for anonymous visit statistics (Vercel Web Analytics) are only activated if you agree. You can change your choice at any time in the cookie settings in the page footer.`
        ),
      ],
    },
  ],
};
