"use client";
import { cn } from "@/lib/utils";

interface ProfileCardProps { name: string; bio: string; avatar?: string; className?: string; }

export function ProfileCard({ name, bio, avatar = "\uD83D\uDC64", className }: ProfileCardProps) {
  const initials = name.split(" ").map(w => w[0]).join("").toUpperCase();
  return (
    <div className={cn("w-56 rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden", className)}>
      <div className="h-16 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--primary)]/5" />
      <div className="-mt-8 px-4 pb-4">
        <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center text-xl font-bold text-white border-4 border-[var(--card)]">{initials}</div>
        <h3 className="mt-2 text-sm font-bold">{name}</h3>
        <p className="text-xs text-[var(--muted-foreground)] mt-1">{bio}</p>
        <button className="mt-3 w-full py-1.5 rounded-lg text-xs font-semibold border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors">Follow</button>
      </div>
    </div>
  );
}