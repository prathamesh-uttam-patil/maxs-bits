"use client";
import { useState } from "react";
import { NumberPagination } from "./component";
export function Demo() { const [p, setP] = useState(1); return <NumberPagination total={5} current={p} onChange={setP} />; }