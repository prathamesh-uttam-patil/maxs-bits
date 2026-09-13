"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function JumpPagination({ totalPages = 20, className }: { totalPages?: number; className?: string }) {
  const [current, setCurrent] = useState(1);
  const [jumpVal, setJumpVal] = useState("");

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault();
    const p = parseInt(jumpVal, 10);
    if (!isNaN(p) && p >= 1 && p <= totalPages) {
      setCurrent(p);
      setJumpVal("");
    }
  };

  return (
    <div className={cn("flex items-center gap-3 text-xs", className)}>
      <div className="flex items-center rounded-lg border border-[var(--border)] bg-[var(--card)] p-1 gap-1">
        <button onClick={() => setCurrent(Math.max(1, current - 1))} className="px-2.5 py-1 rounded hover:bg-[var(--secondary)] font-bold">‹</button>
        <span className="px-2 font-mono font-medium">{current} / {totalPages}</span>
        <button onClick={() => setCurrent(Math.min(totalPages, current + 1))} className="px-2.5 py-1 rounded hover:bg-[var(--secondary)] font-bold">›</button>
      </div>
      <form onSubmit={handleJump} className="flex items-center gap-1.5">
        <span className="text-[var(--muted-foreground)]">Go to:</span>
        <input 
          type="number" 
          value={jumpVal} 
          onChange={e => setJumpVal(e.target.value)} 
          placeholder="#" 
          className="w-12 px-2 py-1 rounded-md border border-[var(--border)] bg-[var(--background)] text-center outline-none focus:border-[var(--primary)]"
        />
      </form>
    </div>
  );
}