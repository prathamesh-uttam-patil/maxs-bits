"use client";

import { GlowButton } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <GlowButton>Neon Glow</GlowButton>
      <GlowButton glowColor="#06b6d4">Cyan Glow</GlowButton>
      <p className="text-sm text-[var(--muted-foreground)]">Hover to intensify the glow</p>
    </div>
  );
}
