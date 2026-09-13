"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <>
      <style>{`
        @keyframes gradient-text-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      <span
        className={cn("text-3xl font-extrabold text-transparent bg-clip-text", className)}
        style={{
          backgroundImage: "linear-gradient(90deg, #8b5cf6, #ec4899, #3b82f6, #10b981, #8b5cf6)",
          backgroundSize: "300% 100%",
          animation: "gradient-text-shift 4s ease infinite",
        }}
      >
        {children}
      </span>
    </>
  );
}
