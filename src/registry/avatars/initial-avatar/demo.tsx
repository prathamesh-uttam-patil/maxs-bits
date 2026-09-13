"use client";
import { InitialAvatar } from "./component";
export function Demo() { return <div className="flex gap-2"><InitialAvatar name="John Doe" /><InitialAvatar name="Sarah Chen" /><InitialAvatar name="Max Bits" size={48} /></div>; }