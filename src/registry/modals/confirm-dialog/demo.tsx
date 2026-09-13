"use client";
import { useState } from "react";
import { ConfirmDialog } from "./component";
export function Demo() {
  const [open, setOpen] = useState(false);
  return <div><button onClick={() => setOpen(true)} className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold">Delete</button><ConfirmDialog isOpen={open} title="Are you sure?" message="This action cannot be undone." onConfirm={() => setOpen(false)} onCancel={() => setOpen(false)} /></div>;
}