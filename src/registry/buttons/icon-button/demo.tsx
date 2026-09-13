"use client";
import { IconButton } from "./component";
export function Demo() {
  return <div className="flex gap-2"><IconButton icon={"❤️"} label="Like" /><IconButton icon={"🔗"} label="Link" /><IconButton icon={"⭐"} label="Star" /></div>;
}