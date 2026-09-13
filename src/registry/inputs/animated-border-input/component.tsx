"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBorderInputProps {
  placeholder?: string;
  className?: string;
}

export function AnimatedBorderInput({ placeholder = "Type something...", className }: AnimatedBorderInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <style>{`
        @keyframes border-spin {
          from { --border-angle: 0deg; }
          to { --border-angle: 360deg; }
        }
      `}</style>
      <div
        className={cn("relative rounded-lg p-[2px] transition-all duration-300", className)}
        style={{
          background: focused
            ? "conic-gradient(from var(--border-angle, 0deg), #8b5cf6, #ec4899, #3b82f6, #8b5cf6)"
            : "var(--border)",
          animation: focused ? "border-spin 3s linear infinite" : "none",
        }}
      >
        <input
          type="text"
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full rounded-[6px] bg-[var(--background)] px-4 py-2.5 text-sm outline-none placeholder:text-[var(--muted-foreground)]"
        />
      </div>
    </>
  );
}
