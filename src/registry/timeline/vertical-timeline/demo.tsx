"use client";
import { VerticalTimeline } from "./component";
export function Demo() {
  return <VerticalTimeline className="w-64" items={[{title:"Project Started",description:"Initial commit",date:"Jan 2026"},{title:"v1.0 Released",description:"First stable release",date:"Mar 2026"},{title:"50 Components",description:"Major milestone!",date:"Sep 2026"}]} />;
}