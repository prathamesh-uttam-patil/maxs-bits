"use client";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCursorProps { children: React.ReactNode; color?: string; className?: string; }

export function SpotlightCursor({ children, color = "rgba(139,92,246,0.15)", className }: SpotlightCursorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const handleMove = (e: React.MouseEvent) => { if (!ref.current) return; const rect = ref.current.getBoundingClientRect(); setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top }); };
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)} onMouseMove={handleMove} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300" style={{ opacity: active ? 1 : 0, background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 60%)` }} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}