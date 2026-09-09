import type { Locale } from "@/i18n/config";

export type ConsentCopy = {
  title: string;
  explanation: string;
  accept: string;
  reject: string;
  preferences: string;
  save: string;
  necessaryCategory: string;
  necessaryDescription: string;
  analyticsCategory: string;
  analyticsDescription: string;
  cookieSettings: string;
  close: string;
  necessaryAlways: string;
};

export const consentCopy: Record<Locale, ConsentCopy> = {
  sl: {
    title: "Piškotki in analitika",
    explanation:
      "Uporabljamo nujne piškotke za delovanje strani in shranjevanje vaše izbire. Analitična orodja za anonimno statistiko obiskov se aktivirajo le, če z njimi soglašate.",
    accept: "Sprejmi analitiko",
    reject: "Zavrni",
    preferences: "Nastavitve",
    save: "Shrani izbiro",
    necessaryCategory: "Nujno",
    necessaryDescription:
      "Potrebno za delovanje strani in shranjevanje vaše izbire glede piškotkov.",
    analyticsCategory: "Analitika",
    analyticsDescription:
      "Anonimna statistika obiskov prek Vercel Web Analytics. Brez oglaševalskih ali profilnih namenov.",
    cookieSettings: "Nastavitve piškotkov",
    close: "Zapri",
    necessaryAlways: "Vedno",
  },
  en: {
    title: "Cookies and analytics",
    explanation:
      "We use necessary cookies to run the site and remember your choice. Analytics tools for anonymous visit statistics are only activated if you agree.",
    accept: "Accept analytics",
    reject: "Reject",
    preferences: "Settings",
    save: "Save choice",
    necessaryCategory: "Necessary",
    necessaryDescription:
      "Required for the site to work and to store your cookie preference.",
    analyticsCategory: "Analytics",
    analyticsDescription:
      "Anonymous visit statistics via Vercel Web Analytics. No advertising or profiling.",
    cookieSettings: "Cookie settings",
    close: "Close",
    necessaryAlways: "Always",
  },
  de: {
    title: "Cookies und Analyse",
    explanation:
      "Wir verwenden notwendige Cookies für den Betrieb der Website und die Speicherung Ihrer Auswahl. Analysewerkzeuge für anonyme Besuchsstatistiken werden nur aktiviert, wenn Sie zustimmen.",
    accept: "Analyse akzeptieren",
    reject: "Ablehnen",
    preferences: "Einstellungen",
    save: "Auswahl speichern",
    necessaryCategory: "Notwendig",
    necessaryDescription:
      "Erforderlich für den Betrieb der Website und die Speicherung Ihrer Cookie-Auswahl.",
    analyticsCategory: "Analyse",
    analyticsDescription:
      "Anonyme Besuchsstatistiken über Vercel Web Analytics. Keine Werbung oder Profilbildung.",
    cookieSettings: "Cookie-Einstellungen",
    close: "Schließen",
    necessaryAlways: "Immer",
  },
};
