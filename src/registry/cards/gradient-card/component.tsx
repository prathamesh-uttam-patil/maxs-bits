"use client";
import { cn } from "@/lib/utils";

export function GradientCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative group rounded-xl p-px overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-transparent to-[var(--primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative rounded-[11px] bg-[var(--card)] border border-[var(--border)] p-5 group-hover:border-[var(--primary)]/30 transition-colors">{children}</div>
    </div>
  );
}