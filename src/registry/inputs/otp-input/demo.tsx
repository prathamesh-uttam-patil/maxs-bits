"use client";

import { OTPInput } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <OTPInput length={4} />
      <p className="text-xs text-[var(--muted-foreground)]">Enter verification code</p>
    </div>
  );
}
