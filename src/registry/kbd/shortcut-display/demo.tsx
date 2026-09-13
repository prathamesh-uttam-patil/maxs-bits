"use client";
import { ShortcutDisplay } from "./component";
export function Demo() {
  return <div className="flex flex-col gap-3"><div className="flex items-center gap-3"><ShortcutDisplay keys={["\u2318","K"]} /><span className="text-xs text-[var(--muted-foreground)]">Search</span></div><div className="flex items-center gap-3"><ShortcutDisplay keys={["Ctrl","Shift","P"]} /><span className="text-xs text-[var(--muted-foreground)]">Command</span></div></div>;
}