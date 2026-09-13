"use client";

import { GradientButton } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <GradientButton>Gradient Magic</GradientButton>
      <p className="text-sm text-[var(--muted-foreground)]">Animated gradient colors</p>
    </div>
  );
}
