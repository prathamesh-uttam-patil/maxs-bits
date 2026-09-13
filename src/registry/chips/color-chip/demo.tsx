"use client";
import { ColorChip } from "./component";
export function Demo() { return <div className="flex flex-wrap gap-2"><ColorChip label="Design" color="#8b5cf6" /><ColorChip label="Frontend" color="#3b82f6" /><ColorChip label="Backend" color="#10b981" /><ColorChip label="Bug" color="#ef4444" /></div>; }