import Image from "next/image";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

const projects = [
  {
    area: "Brizganje plastike",
    title: "Robotska celica za nabrizgavanje",
    image: "/images/systems/raw/robotska-celica-za-nabrizgavanje.png",
    imagePosition: "object-[50%_50%]",
    href: "/novice/robotska-celica-za-nabrizgavanje",
    result: "Skoraj tretjina več kosov od prvotno predvidene količine.",
  },
  {
    area: "Avtomatizacija CNC procesov",
    title: "Vhodno-izhodna tračna proga",
    image: "/images/systems/raw/vhodno-izhodna-tracna-proga.png",
    imagePosition: "object-[50%_38%]",
    href: "/novice/vhodno-izhodna-tracna-proga",
    result:
      "Samostojno neprekinjeno obratovanje z različnimi obdelovanci v kombinaciji z integrirano kamero.",
  },
] as const;

export default function ProjectProof() {
  return (
    <Section className="bg-[#f6f9fc] text-[#0a2540]">
      <Container>
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Realizirani projekti</p>
            <h2 className="mt-3 max-w-[12ch] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Rešitve v praksi.
            </h2>
          </div>

          <p className="max-w-[58ch] text-[15px] leading-7 text-neutral-500 sm:text-[16px]">
            Dva primera avtomatizacije, zasnovane za konkreten proizvodni
            proces.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group flex h-full flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-neutral-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-cover ${project.imagePosition}`}
                />
              </div>

              <div className="flex flex-1 flex-col pt-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-400">
                  {project.area}
                </p>

                <h3 className="mt-1.5 text-[22px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0a2540] sm:text-[26px]">
                  {project.title}
                </h3>

                <p className="mt-4 max-w-[38ch] text-[17px] font-semibold leading-6 text-[#0a2540] sm:text-[18px] sm:leading-7">
                  {project.result}
                </p>

                <p className="mt-auto pt-5 text-[13px] font-medium text-neutral-400 transition group-hover:text-neutral-700">
                  Preberi projekt →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
