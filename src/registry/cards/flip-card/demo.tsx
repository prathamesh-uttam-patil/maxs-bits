"use client";
import { FlipCard } from "./component";
export function Demo() { return <FlipCard front={<div className="text-center"><div className="text-3xl mb-2">\uD83C\uDFB4</div><p className="text-sm font-bold">Hover me</p></div>} back={<div className="text-center"><div className="text-3xl mb-2">\u2728</div><p className="text-xs text-[var(--muted-foreground)]">The other side!</p></div>} />; }