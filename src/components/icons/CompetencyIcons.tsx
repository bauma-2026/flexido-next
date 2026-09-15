import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/**
 * Matches the FlexidoProcessIcons construction exactly (32×32 viewBox,
 * 1.25 stroke, round caps/joins, currentColor) so the Competencies icons
 * read as the same visual language as the E-katalog set, without importing
 * from that file (kept separate: different concept domain — disciplines,
 * not machines).
 */
function IconBase({ className = "h-7 w-7", children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="32"
      height="32"
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

/** Feasibility study — a process line passing through a decision/evaluation gate. */
export function FeasibilityStudyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 5v4" />
      <path d="M16 9 23 16 16 23 9 16Z" />
      <path d="M16 23v4" />
      <path d="M12.6 16.3l2.6 2.7 4.2-5.4" />
    </IconBase>
  );
}

/** Konstruiranje — a dimensioned mechanical part (technical-drawing convention). */
export function MechanicalDesignIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="8" y="7" width="16" height="8" rx="1" />
      <circle cx="16" cy="11" r="1.4" />
      <path d="M9 15v8" />
      <path d="M23 15v8" />
      <path d="M9.6 23h12.8" />
      <path d="M9.6 23l1.8-1.1" />
      <path d="M9.6 23l1.8 1.1" />
      <path d="M22.4 23l-1.8-1.1" />
      <path d="M22.4 23l-1.8 1.1" />
    </IconBase>
  );
}

/** Elektro projektiranje — a terminal block / control-cabinet connection strip. */
export function ElectricalDesignIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="6" y="7" width="20" height="9" rx="1" />
      <path d="M16 4v3" />
      <path d="M9.5 11h13" />
      <path d="M11 16v4" />
      <path d="M16 16v4" />
      <path d="M21 16v4" />
      <circle cx="11" cy="21" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="21" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="21" cy="21" r="0.9" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

/** Programiranje robotov in PLC-jev — a teach pendant (the tool used to program them). */
export function RobotPlcProgrammingIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="11" y="6" width="10" height="18" rx="2" />
      <rect x="13" y="8.5" width="6" height="5" rx="0.6" />
      <path d="M14.3 10h3.4" />
      <path d="M14.3 12h2.4" />
      <circle cx="16" cy="17.6" r="1.8" />
      <circle cx="16" cy="17.6" r="0.4" fill="currentColor" stroke="none" />
      <circle cx="14" cy="21.6" r="0.55" fill="currentColor" stroke="none" />
      <circle cx="18" cy="21.6" r="0.55" fill="currentColor" stroke="none" />
      <path d="M16 24c0 1.3 3 1 3 2.6" />
    </IconBase>
  );
}

/** Sistemi pametnega vida — a lens with corner focus brackets. */
export function MachineVisionIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 11V7h4" />
      <path d="M21 7h4v4" />
      <path d="M7 21v4h4" />
      <path d="M25 21v4h-4" />
      <circle cx="16" cy="16" r="5.5" />
      <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

/** Projektno vodenje — a hub coordinating two connected work-streams. */
export function ProjectManagementIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="16" cy="9" r="2.3" />
      <circle cx="16" cy="9" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="9" cy="23" r="2.3" />
      <circle cx="23" cy="23" r="2.3" />
      <path d="M14.7 10.8 10.3 21.2" />
      <path d="M17.3 10.8 21.7 21.2" />
      <path d="M11.3 23h9.4" />
    </IconBase>
  );
}

/**
 * Ordered to match `HomeCompetenciesContent.items` — the six competencies
 * are a fixed, ordered list (not keyed), so the icon set mirrors that order
 * rather than introducing a separate matching key into the content model.
 */
export const competencyIcons = [
  FeasibilityStudyIcon,
  MechanicalDesignIcon,
  ElectricalDesignIcon,
  RobotPlcProgrammingIcon,
  MachineVisionIcon,
  ProjectManagementIcon,
];
