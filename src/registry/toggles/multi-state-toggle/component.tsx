"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function MultiStateToggle({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const options = ["Grid", "List", "Columns"];

  return (
    <div className={cn("inline-flex rounded-xl border border-[var(--border)] bg-[var(--card)] p-1 gap-1", className)}>
      {options.map((opt, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={cn(
            "px-3 py-1 rounded-lg text-xs font-bold transition-all",
            active === i ? "bg-[var(--primary)] text-white shadow-sm" : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}