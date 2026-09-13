"use client";
import { cn } from "@/lib/utils";

const colors = ["#8b5cf6","#ec4899","#3b82f6","#10b981","#f59e0b","#ef4444","#06b6d4","#84cc16"];

interface InitialAvatarProps { name: string; size?: number; className?: string; }

export function InitialAvatar({ name, size = 40, className }: InitialAvatarProps) {
  const initials = name.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  const hash = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const bg = colors[hash % colors.length];
  return (
    <div className={cn("inline-flex items-center justify-center rounded-full text-white font-bold", className)}
      style={{ width: size, height: size, backgroundColor: bg, fontSize: size * 0.38 }}>{initials}</div>
  );
}