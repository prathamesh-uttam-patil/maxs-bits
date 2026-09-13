"use client";
import { cn } from "@/lib/utils";

export function HexGridBg({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full h-44 rounded-xl border border-[var(--border)] bg-[var(--background)] overflow-hidden flex items-center justify-center", className)}>
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 10px 10px, var(--primary) 2px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />
      <div className="relative z-10 font-bold text-xs">{children || "Hex Pattern Background"}</div>
    </div>
  );
}