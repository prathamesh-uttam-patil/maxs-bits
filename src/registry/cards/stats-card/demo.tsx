"use client";
import { StatsCard } from "./component";
export function Demo() { return <div className="flex gap-3"><StatsCard label="Revenue" value="$12.4k" trend={12.5} /><StatsCard label="Users" value="1,234" trend={-3.2} icon="\uD83D\uDC65" /></div>; }