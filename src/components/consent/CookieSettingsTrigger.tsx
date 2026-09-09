"use client";

import { useConsent } from "./ConsentProvider";

export default function CookieSettingsTrigger({
  className,
}: {
  className?: string;
}) {
  const { copy, openPreferences } = useConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className={className}
    >
      {copy.cookieSettings}
    </button>
  );
}
