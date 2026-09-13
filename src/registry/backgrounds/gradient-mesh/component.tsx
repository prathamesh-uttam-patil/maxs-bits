"use client";
import { cn } from "@/lib/utils";

export function GradientMesh({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <>
      <style>{`@keyframes mesh-1 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-20px) scale(1.1); } 66% { transform: translate(-20px,15px) scale(0.9); } } @keyframes mesh-2 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(-25px,20px) scale(1.15); } 66% { transform: translate(15px,-25px) scale(0.85); } }`}</style>
      <div className={cn("relative w-full h-full min-h-[200px] rounded-lg overflow-hidden bg-[var(--background)]", className)}>
        <div className="absolute w-40 h-40 rounded-full opacity-30 blur-3xl" style={{ background: "#8b5cf6", top: "10%", left: "20%", animation: "mesh-1 8s ease infinite" }} />
        <div className="absolute w-40 h-40 rounded-full opacity-30 blur-3xl" style={{ background: "#ec4899", bottom: "10%", right: "20%", animation: "mesh-2 8s ease infinite" }} />
        <div className="absolute w-32 h-32 rounded-full opacity-20 blur-3xl" style={{ background: "#3b82f6", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "mesh-1 10s ease infinite reverse" }} />
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
}