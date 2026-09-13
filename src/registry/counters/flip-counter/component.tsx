"use client";
import { cn } from "@/lib/utils";

export function FlipCounter({ value, className }: { value: number; className?: string }) {
  const digits = String(value).padStart(3, "0").split("");
  return (
    <div className={cn("inline-flex gap-1", className)}>
      {digits.map((d, i) => (
        <div key={i} className="relative w-8 h-12 rounded-md bg-[var(--card)] border border-[var(--border)] overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-lg font-bold tabular-nums transition-all duration-300" style={{ transform: `translateY(${-Number(d) * 10}%)` }}>
            {d}
          </div>
          <div className="absolute left-0 right-0 top-1/2 h-px bg-[var(--border)]" />
        </div>
      ))}
    </div>
  );
}