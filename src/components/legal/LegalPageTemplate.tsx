import LegalPage from "@/components/templates/LegalPage";
import type { Locale } from "@/i18n/config";
import type { LegalBlock, LegalInline, LegalPageContent } from "@/content/legal/types";

function renderInline(node: LegalInline, key: number) {
  if (typeof node === "string") return node;
  if (node.type === "strong") return <strong key={key}>{node.text}</strong>;
  return (
    <a key={key} href={node.href}>
      {node.text}
    </a>
  );
}

function renderBlock(block: LegalBlock, key: string | number) {
  if (block.type === "h3") {
    return <h3 key={key}>{block.text}</h3>;
  }

  if (block.type === "ul") {
    return (
      <ul key={key}>
        {block.items.map((item, itemIndex) => (
          <li key={itemIndex}>{item.map(renderInline)}</li>
        ))}
      </ul>
    );
  }

  return <p key={key}>{block.children.map(renderInline)}</p>;
}

export default function LegalPageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: LegalPageContent;
}) {
  return (
    <LegalPage
      locale={locale}
      routeKey={content.routeKey}
      eyebrow={content.eyebrow}
      title={content.title}
      desc={content.desc}
    >
      {content.sections.flatMap((section) => [
        <h2 key={`${section.id ?? section.heading}-heading`} id={section.id}>
          {section.heading}
        </h2>,
        ...section.blocks.map((block, blockIndex) =>
          renderBlock(block, `${section.id ?? section.heading}-${blockIndex}`)
        ),
      ])}
    </LegalPage>
  );
}
