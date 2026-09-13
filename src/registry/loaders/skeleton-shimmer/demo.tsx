"use client";
import { SkeletonShimmer } from "./component";
export function Demo() { return <div className="space-y-2 w-48"><SkeletonShimmer height="0.75rem" width="60%" /><SkeletonShimmer height="0.75rem" /><SkeletonShimmer height="0.75rem" width="80%" /></div>; }