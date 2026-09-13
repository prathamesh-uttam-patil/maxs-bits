"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FloatingDockTabs({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const icons = ["🏠", "🔍", "⚡", "📁", "⚙️"];

  return (
    <div className={cn("inline-flex items-center gap-2 px-3 py-2 rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 backdrop-blur-xl shadow-2xl", className)}>
      {icons.map((ic, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={cn(
            "w-9 h-9 rounded-xl flex items-center justify-center text-lg transition-transform duration-200 hover:scale-125 active:scale-95",
            active === i ? "bg-[var(--primary)]/20 ring-2 ring-[var(--primary)]" : "hover:bg-[var(--secondary)]"
          )}
        >
          {ic}
        </button>
      ))}
    </div>
  );
}