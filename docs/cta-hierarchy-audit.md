# CTA Hierarchy Audit

**Status: complete / locked** (2026-09-12)

Site-wide audit of CTA hierarchy and cross-link architecture across the final public IA (registered routes in `src/i18n/routes.ts`). Do not reopen these decisions without a clear contradiction in the implementation — see AGENTS.md/CLAUDE.md convention for how locked passes are treated in this repo.

## CTA role grammar (existing, unchanged)

- **Primary — light surface**: brand blue filled button (`Button` variant `primary`)
- **Primary — dark/photo surface**: white filled button (`Button` variant `light`)
- **Secondary**: bordered button (`Button` variant `secondary`, or a hand-rolled `border-white/20` equivalent on dark surfaces)
- **Tertiary**: text + arrow link, hover darkens to `neutral-950` (the site-wide convention — see the CTABanner fix below)

Core principle: a strong (button-styled) CTA appears only at a genuine decision point. Contextual cross-links (solution → system, system → reference, reference → capability/system, process → proof, development project → current capability) stay tertiary/editorial — they are proof/navigation paths, not conversion asks.

## Locked decision: Home hero CTA pair

`src/components/blocks/home/Hero.tsx`

- **Primary**: "Poglejmo vaš proces →" → `/kontakt`
- **Secondary**: "Kako poteka projekt →" → `/proces`

**Rationale (intentional, not a defect):** the pairing splits by visitor intent, not by funnel stage.
- Primary targets the high-intent visitor who already has a concrete process/problem to describe — the label sets a low-commitment expectation (send a short description), not a hard sales ask, so routing to Contact does not violate "don't drop hero CTA into Contact too early."
- Secondary targets the lower-intent visitor who wants to understand how a project runs before engaging.

Do not change this pair's labels, destinations, hierarchy, or styling without a fresh, explicit decision.

## Fixed: CTABanner tertiary hover

`src/components/solutions/SolutionPageTemplate.tsx`, `ctaBanner` section type — hover color normalized from a one-off brand blue (`#0b8fdc`) to `neutral-950`, matching every other tertiary link on the site. Purely cosmetic; no hierarchy change.

## Reference examples worth preserving

- **`/servis` primary CTA is a valid "genuine decision point" example.** "Prijavite servis →" → contact is appropriate there because visitors arrive with existing equipment and a concrete problem — high intent by page context, unlike Home's cold traffic. Useful precedent for judging future hero-CTA decisions elsewhere on the site.
- **`/cenik` (service pricing) intentionally has no CTA.** It's a reference/terms document reached from `/servis`; its only navigation is "back to servis." Do not add a conversion CTA to it.
- **References hub primary CTA → `/resitve`, not Contact.** Best existing example of routing a proof-stage visitor deeper into the capability catalogue instead of front-loading Contact.
- **E-katalog product hero pages have no CTA by design** (code comment in `CatalogHero.tsx`): the family's single conversion point is the locked charcoal `CatalogCta` close; the header's Kontakt button stays in view throughout.

## Excluded from this audit: legacy route debt

`/resitve/servis` and `/resitve/system-map` are orphaned, unlinked-from-navigation routes (documented in `src/i18n/routes.ts:15-18`, "route-completeness audit"). Their CTA content was deliberately **not** touched or tailored in this pass. Tracked separately as route-architecture cleanup:

1. Add a redirect `/resitve/servis` → `/servis` (it duplicates the canonical service page).
2. Decide final handling for `/resitve/system-map` — redirect to the closest valid destination if one exists, otherwise remove or noindex.

## Full audit coverage

Home · Solutions hub + 7 solution pages · Standard Cells (e-katalog) hub + 5 products · Process · Service (`/servis`) + Service Pricing (`/cenik`) · About Us · Video · Careers · References hub + 3 detail pages · News hub · Funding/development-project pages · Contact. Legal pages, cookie controls, utility navigation, and footer navigation were out of scope per the audit brief.
