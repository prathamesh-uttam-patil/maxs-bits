"use client";
import { cn } from "@/lib/utils";

export function SkeletonAvatar({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <>
      <style>{`@keyframes skel-shimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }`}</style>
      <div className={cn("rounded-full", className)} style={{ width: size, height: size, background: "linear-gradient(90deg, var(--muted) 25%, var(--secondary) 50%, var(--muted) 75%)", backgroundSize: "200% 100%", animation: "skel-shimmer 1.5s ease infinite" }} />
    </>
  );
}