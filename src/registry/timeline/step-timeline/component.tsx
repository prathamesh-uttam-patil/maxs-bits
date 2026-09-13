"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function StepTimeline({ steps = ["Account Created", "Verify Email", "Setup Profile", "Launch App"], className }: { steps?: string[]; className?: string }) {
  const [active, setActive] = useState(2);

  return (
    <div className={cn("space-y-4 w-64", className)}>
      {steps.map((s, i) => {
        const isDone = i < active;
        const isCurrent = i === active;

        return (
          <div key={i} className="flex items-start gap-3 cursor-pointer" onClick={() => setActive(i)}>
            <div className="flex flex-col items-center">
              <div 
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                  isDone && "bg-emerald-500 text-white",
                  isCurrent && "bg-[var(--primary)] text-white ring-4 ring-[var(--primary)]/20",
                  !isDone && !isCurrent && "bg-[var(--secondary)] text-[var(--muted-foreground)]"
                )}
              >
                {isDone ? "✓" : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={cn("w-0.5 h-6 mt-1", i < active ? "bg-emerald-500" : "bg-[var(--border)]")} />
              )}
            </div>
            <div className="pt-0.5">
              <p className={cn("text-xs font-semibold", isCurrent ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]")}>
                {s}
              </p>
              <p className="text-[10px] text-[var(--muted-foreground)]">
                {isDone ? "Completed" : isCurrent ? "In Progress" : "Pending"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}