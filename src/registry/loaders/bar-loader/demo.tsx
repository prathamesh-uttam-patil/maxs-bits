"use client";

import { BarLoader } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <BarLoader />
      <BarLoader color="#ec4899" width={160} height={3} />
    </div>
  );
}
