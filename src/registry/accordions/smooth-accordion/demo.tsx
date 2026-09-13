"use client";
import { SmoothAccordion } from "./component";
export function Demo() {
  return <SmoothAccordion className="w-72" items={[{title:"What is Max's Bits?",content:"A curated library of beautiful React components."},{title:"Is it free?",content:"Yes, 100% free and open source."},{title:"How to use?",content:"Just copy, paste, and customize."}]} />;
}