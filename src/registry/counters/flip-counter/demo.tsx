"use client";
import { useState } from "react";
import { FlipCounter } from "./component";
export function Demo() {
  const [v, setV] = useState(42);
  return <div className="flex items-center gap-4"><FlipCounter value={v} /><button onClick={() => setV(v + 1)} className="text-xs px-3 py-1 rounded border border-[var(--border)]">+1</button></div>;
}