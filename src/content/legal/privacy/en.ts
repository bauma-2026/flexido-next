import type { LegalPageContent } from "../types";
import { emailLink, h3, p, strong, ul } from "../blocks";
import { legalFacts } from "../shared";

export const privacyContent: LegalPageContent = {
  routeKey: "privacyPolicy",
  meta: {
    title: "Privacy policy | Flexido",
    description: "Personal-data protection policy of Flexido.",
  },
  eyebrow: "Legal",
  title: "Privacy policy",
  desc: "Personal-data protection policy of Flexido.",
  sections: [
    {
      id: "uvodno",
      heading: "1. Introduction",
      blocks: [
        p(
          `At ${legalFacts.companyDoOComma}, ${legalFacts.registeredAddress} (hereinafter: “${legalFacts.companyShort}” or “controller”) we are aware of the responsibility of handling the personal data of our customers, potential customers, visitors of the ${legalFacts.companyShort} website and all individuals who disclose personal data to us on contact (hereinafter: “users”), and we therefore adopt this Personal-data protection policy (hereinafter: “Policy”), by which we inform our users in a transparent, understandable and simple manner of the purposes, the legal basis for the processing of their personal data and the rights in connection with processing, as guaranteed to them by the Personal Data Protection Act (${legalFacts.zvop2}) and Regulation ${legalFacts.gdprCitation} of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (hereinafter: “General Data Protection Regulation”).`
        ),
        p(
          "Terms such as “controller”, “processing”, “restriction of processing”, “processor”, “profiling”, “pseudonymisation”, “third party” and “enterprise”, used in this Policy, have the meaning given to them by the General Data Protection Regulation."
        ),
        p(
          strong(
            "In accordance with the General Data Protection Regulation the Policy governs the following areas:"
          )
        ),
        ul(
          "contact information of the controller and contact of the data-protection officer,",
          "purposes and legal bases for the processing of various types of users’ personal data, including profiling of users’ personal data,",
          "recipients of personal data, contractual processing and transfer of data to third countries,",
          "retention periods for individual types of personal data,",
          "care for the security of personal data,",
          "users’ rights in connection with the processing of personal data,",
          "the procedure for exercising users’ rights in connection with the processing of personal data,",
          "the right to lodge a complaint in connection with the processing of personal data."
        ),
      ],
    },
    {
      id: "podatki",
      heading: "2. Information on the controller and the person authorised for data protection",
      blocks: [
        p(
          `The controller of users’ personal data is ${legalFacts.companyDoO}, ${legalFacts.registeredAddress}. ${legalFacts.companyShort} has appointed a data-protection officer, who can be reached at `,
          emailLink,
          "."
        ),
      ],
    },
    {
      id: "osebni",
      heading: "3. Personal data",
      blocks: [
        p(
          strong(
            "Personal data is information that identifies you as a particular or identifiable individual. A user is identifiable when the user can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or to one or more factors specific to the user’s physical, physiological, genetic, mental, economic, cultural or social identity. In accordance with the purposes defined later in the Policy, the controller collects the following personal data:"
          )
        ),
        ul(
          "basic data about the user (first name and surname, title, job position and other data about the employer),",
          "contact data and data about the user’s communication with the controller (e-mail address, telephone number, date, time and content of postal or e-mail communication, date, time and duration of telephone calls),",
          `data about participation in events organised by ${legalFacts.companyShort} (data about the event you attended, place and date of the event),`,
          "data about the user’s use of the controller’s website (dates and times of website visits, pages visited or URLs, time spent on each page, number of pages visited, total time of the website visit, settings made on the website) and data about the use of messages received (e-mail, SMS) from the controller,",
          "data from forms completed voluntarily by the user,",
          "other data that the user voluntarily provides to the controller when requesting certain services that require such data."
        ),
        p(
          "The controller does not collect and does not process the user’s personal data except where the user enables this or consents to it, i.e. when ordering products or services, at meetings at trade fairs or other professional events, where there is a statutory basis for collecting personal data, where processing is necessary for the performance of contractual obligations, or where processing is necessary for legitimate interests pursued by the controller (hereinafter: “legitimate interest”)."
        ),
      ],
    },
    {
      id: "podlage",
      heading: "4. Bases for processing and purposes of processing",
      blocks: [
        p(
          strong(
            `${legalFacts.companyShort} will process your personal data for one of the purposes stated below on the basis of the following legal bases:`
          )
        ),
        ul(
          "your consent or permission,",
          "fulfilment of the controller’s statutory obligations,",
          "on the basis of legitimate interest,",
          "performance of a contractual obligation."
        ),
        p(
          `${legalFacts.companyShort} will process your personal data only for the purposes for which they were obtained and will not process them for purposes that are incompatible with the purposes for which they were collected. ${legalFacts.companyShort} collects from the user only those personal data that are strictly necessary to achieve the individual purpose.`
        ),
        h3("Processing for the performance of contractual obligations"),
        p(
          "In certain cases the processing of personal data is strictly necessary for the performance of the controller’s contractual obligations. If the user does not provide the required data, the controller cannot conclude a contract with the user or perform the services."
        ),
        p(
          "The controller will process your personal data for the performance of contractual obligations for the following purposes:"
        ),
        ul(
          "contractual arrangement of business cooperation,",
          "performance of activities specified in the cooperation contract,",
          "communication with contractors and other contact persons of the client for the purpose of performing activities specified in the cooperation contract,",
          `registration of the user for an event organised by ${legalFacts.companyShort} or one of the controller’s partners.`
        ),
        h3("Processing on the basis of consent or permission"),
        p(
          `${legalFacts.companyShort} will, on the basis of your written consent, process your personal data for the following purposes:`
        ),
        ul(
          "sending invitations to industry events,",
          "informing about industry news,",
          "occasional sending of offers,",
          "contacting by telephone for the purpose of presenting the sales programme,",
          "monitoring the reading of sent e-mail messages, namely which e-mail message you opened or did not open, which links you opened or clicked, how long you read them or viewed particular content,",
          "segmenting users on the basis of the facts in the previous indent and further sending of tailored (individualised) e-mail messages,",
          "for the purposes of analysing the user’s lifecycle on the website: where the user arrived at the website from, monitoring time spent on the website, which web pages the user visited, which content the user downloaded or viewed,",
          "segmenting users on the basis of the facts in the previous indent and further sending of tailored (individualised) messages through multichannel communication,",
          "for all other purposes with which you specifically agree when cooperating with the controller."
        ),
        p(
          "In all cases where you give consent for the processing of your personal data, you may withdraw that consent at any time via the e-mail address ",
          emailLink,
          "."
        ),
        h3(`Processing is necessary for fulfilment of the statutory obligations of ${legalFacts.companyShort}`),
        p(
          "We also process your personal data when this is required of us by law. An example of the purpose of such processing is the processing of your personal data for the needs of court or administrative proceedings."
        ),
        h3(
          `Processing on the basis of a legitimate interest pursued by ${legalFacts.companyShort}`
        ),
        p(
          "The controller may also process data on the basis of legitimate interest, except where such interests are overridden by the interests or fundamental rights and freedoms of the user to whom the personal data relate, which require protection of personal data. Where legitimate interest is used, the controller always carries out an assessment in accordance with the General Data Protection Regulation."
        ),
        p(
          `In certain cases ${legalFacts.companyShort} may, for further processing of your personal data on the basis of legitimate interest, collected on the basis of one of the legal bases stated above (consent, contract), adopt certain safeguards for the protection of your personal data, such as pseudonymisation, encryption, processing in aggregated form and/or deletion of certain types of personal data. ${legalFacts.companyShort} will process your personal data on the basis of legitimate interest for the following purposes:`
        ),
        ul(
          "Marketing, business and other technical analyses, such as analysing and determining from which organisations event participants come and what functions they hold in those organisations, keeping records of how many and which events the user attended, keeping records in connection with certificates, certifications and licences granted to event participants.",
          "Prevention of abuse, ensuring security, asserting claims or defending against claims in administrative and court proceedings.",
          "Direct marketing, including profiling of users, on the basis of previously lawfully obtained personal data."
        ),
        h3("Web analytics"),
        p(
          "If you consent, we use Vercel Web Analytics for anonymous statistics about visits to the website. The tool is not activated before your consent and is not used for advertising or profiling purposes. You may withdraw consent at any time in the cookie settings in the page footer."
        ),
      ],
    },
    {
      id: "uporabniki",
      heading:
        "5. Recipients of personal data, contractual processing and transfer of data to third countries",
      blocks: [
        p(
          `Only employees of ${legalFacts.companyShort} and processors of personal data who are directly authorised for this may access your personal data.`
        ),
        p(
          `${legalFacts.companyShort} will never transfer your personal data to unauthorised third parties.`
        ),
        p(
          `By using ${legalFacts.companyShort} websites and other services you agree that ${legalFacts.companyShort} may entrust individual tasks in connection with your personal data to the processors listed below. The stated processors may process your personal data exclusively on behalf of and in accordance with the written instructions of ${legalFacts.companyShort}, within the limits of the authorisation arising from the contract between ${legalFacts.companyShort} and the processor, and in accordance with the purposes defined in the Policy.`
        ),
        p(strong(`${legalFacts.companyShort} cooperates with the following processors:`)),
        ul(...legalFacts.processors),
      ],
    },
    {
      id: "cas",
      heading: "6. Retention period of personal data",
      blocks: [
        p(
          "The controller does not process personal data longer than necessary to achieve the purposes for which the personal data were collected and further processed."
        ),
        p(
          `Personal data that ${legalFacts.companyShort} processes due to performance of a contract are retained by ${legalFacts.companyShort} for the period needed to perform the contract and a further ${legalFacts.contractRetentionYears} years after its termination, except in cases where a dispute arises between you and the controller in connection with the contract. In such a case ${legalFacts.companyShort} retains the data for a further ${legalFacts.disputeRetentionYears} years after a court or arbitration decision or settlement becomes final or, if there was no court dispute, ${legalFacts.disputeRetentionYears} years from the day of amicable resolution of the dispute.`
        ),
        p(
          `Personal data that ${legalFacts.companyShort} processes on the basis of law are retained by ${legalFacts.companyShort} for the period prescribed by law.`
        ),
        p(
          `Personal data that the controller processes on the basis of your personal consent or legitimate interest are retained by ${legalFacts.companyShort} permanently, until withdrawal of your consent or a request to stop processing. ${legalFacts.companyShort} deletes such data before withdrawal only if the purpose of processing the personal data has already been achieved or if the law so provides.`
        ),
        p(
          `After expiry of the retention period ${legalFacts.companyShort} will effectively and permanently delete or anonymise your personal data so that they can no longer be linked to you.`
        ),
      ],
    },
    {
      id: "skrb",
      heading: "7. Care for the security of personal data",
      blocks: [
        p(
          strong(
            `${legalFacts.companyShort} is committed to protecting your personal data. Unauthorised access to them, their use and disclosure are prevented by the following measures:`
          )
        ),
        ul(
          "data are protected by premises, equipment and system software, including input-output units,",
          "data are protected by the application software with which personal data are processed,",
          `${legalFacts.companyShort} prevents unauthorised access to personal data during their transfer, including transfer via telecommunications means and networks,`,
          `${legalFacts.companyShort} ensures an effective method of blocking, destroying, deleting or anonymising personal data when the purpose for which they were collected ceases,`,
          `${legalFacts.companyShort} enables later determination of when individual data were entered into the personal-data collection, used, transferred or otherwise processed and who did so.`
        ),
        p(
          strong(
            `Unauthorised access to personal data, their use and disclosure are prevented by ${legalFacts.companyShort} with the following security technologies and procedures:`
          )
        ),
        ul(
          "control of physical access,",
          "locking of premises, cabinets, computers,",
          "storage of personal-data carriers in secured premises,",
          "prevention of inspection of personal data by maintainers of premises, clients and other visitors of the premises of the contractual processor,",
          "prevention of the use of passwords by persons to whom the password was not directly assigned or for a purpose other than that specified,",
          "restriction of data exports by employees,",
          "control of copies and exports of data,",
          "limited, recorded and secured transfer of data via telecommunications networks,",
          "withdrawal of data from persons whose contract with the contractual processor ends,",
          "strict separation from the data of any other controllers."
        ),
      ],
    },
    {
      id: "pravice",
      heading: "8. Users’ rights in connection with the protection of personal data",
      blocks: [
        p(
          `In accordance with the General Data Protection Regulation ${legalFacts.companyShort} guarantees you the following rights in connection with the protection of personal data, which are set out in more detail below:`
        ),
        ul(
          "the right of access to data,",
          "the right to rectification,",
          "the right to erasure (“right to be forgotten”),",
          "the right to restriction of processing,",
          "the right to data portability,",
          "the right to object."
        ),
        h3("Right of access to data"),
        p(
          `You have the right to obtain from ${legalFacts.companyShort} confirmation as to whether ${legalFacts.companyShort} is processing your personal data, and where that is the case you have the right to obtain access to your personal data and the following information in connection with the processing of personal data:`
        ),
        ul(
          "the purposes of processing,",
          "the types of personal data,",
          "where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period,",
          "the existence of the right to request from the controller rectification or erasure of personal data or restriction of processing of personal data,",
          "the right to lodge a complaint with a supervisory authority,",
          "where the personal data are not collected from the user, any available information as to their source,"
        ),
        p(
          `On the basis of your request ${legalFacts.companyShort} will provide you with a free copy of your personal data that are being processed.`
        ),
        h3("Right to rectification"),
        p(
          `You have the right to obtain from ${legalFacts.companyShort} without undue delay the rectification of inaccurate personal data concerning you. Taking into account the purposes of the processing, you have the right to have incomplete personal data completed, including by means of providing a supplementary statement.`
        ),
        h3("Right to erasure (“right to be forgotten”)"),
        p(
          `You have the right to obtain from ${legalFacts.companyShort} the erasure of personal data concerning you without undue delay, and ${legalFacts.companyShort} must erase your personal data without undue delay in the following cases:`
        ),
        ul(
          "where the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed,",
          "where you withdraw consent which is the basis for the processing of your personal data, and there is no other legal basis for the processing,",
          "where you object to processing on the basis of the controller’s legitimate interest, and there are no overriding legitimate grounds for the processing,",
          "where you object to processing for direct-marketing purposes,",
          "where the personal data have to be erased for compliance with a legal obligation in accordance with EU law or the Slovenian legal order."
        ),
        h3("Right to restriction of processing"),
        p(
          `You have the right to obtain from ${legalFacts.companyShort} restriction of processing of your personal data where one of the following applies:`
        ),
        ul(
          "where you contest the accuracy of the data, for a period enabling the controller to verify the accuracy of your personal data,",
          "where the processing is unlawful and you oppose the erasure of the personal data and request the restriction of their use instead,",
          `where ${legalFacts.companyShort} no longer needs the personal data for the purposes of the processing, but you require them for the establishment, exercise or defence of legal claims,`,
          "where you have objected to processing, pending the verification whether the legitimate grounds of the controller override your grounds."
        ),
        h3("Right to data portability"),
        p(
          `You have the right to receive the personal data concerning you, which ${legalFacts.companyShort} has been in possession of, in a structured, commonly used and machine-readable format, and the right to transmit those data to another controller without hindrance from ${legalFacts.companyShort}, to which the personal data have been provided, where:`
        ),
        ul(
          "the processing is based on your consent or on a contract and",
          "the processing is carried out by automated means."
        ),
        h3("Right to object"),
        p(
          `On grounds relating to your particular situation, you have the right to object at any time to processing of personal data if it is based on legitimate interests pursued by ${legalFacts.companyShort} or a third party. ${legalFacts.companyShort} will cease processing the personal data unless it demonstrates compelling grounds for the processing which override your interests, rights and freedoms or for the establishment, exercise or defence of legal claims.`
        ),
        p(
          "Where personal data are processed for direct-marketing purposes, you have the right to object at any time to processing of your personal data for such marketing, which includes profiling to the extent that it is related to such direct marketing. If direct marketing is based on consent, the right to object may be exercised by withdrawing the personal consent given."
        ),
      ],
    },
    {
      id: "postopek",
      heading: "9. Procedure for exercising rights",
      blocks: [
        p(
          "All of the above requests concerning the exercise of rights in connection with your personal data may be exercised via the e-mail address ",
          emailLink,
          ` or by post to ${legalFacts.companyDoO}, ${legalFacts.registeredAddress}.`
        ),
        p(
          "If you submit a request in accordance with the preceding paragraph by electronic means, the information will, where possible, be provided to you by electronic means, unless you request otherwise."
        ),
        p(
          "The controller may, for the purpose of reliable identification when you exercise your rights in connection with personal data, request from you additional data needed to confirm your identity, and may refuse to act in accordance with this chapter only if it demonstrates that it cannot reliably identify you."
        ),
        p(
          `The controller will respond to a request by which you exercise your rights in connection with your personal data without undue delay and at the latest within one month of receipt of the request. ${legalFacts.companyShort} may extend the period for exercising rights by a maximum of two further months, taking into account the complexity and number of the requests.`
        ),
        p(
          strong(
            `If your requests in accordance with this chapter are manifestly unfounded or excessive, in particular because of their repetitive character, ${legalFacts.companyShort} may:`
          )
        ),
        ul(
          "charge a reasonable fee, taking into account the administrative costs of providing the information or communication or taking the action requested,",
          "refuse to act on the request."
        ),
      ],
    },
    {
      id: "pravica",
      heading: "10. Right to lodge a complaint in connection with the processing of personal data",
      blocks: [
        p(
          "Any complaint in connection with the processing of your personal data may be sent to the e-mail address ",
          emailLink,
          ` or by post to ${legalFacts.companyDoO}, ${legalFacts.registeredAddress}.`
        ),
        p(
          "You also have the right to lodge a complaint directly with the Information Commissioner if you consider that the processing of personal data concerning you infringes Slovenian regulations or EU regulations in the field of personal-data protection."
        ),
      ],
    },
    {
      id: "veljavnost",
      heading: "11. Validity of the Policy",
      blocks: [
        p(
          `The Policy is valid from ${legalFacts.privacyEffectiveDate} onwards and may be changed or supplemented at any time.`
        ),
      ],
    },
  ],
};
