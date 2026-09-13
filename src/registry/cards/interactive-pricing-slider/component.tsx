"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function InteractivePricingSlider({ className }: { className?: string }) {
  const [users, setUsers] = useState(10);
  const price = Math.round(users * 4.5);

  return (
    <div className={cn("w-64 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm space-y-3", className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold">{users} Team Members</span>
        <span className="text-lg font-black text-[var(--primary)]">${price}<span className="text-[10px] text-[var(--muted-foreground)] font-normal">/mo</span></span>
      </div>
      <input
        type="range"
        min="1"
        max="50"
        value={users}
        onChange={e => setUsers(Number(e.target.value))}
        className="w-full accent-[var(--primary)] cursor-pointer"
      />
      <button className="w-full py-2 rounded-xl bg-[var(--primary)] text-white text-xs font-bold hover:opacity-90">
        Choose Plan
      </button>
    </div>
  );
}