import type { Metadata } from "next";

import ContactPageTemplate from "@/components/contact/ContactPageTemplate";
import { getContactContent } from "@/content/contact";
import { buildAlternates } from "@/i18n/metadata";

const content = getContactContent("sl");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  robots: { index: false, follow: false },
  alternates: buildAlternates("contact", "sl"),
};

export default function Page() {
  return <ContactPageTemplate locale="sl" content={content} />;
}
