"use client";
import { MultiAccordion } from "./component";
export function Demo() { return <MultiAccordion className="w-72" items={[{title:"Panel A",content:"Can open with others."},{title:"Panel B",content:"Multiple open at once!"},{title:"Panel C",content:"Independent toggling."}]} />; }