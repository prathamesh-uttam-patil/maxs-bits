"use client";
import { cn } from "@/lib/utils";

export function TextDivider({ text = "or", className }: { text?: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3 w-full", className)}>
      <div className="flex-1 h-px bg-[var(--border)]" />
      <span className="text-xs font-medium text-[var(--muted-foreground)] uppercase tracking-wider">{text}</span>
      <div className="flex-1 h-px bg-[var(--border)]" />
    </div>
  );
}