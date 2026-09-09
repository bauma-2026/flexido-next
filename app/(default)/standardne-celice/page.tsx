import type { Metadata } from "next";

import SystemsHubTemplate from "@/components/systems/SystemsHubTemplate";
import { getSystemsHubContent } from "@/content/systems";
import { buildAlternates } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getSystemsHubContent("sl");

  return {
    title: content.meta.title,
    description: content.meta.description,
    robots: { index: false, follow: false },
    alternates: buildAlternates("standardCells", "sl"),
  };
}

export default function Page() {
  return <SystemsHubTemplate locale="sl" content={getSystemsHubContent("sl")} />;
}
