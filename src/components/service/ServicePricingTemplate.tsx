import Button from "@/components/ui/Button";
import EditorialPage from "@/components/templates/EditorialPage";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import { getServiceContent } from "@/content/service";
import type { ServicePricingContent } from "@/content/servicePricing/types";

export default function ServicePricingTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: ServicePricingContent;
}) {
  const backHref = getPath("service", locale) ?? "/servis";
  /** The price list is the one page in the Service family with no forward
   * action of its own. It borrows the Service page's own approved close
   * (label + mailto) rather than restating it, so the two stay in lockstep. */
  const serviceClose = getServiceContent(locale).cta;

  return (
    <EditorialPage
      locale={locale}
      routeKey={content.routeKey}
      parentKey="service"
      eyebrow={content.eyebrow}
      title={content.title}
      date={content.date}
      details={content.details}
      detailsLabel={content.detailsLabel}
      backHref={backHref}
      backLabel={content.backLabel}
      heroImage={content.heroImage}
    >
      <div className="space-y-10">
        {content.sections.map((section, index) => {
          const numbered = section.heading.match(/^(\d+)\.\s*(.+)$/);

          return (
            <section
              key={section.heading}
              className={index === 0 ? "space-y-5" : "space-y-5 border-t border-neutral-200 pt-10"}
            >
              <div>
                {numbered ? <p className="index-label">{numbered[1].padStart(2, "0")}</p> : null}
                <h2
                  className={`${numbered ? "mt-2" : ""} text-[26px] font-semibold tracking-[-0.03em] text-neutral-950`}
                >
                  {numbered ? numbered[2] : section.heading}
                </h2>
              </div>

              {section.body ? <p>{section.body}</p> : null}

              {section.rows ? (
                <div className="not-prose border-t border-neutral-200">
                  <table className="w-full border-collapse text-left text-[15px]">
                    <tbody className="divide-y divide-neutral-200">
                      {section.rows.map((row) => (
                        <tr key={row.label}>
                          <td className="py-4 pr-6 text-neutral-600">{row.label}</td>
                          <td className="whitespace-nowrap py-4 text-right font-semibold tabular-nums text-neutral-950">
                            {row.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {section.note ? (
                <p className="text-[13px] leading-6 text-neutral-500">{section.note}</p>
              ) : null}

              {section.highlight ? (
                <p className="not-prose text-[34px] font-semibold tracking-[-0.03em] text-neutral-950 sm:text-[40px]">
                  {section.highlight}
                </p>
              ) : null}

              {section.after ? <p>{section.after}</p> : null}

              {section.bullets ? (
                <ul className="list-disc space-y-1.5 pl-5 text-[13px] leading-6 text-neutral-500 marker:text-neutral-300">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          );
        })}

        <div className="not-prose border-t border-neutral-200 pt-6 text-[14px] leading-6">
          <p className="font-medium text-neutral-950">{content.footerNote.strong}</p>
          <p className="mt-1 text-neutral-500">{content.footerNote.company}</p>
        </div>

        <div className="not-prose flex flex-wrap gap-3">
          <Button href={`mailto:${serviceClose.mailto}`} className="w-fit">
            {serviceClose.label}
          </Button>
        </div>
      </div>
    </EditorialPage>
  );
}
