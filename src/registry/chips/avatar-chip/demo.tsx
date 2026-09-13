"use client";
import { AvatarChip } from "./component";

export function Demo() {
  return (
    <div className="flex flex-wrap gap-2">
      <AvatarChip name="Sarah Chen" avatar="👩🏻‍💻" />
      <AvatarChip name="Alex Rivera" avatar="👨🏽‍💻" />
      <AvatarChip name="Max Bits" avatar="⚡" />
    </div>
  );
}