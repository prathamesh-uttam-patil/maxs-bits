"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps {
  label: string;
  type?: string;
  className?: string;
}

export function FloatingInput({ label, type = "text", className }: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value.length > 0;

  return (
    <div className={cn("relative w-full", className)}>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full rounded-lg border border-[var(--border)] bg-transparent px-4 pt-5 pb-2 text-sm outline-none transition-all focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
      />
      <label
        className={cn(
          "absolute left-4 transition-all duration-200 pointer-events-none text-[var(--muted-foreground)]",
          isActive
            ? "top-1.5 text-xs text-[var(--primary)] font-medium"
            : "top-1/2 -translate-y-1/2 text-sm"
        )}
      >
        {label}
      </label>
    </div>
  );
}
