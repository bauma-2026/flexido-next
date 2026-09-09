"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import type { Locale } from "@/i18n/config";
import { consentCopy } from "@/consent/copy";
import { getConsentSnapshot, writeConsent } from "@/consent/storage";
import type { ConsentPreferences } from "@/consent/types";

type ConsentContextValue = {
  locale: Locale;
  copy: typeof consentCopy.sl;
  ready: boolean;
  consent: ConsentPreferences | null;
  bannerVisible: boolean;
  preferencesOpen: boolean;
  acceptAnalytics: () => void;
  rejectAnalytics: () => void;
  savePreferences: (analytics: boolean) => void;
  openPreferences: () => void;
  closePreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function subscribeToConsent(callback: () => void) {
  const handler = () => callback();
  window.addEventListener("flexido-consent-change", handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener("flexido-consent-change", handler);
    window.removeEventListener("storage", handler);
  };
}

function getServerConsentSnapshot(): ConsentPreferences | null {
  return null;
}

function subscribeToHydration() {
  return () => {};
}

function getHydratedSnapshot() {
  return true;
}

function getServerHydratedSnapshot() {
  return false;
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return context;
}

export function ConsentProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getHydratedSnapshot,
    getServerHydratedSnapshot
  );
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot
  );
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [pendingAnalytics, setPendingAnalytics] = useState(false);

  const applyConsent = useCallback(
    (analytics: boolean, options?: { reloadOnDisable?: boolean }) => {
      const previous = consent?.analytics ?? false;
      writeConsent(analytics);
      setPendingAnalytics(analytics);
      setPreferencesOpen(false);

      if (options?.reloadOnDisable && previous && !analytics) {
        window.location.reload();
      }
    },
    [consent]
  );

  const acceptAnalytics = useCallback(() => {
    applyConsent(true);
  }, [applyConsent]);

  const rejectAnalytics = useCallback(() => {
    applyConsent(false);
  }, [applyConsent]);

  const savePreferences = useCallback(
    (analytics: boolean) => {
      applyConsent(analytics, { reloadOnDisable: true });
    },
    [applyConsent]
  );

  const openPreferences = useCallback(() => {
    setPendingAnalytics(consent?.analytics ?? false);
    setPreferencesOpen(true);
  }, [consent]);

  const closePreferences = useCallback(() => {
    setPendingAnalytics(consent?.analytics ?? false);
    setPreferencesOpen(false);
  }, [consent]);

  const bannerVisible = hydrated && consent === null && !preferencesOpen;

  const value = useMemo<ConsentContextValue>(
    () => ({
      locale,
      copy: consentCopy[locale],
      ready: hydrated,
      consent,
      bannerVisible,
      preferencesOpen,
      acceptAnalytics,
      rejectAnalytics,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [
      locale,
      hydrated,
      consent,
      bannerVisible,
      preferencesOpen,
      acceptAnalytics,
      rejectAnalytics,
      savePreferences,
      openPreferences,
      closePreferences,
    ]
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <ConsentUi
        pendingAnalytics={pendingAnalytics}
        setPendingAnalytics={setPendingAnalytics}
      />
    </ConsentContext.Provider>
  );
}

function ConsentUi({
  pendingAnalytics,
  setPendingAnalytics,
}: {
  pendingAnalytics: boolean;
  setPendingAnalytics: (value: boolean) => void;
}) {
  const {
    copy,
    bannerVisible,
    preferencesOpen,
    acceptAnalytics,
    rejectAnalytics,
    savePreferences,
    closePreferences,
    openPreferences,
  } = useConsent();

  useEffect(() => {
    if (!preferencesOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePreferences();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [preferencesOpen, closePreferences]);

  if (!bannerVisible && !preferencesOpen) {
    return null;
  }

  return (
    <>
      {bannerVisible ? (
        <div
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-neutral-200 bg-white/95 p-4 shadow-[0_-12px_40px_rgba(15,23,42,0.08)] backdrop-blur sm:p-5"
          role="region"
          aria-label={copy.title}
        >
          <div className="mx-auto flex max-w-[1120px] flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="max-w-[62ch]">
              <p className="text-[15px] font-semibold tracking-[-0.02em] text-neutral-950">
                {copy.title}
              </p>
              <p className="mt-2 text-[14px] leading-6 text-neutral-600">
                {copy.explanation}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 sm:shrink-0">
              <button
                type="button"
                onClick={rejectAnalytics}
                className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2.5 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
              >
                {copy.reject}
              </button>
              <button
                type="button"
                onClick={openPreferences}
                className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2.5 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
              >
                {copy.preferences}
              </button>
              <button
                type="button"
                onClick={acceptAnalytics}
                className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-neutral-800"
              >
                {copy.accept}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {preferencesOpen ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/35 p-4 sm:items-center"
          role="presentation"
          onClick={closePreferences}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="w-full max-w-lg rounded-[24px] border border-neutral-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)] sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2
                id="cookie-preferences-title"
                className="text-[20px] font-semibold tracking-[-0.03em] text-neutral-950"
              >
                {copy.title}
              </h2>
              <button
                type="button"
                onClick={closePreferences}
                className="rounded-full px-2 py-1 text-[13px] text-neutral-500 transition hover:text-neutral-950"
              >
                {copy.close}
              </button>
            </div>

            <p className="mt-3 text-[14px] leading-6 text-neutral-600">
              {copy.explanation}
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-[16px] border border-neutral-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[14px] font-medium text-neutral-950">
                      {copy.necessaryCategory}
                    </p>
                    <p className="mt-1 text-[13px] leading-5 text-neutral-600">
                      {copy.necessaryDescription}
                    </p>
                  </div>
                  <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-neutral-400">
                    {copy.necessaryAlways}
                  </span>
                </div>
              </div>

              <div className="rounded-[16px] border border-neutral-200 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[14px] font-medium text-neutral-950">
                      {copy.analyticsCategory}
                    </p>
                    <p className="mt-1 text-[13px] leading-5 text-neutral-600">
                      {copy.analyticsDescription}
                    </p>
                  </div>
                  <label className="inline-flex items-center gap-2">
                    <span className="sr-only">{copy.analyticsCategory}</span>
                    <input
                      type="checkbox"
                      checked={pendingAnalytics}
                      onChange={(event) => setPendingAnalytics(event.target.checked)}
                      className="h-4 w-4 rounded border-neutral-300 text-neutral-950 focus:ring-neutral-400"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => savePreferences(false)}
                className="inline-flex items-center rounded-full border border-neutral-200 px-5 py-2.5 text-[14px] font-medium text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-950"
              >
                {copy.reject}
              </button>
              <button
                type="button"
                onClick={() => savePreferences(pendingAnalytics)}
                className="inline-flex items-center rounded-full bg-neutral-950 px-5 py-2.5 text-[14px] font-medium text-white transition hover:bg-neutral-800"
              >
                {copy.save}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
