"use client";

import { FloatingInput } from "./component";

export function Demo() {
  return (
    <div className="flex flex-col gap-4 w-72">
      <FloatingInput label="Email address" type="email" />
      <FloatingInput label="Password" type="password" />
    </div>
  );
}
