"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FileDropzone({ className }: { className?: string }) {
  const [drag, setDrag] = useState(false);

  return (
    <div
      onDragOver={e => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={e => { e.preventDefault(); setDrag(false); }}
      className={cn(
        "w-64 p-6 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center cursor-pointer transition-colors",
        drag ? "border-[var(--primary)] bg-[var(--primary)]/10" : "border-[var(--border)] bg-[var(--card)] hover:border-[var(--primary)]/50",
        className
      )}
    >
      <span className="text-2xl mb-1">☁️</span>
      <p className="text-xs font-bold">Drag & drop files here</p>
      <p className="text-[10px] text-[var(--muted-foreground)] mt-0.5">PNG, JPG or SVG up to 10MB</p>
    </div>
  );
}