"use client";
import { GlowChip } from "./component";

export function Demo() {
  return (
    <div className="flex flex-wrap gap-3">
      <GlowChip label="Active Node" color="#10b981" />
      <GlowChip label="Syncing" color="#3b82f6" />
      <GlowChip label="High Load" color="#f59e0b" />
    </div>
  );
}