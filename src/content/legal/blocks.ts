import { legalFacts } from "./shared";
import type { LegalBlock, LegalInline } from "./types";

export function p(...children: LegalInline[]): LegalBlock {
  return { type: "p", children };
}

export function ul(...items: Array<string | LegalInline[]>): LegalBlock {
  return {
    type: "ul",
    items: items.map((item) => (typeof item === "string" ? [item] : item)),
  };
}

export function h3(text: string): LegalBlock {
  return { type: "h3", text };
}

export function strong(text: string): { type: "strong"; text: string } {
  return { type: "strong", text };
}

export function link(href: string, text: string): { type: "a"; href: string; text: string } {
  return { type: "a", href, text };
}

export const emailLink = link(legalFacts.emailHref, legalFacts.email);
