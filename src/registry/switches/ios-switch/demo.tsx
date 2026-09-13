"use client";
import { IOSSwitch } from "./component";

export function Demo() {
  return (
    <div className="flex items-center gap-4">
      <IOSSwitch />
      <span className="text-sm font-medium">Airplane Mode</span>
    </div>
  );
}