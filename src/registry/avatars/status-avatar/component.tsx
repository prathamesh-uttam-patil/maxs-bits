"use client";
import { cn } from "@/lib/utils";

const statusColors = { online: "bg-emerald-500", offline: "bg-gray-400", busy: "bg-red-500" };

interface StatusAvatarProps { src: string; status?: "online" | "offline" | "busy"; size?: number; className?: string; }

export function StatusAvatar({ src, status = "online", size = 48, className }: StatusAvatarProps) {
  const dotSize = Math.max(12, size * 0.28);
  return (
    <div className={cn("relative inline-flex", className)} style={{ width: size, height: size }}>
      <img src={src} alt="Avatar" className="rounded-full object-cover w-full h-full border-2 border-[var(--background)]" />
      <span
        className={cn("absolute bottom-0 right-0 rounded-full border-2 border-[var(--background)]", statusColors[status])}
        style={{ width: dotSize, height: dotSize }}
      />
      {status === "online" && (
        <span className={cn("absolute bottom-0 right-0 rounded-full animate-ping opacity-40", statusColors[status])} style={{ width: dotSize, height: dotSize }} />
      )}
    </div>
  );
}
