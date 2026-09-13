"use client";
import { cn } from "@/lib/utils";

interface ActivityItem {
  user: string;
  action: string;
  time: string;
  avatar: string;
}

export function ActivityFeed({ items, className }: { items?: ActivityItem[]; className?: string }) {
  const defaultItems: ActivityItem[] = [
    { user: "Sarah C.", action: "pushed commit 9484570", time: "5m ago", avatar: "👩🏻‍💻" },
    { user: "Alex R.", action: "merged PR #42 in main", time: "22m ago", avatar: "👨🏽‍💻" },
    { user: "Max P.", action: "released v2.4.0", time: "1h ago", avatar: "🚀" }
  ];

  const list = items || defaultItems;

  return (
    <div className={cn("space-y-3 w-72 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4", className)}>
      <h4 className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wider mb-3">Live Feed</h4>
      {list.map((item, i) => (
        <div key={i} className="flex items-center gap-3 text-xs">
          <div className="w-7 h-7 rounded-full bg-[var(--secondary)] flex items-center justify-center text-sm shrink-0">
            {item.avatar}
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate">
              <span className="font-bold">{item.user}</span>{" "}
              <span className="text-[var(--muted-foreground)]">{item.action}</span>
            </p>
            <span className="text-[10px] text-[var(--muted-foreground)]">{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}