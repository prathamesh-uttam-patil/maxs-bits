"use client";
import { cn } from "@/lib/utils";

export function VerticalSeparator({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-3 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] text-xs font-semibold", className)}>
      <span>Overview</span>
      <div className="w-px h-4 bg-[var(--border)]" />
      <span>Analytics</span>
      <div className="w-px h-4 bg-[var(--border)]" />
      <span>Settings</span>
    </div>
  );
}