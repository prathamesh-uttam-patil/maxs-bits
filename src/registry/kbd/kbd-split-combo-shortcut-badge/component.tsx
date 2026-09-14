"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sparkles, ArrowRight, Check } from "lucide-react";

interface KbdSplitComboShortcutBadgeProps {
  className?: string;
}

export function KbdSplitComboShortcutBadge({ className }: KbdSplitComboShortcutBadgeProps) {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setActive(!active)}
      className={cn(
        "group relative select-none cursor-pointer overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]/90 p-5 transition-all duration-300 backdrop-blur-md hover:border-[var(--primary)]/60 hover:shadow-xl hover:shadow-[var(--primary)]/10 active:scale-[0.98]",
        active && "ring-2 ring-[var(--primary)]/50 border-[var(--primary)]",
        className
      )}
    >
      <div
        className={cn(
          "absolute -inset-px -z-10 rounded-2xl opacity-0 transition-opacity duration-500",
          hovered && "opacity-100",
          "bg-gradient-to-r from-[var(--primary)]/15 via-[var(--accent)]/10 to-purple-500/15"
        )}
      />

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-transform duration-300 group-hover:scale-110",
              active && "bg-[var(--primary)] text-[var(--primary-foreground)]"
            )}
          >
            {active ? <Check className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-[var(--foreground)] truncate">
                KBD Split Combo Shortcut Badge
              </h4>
              <span className="inline-flex items-center rounded-full bg-[var(--primary)]/10 px-2 py-0.5 text-[10px] font-medium text-[var(--primary)]">
                kbd
              </span>
            </div>
            <p className="text-xs text-[var(--muted-foreground)] line-clamp-1 mt-0.5">
              Clean modifier key sequence badge (Ctrl + Shift + P) with smooth pressed states.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span
            className={cn(
              "inline-flex h-2 w-2 rounded-full transition-colors",
              active ? "bg-emerald-500 animate-ping" : "bg-[var(--primary)]/40 group-hover:bg-[var(--primary)]"
            )}
          />
          <ArrowRight
            className={cn(
              "w-4 h-4 text-[var(--muted-foreground)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary)]",
              active && "rotate-90 text-[var(--primary)]"
            )}
          />
        </div>
      </div>

      <div
        className={cn(
          "mt-3 pt-3 border-t border-[var(--border)]/60 flex items-center justify-between text-[11px] text-[var(--muted-foreground)] transition-all duration-300",
          hovered ? "opacity-100 translate-y-0" : "opacity-80"
        )}
      >
        <span className="font-mono text-[10px] text-[var(--primary)]">
          {active ? "STATUS: ACTIVE" : "STATUS: READY"}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>Interactive UI</span>
        </div>
      </div>
    </div>
  );
}
