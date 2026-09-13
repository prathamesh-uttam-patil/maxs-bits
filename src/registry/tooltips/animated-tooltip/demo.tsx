"use client";
import { AnimatedTooltip } from "./component";
export function Demo() {
  return (
    <div className="flex gap-4">
      <AnimatedTooltip content="Hello!"><button className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold">Hover me</button></AnimatedTooltip>
      <AnimatedTooltip content="Another one"><button className="px-4 py-2 rounded-lg border border-[var(--border)] text-sm font-semibold">Or me</button></AnimatedTooltip>
    </div>
  );
}