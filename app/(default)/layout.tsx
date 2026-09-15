import "../globals.css";
import type { Metadata } from "next";
import ConsentRoot from "@/components/consent/ConsentRoot";
import SectionAnchors from "@/components/layout/SectionAnchors";

export const metadata: Metadata = {
  metadataBase: new URL("https://flexido-next.vercel.app"),

  title: "Flexido — Avtomatizacija proizvodnih procesov",
  description:
    "Urejamo in avtomatiziramo proizvodne procese — od posameznega stroja do povezanega toka materiala, ljudi in podatkov.",

  robots: {
    index: false,
    follow: false,
  },

  manifest: "/icons/site.webmanifest",

  openGraph: {
    title: "Flexido — Avtomatizacija proizvodnih procesov",
    description:
      "Urejamo in avtomatiziramo proizvodne procese — od posameznega stroja do povezanega toka materiala, ljudi in podatkov.",
    url: "https://flexido-next.vercel.app",
    siteName: "Flexido",
    images: [
      {
        url: "/og/flexido-og.png",
        width: 1200,
        height: 630,
        alt: "Flexido — Avtomatizacija proizvodnih procesov",
      },
    ],
    locale: "sl_SI",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Flexido — Avtomatizacija proizvodnih procesov",
    description:
      "Urejamo in avtomatiziramo proizvodne procese — od posameznega stroja do povezanega toka materiala, ljudi in podatkov.",
    images: ["/og/flexido-og.png"],
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