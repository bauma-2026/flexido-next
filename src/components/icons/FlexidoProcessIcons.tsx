import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({
  className = "h-12 w-12",
  children,
  ...props
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

export function CncMachineIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* outer frame */}
      <rect x="5" y="7" width="22" height="18" rx="2" />

      {/* left inner column */}
      <path d="M8 10.5v11.5" />

      {/* top rails */}
      <path d="M8 10.5h8" />
      <path d="M18 10.5h5" />

      {/* spindle block */}
      <path d="M15 10.5v3.5" />
      <rect x="14.2" y="14" width="1.6" height="3" rx="0.5" />

      {/* tool */}
      <path d="M15 17v3.3" />
      <path d="M15 20.3l-1 1.7h2l-1-1.7Z" />

      {/* work table */}
      <rect x="10.2" y="19.8" width="6.8" height="1.8" rx="0.4" />
      <path d="M9 22.8h9.2" />
      <path d="M10.2 22.8v1.5" />
      <path d="M17 22.8v1.5" />

      {/* control panel */}
      <rect x="20.5" y="11.5" width="4" height="8.5" rx="0.8" />
      <rect x="21.3" y="12.4" width="2.4" height="2.3" rx="0.4" />
      <circle cx="21.9" cy="16.7" r="0.35" fill="currentColor" stroke="none" />
      <circle cx="23" cy="16.7" r="0.35" fill="currentColor" stroke="none" />
      <circle cx="21.9" cy="18" r="0.35" fill="currentColor" stroke="none" />
      <circle cx="23" cy="18" r="0.35" fill="currentColor" stroke="none" />

      {/* feet */}
      <path d="M8.5 25v1.5" />
      <path d="M23.5 25v1.5" />
    </IconBase>
  );
}

export function InjectionMoldingIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* machine base */}
      <rect x="5" y="16" width="22" height="6.8" rx="1.2" />

      {/* clamp unit */}
      <rect x="7" y="13" width="6" height="7" rx="0.8" />
      <rect x="14.2" y="13" width="4.2" height="7" rx="0.8" />

      {/* mold gap */}
      <path d="M13 15.9h1.2" />
      <path d="M13 17.4h1.2" />

      {/* barrel / injection side */}
      <path d="M18.4 16.2h5.2" />
      <path d="M18.4 18.7h5.2" />
      <path d="M23.6 16.2v2.5" />

      {/* nozzle */}
      <path d="M18.4 17.45h-1.2" />

      {/* hopper */}
      <path d="M21.3 7.2v3.8" />
      <path d="M18.8 7.2h5" />
      <path d="M19.5 7.2l1.8 3.8" />
      <path d="M23.1 7.2l-1.8 3.8" />

      {/* feed neck */}
      <path d="M21.3 11v2" />

      {/* feet */}
      <path d="M8 22.8v1.7" />
      <path d="M23.5 22.8v1.7" />

      {/* ground */}
      <path d="M6.5 24.5h19" />
    </IconBase>
  );
}

export function CobotIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* base */}
      <rect x="6.5" y="22.2" width="5" height="2.3" rx="0.7" />
      <path d="M9 22.2v-2.3" />

      {/* first arm */}
      <path d="M9 19.9l4.1-3.4" />
      <circle cx="9" cy="19.9" r="1.1" />
      <circle cx="13.1" cy="16.5" r="1.1" />

      {/* second arm */}
      <path d="M13.1 16.5l3.8 2.1" />
      <circle cx="16.9" cy="18.6" r="1.1" />

      {/* third arm */}
      <path d="M16.9 18.6l3.2-2.5" />
      <circle cx="20.1" cy="16.1" r="1.1" />

      {/* gripper */}
      <path d="M20.1 16.1l2 1.4" />
      <path d="M22.1 17.5l1.8-1" />
      <path d="M22.1 17.5l1.8 1.2" />

      {/* small picked object */}
      <rect x="5.8" y="24.9" width="6.4" height="1.1" rx="0.5" />
    </IconBase>
  );
}

export function ManipulationIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* base object */}
      <rect x="9.2" y="18.5" width="5.4" height="3.1" rx="0.6" />

      {/* gripper body */}
      <path d="M12 8.2v5.8" />
      <rect x="11.1" y="14" width="1.8" height="2.3" rx="0.4" />

      {/* gripper claws */}
      <path d="M11.1 16.4l-1.6 2.1" />
      <path d="M12.9 16.4l1.6 2.1" />

      {/* movement arrow */}
      <path d="M17 20h7" />
      <path d="M21.8 18.2L24 20l-2.2 1.8" />

      {/* floor line */}
      <path d="M8.5 24.8h7.5" />
    </IconBase>
  );
}

export function MaterialFlowIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* three stations / blocks */}
      <rect x="5.5" y="19.5" width="4.5" height="3" rx="0.6" />
      <rect x="13.75" y="19.5" width="4.5" height="3" rx="0.6" />
      <rect x="22" y="19.5" width="4.5" height="3" rx="0.6" />

      {/* flow arrows */}
      <path d="M10.2 21h3" />
      <path d="M11.9 19.9l1.3 1.1-1.3 1.1" />

      <path d="M18.5 21h3" />
      <path d="M20.2 19.9l1.3 1.1-1.3 1.1" />

      {/* top arc / process flow */}
      <path d="M7 15.8c2-3.3 5-4.8 9-4.8s7 1.5 9 4.8" />
      <path d="M23.3 14.8l1.7 1" />
      <path d="M25 15.8l-1 1.9" />

      {/* bottom support line */}
      <path d="M5.5 25h21" />
    </IconBase>
  );
}

export function CustomSystemIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* modules */}
      <rect x="6" y="9" width="7" height="5" rx="0.8" />
      <rect x="18" y="8" width="8" height="6" rx="0.8" />
      <rect x="9" y="18" width="7" height="5" rx="0.8" />
      <rect x="20" y="18.5" width="5.5" height="4.5" rx="0.8" />

      {/* connections */}
      <path d="M13 11.5h5" />
      <path d="M11.5 14v4" />
      <path d="M16 20.5h4" />
      <path d="M22 14v4.5" />

      {/* side signal arrows */}
      <path d="M4.8 11.5h1.2" />
      <path d="M25.9 11h1.3" />
      <path d="M26 20.7h1.2" />

      {/* ground */}
      <path d="M7 25.5h19" />
    </IconBase>
  );
}

export function ServiceSupportIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      {/* outer gear ring */}
      <circle cx="16" cy="16" r="6.4" />

      {/* inner gear */}
      <circle cx="16" cy="16" r="2.4" />

      {/* gear teeth / service signal */}
      <path d="M16 6.8v2.2" />
      <path d="M16 23v2.2" />
      <path d="M6.8 16h2.2" />
      <path d="M23 16h2.2" />

      <path d="M9.5 9.5l1.6 1.6" />
      <path d="M20.9 20.9l1.6 1.6" />
      <path d="M22.5 9.5l-1.6 1.6" />
      <path d="M11.1 20.9l-1.6 1.6" />

      {/* support base line */}
      <path d="M10 26h12" />
    </IconBase>
  );
}

export function StandardCellIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 47.6 47.6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="currentColor">
        <path d="M47.6,3.7c0,1-0.4,1.9-1.1,2.6s-1.6,1.1-2.6,1.1S42,7,41.3,6.3s-1.1-1.6-1.1-2.6s0.4-1.9,1.1-2.6 C42,0.4,42.9,0,43.9,0s1.9,0.4,2.6,1.1C47.3,1.8,47.6,2.7,47.6,3.7z" />
        <path d="M17.6,20.3L6.4,9.2c-1.5-1.5-3.8-1.5-5.3,0s-1.5,3.8,0,5.3l11.1,11.1c1.5,1.5,3.8,1.5,5.3,0 C19,24.1,19,21.8,17.6,20.3z" />
        <path d="M6.4,46.6l11.1-11.1c1.5-1.5,1.5-3.8,0-5.3s-3.8-1.5-5.3,0L1.1,41.3c-1.5,1.5-1.5,3.8,0,5.3 C2.6,48,5,48,6.4,46.6z" />
        <path d="M22.1,35.4l11.1,11.1c1.5,1.5,3.8,1.5,5.3,0s1.5-3.8,0-5.3l-11.1-11c-1.5-1.5-3.8-1.5-5.3,0 C20.7,31.6,20.7,34,22.1,35.4z" />
        <path d="M33.3,9.2L22.1,20.3c-1.5,1.5-1.5,3.8,0,5.3s3.8,1.5,5.3,0l11.1-11.1c1.5-1.5,1.5-3.8,0-5.3 C37.1,7.7,34.7,7.7,33.3,9.2z" />
      </g>
    </svg>
  );
}

export const flexidoProcessIcons = {
  cnc: CncMachineIcon,
  imm: InjectionMoldingIcon,
  cobot: CobotIcon,
  manipulation: ManipulationIcon,
  materialFlow: MaterialFlowIcon,
  customSystem: CustomSystemIcon,
  service: ServiceSupportIcon,
  standardCell: StandardCellIcon,
};

export type FlexidoProcessIconName = keyof typeof flexidoProcessIcons;