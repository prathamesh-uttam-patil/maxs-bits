"use client";
import { KeyboardKey } from "./component";
export function Demo() {
  return (
    <div className="flex items-center gap-2">
      <KeyboardKey>\u2318</KeyboardKey><KeyboardKey>K</KeyboardKey>
      <span className="text-xs text-[var(--muted-foreground)] ml-2">to search</span>
    </div>
  );
}