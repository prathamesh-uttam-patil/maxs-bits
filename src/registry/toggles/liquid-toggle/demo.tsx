"use client";

import { useState } from "react";
import { LiquidToggle } from "./component";

export function Demo() {
  const [on, setOn] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <LiquidToggle checked={on} onChange={setOn} />
      <span className="text-sm text-[var(--muted-foreground)]">{on ? "ON" : "OFF"}</span>
    </div>
  );
}
