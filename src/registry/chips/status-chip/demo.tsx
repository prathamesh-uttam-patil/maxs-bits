"use client";
import { StatusChip } from "./component";
export function Demo() { return <div className="flex flex-wrap gap-2"><StatusChip status="success" label="Deployed" /><StatusChip status="error" label="Failed" /><StatusChip status="warning" label="Pending" /><StatusChip status="info" label="Info" /></div>; }