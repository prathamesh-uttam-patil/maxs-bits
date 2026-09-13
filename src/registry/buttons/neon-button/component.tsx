"use client";
import { cn } from "@/lib/utils";

interface NeonButtonProps { children: React.ReactNode; color?: string; className?: string; onClick?: () => void; }

export function NeonButton({ children, color = "#8b5cf6", className, onClick }: NeonButtonProps) {
  return (
    <button onClick={onClick}
      className={cn("relative px-6 py-2.5 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:scale-105 active:scale-95", className)}
      style={{
        background: "transparent",
        border: `2px solid ${color}`,
        color: color,
        boxShadow: `0 0 10px ${color}40, inset 0 0 10px ${color}20, 0 0 40px ${color}15`,
        textShadow: `0 0 10px ${color}80`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 0 20px ${color}60, inset 0 0 20px ${color}30, 0 0 60px ${color}30`; }}
      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 0 10px ${color}40, inset 0 0 10px ${color}20, 0 0 40px ${color}15`; }}
    >{children}</button>
  );
}