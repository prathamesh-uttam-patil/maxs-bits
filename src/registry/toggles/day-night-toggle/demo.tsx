"use client";

import { useState } from "react";
import { DayNightToggle } from "./component";

export function Demo() {
  const [dark, setDark] = useState(false);
  return (
    <div className="flex items-center gap-3">
      <DayNightToggle isDark={dark} onChange={setDark} />
      <span className="text-sm text-[var(--muted-foreground)]">{dark ? "Night" : "Day"}</span>
    </div>
  );
}
