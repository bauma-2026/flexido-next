import type { Metadata } from "next";

import SystemsHubTemplate from "@/components/systems/SystemsHubTemplate";
import { getSystemsHubContent } from "@/content/systems";
import { buildAlternates, withSocial } from "@/i18n/metadata";

export function generateMetadata(): Metadata {
  const content = getSystemsHubContent("sl");

  return withSocial({
    title: content.meta.title,
    description: content.meta.description,
      alternates: buildAlternates("standardCells", "sl"),
  }, "sl");
}

export default function Page() {
  return <SystemsHubTemplate locale="sl" content={getSystemsHubContent("sl")} />;
}
