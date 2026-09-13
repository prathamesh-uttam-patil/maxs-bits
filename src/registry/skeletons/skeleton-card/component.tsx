"use client";
import { cn } from "@/lib/utils";

function Shimmer({ className }: { className?: string }) {
  return (
    <>
      <style>{`@keyframes shimmer { from { transform: translateX(-100%); } to { transform: translateX(100%); } }`}</style>
      <div className={cn("relative overflow-hidden rounded bg-[var(--muted)]", className)}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, var(--secondary), transparent)", animation: "shimmer 1.5s infinite" }} />
      </div>
    </>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 space-y-3", className)}>
      <Shimmer className="h-32 w-full rounded-lg" />
      <Shimmer className="h-4 w-3/4" />
      <Shimmer className="h-3 w-full" />
      <Shimmer className="h-3 w-5/6" />
      <div className="flex gap-2 pt-1">
        <Shimmer className="h-8 w-20 rounded-md" />
        <Shimmer className="h-8 w-20 rounded-md" />
      </div>
    </div>
  );
}
