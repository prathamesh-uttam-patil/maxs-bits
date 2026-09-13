"use client";
import { cn } from "@/lib/utils";

const dots = { online: "bg-emerald-500", offline: "bg-gray-400", busy: "bg-red-500", away: "bg-amber-500" };

interface StatusBadgeProps { status: keyof typeof dots; label?: string; className?: string; }

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium", className)}>
      <span className="relative flex h-2 w-2">
        {status === "online" && <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-50", dots[status])} />}
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", dots[status])} />
      </span>
      {label || status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}