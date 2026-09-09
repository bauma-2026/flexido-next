import type { LegalPageContent } from "../types";
import { p } from "../blocks";
import { legalFacts } from "../shared";

export const legalNoticeContent: LegalPageContent = {
  routeKey: "legalNotice",
  meta: {
    title: "Impressum | Flexido",
    description: "Nutzungsbedingungen der Website von Flexido.",
  },
  eyebrow: "Rechtliches",
  title: "Impressum",
  desc: "Nutzungsbedingungen der Website von Flexido.",
  sections: [
    {
      id: "usage",
      heading: "1. Nutzungsbedingungen",
      blocks: [
        p(
          `Willkommen auf der Website von ${legalFacts.companyDoOComma} unter ${legalFacts.websiteUrl}. Zweck der Website ist die Information über das Angebot und die Dienstleistungen des Unternehmens ${legalFacts.companyDoO}. Mit dem Aufruf dieser Website bestätigen Sie, dass Sie den Bedingungen zustimmen und sie vollständig akzeptieren.`
        ),
      ],
    },
    {
      id: "general",
      heading: "2. Allgemeines",
      blocks: [
        p(
          `Der Eigentümer der Website, ${legalFacts.companyDoO}, behält sich das Recht vor, den Inhalt der Website jederzeit und ohne vorherige Ankündigung zu ändern und/oder die Ergänzung einzustellen. Gleichzeitig übernimmt er keine Haftung für die Nichterreichbarkeit der Website, den Ausfall des Hosting-Servers oder die Veröffentlichung möglicherweise unvollständiger Informationen.`
        ),
      ],
    },
    {
      id: "liability",
      heading: "3. Haftungsbeschränkung",
      blocks: [
        p(
          `${legalFacts.companyDoO} haftet nicht für irgendwelche mittelbaren, unmittelbaren, außergewöhnlichen oder zufälligen Schäden, die durch ein falsches Verständnis der Inhalte der Website durch den Besucher entstehen. Für etwaige Tippfehler übernehmen wir keine Haftung und entschuldigen uns dafür.`
        ),
      ],
    },
    {
      id: "copyright",
      heading: "4. Urheberrechte",
      blocks: [
        p(
          "Alle Texte, Bilder und sonstigen Inhalte auf der Website wurden vom Eigentümer der Website zusammengestellt und redigiert und haben ausschließlich informativen Charakter. Der Inhalt der Website darf ohne ausdrückliche Genehmigung des Eigentümers der Website in keiner Weise verwendet oder dargestellt werden. Logos sind Marken oder eingetragene Marken ihrer jeweiligen Inhaber. Sie dürfen nicht für öffentliche und kommerzielle Zwecke kopiert, verwendet, vervielfältigt oder veröffentlicht werden."
        ),
      ],
    },
    {
      id: "privacy",
      heading: "5. Schutz der Privatsphäre",
      blocks: [
        p(
          `Auf der Website erheben wir Kontaktinformationen über diejenigen Besucher, die Informationen erhalten möchten und zu diesem Zweck das Unternehmen ${legalFacts.companyDoO} kontaktieren. Die ausschließliche Verantwortung für die Richtigkeit der personenbezogenen Daten und Kontaktinformationen übernehmen die Besucher.`
        ),
        p(
          "Kontaktinformationen verwenden wir zur Kontaktaufnahme mit dem Besucher, wenn dies erforderlich ist oder der Besucher dies selbst wünscht. Personenbezogene Daten und Kontaktinformationen verwenden wir nicht für andere Zwecke und geben sie nicht an Dritte weiter."
        ),
        p(
          `Unsere Website enthält auch Links zu Websites Dritter. ${legalFacts.companyDoO} übernimmt keine Haftung für die Einhaltung der Privatsphäre und den Inhalt dieser Websites. Notwendige Cookies und die Speicherung Ihrer Cookie-Auswahl dienen dem Betrieb der Website. Analysewerkzeuge für anonyme Besuchsstatistiken (Vercel Web Analytics) werden nur aktiviert, wenn Sie zustimmen. Sie können Ihre Auswahl jederzeit in den Cookie-Einstellungen in der Fußzeile ändern.`
        ),
      ],
    },
  ],
};
