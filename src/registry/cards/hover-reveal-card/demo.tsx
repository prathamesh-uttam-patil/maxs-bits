"use client";
import { HoverRevealCard } from "./component";
export function Demo() {
  return <div className="flex gap-3"><HoverRevealCard title="Design" description="Beautiful UI components" emoji="\uD83C\uDFA8" /><HoverRevealCard title="Code" description="Copy & paste ready" emoji="\uD83D\uDCBB" /></div>;
}