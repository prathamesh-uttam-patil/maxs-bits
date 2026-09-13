"use client";
import { useState } from "react";
import { RemovableChip } from "./component";
export function Demo() {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Next.js"]);
  return <div className="flex flex-wrap gap-2">{tags.map(t => <RemovableChip key={t} label={t} onRemove={() => setTags(s => s.filter(x => x !== t))} />)}</div>;
}