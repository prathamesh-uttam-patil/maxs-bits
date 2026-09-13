"use client";
import { useState } from "react";
import { ScaleModal } from "./component";
export function Demo() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)} className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold">Open Modal</button>
      <ScaleModal isOpen={open} onClose={() => setOpen(false)}>
        <h3 className="text-lg font-bold mb-2">Scale Modal</h3>
        <p className="text-sm text-[var(--muted-foreground)]">This modal scales in with a spring animation.</p>
      </ScaleModal>
    </div>
  );
}