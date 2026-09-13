"use client";

import { TiltCard } from "./component";

export function Demo() {
  return (
    <TiltCard className="w-64">
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600" />
        <h3 className="text-lg font-semibold">3D Tilt Card</h3>
        <p className="text-sm text-[var(--muted-foreground)]">Hover and move your cursor around</p>
      </div>
    </TiltCard>
  );
}
