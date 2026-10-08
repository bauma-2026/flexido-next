/**
 * Google Analytics 4 — consent-gated, production-only, loaded directly
 * (no GTM). Nothing in this module touches the network on its own: the
 * gtag.js script is only injected by `initGa4()`, which `Ga4Analytics`
 * calls after every gate (production build, production hostname, analytics
 * consent) has passed.
 */
export const GA4_MEASUREMENT_ID = "G-WT0BV1GP86";
export const GA4_PRODUCTION_HOSTNAME = "www.flexido.eu";

const GA4_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
const GA4_COOKIES = ["_ga", "_gid", `_ga_${GA4_MEASUREMENT_ID.slice(2)}`];

type GtagArgs = unknown[];

declare global {
  interface Window {
    dataLayer?: GtagArgs[];
    gtag?: (...args: GtagArgs) => void;
    __flexidoGa4Initialized?: boolean;
    __flexidoGa4LastPageKey?: string;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

/**
 * Build-time flag, set from VERCEL_ENV in next.config.ts. A preview-built
 * bundle promoted to production carries an empty flag, so GA4 stays off.
 */
export function isProductionDeployment(): boolean {
  return process.env.NEXT_PUBLIC_FLEXIDO_PRODUCTION_DEPLOYMENT === "1";
}

/** Environment gates only; consent is checked separately by the caller. */
export function isGa4EnvironmentAllowed(): boolean {
  return (
    typeof window !== "undefined" &&
    isProductionDeployment() &&
    window.location.hostname === GA4_PRODUCTION_HOSTNAME
  );
}

/**
 * Idempotent. Consent Mode v2: every storage/signal starts denied; because
 * this only runs after explicit analytics consent, only analytics_storage
 * is then granted. Advertising signals stay denied.
 */
export function initGa4(): void {
  if (window.__flexidoGa4Initialized) {
    window[`ga-disable-${GA4_MEASUREMENT_ID}`] = false;
    window.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }
  window.__flexidoGa4Initialized = true;
  window[`ga-disable-${GA4_MEASUREMENT_ID}`] = false;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js requires the `arguments` object itself, not a rest array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as unknown as GtagArgs);
  };

  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("consent", "update", { analytics_storage: "granted" });
  window.gtag("js", new Date());
  // Pageviews are sent manually so App Router navigations count once.
  window.gtag("config", GA4_MEASUREMENT_ID, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = GA4_SCRIPT_SRC;
  document.head.appendChild(script);
}

/** One page_view per distinct pathname+search; repeat calls are ignored. */
export function sendGa4PageView(pathname: string): void {
  if (
    !window.__flexidoGa4Initialized ||
    window[`ga-disable-${GA4_MEASUREMENT_ID}`] ||
    !window.gtag
  ) {
    return;
  }
  const key = `${pathname}${window.location.search}`;
  if (window.__flexidoGa4LastPageKey === key) return;
  window.__flexidoGa4LastPageKey = key;

  window.gtag("event", "page_view", {
    page_title: document.title,
    page_location: window.location.href,
    page_path: pathname,
  });
}

/** Stops further sending in this document and removes GA cookies. */
export function disableGa4(): void {
  window[`ga-disable-${GA4_MEASUREMENT_ID}`] = true;
  window.__flexidoGa4LastPageKey = undefined;
  window.gtag?.("consent", "update", { analytics_storage: "denied" });

  const host = window.location.hostname;
  const domains = [host, `.${host}`, `.${host.replace(/^www\./, "")}`];
  for (const name of GA4_COOKIES) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}
