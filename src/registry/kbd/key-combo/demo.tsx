"use client";
import { KeyCombo } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <KeyCombo keys={["Ctrl", "Alt", "T"]} />
        <span className="text-xs text-[var(--muted-foreground)]">Terminal</span>
      </div>
    </div>
  );
}