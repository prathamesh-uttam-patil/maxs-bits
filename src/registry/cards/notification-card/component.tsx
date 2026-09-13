"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface NotificationCardProps { icon?: string; title: string; message: string; time?: string; className?: string; }

export function NotificationCard({ icon = "\uD83D\uDD14", title, message, time = "now", className }: NotificationCardProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className={cn("w-72 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 flex gap-3 transition-all hover:shadow-md", className)}>
      <div className="text-xl shrink-0">{icon}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between"><h4 className="text-xs font-bold">{title}</h4><span className="text-[10px] text-[var(--muted-foreground)]">{time}</span></div>
        <p className="text-xs text-[var(--muted-foreground)] mt-0.5 truncate">{message}</p>
      </div>
      <button onClick={() => setDismissed(true)} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] text-xs shrink-0 self-start">\u2715</button>
    </div>
  );
}