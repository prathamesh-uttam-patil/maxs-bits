"use client";
import { cn } from "@/lib/utils";

export function IconDivider({ icon = "⚡", className }: { icon?: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 w-64", className)}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--border)]" />
      <div className="w-7 h-7 rounded-full border border-[var(--border)] bg-[var(--card)] flex items-center justify-center text-xs shadow-sm shrink-0">
        {icon}
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--border)]" />
    </div>
  );
}