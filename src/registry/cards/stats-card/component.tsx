"use client";
import { cn } from "@/lib/utils";

interface StatsCardProps { label: string; value: string; trend?: number; icon?: string; className?: string; }

export function StatsCard({ label, value, trend, icon = "\uD83D\uDCCA", className }: StatsCardProps) {
  return (
    <div className={cn("w-44 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all hover:shadow-lg hover:-translate-y-0.5", className)}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-[var(--muted-foreground)] font-medium">{label}</span>
        <span className="text-lg">{icon}</span>
      </div>
      <div className="text-2xl font-extrabold">{value}</div>
      {trend !== undefined && (
        <div className={cn("mt-1 text-xs font-semibold", trend >= 0 ? "text-emerald-500" : "text-red-500")}>
          {trend >= 0 ? "\u2191" : "\u2193"} {Math.abs(trend)}%
        </div>
      )}
    </div>
  );
}