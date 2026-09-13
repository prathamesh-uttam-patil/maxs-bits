"use client";
import { SpinnerLoader } from "./component";
export function Demo() { return <div className="flex gap-6 items-center"><SpinnerLoader /><SpinnerLoader size={24} color="#ec4899" /><SpinnerLoader size={40} color="#3b82f6" /></div>; }