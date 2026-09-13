"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faces = ["\uD83D\uDE2D","\uD83D\uDE1E","\uD83D\uDE10","\uD83D\uDE42","\uD83D\uDE04","\uD83E\uDD29"];

export function SliderRating({ onChange, className }: { onChange?: (v: number) => void; className?: string }) {
  const [value, setValue] = useState(3);
  return (
    <div className={cn("flex flex-col items-center gap-2 w-48", className)}>
      <span className="text-3xl transition-all duration-200">{faces[value]}</span>
      <input type="range" min={0} max={5} value={value} onChange={e => { const v = Number(e.target.value); setValue(v); onChange?.(v); }}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer bg-[var(--muted)] accent-[var(--primary)]" />
      <span className="text-xs text-[var(--muted-foreground)]">{value}/5</span>
    </div>
  );
}