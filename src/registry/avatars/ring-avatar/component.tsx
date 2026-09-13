"use client";
import { cn } from "@/lib/utils";

interface RingAvatarProps { src: string; alt?: string; size?: number; className?: string; }

export function RingAvatar({ src, alt = "Avatar", size = 48, className }: RingAvatarProps) {
  return (
    <>
      <style>{`@keyframes ring-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <div className={cn("relative inline-flex items-center justify-center", className)} style={{ width: size + 8, height: size + 8 }}>
        <div className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(#8b5cf6, #ec4899, #3b82f6, #10b981, #8b5cf6)", animation: "ring-spin 3s linear infinite" }} />
        <div className="absolute inset-[3px] rounded-full bg-[var(--background)]" />
        <img src={src} alt={alt} className="relative rounded-full object-cover" style={{ width: size, height: size }} />
      </div>
    </>
  );
}
