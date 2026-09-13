"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function IOSSwitch({ checked: controlled, onChange, className }: { checked?: boolean; onChange?: (v: boolean) => void; className?: string }) {
  const [internal, setInternal] = useState(false);
  const isChecked = controlled ?? internal;

  const toggle = () => {
    const next = !isChecked;
    setInternal(next);
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={toggle}
      className={cn(
        "relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none",
        isChecked ? "bg-emerald-500" : "bg-[var(--muted)]",
        className
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-300 ease-in-out",
          isChecked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  );
}