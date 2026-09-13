"use client";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function MagneticCursor({ className }: { className?: string }) {
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setBtnPos({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  return (
    <div className={cn("flex items-center justify-center p-8", className)}>
      <button
        ref={btnRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `translate(${btnPos.x}px, ${btnPos.y}px)` }}
        className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-bold shadow-lg shadow-[var(--primary)]/30 transition-transform duration-150 ease-out active:scale-95"
      >
        Magnetic Pull 🧲
      </button>
    </div>
  );
}