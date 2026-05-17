interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const primary = variant === "light" ? "#1F2022" : "#ffffff";
  const accent = variant === "light" ? "#0740F9" : "#4D7BFA";
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="EP Digital X">
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="36" height="36" rx="10" fill={accent} />
        <path d="M13 13h14M13 20h10M13 27h14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span style={{ color: primary }} className="text-[17px] font-extrabold tracking-tight">
        EP Digital <span style={{ color: accent }}>X</span>
      </span>
    </div>
  );
}
