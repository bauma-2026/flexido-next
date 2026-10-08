import type { Metadata } from "next";
import HomePageTemplate from "@/components/home/HomePageTemplate";
import { getHomeContent } from "@/content/home";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getHomeContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("home", "sl"),
}, "sl");

export default function HomePage() {
  return <HomePageTemplate locale="sl" />;
}
