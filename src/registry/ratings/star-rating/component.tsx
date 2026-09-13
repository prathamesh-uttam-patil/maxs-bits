"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps { max?: number; value?: number; onChange?: (v: number) => void; className?: string; }

export function StarRating({ max = 5, value = 0, onChange, className }: StarRatingProps) {
  const [hover, setHover] = useState(0);
  const [current, setCurrent] = useState(value);
  const active = hover || current;
  return (
    <div className={cn("flex gap-1", className)}>
      {Array.from({ length: max }, (_, i) => (
        <button key={i} onMouseEnter={() => setHover(i + 1)} onMouseLeave={() => setHover(0)}
          onClick={() => { setCurrent(i + 1); onChange?.(i + 1); }}
          className="transition-transform duration-150 hover:scale-125 focus:outline-none"
        >
          <svg className={cn("w-6 h-6 transition-colors duration-200", i < active ? "text-amber-400 fill-amber-400" : "text-[var(--muted)] fill-none")} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        </button>
      ))}
    </div>
  );
}