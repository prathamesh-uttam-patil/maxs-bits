"use client";
import { AnimatedBreadcrumbs } from "./component";
export function Demo() {
  return <AnimatedBreadcrumbs items={[{label:"Home",href:"#"},{label:"Components",href:"#"},{label:"Breadcrumbs"}]} />;
}