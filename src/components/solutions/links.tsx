import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getPath } from "@/i18n/routes";
import type { FamilyExternalLink, RouteLink } from "@/content/solutions/types";

export function isRouteLink(link: FamilyExternalLink | RouteLink): link is RouteLink {
  return "routeKey" in link;
}

/** Renders an in-family `RouteLink` or a locale-gated `FamilyExternalLink`. */
export function ResolvedFamilyLink({
  link,
  locale,
  className,
  showArrow = true,
}: {
  link: FamilyExternalLink | RouteLink;
  locale: Locale;
  className?: string;
  showArrow?: boolean;
}) {
  if (isRouteLink(link)) {
    return <InFamilyLink link={link} locale={locale} className={className} showArrow={showArrow} />;
  }
  return <FamilyLink link={link} locale={locale} className={className} showArrow={showArrow} />;
}

/** Always-live link to another page within this migrated family. */
export function InFamilyLink({
  link,
  locale,
  className,
  showArrow = true,
}: {
  link: RouteLink;
  locale: Locale;
  className?: string;
  showArrow?: boolean;
}) {
  const href = getPath(link.routeKey, locale) ?? "#";
  return (
    <Link href={href} className={className}>
      {link.label}
      {showArrow ? <span className="ml-2">→</span> : null}
    </Link>
  );
}

/**
 * Link to a page outside this migration's scope. Renders a real link only
 * for `locale === "sl"` — for en/de the same label renders as inert text
 * rather than pointing at a Slovenian URL or a fabricated translation.
 */
export function FamilyLink({
  link,
  locale,
  className,
  showArrow = true,
}: {
  link: FamilyExternalLink;
  locale: Locale;
  className?: string;
  showArrow?: boolean;
}) {
  if (locale === "sl") {
    return (
      <Link href={link.href} className={className}>
        {link.label}
        {showArrow ? <span className="ml-2">→</span> : null}
      </Link>
    );
  }

  return <span className={className}>{link.label}</span>;
}

/** Splits a `{0} {1} {2}` template into text + resolved in-family links. */
export function renderTemplate(
  template: string,
  links: RouteLink[],
  locale: Locale,
  linkClassName?: string
) {
  const parts = template.split(/(\{\d\})/g);

  return parts.map((part, index) => {
    const match = part.match(/^\{(\d)\}$/);
    if (!match) return <span key={index}>{part}</span>;

    const link = links[Number(match[1])];
    if (!link) return null;

    return (
      <Link key={index} href={getPath(link.routeKey, locale) ?? "#"} className={linkClassName}>
        {link.label}
      </Link>
    );
  });
}
