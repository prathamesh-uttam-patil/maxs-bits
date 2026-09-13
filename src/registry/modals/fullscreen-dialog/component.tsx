"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FullscreenDialog({ title = "Component Studio", className }: { title?: string; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setOpen(true)}
        className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-semibold shadow-md"
      >
        Open Fullscreen Studio
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-[var(--background)] p-6 flex flex-col animate-in fade-in zoom-in-95">
          <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
            <h2 className="text-lg font-bold">{title}</h2>
            <button 
              onClick={() => setOpen(false)}
              className="px-3 py-1 rounded-lg border border-[var(--border)] text-xs font-bold hover:bg-[var(--secondary)]"
            >
              ✕ Close
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center text-sm text-[var(--muted-foreground)]">
            Studio Canvas Area
          </div>
        </div>
      )}
    </div>
  );
}