"use client";
import { cn } from "@/lib/utils";

interface NotificationBadgeProps {
  children: React.ReactNode;
  count?: number;
  className?: string;
}

export function NotificationBadge({ children, count, className }: NotificationBadgeProps) {
  return (
    <div className={cn("relative inline-flex", className)}>
      {children}
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-40" />
        <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
          {count !== undefined ? (count > 9 ? "9+" : count) : ""}
        </span>
      </span>
    </div>
  );
}
