"use client";
import { CircularProgress } from "./component";
export function Demo() { return <div className="flex gap-6"><CircularProgress value={75} /><CircularProgress value={42} size={60} strokeWidth={4} /></div>; }