"use client";
import { GradientDivider } from "./component";
export function Demo() {
  return (
    <div className="w-64 space-y-4">
      <p className="text-sm text-center">Above</p>
      <GradientDivider />
      <p className="text-sm text-center text-[var(--muted-foreground)]">Below</p>
    </div>
  );
}
