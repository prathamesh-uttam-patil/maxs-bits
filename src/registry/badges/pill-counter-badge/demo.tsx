"use client";
import { PillCounterBadge } from "./component";

export function Demo() {
  return (
    <div className="flex gap-3">
      <PillCounterBadge label="Components" count={193} />
      <PillCounterBadge label="Categories" count={28} />
    </div>
  );
}