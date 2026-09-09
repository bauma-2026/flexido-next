"use client";

import { Analytics } from "@vercel/analytics/next";

import { useConsent } from "./ConsentProvider";

export default function AnalyticsGate() {
  const { ready, consent } = useConsent();

  if (!ready || !consent?.analytics) {
    return null;
  }

  return <Analytics />;
}
