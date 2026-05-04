import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flexido",
  description: "Avtomatizacija CNC in IMM procesov z robotskimi celicami.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sl">
      <body className="bg-white text-neutral-950 antialiased">
        {children}
      </body>
    </html>
  );
}