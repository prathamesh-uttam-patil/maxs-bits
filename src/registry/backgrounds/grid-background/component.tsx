"use client";

import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className }: GridBackgroundProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[200px] overflow-hidden rounded-lg bg-[var(--background)]", className)}>
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--muted-foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--muted-foreground) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.06,
        }}
      />
      {/* Radial fade */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, var(--background) 80%)',
        }}
      />
      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)' }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
