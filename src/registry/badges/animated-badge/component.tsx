"use client";
import { cn } from "@/lib/utils";

const variants = {
  default: "bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/20",
  success: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  error: "bg-red-500/10 text-red-500 border-red-500/20",
};

interface AnimatedBadgeProps {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
}

export function AnimatedBadge({ children, variant = "default", className }: AnimatedBadgeProps) {
  return (
    <>
      <style>{`
        @keyframes badge-in { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes badge-pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
      `}</style>
      <span
        className={cn("inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold", variants[variant], className)}
        style={{ animation: "badge-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), badge-pulse 2s ease-in-out infinite 0.4s" }}
      >
        {children}
      </span>
    </>
  );
}
