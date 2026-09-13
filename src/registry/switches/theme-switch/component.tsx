"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeSwitch({ isDark: ctrl, onChange, className }: { isDark?: boolean; onChange?: (v: boolean) => void; className?: string }) {
  const [internal, setInternal] = useState(false);
  const dark = ctrl ?? internal;
  const toggle = () => { const v = !dark; setInternal(v); onChange?.(v); };
  return (
    <button onClick={toggle} className={cn("relative w-16 h-8 rounded-full transition-colors duration-500", dark ? "bg-indigo-900" : "bg-amber-300", className)}>
      <span className={cn("absolute top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-500", dark ? "left-9 bg-indigo-700" : "left-1 bg-amber-100")}>{dark ? "\uD83C\uDF19" : "\u2600\uFE0F"}</span>
    </button>
  );
}