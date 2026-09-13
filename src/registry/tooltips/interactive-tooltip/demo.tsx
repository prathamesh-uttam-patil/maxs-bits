"use client";
import { InteractiveTooltip } from "./component";

export function Demo() {
  return (
    <div className="flex items-center justify-center p-6">
      <InteractiveTooltip
        trigger={<button className="px-4 py-2 rounded-lg bg-[var(--secondary)] text-sm font-medium border border-[var(--border)]">Hover Profile</button>}
        title="Max Developer"
        description="Full-stack engineer building beautiful UI components with React & Tailwind."
      />
    </div>
  );
}