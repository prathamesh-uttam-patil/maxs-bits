"use client";

import { SpotlightCard } from "./component";

export function Demo() {
  return (
    <SpotlightCard className="w-64">
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-600/20 flex items-center justify-center">💡</div>
        <h3 className="text-lg font-semibold">Spotlight Card</h3>
        <p className="text-sm text-[var(--muted-foreground)]">Move cursor to see the spotlight</p>
      </div>
    </SpotlightCard>
  );
}
