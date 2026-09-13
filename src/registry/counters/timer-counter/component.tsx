"use client";
import { useState, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

export function TimerCounter({ startFrom = 60, className }: { startFrom?: number; className?: string }) {
  const [time, setTime] = useState(startFrom);
  const [running, setRunning] = useState(false);
  const ref = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const start = useCallback(() => { if (running) return; setRunning(true); ref.current = setInterval(() => setTime(t => { if (t <= 0) { clearInterval(ref.current); setRunning(false); return 0; } return t - 1; }), 1000); }, [running]);
  const stop = useCallback(() => { clearInterval(ref.current); setRunning(false); }, []);
  const reset = useCallback(() => { clearInterval(ref.current); setRunning(false); setTime(startFrom); }, [startFrom]);
  const mins = String(Math.floor(time / 60)).padStart(2, "0");
  const secs = String(time % 60).padStart(2, "0");
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className="text-3xl font-bold tabular-nums font-mono">{mins}:{secs}</div>
      <div className="flex gap-2">
        <button onClick={start} disabled={running} className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500 text-white disabled:opacity-50">Start</button>
        <button onClick={stop} disabled={!running} className="px-3 py-1 rounded-md text-xs font-semibold bg-red-500 text-white disabled:opacity-50">Stop</button>
        <button onClick={reset} className="px-3 py-1 rounded-md text-xs font-semibold border border-[var(--border)]">Reset</button>
      </div>
    </div>
  );
}