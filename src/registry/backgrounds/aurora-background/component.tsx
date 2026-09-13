"use client";

import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <>
      <style>{`
        @keyframes aurora-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(30px, -20px) rotate(5deg) scale(1.1); }
          66% { transform: translate(-20px, 20px) rotate(-3deg) scale(0.95); }
        }
        @keyframes aurora-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          33% { transform: translate(-40px, 20px) rotate(-5deg) scale(1.05); }
          66% { transform: translate(20px, -30px) rotate(4deg) scale(1.1); }
        }
        @keyframes aurora-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(3deg); }
        }
      `}</style>
      <div className={cn("relative w-full h-full min-h-[200px] overflow-hidden rounded-lg bg-[#0a0a0f]", className)}>
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-[60px] opacity-30"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #3b82f6)",
            top: "10%",
            left: "20%",
            animation: "aurora-1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[250px] h-[250px] rounded-full blur-[60px] opacity-25"
          style={{
            background: "linear-gradient(135deg, #ec4899, #8b5cf6)",
            top: "30%",
            right: "15%",
            animation: "aurora-2 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full blur-[50px] opacity-20"
          style={{
            background: "linear-gradient(135deg, #10b981, #3b82f6)",
            bottom: "10%",
            left: "40%",
            animation: "aurora-3 12s ease-in-out infinite",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}
