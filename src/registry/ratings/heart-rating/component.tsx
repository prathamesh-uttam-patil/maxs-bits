"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function HeartRating({ max = 5, className }: { max?: number; className?: string }) {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(0);

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      {Array.from({ length: max }, (_, i) => {
        const idx = i + 1;
        const active = idx <= (hover || rating);
        return (
          <button
            key={i}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(idx)}
            className="text-xl transition-transform hover:scale-125 active:scale-95 focus:outline-none"
          >
            {active ? "❤️" : "🤍"}
          </button>
        );
      })}
    </div>
  );
}