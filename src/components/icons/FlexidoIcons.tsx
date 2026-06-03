import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function CncIcon(props: IconProps) {
  return (
    <svg {...baseProps} strokeWidth={1.55} {...props}>
      {/* machine frame */}
      <rect x="5.5" y="7" width="21" height="18" rx="2.2" />

      {/* top rail */}
      <path d="M8.5 10.5h8.5" />

      {/* spindle / tool head */}
      <path d="M12.5 10.5v3.4" />
      <rect x="11.2" y="13.9" width="2.6" height="3.4" rx="0.5" />

      {/* tool tip */}
      <path d="M12.5 17.3v1.2" />
      <path d="M11.4 18.5h2.2l-1.1 1.8-1.1-1.8Z" />

      {/* workpiece / machine bed */}
      <path d="M8.5 22h10" />
      <path d="M10.5 20.2h6" />

      {/* control panel */}
      <rect x="20" y="11" width="3.8" height="8.6" rx="0.8" />
      <path d="M21.1 13h1.6" />
      <path d="M21.1 15.1h1.6" />
      <path d="M21.1 17.2h1.6" />

      {/* bottom base */}
      <path d="M8.5 25h15" />
    </svg>
  );
}

export function ImmIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      {/* mold halves */}
      <path d="M7 9h8v14H7z" />
      <path d="M17 9h8v14h-8z" />

      {/* molded part / gap */}
      <path d="M15 16h2" />
      <circle cx="16" cy="16" r="1.4" />

      {/* injection feed */}
      <path d="M16 5v4" />
      <path d="M13.5 5h5" />

      {/* eject/output hint */}
      <path d="M16 23v4" />
      <path d="M13.5 27h5" />
    </svg>
  );
}

export function CobotIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      {/* base */}
      <path d="M8 25h9" />
      <path d="M10 21h5v4h-5z" />

      {/* robot arm */}
      <path d="M12.5 21v-5" />
      <path d="M12.5 16l5-4" />
      <path d="M17.5 12l4.5 3.5" />

      {/* joints */}
      <circle cx="12.5" cy="16" r="1.8" />
      <circle cx="17.5" cy="12" r="1.8" />
      <circle cx="22" cy="15.5" r="1.8" />

      {/* gripper */}
      <path d="M23.5 14l3-2" />
      <path d="M23.5 17l3 2" />
    </svg>
  );
}

export function ManipulationIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      {/* gripper */}
      <path d="M16 6v7" />
      <path d="M13 13l-2 4" />
      <path d="M19 13l2 4" />
      <path d="M11 17h4" />
      <path d="M17 17h4" />

      {/* object */}
      <path d="M12 20h8v5h-8z" />

      {/* movement direction */}
      <path d="M6 22h4" />
      <path d="M22 22h4" />
      <path d="M24 20l2 2-2 2" />

      {/* floor/process line */}
      <path d="M8 27h16" />
    </svg>
  );
}

export function MaterialFlowIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 23h20" />
      <path d="M8 20h4" />
      <path d="M14 20h4" />
      <path d="M20 20h4" />
      <path d="M9 17h5" />
      <path d="M18 17h5" />
      <path d="M7 12c4-4 10-4 14 0" />
      <path d="M21 12h-4" />
      <path d="M21 12v-4" />
      <path d="M25 15c-2 2-4.5 3-7.5 3" />
      <path d="M7 15c2 2 4.5 3 7.5 3" />
      <circle cx="9" cy="23" r="1" />
      <circle cx="16" cy="23" r="1" />
      <circle cx="23" cy="23" r="1" />
    </svg>
  );
}

export function CustomSystemIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 9h8v6H7z" />
      <path d="M17 7h8v8h-8z" />
      <path d="M9 18h7v6H9z" />
      <path d="M18 19h7v5h-7z" />
      <path d="M15 12h2" />
      <path d="M16 21h2" />
      <path d="M11 15v3" />
      <path d="M21 15v4" />
      <path d="M6 26h20" />
      <path d="M23 9l2-2" />
      <path d="M24 13l2 2" />
      <path d="M8 11l-2-2" />
    </svg>
  );
}

export const flexidoIcons = {
  cnc: CncIcon,
  imm: ImmIcon,
  cobot: CobotIcon,
  manipulation: ManipulationIcon,
  materialFlow: MaterialFlowIcon,
  customSystem: CustomSystemIcon,
};

export type FlexidoIconName = keyof typeof flexidoIcons;