"use client";
import { LikeButton } from "./component";
export function Demo() { return <div className="flex gap-2 items-center"><LikeButton /><span className="text-xs text-[var(--muted-foreground)]">Click to like</span></div>; }