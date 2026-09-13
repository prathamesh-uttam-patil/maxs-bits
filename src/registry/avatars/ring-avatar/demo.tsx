"use client";
import { RingAvatar } from "./component";
export function Demo() {
  return (
    <div className="flex items-center gap-4">
      <RingAvatar src="https://i.pravatar.cc/150?img=1" size={48} />
      <RingAvatar src="https://i.pravatar.cc/150?img=5" size={56} />
    </div>
  );
}
