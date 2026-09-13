"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ThumbFeedback({ className }: { className?: string }) {
  const [vote, setVote] = useState<"up" | "down" | null>(null);

  return (
    <div className={cn("inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-xs shadow-sm", className)}>
      <span className="text-[var(--muted-foreground)]">Was this helpful?</span>
      <div className="flex items-center gap-1 border-l border-[var(--border)] pl-2">
        <button
          onClick={() => setVote("up")}
          className={cn("p-1.5 rounded-lg hover:bg-[var(--secondary)] transition-all", vote === "up" && "bg-emerald-500/20 scale-110")}
        >
          👍
        </button>
        <button
          onClick={() => setVote("down")}
          className={cn("p-1.5 rounded-lg hover:bg-[var(--secondary)] transition-all", vote === "down" && "bg-red-500/20 scale-110")}
        >
          👎
        </button>
      </div>
      {vote && (
        <span className="text-[10px] font-bold text-[var(--primary)] animate-in fade-in">
          Thanks!
        </span>
      )}
    </div>
  );
}