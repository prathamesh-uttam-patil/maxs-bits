"use client";
import { cn } from "@/lib/utils";

const variants = { default: "bg-[var(--secondary)] text-[var(--foreground)]", primary: "bg-[var(--primary)] text-[var(--primary-foreground)]", danger: "bg-red-500 text-white" };

export function CountBadge({ count, variant = "default", className }: { count: number; variant?: keyof typeof variants; className?: string }) {
  return (
    <span className={cn("inline-flex items-center justify-center min-w-[1.5rem] h-6 px-1.5 rounded-full text-xs font-bold tabular-nums transition-all duration-300", variants[variant], className)}
      style={{ transform: count > 0 ? "scale(1)" : "scale(0)" }}>{count > 99 ? "99+" : count}</span>
  );
}