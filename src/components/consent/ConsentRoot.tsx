"use client";

import type { Locale } from "@/i18n/config";
import AnalyticsGate from "./AnalyticsGate";
import Ga4Analytics from "./Ga4Analytics";
import { ConsentProvider } from "./ConsentProvider";

export default function ConsentRoot({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <ConsentProvider locale={locale}>
      {children}
      <AnalyticsGate />
      <Ga4Analytics />
    </ConsentProvider>
  );
}
