"use client";
import { VerifiedAvatar } from "./component";

export function Demo() {
  return (
    <div className="flex gap-4 items-center">
      <VerifiedAvatar />
      <div>
        <h4 className="text-xs font-bold">Max Patil</h4>
        <p className="text-[10px] text-[var(--muted-foreground)]">Verified Author</p>
      </div>
    </div>
  );
}