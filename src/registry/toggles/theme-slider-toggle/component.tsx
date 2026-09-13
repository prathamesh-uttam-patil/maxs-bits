"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeSliderToggle({ className }: { className?: string }) {
  const [mode, setMode] = useState<"light" | "dark" | "system">("dark");

  return (
    <div className={cn("inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--card)] p-1 text-xs font-semibold shadow-sm", className)}>
      <button 
        onClick={() => setMode("light")}
        className={cn("px-2.5 py-1 rounded-full transition-all", mode === "light" && "bg-amber-400 text-black shadow-sm font-bold")}
      >
        ☀️ Light
      </button>
      <button 
        onClick={() => setMode("dark")}
        className={cn("px-2.5 py-1 rounded-full transition-all", mode === "dark" && "bg-indigo-600 text-white shadow-sm font-bold")}
      >
        🌙 Dark
      </button>
      <button 
        onClick={() => setMode("system")}
        className={cn("px-2.5 py-1 rounded-full transition-all", mode === "system" && "bg-[var(--secondary)] text-[var(--foreground)] font-bold")}
      >
        💻 Auto
      </button>
    </div>
  );
}