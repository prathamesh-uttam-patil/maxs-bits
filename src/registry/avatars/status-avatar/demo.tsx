"use client";
import { StatusAvatar } from "./component";
export function Demo() {
  return (
    <div className="flex items-center gap-4">
      <StatusAvatar src="https://i.pravatar.cc/150?img=3" status="online" />
      <StatusAvatar src="https://i.pravatar.cc/150?img=8" status="busy" />
      <StatusAvatar src="https://i.pravatar.cc/150?img=12" status="offline" />
    </div>
  );
}
