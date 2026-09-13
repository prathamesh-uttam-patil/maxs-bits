"use client";
import { ScrollToTop } from "./component";
export function Demo() { return <div className="text-center"><p className="text-sm text-[var(--muted-foreground)]">Scroll down to see the button appear</p><ScrollToTop threshold={50} /></div>; }