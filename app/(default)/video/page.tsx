import type { Metadata } from "next";

import VideoPageTemplate from "@/components/company/VideoPageTemplate";
import { getVideoContent } from "@/content/company";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getVideoContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("video", "sl"),
}, "sl");

export default function Page() {
  return <VideoPageTemplate locale="sl" content={content} />;
}
