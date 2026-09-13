"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function ToastNotification({ message, duration = 3000, className }: { message: string; duration?: number; className?: string }) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  useEffect(() => { const t = setTimeout(() => { setExiting(true); setTimeout(() => setVisible(false), 300); }, duration); return () => clearTimeout(t); }, [duration]);
  if (!visible) return null;
  return (
    <>
      <style>{`@keyframes toast-in { from { opacity:0; transform:translateY(16px) scale(0.95); } to { opacity:1; transform:translateY(0) scale(1); } }`}</style>
      <div className={cn("inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm shadow-lg transition-all duration-300", exiting && "opacity-0 translate-y-2", className)} style={{ animation: "toast-in 0.3s ease-out" }}>
        <span className="text-emerald-500">\u2713</span>{message}
      </div>
    </>
  );
}