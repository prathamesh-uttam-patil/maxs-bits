"use client";

import { GlassCard } from "./component";

export function Demo() {
  return (
    <div className="relative p-4">
      {/* Background gradient for glass effect visibility */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/30 via-purple-500/20 to-blue-500/30" />
      <GlassCard className="relative w-64">
        <div className="space-y-3">
          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center text-lg">✨</div>
          <h3 className="text-lg font-semibold text-white">Glass Card</h3>
          <p className="text-sm text-white/70">Beautiful frosted glass effect</p>
        </div>
      </GlassCard>
    </div>
  );
}
