"use client";

import { ShimmerButton } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ShimmerButton>Shimmer Effect</ShimmerButton>
      <p className="text-sm text-[var(--muted-foreground)]">Hover to see the shimmer</p>
    </div>
  );
}
