import { notFound } from "next/navigation";
import EditorialPage from "@/components/templates/EditorialPage";

const posts = {
  "flexido-na-sejmu-fakuma-2024": {
    eyebrow: "Novice",
    title: "Uspešna predstavitev podjetja Flexido na sejmu Fakuma 2024 v Nemčiji",
    date: "29. marec 2026",
    content: (
      <>
        <p>
          Podjetje Flexido se je uspešno predstavilo na sejmu Fakuma 2024 v
          Nemčiji, enem izmed pomembnejših mednarodnih sejmov za področje
          predelave plastike, avtomatizacije in proizvodnih tehnologij.
        </p>

        <p>
          Na sejmu smo predstavili naše rešitve za avtomatizacijo proizvodnje,
          robotizacijo procesov in podporo podjetjem pri optimizaciji
          proizvodnih tokov.
        </p>

        <p>
          Udeležba na sejmu je bila pomembna priložnost za predstavitev podjetja
          mednarodnim partnerjem, navezovanje novih poslovnih stikov in vpogled
          v aktualne smernice na področju industrijske avtomatizacije.
        </p>

        <p>
          Projekt je bil izveden z namenom povečanja prepoznavnosti podjetja na
          tujih trgih ter krepitve izvozne usmerjenosti podjetja.
        </p>
      </>
    ),
  },
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug as keyof typeof posts];

  if (!post) {
    notFound();
  }

  return (
    <EditorialPage
      eyebrow={post.eyebrow}
      title={post.title}
      date={post.date}
    >
      {post.content}
    </EditorialPage>
  );
}