"use client";
import { HorizontalTimeline } from "./component";
export function Demo() { return <HorizontalTimeline items={[{label:"Design",date:"Q1"},{label:"Develop",date:"Q2"},{label:"Launch",date:"Q3"},{label:"Scale",date:"Q4"}]} activeIndex={2} />; }