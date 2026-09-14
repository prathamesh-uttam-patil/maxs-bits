"use client";

import { ToggleBookmarkStarCollection } from "./component";

export function Demo() {
  return (
    <div className="w-full max-w-md mx-auto p-4 flex flex-col items-center justify-center min-h-[140px]">
      <ToggleBookmarkStarCollection className="w-full" />
    </div>
  );
}
