"use client";
import { cn } from "@/lib/utils";

export function PulseBadge({ children, color = "#ef4444", className }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <span className={cn("relative inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white", className)} style={{ backgroundColor: color }}>
      <span className="absolute inset-0 rounded-full animate-ping opacity-40" style={{ backgroundColor: color }} />
      <span className="relative">{children}</span>
    </span>
  );
}