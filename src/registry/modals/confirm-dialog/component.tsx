"use client";
import { cn } from "@/lib/utils";

interface ConfirmDialogProps { isOpen: boolean; title: string; message: string; onConfirm: () => void; onCancel: () => void; className?: string; }

export function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel, className }: ConfirmDialogProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onCancel} />
      <div className={cn("relative w-80 rounded-xl bg-[var(--card)] border border-[var(--border)] p-6 shadow-2xl", className)} style={{ animation: "0.2s ease-out 0s 1 normal forwards running scale-in" }}>
        <style>{`@keyframes scale-in { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }`}</style>
        <h3 className="text-base font-bold">{title}</h3>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">{message}</p>
        <div className="mt-5 flex gap-2 justify-end">
          <button onClick={onCancel} className="px-4 py-2 rounded-lg text-sm font-medium border border-[var(--border)] hover:bg-[var(--secondary)] transition-colors">Cancel</button>
          <button onClick={onConfirm} className="px-4 py-2 rounded-lg text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors">Confirm</button>
        </div>
      </div>
    </div>
  );
}