"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className }: GlitchTextProps) {
  return (
    <>
      <style>{`
        @keyframes glitch-1 {
          0%, 100% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
          20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -1px); }
          40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 3px); }
          60% { clip-path: inset(25% 0 58% 0); transform: translate(3px, 1px); }
          80% { clip-path: inset(54% 0 7% 0); transform: translate(-3px, -2px); }
        }
        @keyframes glitch-2 {
          0%, 100% { clip-path: inset(65% 0 15% 0); transform: translate(2px, -1px); }
          20% { clip-path: inset(15% 0 62% 0); transform: translate(-2px, 2px); }
          40% { clip-path: inset(78% 0 2% 0); transform: translate(1px, -3px); }
          60% { clip-path: inset(5% 0 78% 0); transform: translate(-1px, 1px); }
          80% { clip-path: inset(38% 0 45% 0); transform: translate(3px, 2px); }
        }
      `}</style>
      <span className={cn("relative inline-block text-3xl font-extrabold", className)}>
        {children}
        <span
          className="absolute inset-0 text-cyan-400"
          style={{ animation: "glitch-1 2s infinite linear" }}
          aria-hidden="true"
        >
          {children}
        </span>
        <span
          className="absolute inset-0 text-pink-500"
          style={{ animation: "glitch-2 2s infinite linear reverse" }}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    </>
  );
}
