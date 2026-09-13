"use client";
import { cn } from "@/lib/utils";

export function BorderedAvatar({ name, size = 48, className }: { src?: string; name: string; size?: number; className?: string }) {
  const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  return (
    <>
      <style>{`@keyframes avatar-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <div className={cn("relative inline-flex items-center justify-center rounded-full p-[3px]", className)} style={{ width: size, height: size }}>
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(#8b5cf6,#ec4899,#3b82f6,#10b981,#8b5cf6)]" style={{ animation: "avatar-spin 3s linear infinite" }} />
        <div className="relative rounded-full bg-[var(--card)] flex items-center justify-center text-xs font-bold" style={{ width: size - 6, height: size - 6 }}>{initials}</div>
      </div>
    </>
  );
}