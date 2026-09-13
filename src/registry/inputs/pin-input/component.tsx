"use client";
import { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface PinInputProps { length?: number; onComplete?: (pin: string) => void; className?: string; }

export function PinInput({ length = 4, onComplete, className }: PinInputProps) {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const handleChange = useCallback((i: number, v: string) => {
    if (!/^[0-9]?$/.test(v)) return;
    const nv = [...values]; nv[i] = v; setValues(nv);
    if (v && i < length - 1) refs.current[i + 1]?.focus();
    if (nv.every(x => x)) onComplete?.(nv.join(""));
  }, [values, length, onComplete]);
  const handleKey = useCallback((i: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !values[i] && i > 0) refs.current[i - 1]?.focus();
  }, [values]);
  return (
    <div className={cn("flex gap-3", className)}>
      {values.map((v, i) => (
        <div key={i} className="relative">
          <input ref={el => { refs.current[i] = el; }} type="password" inputMode="numeric" maxLength={1} value={v}
            onChange={e => handleChange(i, e.target.value)} onKeyDown={e => handleKey(i, e)}
            className="w-12 h-14 text-center text-xl font-bold rounded-xl border-2 border-[var(--border)] bg-[var(--card)] outline-none transition-all focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20" />
          {v && <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><div className="w-3 h-3 rounded-full bg-[var(--foreground)]" /></div>}
        </div>
      ))}
    </div>
  );
}