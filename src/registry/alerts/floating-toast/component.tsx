"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function FloatingToast({ title = "Copied to clipboard!", message = "Code snippet is ready to paste.", className }: { title?: string; message?: string; className?: string }) {
  const [show, setShow] = useState(true);

  return (
    <div className={cn("relative w-72 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-2xl overflow-hidden", className)}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold">
            ✓
          </div>
          <div>
            <h4 className="text-xs font-bold">{title}</h4>
            <p className="text-[11px] text-[var(--muted-foreground)] mt-0.5">{message}</p>
          </div>
        </div>
        <button onClick={() => setShow(false)} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-xs">✕</button>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 bg-emerald-500 w-full animate-[progress_3s_linear]" />
    </div>
  );
}