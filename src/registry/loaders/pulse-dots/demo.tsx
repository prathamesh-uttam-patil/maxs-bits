"use client";

import { PulseDots } from "./component";

export function Demo() {
  return (
    <div className="flex items-center gap-8">
      <PulseDots />
      <PulseDots color="#3b82f6" size={12} />
    </div>
  );
}
