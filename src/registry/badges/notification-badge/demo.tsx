"use client";
import { NotificationBadge } from "./component";
export function Demo() {
  return (
    <div className="flex items-center gap-6">
      <NotificationBadge count={3}>
        <div className="w-10 h-10 rounded-lg bg-[var(--secondary)] flex items-center justify-center text-lg">🔔</div>
      </NotificationBadge>
      <NotificationBadge count={12}>
        <div className="w-10 h-10 rounded-lg bg-[var(--secondary)] flex items-center justify-center text-lg">💬</div>
      </NotificationBadge>
    </div>
  );
}
