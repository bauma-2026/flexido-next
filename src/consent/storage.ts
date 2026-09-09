import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  type ConsentPreferences,
} from "./types";

function isConsentPreferences(value: unknown): value is ConsentPreferences {
  if (!value || typeof value !== "object") return false;
  const record = value as Record<string, unknown>;
  return (
    record.version === CONSENT_VERSION &&
    typeof record.analytics === "boolean" &&
    typeof record.updatedAt === "string"
  );
}

/** Cached snapshot for useSyncExternalStore — stable reference until storage changes. */
let snapshotCache: ConsentPreferences | null = null;
let snapshotCacheRaw: string | null = null;

function invalidateSnapshotCache(): void {
  snapshotCache = null;
  snapshotCacheRaw = null;
}

function updateSnapshotCache(raw: string | null): ConsentPreferences | null {
  snapshotCacheRaw = raw;

  if (!raw) {
    snapshotCache = null;
    return null;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    snapshotCache = isConsentPreferences(parsed) ? parsed : null;
  } catch {
    snapshotCache = null;
  }

  return snapshotCache;
}

/**
 * Stable external-store snapshot for React useSyncExternalStore.
 * Returns the same object reference until localStorage value changes.
 */
export function getConsentSnapshot(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (raw === snapshotCacheRaw) {
      return snapshotCache;
    }
    return updateSnapshotCache(raw);
  } catch {
    invalidateSnapshotCache();
    return null;
  }
}

/** Read current consent (alias for snapshot; same cached reference). */
export function readConsent(): ConsentPreferences | null {
  return getConsentSnapshot();
}

export function writeConsent(analytics: boolean): ConsentPreferences {
  const preferences: ConsentPreferences = {
    version: CONSENT_VERSION,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  const raw = JSON.stringify(preferences);
  window.localStorage.setItem(CONSENT_STORAGE_KEY, raw);
  snapshotCacheRaw = raw;
  snapshotCache = preferences;
  window.dispatchEvent(new Event("flexido-consent-change"));
  return preferences;
}

export function clearConsent(): void {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  invalidateSnapshotCache();
  window.dispatchEvent(new Event("flexido-consent-change"));
}
