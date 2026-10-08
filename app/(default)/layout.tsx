import "../globals.css";
import type { Metadata } from "next";
import ConsentRoot from "@/components/consent/ConsentRoot";
import SectionAnchors from "@/components/layout/SectionAnchors";
import {
  OG_IMAGE,
  OG_IMAGE_ALT,
  OG_LOCALE,
  SITE_URL,
  siteRobots,
} from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Flexido — Avtomatizacija proizvodnih procesov",
  description:
    "Urejamo in avtomatiziramo proizvodne procese — od posameznega stroja do povezanega toka materiala, ljudi in podatkov.",

  robots: siteRobots(),

  manifest: "/icons/site.webmanifest",

  // Neutral fallback only. Pages add their own title/description/url via
  // `withSocial`; a page that doesn't must not inherit the home copy.
  openGraph: {
    siteName: "Flexido",
    locale: OG_LOCALE.sl,
    type: "website",
    images: [
      {
        url: OG_IMAGE.path,
        width: OG_IMAGE.width,
        height: OG_IMAGE.height,
        type: OG_IMAGE.type,
        alt: OG_IMAGE_ALT.sl,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [{ url: OG_IMAGE.path, alt: OG_IMAGE_ALT.sl }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl">
      <body className="bg-white text-neutral-950 antialiased">
        <SectionAnchors />
        <ConsentRoot locale="sl">{children}</ConsentRoot>
      </body>
    </html>
  );
}