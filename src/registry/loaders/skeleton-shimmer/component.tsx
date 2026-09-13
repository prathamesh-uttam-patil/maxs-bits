"use client";
import { cn } from "@/lib/utils";

export function SkeletonShimmer({ width = "100%", height = "1rem", rounded = false, className }: { width?: string; height?: string; rounded?: boolean; className?: string }) {
  return (
    <>
      <style>{`@keyframes sk-shimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }`}</style>
      <div className={cn(rounded ? "rounded-full" : "rounded-md", className)} style={{ width, height, background: "linear-gradient(90deg, var(--muted) 25%, var(--secondary) 50%, var(--muted) 75%)", backgroundSize: "200% 100%", animation: "sk-shimmer 1.5s ease infinite" }} />
    </>
  );
}