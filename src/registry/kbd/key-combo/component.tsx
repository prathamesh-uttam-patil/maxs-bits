"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function KeyCombo({ keys = ["Shift", "⌥", "Del"], className }: { keys?: string[]; className?: string }) {
  const [pressed, setPressed] = useState<number | null>(null);

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      {keys.map((k, i) => (
        <button
          key={i}
          onMouseDown={() => setPressed(i)}
          onMouseUp={() => setPressed(null)}
          onMouseLeave={() => setPressed(null)}
          className={cn(
            "min-w-[28px] h-8 px-2 rounded-lg border border-[var(--border)] bg-[var(--card)] text-xs font-mono font-bold transition-all flex items-center justify-center select-none shadow-[0_3px_0_0_var(--border)]",
            pressed === i && "translate-y-[3px] shadow-none bg-[var(--secondary)]"
          )}
        >
          {k}
        </button>
      ))}
    </div>
  );
}