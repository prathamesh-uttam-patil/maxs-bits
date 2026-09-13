"use client";
import { NeonSwitch } from "./component";

export function Demo() {
  return (
    <div className="flex items-center gap-6">
      <NeonSwitch color="#a855f7" />
      <NeonSwitch color="#06b6d4" />
      <NeonSwitch color="#10b981" />
    </div>
  );
}