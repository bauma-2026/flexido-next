import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Header-only normalized shells for icons whose default framing in
 * `FlexidoProcessIcons` reads visibly lighter than the CNC / custom-system
 * family at the header dropdown's render size. Path data is identical to the
 * source icon — only the `viewBox` is reframed, which crops away dead margin
 * and, as a side effect, scales the (unchanged) 1.25 stroke width up
 * proportionally, closing most of the optical-mass gap without touching a
 * single coordinate or introducing a CSS transform.
 *
 * `FlexidoProcessIcons.tsx` is intentionally left untouched: Diagnostics and
 * Solutions on the homepage render these same icons at their own scale and
 * must keep their current framing.
 */
function NormalizedIconBase({
  viewBox,
  className = "h-12 w-12",
  children,
  ...props
}: IconProps & { viewBox: string; children: ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </g>
    </svg>
  );
}

/** Same artwork as `CobotIcon`; cropped from viewBox 0 0 32 32 to 2.3 8 25 25. */
export function CobotIconNav(props: IconProps) {
  return (
    <NormalizedIconBase viewBox="2.3 8 25 25" {...props}>
      <rect x="6.5" y="22.2" width="5" height="2.3" rx="0.7" />
      <path d="M9 22.2v-2.3" />

      <path d="M9 19.9l4.1-3.4" />
      <circle cx="9" cy="19.9" r="1.1" />
      <circle cx="13.1" cy="16.5" r="1.1" />

      <path d="M13.1 16.5l3.8 2.1" />
      <circle cx="16.9" cy="18.6" r="1.1" />

      <path d="M16.9 18.6l3.2-2.5" />
      <circle cx="20.1" cy="16.1" r="1.1" />

      <path d="M20.1 16.1l2 1.4" />
      <path d="M22.1 17.5l1.8-1" />
      <path d="M22.1 17.5l1.8 1.2" />

      <rect x="5.8" y="24.9" width="6.4" height="1.1" rx="0.5" />
    </NormalizedIconBase>
  );
}

/** Same artwork as `ManipulationIcon`; cropped from viewBox 0 0 32 32 to 4.8 5 23 23. */
export function ManipulationIconNav(props: IconProps) {
  return (
    <NormalizedIconBase viewBox="4.8 5 23 23" {...props}>
      <rect x="9.2" y="18.5" width="5.4" height="3.1" rx="0.6" />

      <path d="M12 8.2v5.8" />
      <rect x="11.1" y="14" width="1.8" height="2.3" rx="0.4" />

      <path d="M11.1 16.4l-1.6 2.1" />
      <path d="M12.9 16.4l1.6 2.1" />

      <path d="M17 20h7" />
      <path d="M21.8 18.2L24 20l-2.2 1.8" />

      <path d="M8.5 24.8h7.5" />
    </NormalizedIconBase>
  );
}

/** Same artwork as `MaterialFlowIcon`; cropped from viewBox 0 0 32 32 to 2 4 28 28. */
export function MaterialFlowIconNav(props: IconProps) {
  return (
    <NormalizedIconBase viewBox="2 4 28 28" {...props}>
      <rect x="5.5" y="19.5" width="4.5" height="3" rx="0.6" />
      <rect x="13.75" y="19.5" width="4.5" height="3" rx="0.6" />
      <rect x="22" y="19.5" width="4.5" height="3" rx="0.6" />

      <path d="M10.2 21h3" />
      <path d="M11.9 19.9l1.3 1.1-1.3 1.1" />

      <path d="M18.5 21h3" />
      <path d="M20.2 19.9l1.3 1.1-1.3 1.1" />

      <path d="M7 15.8c2-3.3 5-4.8 9-4.8s7 1.5 9 4.8" />
      <path d="M23.3 14.8l1.7 1" />
      <path d="M25 15.8l-1 1.9" />

      <path d="M5.5 25h21" />
    </NormalizedIconBase>
  );
}
