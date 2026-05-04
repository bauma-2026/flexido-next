type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  desc?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  desc,
}: SectionHeaderProps) {
  return (
    <div className="max-w-[760px]">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-semibold leading-[1] tracking-[-0.04em] text-neutral-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-5 max-w-[60ch] text-body">{desc}</p>}
    </div>
  );
}