import type { LegalPageContent } from "../types";
import { p, strong } from "../blocks";
import { legalFacts } from "../shared";

export const salesTermsContent: LegalPageContent = {
  routeKey: "salesTerms",
  meta: {
    title: "Allgemeine Verkaufsbedingungen | Flexido",
    description:
      "Allgemeine Bedingungen für Angebote, Bestellungen sowie die Lieferung von Waren und Dienstleistungen von Flexido.",
  },
  eyebrow: "Rechtliches",
  title: `Allgemeine Verkaufsbedingungen der ${legalFacts.companyUpperShort}`,
  desc: "Allgemeine Bedingungen für Angebote, Bestellungen sowie die Lieferung von Waren und Dienstleistungen von Flexido.",
  sections: [
    {
      id: "general",
      heading: "1. Allgemeines",
      blocks: [
        p(
          strong("1.1."),
          " Diese allgemeinen Verkaufsbedingungen bestimmen ausschließlich die Grundlage für alle unsere Angebote und jeden Verkauf bzw. jede Lieferung von Waren oder Dienstleistungen des Unternehmens FLEXIDO, d.o.o."
        ),
        p(
          strong("1.2."),
          " Von den allgemeinen Verkaufsbedingungen abweichende Bedingungen gelten nur, wenn sie schriftlich durch das Unternehmen FLEXIDO, d.o.o. bestätigt wurden."
        ),
        p(
          strong("1.3."),
          " Abweichende Verkaufsbedingungen, die der Käufer in seiner Bestellung angibt, gelten nur, wenn FLEXIDO, d.o.o. sie schriftlich bestätigt."
        ),
        p(
          strong("1.4."),
          " Als schriftliche Bestätigung gilt die Bestätigung per Post, E-Mail und Fax."
        ),
        p(
          strong("1.5."),
          " Eine bestätigte Vereinbarung über die Abweichung einer einzelnen Bestimmung von den allgemeinen Verkaufsbedingungen des Unternehmens FLEXIDO, d.o.o. berührt nicht die Gültigkeit der übrigen Bestimmungen dieser Bedingungen."
        ),
        p(
          strong("1.6."),
          " Diese Allgemeinen Verkaufsbedingungen gelten bis zum Widerruf oder bis zu einer Änderung, die auf der Website des Verkäufers veröffentlicht wird."
        ),
      ],
    },
    {
      id: "offers",
      heading: "2. Angebote und Bestellungen",
      blocks: [
        p(
          strong("2.1."),
          " Das Angebot des Unternehmens FLEXIDO, d.o.o. ist innerhalb der auf jedem einzelnen Angebot angegebenen Frist gültig. Die Frist beginnt mit dem Tag der Abgabe des Angebots."
        ),
        p(
          strong("2.2."),
          " Die Ausstellung einer Proformarechnung gilt als Auftragsbestätigung. Die Frist zur Erfüllung der Verpflichtungen beginnt mit der Erfüllung der Verpflichtungen durch den Käufer gemäß dem Angebot bzw. mit der Zahlung der Proformarechnung."
        ),
        p(
          strong("2.3."),
          " Das Angebot und alle Anlagen sind ein Geschäftsgeheimnis und dürfen ohne unsere schriftliche Erlaubnis nicht vervielfältigt oder Dritten zugänglich gemacht werden."
        ),
      ],
    },
    {
      id: "prices",
      heading: "3. Preise und Zahlungsbedingungen",
      blocks: [
        p(
          strong("3.1."),
          " Die vereinbarten Preise sind Nettopreise. Sofern nicht anders bestimmt, gelten alle Preise ohne Versicherung und sonstige Zusatzkosten, geliefert am Standort des Unternehmens FLEXIDO, d.o.o., ungeladen. Die Mehrwertsteuer ist nicht im Preis enthalten und wird gesondert berechnet. Versand- bzw. Transportkosten sind nicht im Preis enthalten und werden gesondert berechnet."
        ),
        p(
          strong("3.2."),
          " Die Zahlungsfrist ist in jedem einzelnen Angebot gesondert bestimmt. Ist sie im Angebot nicht besonders bestimmt, wird sie nachträglich im Vertrag bestimmt."
        ),
        p(
          strong("3.3."),
          " Im Falle des Zahlungsverzugs berechnen wir gesetzliche Verzugszinsen."
        ),
        p(
          strong("3.4."),
          ` Gerät der Schuldner mit der Zahlung einer Rate um mehr als ${legalFacts.installmentDelayDays} Tage oder mit der Zahlung zweier Raten um mehr als ${legalFacts.twoInstallmentDelayDays} Tage in Verzug, behält sich der Verkäufer das Recht vor, ohne zusätzliche Frist vom Vertrag zurückzutreten und Ersatz des ihm dadurch entstandenen Schadens zu verlangen.`
        ),
        p(
          strong("3.5."),
          ` Gerät der Käufer mit der Zahlung einer Rate um mehr als ${legalFacts.installmentDelayDays} Tage oder mit der Zahlung zweier Raten um mehr als ${legalFacts.twoInstallmentDelayDays} Tage in Verzug, werden alle Raten fällig.`
        ),
      ],
    },
    {
      id: "delivery-period",
      heading: "4. Lieferfrist",
      blocks: [
        p(
          strong("4.1."),
          " Die Lieferfrist beginnt, sofern nach dem Angebot eine Verpflichtung zur Zahlung einer Proformarechnung bestimmt ist, mit deren Zahlung, andernfalls an dem Tag, an dem FLEXIDO, d.o.o. die Annahme des Angebots erhält. Werden technische Lieferdetails oder finanzielle Bedingungen nach dem Vorstehenden zusätzlich geändert oder abgestimmt, beginnt die Frist mit der Bestätigung der Änderungen bzw. Details durch beide Parteien."
        ),
        p(
          strong("4.2."),
          " Als Lieferfrist bzw. Lieferdatum gilt der Tag, an dem die Ware dem Käufer geliefert wird, oder der Tag, an dem der Käufer benachrichtigt wurde, dass die Ware zur Abnahme bereit ist."
        ),
        p(strong("4.3."), " Wir behalten uns das Recht zu Teillieferungen vor."),
        p(
          strong("4.4."),
          " Die bestätigte Lieferfrist kann verlängert werden im Falle einer nachträglichen Änderung der Bestellung des Käufers, der Menge, der technischen Spezifikation der Ware u. Ä. sowie im Falle höherer Gewalt und einer Verzögerung seitens des Lieferanten FLEXIDO, d.o.o. und objektiver Ursachen, auf die der Verkäufer keinen Einfluss hat."
        ),
        p(
          strong("4.5."),
          " Kann das Unternehmen FLEXIDO, d.o.o. aus objektiven Gründen eine bestimmte Maschine bzw. Ausrüstung nicht liefern, wird der Kaufpreis ohne Zinsen zurückerstattet. Vereinbaren die Parteien mit dem Käufer eine Änderung des Vertrags bzw. der Bestellung, gilt die betreffende Zahlung als Vorauszahlung nach diesem neuen Vertrag."
        ),
        p(
          strong("4.6."),
          " Nimmt der Käufer die vertragsgemäß bereitgestellte Ware nicht zum vereinbarten Zeitpunkt gemäß Vertrag oder Bestellung ab, ist das Unternehmen FLEXIDO, d.o.o. berechtigt, die Erfüllung des Vertrags oder der Bestellung durch den Käufer zu verlangen."
        ),
        p(
          strong("4.7."),
          ` Bei Verzug des Käufers mit der Abnahme der Ware hat das Unternehmen ${legalFacts.companyUpper} das Recht, für jede vollendete Kalenderwoche ein Lagergeld in Höhe von ${legalFacts.storageFeePercent} des Bestellbetrags zu berechnen. Der Käufer hat das Recht, aus objektiven Gründen um Verlängerung der Frist zur Abnahme der Ware zu ersuchen, sofern das Ersuchen um Verlängerung mindestens ${legalFacts.extensionRequestWeeks} Wochen vor dem vereinbarten Termin zur Abnahme der Ware eingeht. Während des Verzugs bei der Abnahme der Ware auf Seiten des Käufers oder der Verlängerung der Abnahmefrist auf Ersuchen des Käufers geht die Gefahr des zufälligen Untergangs mit dem Tag der Frist zur Abnahme der Ware auf den Käufer über.`
        ),
        p(
          strong("4.8."),
          " Ist der Transport bzw. die Versendung bei Vertragsschluss vereinbart, erfolgt er ausschließlich auf Risiko und Kosten des Käufers. Eine Transportversicherung schließt das Unternehmen FLEXIDO, d.o.o. nur im Auftrag und für Rechnung des Käufers ab. Besteht keine Vereinbarung über den Transport, übernimmt der Käufer die Durchführung und Bezahlung des Transports."
        ),
      ],
    },
    {
      id: "shipment",
      heading: "5. Versendung und Lieferung der Ware sowie Gefahrübergang",
      blocks: [
        p(
          strong("5.1."),
          ` Für die Auslegung der Lieferbedingung bzw. der Versendung der Ware gelten die Bestimmungen der Internationalen Handelskammer ${legalFacts.incoterms}.`
        ),
        p(
          strong("5.2."),
          ` Der Übergabe- bzw. Versandort für die Lieferung der Ware ist, sofern nicht anders vereinbart, der Sitz des Unternehmens ${legalFacts.companyUpper} in ${legalFacts.deliveryPlace}.`
        ),
        p(
          strong("5.3."),
          ` Lieferungen des Unternehmens ${legalFacts.companyUpper} gelten als erfüllt: a) bei Lieferung ab Werk ${legalFacts.companyUpper}, ${legalFacts.deliveryPlace}, mit Empfang der Mitteilung, dass die Ware zur Lieferung verfügbar ist; b) bei Lieferung mit Abnahme der Ware – mit der Abnahme der Ware durch die Person / das Unternehmen, das den Transport durchführt; c) bei der Klausel CIP Käufer: mit Lieferung an den vereinbarten Ort (Beförderung und Versicherung der Ware bis zum vereinbarten Ort zahlt der Verkäufer).`
        ),
        p(
          strong("5.4."),
          ` Ware, die zur persönlichen Abholung bereitgestellt ist, muss der Käufer innerhalb von ${legalFacts.collectionBusinessDays} Werktagen nach Empfang der Mitteilung, dass die Ware zur Abholung bereit ist, abnehmen.`
        ),
        p(
          strong("5.5."),
          " Eine etwaige technische Abnahme der Ware, das heißt das Verfahren selbst sowie Ort und Zeit der technischen Abnahme, muss spätestens vor Ablauf der Lieferfrist vereinbart werden. Die Kosten der technischen Abnahme trägt der Käufer. Führt der Käufer die technische Abnahme der Ware nicht wie vereinbart durch, können wir die Ware auf Kosten und Risiko des Käufers versenden oder einlagern."
        ),
      ],
    },
    {
      id: "retention",
      heading: "6. Eigentumsvorbehalt",
      blocks: [
        p(
          strong("6.1."),
          " An der gelieferten Ware behalten wir uns das Eigentumsrecht bis zur vollständigen Erfüllung der Verpflichtungen des Käufers in Bezug auf die gelieferte Ware vor, einschließlich der Zahlung etwaiger Mahnkosten und Verzugszinsen."
        ),
        p(
          strong("6.2."),
          " Vor Ablauf der Zahlungsfrist hat der Käufer nicht das Recht, die Ware an eine dritte Person weiterzuverkaufen, sie zu belasten oder ohne Zustimmung einer dritten Person zur Nutzung zu überlassen."
        ),
        p(
          strong("6.3."),
          " Alle Risiken, ungeachtet des Eigentumsvorbehalts, trägt der Käufer ab der Abnahme der Maschine/Lieferung."
        ),
        p(
          strong("6.4."),
          " Der Käufer ist verpflichtet, an allen Maßnahmen zum Schutz unseres Eigentums bzw. unseres Eigentumsrechts an unserer Ware bis zur Erfüllung aller seiner Verpflichtungen mitzuwirken."
        ),
        p(
          strong("6.5."),
          " Der Verkäufer hat bis zur vollständigen Bezahlung durch den Käufer das Recht, die Ware gegen Diebstahl, Feuer, Beschädigungen, Wasser und andere Risiken auf Rechnung des Käufers zu versichern. Außer in dem Fall, dass der Käufer dem Verkäufer nachweist, dass der Käufer eine Versicherung abgeschlossen und die Versicherungspolice zugunsten des Verkäufers zur Bezahlung des Kaufpreises für den Kauf der Maschine vinkuliert hat."
        ),
        p(
          strong("6.6."),
          " Übernimmt der Käufer die Ausrüstung in Besitz vor Bezahlung des gesamten Kaufpreises, behält sich der Verkäufer das Recht vor, den Kaufgegenstand sichtbar als sein Eigentum zu kennzeichnen (mit Aufschriften, Aufklebern), wobei sich der Käufer verpflichtet, solche Kennzeichnungen bis zur Bezahlung des gesamten Kaufpreises nicht zu entfernen."
        ),
      ],
    },
    {
      id: "warranty",
      heading: "7. Garantie",
      blocks: [
        p(
          strong("7.1."),
          " Der Käufer kann eine mengenmäßige oder qualitative Abweichung der gelieferten Ware schriftlich spätestens innerhalb von 8 Tagen nach Empfang der Ware anzeigen bzw. reklamieren."
        ),
        p(
          strong("7.2."),
          " Der Käufer kann verdeckte Mängel bzw. verdeckte Qualitätsabweichungen schriftlich sofort nach Entdeckung anzeigen bzw. reklamieren, jedoch spätestens 6 Monate nach Abnahme der Ware."
        ),
        p(
          strong("7.3."),
          " Im Falle einer vorherigen technischen Abnahme der Ware ist der Käufer nicht zu einer nachträglichen Reklamation der Ware berechtigt."
        ),
        p(
          strong("7.4."),
          " Der Käufer muss auf unser Verlangen die reklamierte Ware sofort zurückgeben oder ihre Nutzung einstellen, damit die Berechtigung der Reklamation festgestellt werden kann. Über die Unterbrechung oder Einschränkung der Nutzung können der Käufer und das Unternehmen FLEXIDO, d.o.o. auch etwas anderes vereinbaren. Befolgt der Käufer die Anweisungen des Lieferanten nicht, verliert er das Recht zur Beschwerde bzw. Reklamation."
        ),
        p(
          strong("7.5."),
          " Wir berücksichtigen keine Reklamation, die durch unsachgemäße Verwendung und unbefugte oder unsachgemäße Montage, durch einen unbefugten und unsachgemäßen Eingriff in die Ware selbst, durch unsachgemäße Inbetriebnahme sowie durch unsachgemäßen, mangelhaften oder nachlässigen Umgang mit der Ware oder entgegen den Eigenschaften und Empfehlungen des Herstellers entstanden ist."
        ),
        p(
          strong("7.6."),
          " Alle Ansprüche zur Geltendmachung der Garantie müssen schriftlich mit erkennbaren Angaben über die Art des Schadens, über den Zeitpunkt des Schadenseintritts und mit Angaben zur Identifikation der Ware erfolgen. Die Richtigkeit der angegebenen Daten und die Umstände des Schadens darf unser Fachmann am Ort des Schadens überprüfen."
        ),
        p(
          strong("7.7."),
          " In keinem Fall übernimmt das Unternehmen FLEXIDO, d.o.o. irgendeinen Gewährleistungsanspruch und irgendeine Schadensersatzhaftung für einen etwaigen Schaden aus entgangenem Einkommen, verursacht durch Unterbrechung oder Stillstand der Produktion."
        ),
      ],
    },
    {
      id: "ip",
      heading: "8. Geistiges Eigentum",
      blocks: [
        p(
          strong("8.1."),
          " Pläne, Skizzen und andere technische Unterlagen sowie Kataloge mit Mustern, Prospekte, Bilder, Website-Informationen und ähnliche Unterlagen bleiben geistiges Eigentum des Unternehmens FLEXIDO, d.o.o. bzw. seiner Lieferanten und sind durch gesetzliche Vorschriften hinsichtlich Vervielfältigung, Fälschung und Verwendung zu Wettbewerbszwecken geschützt. Der Käufer verwendet die Lösungen des Unternehmens FLEXIDO, d.o.o. ausschließlich für den im Voraus vereinbarten Zweck. Die Verwendung von Lösungen, die den Rahmen der Vereinbarungen überschreiten, muss schriftlich vereinbart werden. Konzepte, Strategien und Systeme, die das Unternehmen FLEXIDO, d.o.o. entwickelt hat, sind ausschließlich nur für die Nutzung durch eine juristische Person erstellt. Die Nutzung der Lösungen des Unternehmens FLEXIDO, d.o.o. durch verbundene und nahestehende Unternehmen muss gesondert vertraglich vereinbart werden."
        ),
      ],
    },
    {
      id: "disputes",
      heading: "9. Streitbeilegung",
      blocks: [
        p(
          strong("9.1."),
          " Für alle Gerichtsverfahren zwischen Käufer und Verkäufer gelten ausschließlich die Gesetze der Republik Slowenien."
        ),
        p(
          strong("9.2."),
          ` Zuständiges Gericht für die Beilegung aller Streitigkeiten ist ${legalFacts.courtDe}.`
        ),
      ],
    },
  ],
};
