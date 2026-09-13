"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function StickyNavScroll({ className }: { className?: string }) {
  const [scrolled, setScrolled] = useState(false);

  return (
    <div className={cn("w-72 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 space-y-3", className)}>
      <div className={cn("p-2 rounded-lg flex items-center justify-between transition-all duration-300", scrolled ? "bg-[var(--primary)] text-white shadow-lg" : "bg-[var(--secondary)] text-[var(--foreground)]")}>
        <span className="text-xs font-bold">Sticky Header</span>
        <span className="text-[10px]">{scrolled ? "Scrolled State" : "Top State"}</span>
      </div>
      <button onClick={() => setScrolled(!scrolled)} className="w-full py-1.5 rounded-lg border border-[var(--border)] text-xs font-semibold hover:bg-[var(--secondary)]">
        Toggle Scroll State
      </button>
    </div>
  );
}