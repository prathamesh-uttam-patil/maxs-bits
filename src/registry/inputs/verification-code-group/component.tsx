"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function VerificationCodeGroup({ className }: { className?: string }) {
  const [digits, setDigits] = useState(["", "", "", "", "", ""]);

  const handleChange = (val: string, idx: number) => {
    const next = [...digits];
    next[idx] = val.slice(-1);
    setDigits(next);
  };

  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {digits.map((d, i) => (
        <input
          key={i}
          type="text"
          maxLength={1}
          value={d}
          onChange={e => handleChange(e.target.value, i)}
          className="w-8 h-10 text-center rounded-lg border border-[var(--border)] bg-[var(--background)] text-sm font-bold outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      ))}
    </div>
  );
}