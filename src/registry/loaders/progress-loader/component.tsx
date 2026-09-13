"use client";
import { cn } from "@/lib/utils";

export function ProgressLoader({ loading = true, className }: { loading?: boolean; className?: string }) {
  if (!loading) return null;
  return (
    <>
      <style>{`@keyframes progress-indeterminate { 0% { left: -30%; width: 30%; } 50% { left: 50%; width: 40%; } 100% { left: 100%; width: 20%; } }`}</style>
      <div className={cn("relative h-0.5 w-full overflow-hidden bg-[var(--muted)] rounded-full", className)}>
        <div className="absolute h-full rounded-full bg-[var(--primary)]" style={{ animation: "progress-indeterminate 1.5s ease infinite" }} />
      </div>
    </>
  );
}