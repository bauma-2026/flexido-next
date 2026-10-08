import type { Metadata } from "next";

import ContactPageTemplate from "@/components/contact/ContactPageTemplate";
import { getContactContent } from "@/content/contact";
import { buildAlternates, withSocial } from "@/i18n/metadata";

const content = getContactContent("sl");

export const metadata: Metadata = withSocial({
  title: content.meta.title,
  description: content.meta.description,
  alternates: buildAlternates("contact", "sl"),
}, "sl");

export default function Page() {
  return <ContactPageTemplate locale="sl" content={content} />;
}
