"use client";

import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface OTPInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  className?: string;
}

export function OTPInput({ length = 6, onComplete, className }: OTPInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = useCallback(
    (index: number, val: string) => {
      if (!/^[0-9]?$/.test(val)) return;
      const newValues = [...values];
      newValues[index] = val;
      setValues(newValues);

      if (val && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }

      if (newValues.every((v) => v !== "")) {
        onComplete?.(newValues.join(""));
      }
    },
    [values, length, onComplete]
  );

  const handleKeyDown = useCallback(
    (index: number, e: React.KeyboardEvent) => {
      if (e.key === "Backspace" && !values[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    },
    [values]
  );

  return (
    <div className={cn("flex gap-2", className)}>
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => { inputsRef.current[i] = el; }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          className="w-11 h-12 text-center text-lg font-bold rounded-lg border border-[var(--border)] bg-[var(--card)] outline-none transition-all focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
        />
      ))}
    </div>
  );
}
