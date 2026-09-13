"use client";
import { useState } from "react";
import { CountBadge } from "./component";
export function Demo() {
  const [c, setC] = useState(5);
  return <div className="flex items-center gap-4"><CountBadge count={c} variant="primary" /><button onClick={() => setC(c+1)} className="text-xs px-3 py-1 rounded border border-[var(--border)]">+1</button></div>;
}