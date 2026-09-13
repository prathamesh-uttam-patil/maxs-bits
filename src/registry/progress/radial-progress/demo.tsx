"use client";
import { RadialProgress } from "./component";
export function Demo() { return <div className="flex gap-4"><RadialProgress value={75} /><RadialProgress value={42} size={60} /></div>; }