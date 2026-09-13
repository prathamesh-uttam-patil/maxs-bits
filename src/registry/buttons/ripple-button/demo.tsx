"use client";

import { RippleButton } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <RippleButton>Click Me</RippleButton>
      <p className="text-sm text-[var(--muted-foreground)]">Click to see the ripple effect</p>
    </div>
  );
}
