"use client";
import { useState } from "react";
import { FilterChip } from "./component";
export function Demo() {
  const [sel, setSel] = useState<string[]>(["React"]);
  const tags = ["React", "Vue", "Angular", "Svelte"];
  return <div className="flex flex-wrap gap-2">{tags.map(t => <FilterChip key={t} label={t} selected={sel.includes(t)} onClick={() => setSel(s => s.includes(t) ? s.filter(x => x !== t) : [...s, t])} />)}</div>;
}