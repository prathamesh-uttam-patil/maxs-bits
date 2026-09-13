"use client";
import { DotDivider } from "./component";
export function Demo() {
  return (
    <div className="w-64 space-y-4">
      <p className="text-sm text-center">Section One</p>
      <DotDivider />
      <p className="text-sm text-center text-[var(--muted-foreground)]">Section Two</p>
    </div>
  );
}
