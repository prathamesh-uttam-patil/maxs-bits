"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function NeonSwitch({ color = "#a855f7", className }: { color?: string; className?: string }) {
  const [active, setActive] = useState(true);

  return (
    <button
      onClick={() => setActive(!active)}
      className={cn("relative w-14 h-7 rounded-full p-1 border transition-all duration-300", className)}
      style={{
        borderColor: active ? color : "var(--border)",
        boxShadow: active ? `0 0 15px ${color}88, inset 0 0 10px ${color}44` : "none",
        backgroundColor: active ? `${color}22` : "var(--card)"
      }}
    >
      <div
        className="w-5 h-5 rounded-full transition-transform duration-300 shadow-md"
        style={{
          transform: active ? "translateX(28px)" : "translateX(0px)",
          backgroundColor: active ? color : "var(--muted-foreground)",
          boxShadow: active ? `0 0 10px ${color}` : "none"
        }}
      />
    </button>
  );
}