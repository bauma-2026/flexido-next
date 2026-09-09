export const CONSENT_STORAGE_KEY = "flexido-consent-v1";
export const CONSENT_VERSION = 1;

export type ConsentPreferences = {
  version: number;
  /** Optional visit analytics (Vercel Web Analytics). */
  analytics: boolean;
  updatedAt: string;
};

export type ConsentChoice = ConsentPreferences | null;
