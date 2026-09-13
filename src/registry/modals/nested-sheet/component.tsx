"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NestedSheet({ title = "Filter Components", className }: { title?: string; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-xl border border-[var(--border)] bg-[var(--card)] text-xs font-semibold hover:bg-[var(--secondary)]"
      >
        Open Filter Sheet ⚙️
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-80 h-full bg-[var(--card)] border-l border-[var(--border)] p-6 shadow-2xl flex flex-col animate-in slide-in-from-right">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-sm">{title}</h3>
              <button onClick={() => setOpen(false)} className="text-xs">✕</button>
            </div>
            <div className="space-y-3 flex-1 text-xs text-[var(--muted-foreground)]">
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked /> Buttons
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" defaultChecked /> Text Animations
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Loaders
              </label>
            </div>
            <button onClick={() => setOpen(false)} className="w-full py-2.5 rounded-xl bg-[var(--primary)] text-white text-xs font-bold">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}