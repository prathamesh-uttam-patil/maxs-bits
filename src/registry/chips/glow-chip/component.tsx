"use client";
import { cn } from "@/lib/utils";

export function GlowChip({ label = "System Operational", color = "#10b981", className }: { label?: string; color?: string; className?: string }) {
  return (
    <div 
      className={cn("inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold border transition-all", className)}
      style={{
        borderColor: `${color}44`,
        backgroundColor: `${color}11`,
        color: color,
        boxShadow: `0 0 12px ${color}33`
      }}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: color }} />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: color }} />
      </span>
      <span>{label}</span>
    </div>
  );
}