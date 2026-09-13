"use client";
import { StatusBadge } from "./component";
export function Demo() { return <div className="flex flex-wrap gap-2"><StatusBadge status="online" /><StatusBadge status="busy" /><StatusBadge status="away" /><StatusBadge status="offline" /></div>; }