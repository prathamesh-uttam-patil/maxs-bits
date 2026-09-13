"use client";
import { PricingCard } from "./component";
export function Demo() { return <PricingCard plan="Pro" price="$12/mo" features={["Unlimited projects","Priority support","Custom themes"]} highlighted />; }