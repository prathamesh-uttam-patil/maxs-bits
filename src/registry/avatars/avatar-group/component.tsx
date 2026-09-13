"use client";
import { cn } from "@/lib/utils";

interface AvatarGroupProps { avatars: string[]; max?: number; size?: number; className?: string; }

export function AvatarGroup({ avatars, max = 4, size = 40, className }: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;
  return (
    <div className={cn("flex -space-x-3", className)}>
      {visible.map((src, i) => (
        <img key={i} src={src} alt={`Avatar ${i + 1}`} className="rounded-full border-2 border-[var(--background)] object-cover transition-transform hover:scale-110 hover:z-10" style={{ width: size, height: size }} />
      ))}
      {overflow > 0 && (
        <div className="rounded-full border-2 border-[var(--background)] bg-[var(--secondary)] flex items-center justify-center text-xs font-bold text-[var(--muted-foreground)]" style={{ width: size, height: size }}>
          +{overflow}
        </div>
      )}
    </div>
  );
}
