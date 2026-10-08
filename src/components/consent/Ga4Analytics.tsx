"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import {
  disableGa4,
  initGa4,
  isGa4EnvironmentAllowed,
  sendGa4PageView,
} from "@/analytics/ga4";

import { useConsent } from "./ConsentProvider";

export default function Ga4Analytics() {
  const { ready, consent } = useConsent();
  const pathname = usePathname();
  const granted = ready && consent?.analytics === true;
  const denied = ready && consent?.analytics === false;

  // One effect, so init and pageview are ordered by construction:
  // initGa4() (idempotent: consent default -> update -> js -> config) always
  // runs before sendGa4PageView(), which itself ignores repeat calls for the
  // same pathname+search. Re-runs on every route change and on consent
  // changes; withdrawal clears the dedupe key so a re-grant counts the
  // current page again.
  useEffect(() => {
    if (!isGa4EnvironmentAllowed()) return;
    if (granted) {
      initGa4();
      sendGa4PageView(pathname);
    } else if (denied) {
      disableGa4();
    }
  }, [granted, denied, pathname]);

  return null;
}
