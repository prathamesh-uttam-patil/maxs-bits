"use client";
import { cn } from "@/lib/utils";

interface GradientBadgeProps { children: React.ReactNode; className?: string; }

export function GradientBadge({ children, className }: GradientBadgeProps) {
  return (
    <>
      <style>{`@keyframes badge-gradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }`}</style>
      <span
        className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-white", className)}
        style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899, #3b82f6, #8b5cf6)", backgroundSize: "300% 300%", animation: "badge-gradient 3s ease infinite" }}
      >{children}</span>
    </>
  );
}
