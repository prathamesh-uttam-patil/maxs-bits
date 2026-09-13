"use client";
import { CountUp } from "./component";
export function Demo() {
  return (
    <div className="flex gap-8">
      <div className="text-center"><CountUp target={1234} className="text-[var(--primary)]" /><p className="text-xs text-[var(--muted-foreground)] mt-1">Users</p></div>
      <div className="text-center"><CountUp target={99} suffix="%" /><p className="text-xs text-[var(--muted-foreground)] mt-1">Uptime</p></div>
    </div>
  );
}
