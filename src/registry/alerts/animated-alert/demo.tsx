"use client";
import { AnimatedAlert } from "./component";
export function Demo() {
  return (
    <div className="flex flex-col gap-3 w-72">
      <AnimatedAlert variant="success">Changes saved!</AnimatedAlert>
      <AnimatedAlert variant="warning">Trial expires soon.</AnimatedAlert>
    </div>
  );
}