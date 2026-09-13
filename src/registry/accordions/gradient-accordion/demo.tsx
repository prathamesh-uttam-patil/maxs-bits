"use client";
import { GradientAccordion } from "./component";
export function Demo() { return <GradientAccordion className="w-72" items={[{title:"Installation",content:"npm install maxs-bits"},{title:"Usage",content:"Import and use any component."},{title:"Themes",content:"Light and dark mode supported."}]} />; }