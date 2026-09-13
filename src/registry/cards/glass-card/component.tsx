"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-6 overflow-hidden",
        "bg-white/10 dark:bg-white/5",
        "backdrop-blur-xl",
        "border border-white/20 dark:border-white/10",
        "shadow-xl shadow-black/5",
        "transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
