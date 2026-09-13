"use client";
import { SkeletonAvatar } from "./component";
export function Demo() { return <div className="flex gap-3"><SkeletonAvatar /><SkeletonAvatar size={48} /><SkeletonAvatar size={56} /></div>; }