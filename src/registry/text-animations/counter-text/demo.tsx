"use client";
import { CounterText } from "./component";
export function Demo() { return <div className="flex gap-6"><CounterText target={1234} /><CounterText target={99} duration={1000} /></div>; }