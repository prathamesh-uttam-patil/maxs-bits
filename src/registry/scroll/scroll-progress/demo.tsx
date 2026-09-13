"use client";
import { ScrollProgress } from "./component";
export function Demo() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-64 h-2 rounded-full bg-[var(--secondary)] overflow-hidden">
        <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all" />
      </div>
      <p className="text-xs text-[var(--muted-foreground)]">Scroll progress bar (shown at page top)</p>
    </div>
  );
}
