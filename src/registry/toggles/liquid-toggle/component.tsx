"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface LiquidToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function LiquidToggle({ checked: controlledChecked, onChange, className }: LiquidToggleProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isChecked = controlledChecked ?? internalChecked;

  const handleToggle = () => {
    const newValue = !isChecked;
    setInternalChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <button
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
      className={cn(
        "relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2",
        isChecked ? "bg-[var(--primary)]" : "bg-[var(--muted)]",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-6 w-6 rounded-full bg-white shadow-md transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]",
          isChecked ? "translate-x-7 scale-110" : "translate-x-1 scale-100"
        )}
      />
      {/* Liquid blob effect */}
      <span
        className={cn(
          "absolute h-6 rounded-full bg-white/30 transition-all duration-500",
          isChecked ? "left-3 w-8 opacity-0" : "left-1 w-6 opacity-0"
        )}
        style={{ opacity: isChecked ? 0 : 0 }}
      />
    </button>
  );
}
