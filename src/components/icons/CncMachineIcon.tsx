type IconProps = {
  className?: string;
};

export default function CncMachineIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
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
      </g>
    </svg>
  );
}