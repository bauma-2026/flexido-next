import Link from "next/link";
import { newsItems } from "@/data/news";

type Props = {
  slug: string;
};

export default function ArticleNav({ slug }: Props) {
  const currentHref = `/novice/${slug}`;
  const currentIndex = newsItems.findIndex((item) => item.href === currentHref);

  if (currentIndex === -1) return null;

  const prev = newsItems[currentIndex - 1];
  const next = newsItems[currentIndex + 1];

  return (
    <div className="not-prose mt-14 border-t border-neutral-200 pt-6">
      <div className="grid gap-3 sm:grid-cols-3 sm:items-center">
        <Link
          href="/novice"
          className="text-[14px] font-medium text-neutral-600 transition hover:text-neutral-950"
        >
          ← Nazaj na novice
        </Link>

        <div>
          {prev && (
            <Link
              href={prev.href}
              className="block rounded-2xl border border-neutral-200 px-4 py-3 text-[13px] text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950 sm:text-center"
            >
              ← Prejšnja
            </Link>
          )}
        </div>

        <div>
          {next && (
            <Link
              href={next.href}
              className="block rounded-2xl border border-neutral-200 px-4 py-3 text-[13px] text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-950 sm:text-center"
            >
              Naslednja →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}