"use client";

import { OrbitLoader } from "./component";

export function Demo() {
  return (
    <div className="flex items-center gap-8">
      <OrbitLoader size={40} />
      <OrbitLoader size={50} color="#ec4899" />
    </div>
  );
}
