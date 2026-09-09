import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Typed navigation helpers scoped to the `en`/`de` next-intl subsystem.
 * Use these only inside `app/[locale]/**`. Existing SL pages are unaffected
 * and should keep using plain `next/link`.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
