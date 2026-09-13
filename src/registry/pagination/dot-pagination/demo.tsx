"use client";
import { useState } from "react";
import { DotPagination } from "./component";
export function Demo() {
  const [p, setP] = useState(0);
  return <DotPagination total={5} current={p} onChange={setP} />;
}