"use client";
import { FadeInScroll } from "./component";
export function Demo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <FadeInScroll><div className="px-6 py-3 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] font-semibold">I fade in! ✨</div></FadeInScroll>
      <p className="text-xs text-[var(--muted-foreground)]">Appears when scrolled into view</p>
    </div>
  );
}
