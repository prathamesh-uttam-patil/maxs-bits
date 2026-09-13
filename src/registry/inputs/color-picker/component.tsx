"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ColorPicker({ defaultColor = "#8b5cf6", className }: { defaultColor?: string; className?: string }) {
  const [color, setColor] = useState(defaultColor);
  const [copied, setCopied] = useState(false);
  return (
    <div className={cn("inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-2", className)}>
      <div className="relative">
        <div className="w-8 h-8 rounded-md border border-[var(--border)] cursor-pointer" style={{ backgroundColor: color }} />
        <input type="color" value={color} onChange={e => setColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
      </div>
      <button onClick={() => { navigator.clipboard.writeText(color); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
        className="text-xs font-mono font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors">{copied ? "Copied!" : color}</button>
    </div>
  );
}