"use client";

import { cn } from "@/lib/utils";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowButton({
  children,
  className,
  glowColor = "#8b5cf6",
  ...props
}: GlowButtonProps) {
  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 group",
        className
      )}
      style={{
        backgroundColor: glowColor,
        boxShadow: `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}20`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${glowColor}60, 0 0 60px ${glowColor}40, 0 0 90px ${glowColor}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${glowColor}40, 0 0 40px ${glowColor}20`;
      }}
      {...props}
    >
      {children}
    </button>
  );
}
