"use client";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function RingCursor({ color = "var(--primary)", className }: { color?: string; className?: string }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn("relative w-72 h-44 rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden flex items-center justify-center cursor-none", className)}
    >
      <p className="text-sm font-semibold text-[var(--muted-foreground)] select-none">
        Move mouse inside
      </p>

      {hovered && (
        <>
          <div
            className="pointer-events-none absolute w-8 h-8 rounded-full border-2 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              borderColor: color,
              boxShadow: `0 0 12px ${color}66`
            }}
          />
          <div
            className="pointer-events-none absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              backgroundColor: color
            }}
          />
        </>
      )}
    </div>
  );
}