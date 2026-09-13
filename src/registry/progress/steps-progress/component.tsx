"use client";
import { cn } from "@/lib/utils";

interface StepsProgressProps { steps: string[]; current: number; className?: string; }

export function StepsProgress({ steps, current, className }: StepsProgressProps) {
  return (
    <div className={cn("flex items-center w-full", className)}>
      {steps.map((step, i) => (
        <div key={i} className="flex items-center flex-1 last:flex-none">
          <div className="flex flex-col items-center">
            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 border-2", i <= current ? "bg-[var(--primary)] border-[var(--primary)] text-[var(--primary-foreground)]" : "border-[var(--border)] text-[var(--muted-foreground)]")}>{i < current ? "\u2713" : i + 1}</div>
            <span className={cn("mt-1.5 text-[10px] font-medium", i <= current ? "text-[var(--primary)]" : "text-[var(--muted-foreground)]")}>{step}</span>
          </div>
          {i < steps.length - 1 && <div className={cn("flex-1 h-0.5 mx-2 transition-colors duration-500", i < current ? "bg-[var(--primary)]" : "bg-[var(--border)]")} />}
        </div>
      ))}
    </div>
  );
}