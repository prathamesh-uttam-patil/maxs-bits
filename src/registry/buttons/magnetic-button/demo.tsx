"use client";

import { MagneticButton } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <MagneticButton>Hover Near Me</MagneticButton>
      <p className="text-sm text-[var(--muted-foreground)]">Move your cursor near the button</p>
    </div>
  );
}
