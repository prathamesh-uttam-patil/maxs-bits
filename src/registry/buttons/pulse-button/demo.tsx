"use client";

import { PulseButton } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <PulseButton>Pulse Effect</PulseButton>
      <p className="text-sm text-[var(--muted-foreground)]">Attention-grabbing pulse ring</p>
    </div>
  );
}
