"use client";
import { useState } from "react";
import { SlideDrawer } from "./component";
export function Demo() {
  const [open, setOpen] = useState(false);
  return <div><button onClick={() => setOpen(true)} className="px-4 py-2 rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] text-sm font-semibold">Open Drawer</button><SlideDrawer isOpen={open} onClose={() => setOpen(false)}><h3 className="text-lg font-bold mb-2">Drawer</h3><p className="text-sm text-[var(--muted-foreground)]">Slides in from the right.</p></SlideDrawer></div>;
}