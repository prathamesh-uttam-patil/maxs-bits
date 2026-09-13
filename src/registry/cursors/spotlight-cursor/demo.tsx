"use client";
import { SpotlightCursor } from "./component";
export function Demo() {
  return <SpotlightCursor className="w-72 h-40 rounded-xl border border-[var(--border)] bg-[var(--card)] flex items-center justify-center"><p className="text-sm text-[var(--muted-foreground)]">Move cursor here</p></SpotlightCursor>;
}