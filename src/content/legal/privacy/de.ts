import type { LegalPageContent } from "../types";
import { emailLink, h3, p, strong, ul } from "../blocks";
import { legalFacts } from "../shared";

export const privacyContent: LegalPageContent = {
  routeKey: "privacyPolicy",
  meta: {
    title: "Datenschutz | Flexido",
    description: "Datenschutzrichtlinie des Unternehmens Flexido.",
  },
  eyebrow: "Rechtliches",
  title: "Datenschutz",
  desc: "Datenschutzrichtlinie des Unternehmens Flexido.",
  sections: [
    {
      id: "uvodno",
      heading: "1. Einleitung",
      blocks: [
        p(
          `Im Unternehmen ${legalFacts.companyDoOComma}, ${legalFacts.registeredAddress} (im Folgenden: „${legalFacts.companyShort}“ oder „Verantwortlicher“) sind wir uns der Verantwortung im Umgang mit den personenbezogenen Daten unserer Kunden, potenziellen Kunden, Besucher der Website von ${legalFacts.companyShort} sowie aller Personen bewusst, die uns bei Kontaktaufnahme personenbezogene Daten offenlegen (im Folgenden: „Nutzer“), und wir erlassen daher diese Datenschutzrichtlinie (im Folgenden: „Richtlinie“), mit der wir unsere Nutzer auf transparente, verständliche und einfache Weise über die Zwecke, die Rechtsgrundlage der Verarbeitung ihrer personenbezogenen Daten und die Rechte im Zusammenhang mit der Verarbeitung unterrichten, wie sie ihnen durch das Gesetz über den Schutz personenbezogener Daten (${legalFacts.zvop2}) und Verordnung ${legalFacts.gdprCitation} des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten, zum freien Datenverkehr und zur Aufhebung der Richtlinie 95/46/EG (im Folgenden: „Datenschutz-Grundverordnung“) gewährleistet werden.`
        ),
        p(
          "Ausdrücke wie „Verantwortlicher“, „Verarbeitung“, „Einschränkung der Verarbeitung“, „Auftragsverarbeiter“, „Profiling“, „Pseudonymisierung“, „Dritter“ und „Unternehmen“, die in dieser Richtlinie verwendet werden, haben die Bedeutung, die ihnen die Datenschutz-Grundverordnung zuweist."
        ),
        p(
          strong(
            "Die Richtlinie regelt gemäß der Datenschutz-Grundverordnung folgende Bereiche:"
          )
        ),
        ul(
          "Kontaktinformationen des Verantwortlichen und Kontakt der Datenschutzbeauftragten,",
          "Zwecke und Rechtsgrundlagen für die Verarbeitung verschiedener Arten personenbezogener Daten der Nutzer, einschließlich des Profilings personenbezogener Daten der Nutzer,",
          "Empfänger personenbezogener Daten, vertragliche Verarbeitung und Übermittlung von Daten in Drittländer,",
          "Speicherdauer der einzelnen Arten personenbezogener Daten,",
          "Sorge für die Sicherheit personenbezogener Daten,",
          "Rechte der Nutzer im Zusammenhang mit der Verarbeitung personenbezogener Daten,",
          "Verfahren zur Geltendmachung der Rechte der Nutzer im Zusammenhang mit der Verarbeitung personenbezogener Daten,",
          "Recht auf Einlegung einer Beschwerde im Zusammenhang mit der Verarbeitung personenbezogener Daten."
        ),
      ],
    },
    {
      id: "podatki",
      heading: "2. Angaben zum Verantwortlichen und zur für den Datenschutz beauftragten Person",
      blocks: [
        p(
          `Verantwortlicher der personenbezogenen Daten der Nutzer ist das Unternehmen ${legalFacts.companyDoO}, ${legalFacts.registeredAddress}. Im Unternehmen ${legalFacts.companyShort} ist eine für den Schutz personenbezogener Daten beauftragte Person bestellt, die unter der E-Mail-Adresse `,
          emailLink,
          " erreichbar ist."
        ),
      ],
    },
    {
      id: "osebni",
      heading: "3. Personenbezogene Daten",
      blocks: [
        p(
          strong(
            "Personenbezogene Daten sind Informationen, die Sie als bestimmte oder bestimmbare natürliche Person identifizieren. Ein Nutzer ist bestimmbar, wenn er direkt oder indirekt identifiziert werden kann, insbesondere durch Angabe einer Kennung wie eines Namens, einer Kennnummer, von Standortdaten, einer Online-Kennung oder durch Angabe eines oder mehrerer besonderer Merkmale, die Ausdruck der physischen, physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen oder sozialen Identität des Nutzers sind. Der Verantwortliche erhebt gemäß den im Weiteren der Richtlinie bestimmten Zwecken folgende personenbezogene Daten:"
          )
        ),
        ul(
          "Grunddaten über den Nutzer (Vor- und Nachname, Titel, Arbeitsstelle und andere Daten über den Arbeitgeber),",
          "Kontaktdaten und Daten über die Kommunikation des Nutzers mit dem Verantwortlichen (E-Mail-Adresse, Telefonnummer, Datum, Uhrzeit und Inhalt der postalischen oder E-Mail-Kommunikation, Datum, Uhrzeit und Dauer von Telefonanrufen),",
          `Daten über die Teilnahme an Veranstaltungen, die ${legalFacts.companyShort} organisiert (Angabe zur Veranstaltung, an der Sie teilgenommen haben, Ort und Datum der Veranstaltung),`,
          "Daten über die Nutzung der Website des Verantwortlichen durch den Nutzer (Daten und Uhrzeiten der Websitebesuche, besuchte Seiten bzw. URLs, Verweildauer auf der jeweiligen Seite, Anzahl der besuchten Seiten, Gesamtzeit des Websitebesuchs, vorgenommene Einstellungen auf der Website) sowie Daten über die Nutzung empfangener Nachrichten (E-Mail, SMS) des Verantwortlichen,",
          "Daten aus vom Nutzer freiwillig ausgefüllten Formularen,",
          "andere Daten, die der Nutzer dem Verantwortlichen freiwillig bei der Anforderung bestimmter Dienste übermittelt, die diese Daten erfordern."
        ),
        p(
          "Der Verantwortliche erhebt und verarbeitet die personenbezogenen Daten des Nutzers nicht, außer wenn dieser ihm dies ermöglicht bzw. darin einwilligt, d. h. bei der Bestellung von Produkten oder Dienstleistungen, bei Begegnungen auf Messen oder anderen Fachveranstaltungen, wenn für die Erhebung personenbezogener Daten eine gesetzliche Grundlage besteht, die Verarbeitung zur Erfüllung vertraglicher Verpflichtungen erforderlich ist oder die Verarbeitung aufgrund berechtigter Interessen erforderlich ist, die der Verantwortliche verfolgt (im Folgenden: „berechtigtes Interesse“)."
        ),
      ],
    },
    {
      id: "podlage",
      heading: "4. Grundlagen der Verarbeitung und Zwecke der Verarbeitung",
      blocks: [
        p(
          strong(
            `${legalFacts.companyShort} wird Ihre personenbezogenen Daten für einen der nachstehend genannten Zwecke auf der Grundlage folgender Rechtsgrundlagen verarbeiten:`
          )
        ),
        ul(
          "Ihre Zustimmung bzw. Einwilligung,",
          "Erfüllung der gesetzlichen Verpflichtungen des Verantwortlichen,",
          "auf der Grundlage des berechtigten Interesses,",
          "Erfüllung einer vertraglichen Verpflichtung."
        ),
        p(
          `${legalFacts.companyShort} wird Ihre personenbezogenen Daten nur für die Zwecke verarbeiten, für die sie erlangt wurden, und sie nicht für Zwecke verarbeiten, die mit den Zwecken, für die sie erhoben wurden, unvereinbar sind. ${legalFacts.companyShort} erhebt vom Nutzer nur diejenigen personenbezogenen Daten, die zur Erreichung des jeweiligen Zwecks unbedingt erforderlich sind.`
        ),
        h3("Verarbeitung zur Erfüllung vertraglicher Verpflichtungen"),
        p(
          "In bestimmten Fällen ist die Verarbeitung personenbezogener Daten unbedingt erforderlich zur Erfüllung der vertraglichen Verpflichtungen des Verantwortlichen. Stellt der Nutzer die erforderlichen Daten nicht bereit, kann der Verantwortliche mit dem Nutzer keinen Vertrag schließen bzw. die Leistungen nicht erbringen."
        ),
        p(
          "Der Verantwortliche wird Ihre personenbezogenen Daten zur Erfüllung vertraglicher Verpflichtungen für folgende Zwecke verarbeiten:"
        ),
        ul(
          "vertragliche Regelung der geschäftlichen Zusammenarbeit,",
          "Durchführung der im Kooperationsvertrag bestimmten Tätigkeiten,",
          "Kommunikation mit Auftragnehmern und anderen Kontaktpersonen des Kunden zum Zweck der Durchführung der im Kooperationsvertrag bestimmten Tätigkeiten,",
          `Anmeldung des Nutzers zu einer Veranstaltung, die ${legalFacts.companyShort} bzw. einer der Partner des Verantwortlichen organisiert.`
        ),
        h3("Verarbeitung auf der Grundlage der Zustimmung bzw. Einwilligung"),
        p(
          `${legalFacts.companyShort} wird auf der Grundlage Ihrer schriftlichen Zustimmung Ihre personenbezogenen Daten für folgende Zwecke verarbeiten:`
        ),
        ul(
          "Versand von Einladungen zu Branchenveranstaltungen,",
          "Information über Neuheiten in der Branche,",
          "gelegentlicher Versand von Angeboten,",
          "telefonische Kontaktaufnahme zum Zweck der Vorstellung des Verkaufsprogramms,",
          "zur Nachverfolgung des Lesens gesendeter E-Mail-Nachrichten, und zwar welche E-Mail-Nachricht Sie geöffnet bzw. nicht geöffnet haben, welche Links Sie geöffnet bzw. angeklickt haben, wie lange Sie sie gelesen oder sich einzelne Inhalte angesehen haben,",
          "zur Segmentierung der Nutzer auf der Grundlage der Tatsachen aus dem vorherigen Spiegelstrich und zum weiteren Versand angepasster (individualisierter) E-Mail-Nachrichten,",
          "zu Zwecken der Analyse des Lebenswegs des Nutzers auf der Website: woher der Nutzer auf die Website gelangt ist, zur Nachverfolgung der Verweildauer auf der Website, welche Webseiten er besucht hat, welche Inhalte er heruntergeladen bzw. angesehen hat,",
          "zur Segmentierung der Nutzer auf der Grundlage der Tatsachen aus dem vorherigen Spiegelstrich und zum weiteren Versand angepasster (individualisierter) Nachrichten über mehrkanalige Kommunikation,",
          "für alle anderen Zwecke, denen Sie bei der Zusammenarbeit mit dem Verantwortlichen spezifisch zustimmen."
        ),
        p(
          "In allen Fällen, in denen Sie die Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten erteilen, können Sie diese Einwilligung jederzeit über die E-Mail-Adresse ",
          emailLink,
          " widerrufen."
        ),
        h3(
          `Die Verarbeitung ist zur Erfüllung der gesetzlichen Verpflichtungen von ${legalFacts.companyShort} erforderlich`
        ),
        p(
          "Wir verarbeiten Ihre personenbezogenen Daten auch dann, wenn uns dies das Gesetz vorschreibt. Ein Beispiel für den Zweck einer solchen Verarbeitung ist die Verarbeitung Ihrer personenbezogenen Daten für die Zwecke gerichtlicher oder verwaltungsbehördlicher Verfahren."
        ),
        h3(
          `Verarbeitung auf der Grundlage des berechtigten Interesses, das ${legalFacts.companyShort} verfolgt`
        ),
        p(
          "Der Verantwortliche kann Daten auch auf der Grundlage des berechtigten Interesses verarbeiten, außer wenn über solchen Interessen die Interessen oder Grundrechte und Grundfreiheiten des Nutzers überwiegen, auf den sich die personenbezogenen Daten beziehen, die den Schutz personenbezogener Daten erfordern. Bei der Verwendung des berechtigten Interesses führt der Verantwortliche stets eine Prüfung gemäß der Datenschutz-Grundverordnung durch."
        ),
        p(
          `In bestimmten Fällen kann ${legalFacts.companyShort} für die Weiterverarbeitung Ihrer personenbezogenen Daten auf der Grundlage des berechtigten Interesses, die auf der Grundlage einer der oben genannten Rechtsgrundlagen (Einwilligung, Vertrag) erhoben wurden, bestimmte Schutzmaßnahmen zum Schutz Ihrer personenbezogenen Daten ergreifen, wie Pseudonymisierung, Verschlüsselung, Verarbeitung in aggregierter Form oder/und Löschung bestimmter Arten personenbezogener Daten. ${legalFacts.companyShort} wird Ihre personenbezogenen Daten auf der Grundlage des berechtigten Interesses für folgende Zwecke verarbeiten:`
        ),
        ul(
          "Marketing-, Geschäfts- und andere technische Analysen, wie zum Beispiel das Analysieren und Feststellen, aus welchen Organisationen die Teilnehmer von Veranstaltungen kommen und welche Funktionen sie in diesen Organisationen innehaben, zur Führung von Aufzeichnungen, an wie vielen und welchen Veranstaltungen der Nutzer teilgenommen hat, zur Führung von Aufzeichnungen im Zusammenhang mit erteilten Bescheinigungen, Zertifikaten und Lizenzen der Teilnehmer von Veranstaltungen.",
          "Verhinderung von Missbrauch, Gewährleistung der Sicherheit, Geltendmachung von Ansprüchen oder Verteidigung gegen Ansprüche in Verwaltungs- und Gerichtsverfahren.",
          "Direktmarketing, einschließlich der Erstellung von Profilen der Nutzer, auf der Grundlage zuvor rechtmäßig erlangter personenbezogener Daten."
        ),
        h3("Web-Analyse"),
        p(
          "Mit Ihrer Einwilligung verwenden wir Vercel Web Analytics für anonyme Statistiken über Besuche der Website. Das Tool wird nicht vor Ihrer Einwilligung aktiviert und nicht für Werbe- oder Profilierungszwecke genutzt. Sie können die Einwilligung jederzeit in den Cookie-Einstellungen in der Fußzeile widerrufen."
        ),
      ],
    },
    {
      id: "uporabniki",
      heading:
        "5. Empfänger personenbezogener Daten, vertragliche Verarbeitung und Übermittlung von Daten in Drittländer",
      blocks: [
        p(
          `Auf Ihre personenbezogenen Daten dürfen nur Beschäftigte des Unternehmens ${legalFacts.companyShort} und Auftragsverarbeiter personenbezogener Daten zugreifen, die hierzu unmittelbar befugt sind.`
        ),
        p(
          `${legalFacts.companyShort} wird Ihre personenbezogenen Daten niemals an unbefugte Dritte übermitteln.`
        ),
        p(
          `Mit der Nutzung der Websites und anderer Dienste von ${legalFacts.companyShort} stimmen Sie zu, dass ${legalFacts.companyShort} einzelne Aufgaben im Zusammenhang mit Ihren personenbezogenen Daten den unten aufgeführten Auftragsverarbeitern anvertrauen kann. Die genannten Auftragsverarbeiter dürfen Ihre personenbezogenen Daten ausschließlich im Namen und gemäß den schriftlichen Weisungen von ${legalFacts.companyShort} verarbeiten, im Rahmen der Vollmacht, die sich aus dem Vertrag zwischen ${legalFacts.companyShort} und dem Auftragsverarbeiter ergibt, und gemäß den in der Richtlinie bestimmten Zwecken.`
        ),
        p(strong(`${legalFacts.companyShort} arbeitet mit folgenden Auftragsverarbeitern zusammen:`)),
        ul(...legalFacts.processors),
      ],
    },
    {
      id: "cas",
      heading: "6. Speicherdauer personenbezogener Daten",
      blocks: [
        p(
          "Der Verantwortliche verarbeitet personenbezogene Daten nicht länger, als es zur Erreichung der Zwecke erforderlich ist, für die die personenbezogenen Daten erhoben und weiterverarbeitet wurden."
        ),
        p(
          `Personenbezogene Daten, die ${legalFacts.companyShort} aufgrund der Durchführung eines Vertrags verarbeitet, speichert ${legalFacts.companyShort} für den Zeitraum, der zur Erfüllung des Vertrags erforderlich ist, und weitere ${legalFacts.contractRetentionYears} Jahre nach dessen Beendigung, außer in Fällen, in denen zwischen Ihnen und dem Verantwortlichen ein Streit im Zusammenhang mit dem Vertrag entsteht. In einem solchen Fall speichert ${legalFacts.companyShort} die Daten weitere ${legalFacts.disputeRetentionYears} Jahre nach Rechtskraft einer gerichtlichen oder schiedsgerichtlichen Entscheidung oder eines Vergleichs oder, wenn kein Gerichtsstreit stattgefunden hat, ${legalFacts.disputeRetentionYears} Jahre ab dem Tag der gütlichen Beilegung des Streits.`
        ),
        p(
          `Personenbezogene Daten, die ${legalFacts.companyShort} auf gesetzlicher Grundlage verarbeitet, speichert ${legalFacts.companyShort} für den gesetzlich vorgeschriebenen Zeitraum.`
        ),
        p(
          `Personenbezogene Daten, die der Verantwortliche auf der Grundlage Ihrer persönlichen Einwilligung oder des berechtigten Interesses verarbeitet, speichert ${legalFacts.companyShort} dauerhaft, bis zum Widerruf Ihrer Einwilligung bzw. bis zum Verlangen der Beendigung der Verarbeitung. ${legalFacts.companyShort} löscht solche Daten vor dem Widerruf nur, wenn der Zweck der Verarbeitung der personenbezogenen Daten bereits erreicht ist oder wenn das Gesetz dies bestimmt.`
        ),
        p(
          `Nach Ablauf der Speicherfrist wird ${legalFacts.companyShort} Ihre personenbezogenen Daten wirksam und dauerhaft löschen oder anonymisieren, sodass sie nicht mehr mit Ihnen in Verbindung gebracht werden können.`
        ),
      ],
    },
    {
      id: "skrb",
      heading: "7. Sorge für die Sicherheit personenbezogener Daten",
      blocks: [
        p(
          strong(
            `${legalFacts.companyShort} ist dem Schutz Ihrer personenbezogenen Daten verpflichtet. Unbefugten Zugriff auf sie, ihre Verwendung und Offenlegung verhindert es durch folgende Maßnahmen:`
          )
        ),
        ul(
          "die Daten werden durch Räume, Ausrüstung und Systemsoftware geschützt, einschließlich der Ein- und Ausgabeeinheiten,",
          "die Daten werden durch die Anwendungssoftware geschützt, mit der personenbezogene Daten verarbeitet werden,",
          `${legalFacts.companyShort} verhindert unbefugten Zugriff auf personenbezogene Daten bei ihrer Übertragung, einschließlich der Übertragung über Telekommunikationsmittel und -netze,`,
          `${legalFacts.companyShort} gewährleistet eine wirksame Art der Sperrung, Vernichtung, Löschung oder Anonymisierung personenbezogener Daten, wenn der Zweck, für den sie erhoben wurden, entfällt,`,
          `${legalFacts.companyShort} ermöglicht die spätere Feststellung, wann einzelne Daten in die Sammlung personenbezogener Daten eingegeben, verwendet, übermittelt oder anderweitig verarbeitet wurden und wer dies getan hat.`
        ),
        p(
          strong(
            `Unbefugten Zugriff auf personenbezogene Daten, ihre Verwendung und Offenlegung verhindert ${legalFacts.companyShort} durch folgende Sicherheitstechnologien und Verfahren:`
          )
        ),
        ul(
          "Kontrolle der physischen Zugänge,",
          "Abschließen von Räumen, Schränken, Computern,",
          "Aufbewahrung der Träger personenbezogener Daten in gesicherten Räumen,",
          "Verhinderung der Einsicht in personenbezogene Daten durch Instandhalter der Räume, Kunden und andere Besucher der Räume des vertraglichen Auftragsverarbeiters,",
          "Verhinderung der Verwendung von Passwörtern durch Personen, denen das Passwort nicht unmittelbar zugeteilt wurde bzw. für einen anderen als den bestimmten Zweck,",
          "Beschränkung der Datenausfuhr durch Beschäftigte,",
          "Kontrolle von Kopien und Datenausfuhren,",
          "beschränkte, erfasste und gesicherte Übertragung von Daten über Telekommunikationsnetze,",
          "Entzug der Daten von Personen, deren Vertrag beim vertraglichen Auftragsverarbeiter endet,",
          "strenge Trennung von den Daten etwaiger anderer Verantwortlicher."
        ),
      ],
    },
    {
      id: "pravice",
      heading: "8. Rechte der Nutzer im Zusammenhang mit dem Schutz personenbezogener Daten",
      blocks: [
        p(
          `Gemäß der Datenschutz-Grundverordnung gewährleistet Ihnen ${legalFacts.companyShort} folgende Rechte im Zusammenhang mit dem Schutz personenbezogener Daten, die im Weiteren näher ausgeführt sind:`
        ),
        ul(
          "das Recht auf Auskunft über die Daten,",
          "das Recht auf Berichtigung,",
          "das Recht auf Löschung („Recht auf Vergessenwerden“),",
          "das Recht auf Einschränkung der Verarbeitung,",
          "das Recht auf Datenübertragbarkeit,",
          "das Recht auf Widerspruch."
        ),
        h3("Recht auf Auskunft über die Daten"),
        p(
          `Sie haben das Recht, von ${legalFacts.companyShort} eine Bestätigung darüber zu erhalten, ob ${legalFacts.companyShort} Ihre personenbezogenen Daten verarbeitet, und wenn dies der Fall ist, haben Sie das Recht, Zugang zu Ihren personenbezogenen Daten und folgende Informationen im Zusammenhang mit der Verarbeitung personenbezogener Daten zu erhalten:`
        ),
        ul(
          "die Zwecke der Verarbeitung,",
          "die Arten personenbezogener Daten,",
          "soweit möglich, die geplante Dauer, für die die personenbezogenen Daten gespeichert werden, oder, falls dies nicht möglich ist, die Kriterien für die Festlegung dieser Dauer,",
          "das Bestehen eines Rechts, vom Verantwortlichen die Berichtigung oder Löschung personenbezogener Daten oder die Einschränkung der Verarbeitung personenbezogener Daten zu verlangen,",
          "das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzulegen,",
          "wenn die personenbezogenen Daten nicht bei dem Nutzer erhoben wurden, alle verfügbaren Informationen über ihre Herkunft,"
        ),
        p(
          `Auf der Grundlage Ihres Antrags wird Ihnen ${legalFacts.companyShort} eine unentgeltliche Kopie Ihrer personenbezogenen Daten zur Verfügung stellen, die verarbeitet werden.`
        ),
        h3("Recht auf Berichtigung"),
        p(
          `Sie haben das Recht, von ${legalFacts.companyShort} zu verlangen, dass dieser unverzüglich unrichtige personenbezogene Daten, die Sie betreffen, berichtigt. Unter Berücksichtigung der Zwecke der Verarbeitung haben Sie das Recht auf Vervollständigung unvollständiger personenbezogener Daten, einschließlich mittels Bereitstellung einer ergänzenden Erklärung.`
        ),
        h3("Recht auf Löschung („Recht auf Vergessenwerden“)"),
        p(
          `Sie haben das Recht, von ${legalFacts.companyShort} zu verlangen, dass personenbezogene Daten, die Sie betreffen, unverzüglich gelöscht werden, und ${legalFacts.companyShort} muss Ihre personenbezogenen Daten unverzüglich löschen in folgenden Fällen:`
        ),
        ul(
          "wenn die personenbezogenen Daten für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden, nicht mehr notwendig sind,",
          "wenn Sie die Einwilligung, die die Grundlage für die Verarbeitung Ihrer personenbezogenen Daten ist, widerrufen und keine andere Rechtsgrundlage für die Verarbeitung besteht,",
          "wenn Sie der Verarbeitung auf der Grundlage des berechtigten Interesses des Verantwortlichen widersprechen und keine vorrangigen berechtigten Gründe für die Verarbeitung vorliegen,",
          "wenn Sie der Verarbeitung für Zwecke des Direktmarketings widersprechen,",
          "wenn die personenbezogenen Daten zur Erfüllung einer rechtlichen Verpflichtung nach dem Recht der EU oder der slowenischen Rechtsordnung gelöscht werden müssen."
        ),
        h3("Recht auf Einschränkung der Verarbeitung"),
        p(
          `Sie haben das Recht, zu verlangen, dass ${legalFacts.companyShort} die Verarbeitung Ihrer personenbezogenen Daten einschränkt, wenn einer der folgenden Fälle zutrifft:`
        ),
        ul(
          "wenn Sie die Richtigkeit der Daten bestreiten, und zwar für einen Zeitraum, der es dem Verantwortlichen ermöglicht, die Richtigkeit Ihrer personenbezogenen Daten zu überprüfen,",
          "wenn die Verarbeitung unrechtmäßig ist und Sie die Löschung der personenbezogenen Daten ablehnen und stattdessen die Einschränkung ihrer Verwendung verlangen,",
          `wenn ${legalFacts.companyShort} die personenbezogenen Daten für die Zwecke der Verarbeitung nicht länger benötigt, Sie sie jedoch zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigen,`,
          "wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben, solange noch nicht feststeht, ob die berechtigten Gründe des Verantwortlichen gegenüber Ihren Gründen überwiegen."
        ),
        h3("Recht auf Datenübertragbarkeit"),
        p(
          `Sie haben das Recht, die Sie betreffenden personenbezogenen Daten, die ${legalFacts.companyShort} besessen hat, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten, und das Recht, diese Daten einem anderen Verantwortlichen zu übermitteln, ohne dass ${legalFacts.companyShort}, dem die personenbezogenen Daten bereitgestellt wurden, Sie dabei behindert, sofern:`
        ),
        ul(
          "die Verarbeitung auf Ihrer Einwilligung oder auf einem Vertrag beruht und",
          "die Verarbeitung mithilfe automatisierter Verfahren erfolgt."
        ),
        h3("Recht auf Widerspruch"),
        p(
          `Aus Gründen, die sich aus Ihrer besonderen Situation ergeben, haben Sie das Recht, jederzeit der Verarbeitung personenbezogener Daten zu widersprechen, wenn diese auf berechtigten Interessen beruht, die ${legalFacts.companyShort} oder ein Dritter verfolgt. ${legalFacts.companyShort} wird die Verarbeitung personenbezogener Daten einstellen, es sei denn, es werden zwingende schutzwürdige Gründe für die Verarbeitung nachgewiesen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.`
        ),
        p(
          "Werden personenbezogene Daten für Zwecke des Direktmarketings verarbeitet, so haben Sie das Recht, jederzeit der Verarbeitung Ihrer personenbezogenen Daten für Zwecke eines solchen Marketings zu widersprechen, einschließlich des Profilings, soweit es mit einem solchen Direktmarketing in Verbindung steht. Beruht das Direktmarketing auf einer Einwilligung, kann das Recht auf Widerspruch durch Widerruf der erteilten persönlichen Einwilligung ausgeübt werden."
        ),
      ],
    },
    {
      id: "postopek",
      heading: "9. Verfahren zur Geltendmachung der Rechte",
      blocks: [
        p(
          "Alle oben genannten Anträge, die die Geltendmachung von Rechten im Zusammenhang mit Ihren personenbezogenen Daten betreffen, können Sie über die E-Mail-Adresse ",
          emailLink,
          ` oder per Post an die Anschrift ${legalFacts.companyDoO}, ${legalFacts.registeredAddress} geltend machen.`
        ),
        p(
          "Wenn Sie den Antrag gemäß dem vorstehenden Absatz auf elektronischem Wege übermitteln, werden Ihnen die Informationen, soweit dies möglich ist, auf elektronischem Wege bereitgestellt, es sei denn, Sie verlangen etwas anderes."
        ),
        p(
          "Der Verantwortliche kann zum Zweck einer zuverlässigen Identifizierung im Falle der Geltendmachung Ihrer Rechte im Zusammenhang mit personenbezogenen Daten von Ihnen zusätzliche Daten verlangen, die zur Bestätigung Ihrer Identität erforderlich sind, und das Tätigwerden gemäß diesem Kapitel nur ablehnen, wenn er nachweist, dass er Sie nicht zuverlässig identifizieren kann."
        ),
        p(
          `Der Verantwortliche wird auf den Antrag, mit dem Sie Ihre Rechte im Zusammenhang mit Ihren personenbezogenen Daten geltend machen, ohne unangemessene Verzögerung und spätestens innerhalb eines Monats nach Eingang des Antrags antworten. ${legalFacts.companyShort} kann die Frist zur Ausübung der Rechte unter Berücksichtigung der Komplexität und der Anzahl der Anträge um höchstens zwei weitere Monate verlängern.`
        ),
        p(
          strong(
            `Sind Ihre Anträge gemäß diesem Kapitel offensichtlich unbegründet oder exzessiv, insbesondere weil sie sich wiederholen, kann ${legalFacts.companyShort}:`
          )
        ),
        ul(
          "eine angemessene Gebühr verlangen, wobei die Verwaltungskosten für die Übermittlung der Informationen oder der Mitteilung oder die Durchführung der beantragten Maßnahme berücksichtigt werden,",
          "die Maßnahme in Bezug auf den Antrag verweigern."
        ),
      ],
    },
    {
      id: "pravica",
      heading: "10. Recht auf Einlegung einer Beschwerde im Zusammenhang mit der Verarbeitung personenbezogener Daten",
      blocks: [
        p(
          "Eine etwaige Beschwerde im Zusammenhang mit der Verarbeitung Ihrer personenbezogenen Daten können Sie an die E-Mail-Adresse ",
          emailLink,
          ` oder per Post an die Anschrift ${legalFacts.companyDoO}, ${legalFacts.registeredAddress} senden.`
        ),
        p(
          "Sie haben das Recht, eine Beschwerde auch unmittelbar beim Informationsbeauftragten einzulegen, wenn Sie der Auffassung sind, dass die Verarbeitung personenbezogener Daten, die Sie betreffen, gegen slowenische Vorschriften oder Vorschriften der EU auf dem Gebiet des Schutzes personenbezogener Daten verstößt."
        ),
      ],
    },
    {
      id: "veljavnost",
      heading: "11. Gültigkeit der Richtlinie",
      blocks: [
        p(
          `Die Richtlinie gilt ab dem ${legalFacts.privacyEffectiveDate} und kann jederzeit geändert oder ergänzt werden.`
        ),
      ],
    },
  ],
};
