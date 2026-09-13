"use client";
import { StepsProgress } from "./component";
export function Demo() { return <StepsProgress steps={["Cart","Shipping","Payment","Done"]} current={2} />; }