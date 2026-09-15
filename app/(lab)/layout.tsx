import "../globals.css";
import type { Metadata } from "next";
import SectionAnchors from "@/components/layout/SectionAnchors";

/**
 * Lab root layout — a third root layout alongside `(default)` and `[locale]`.
 * Deliberately excludes ConsentRoot so the cookie banner does not sit over the
 * fold line the comparison is measuring. Nothing here is linked from the site.
 */
export const metadata: Metadata = {
  title: "Flexido lab",
  robots: { index: false, follow: false },
};

export default function LabRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl">
      <body className="bg-white text-neutral-950 antialiased">
        <SectionAnchors />
        {children}
      </body>
    </html>
  );
}
