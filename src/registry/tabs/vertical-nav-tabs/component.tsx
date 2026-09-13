"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function VerticalNavTabs({ className }: { className?: string }) {
  const [active, setActive] = useState(0);
  const tabs = [
    { icon: "⚡", label: "General" },
    { icon: "🔒", label: "Security" },
    { icon: "💳", label: "Billing" },
    { icon: "🔔", label: "Notifications" }
  ];

  return (
    <div className={cn("w-52 space-y-1 rounded-xl border border-[var(--border)] bg-[var(--card)] p-2", className)}>
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all text-left",
            active === i ? "bg-[var(--primary)] text-white shadow-md shadow-[var(--primary)]/20" : "text-[var(--muted-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--foreground)]"
          )}
        >
          <span>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}