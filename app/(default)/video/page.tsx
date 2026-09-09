import type { Metadata } from "next";

import VideoPageTemplate from "@/components/company/VideoPageTemplate";
import { getVideoContent } from "@/content/company";
import { buildAlternates } from "@/i18n/metadata";

const content = getVideoContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("video", "sl"),
};

export default function Page() {
  return <VideoPageTemplate locale="sl" content={content} />;
}
