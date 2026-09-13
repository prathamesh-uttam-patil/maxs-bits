"use client";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export function PasswordInput({ placeholder = "Password", className }: { placeholder?: string; className?: string }) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const strength = useMemo(() => {
    let s = 0; if (value.length >= 8) s++; if (/[A-Z]/.test(value)) s++; if (/[0-9]/.test(value)) s++; if (/[^A-Za-z0-9]/.test(value)) s++; return s;
  }, [value]);
  const colors = ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-emerald-500"];
  return (
    <div className={cn("w-64", className)}>
      <div className="relative">
        <input type={show ? "text" : "password"} value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-2.5 pr-10 text-sm outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20" />
        <button onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[var(--muted-foreground)]">{show ? "\uD83D\uDE48" : "\uD83D\uDC41\uFE0F"}</button>
      </div>
      {value && <div className="flex gap-1 mt-2">{Array.from({length:4},(_,i) => <div key={i} className={cn("h-1 flex-1 rounded-full transition-colors", i < strength ? colors[strength-1] : "bg-[var(--muted)]")} />)}</div>}
    </div>
  );
}