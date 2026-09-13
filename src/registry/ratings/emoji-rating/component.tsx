"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const emojis = ["\uD83D\uDE21", "\uD83D\uDE1E", "\uD83D\uDE10", "\uD83D\uDE0A", "\uD83E\uDD29"];
const labels = ["Terrible", "Bad", "Okay", "Good", "Amazing"];

interface EmojiRatingProps { onChange?: (v: number) => void; className?: string; }

export function EmojiRating({ onChange, className }: EmojiRatingProps) {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="flex gap-3">
        {emojis.map((emoji, i) => (
          <button key={i} onClick={() => { setSelected(i); onChange?.(i + 1); }}
            className={cn("text-2xl transition-all duration-300 hover:scale-125", selected === i ? "scale-125 grayscale-0" : selected !== null ? "scale-90 grayscale opacity-50" : "grayscale-0")}
          >{emoji}</button>
        ))}
      </div>
      {selected !== null && <span className="text-xs text-[var(--muted-foreground)] animate-[fadeIn_0.2s]">{labels[selected]}</span>}
    </div>
  );
}