"use client";
import { BannerAlert } from "./component";
export function Demo() { return <div className="w-72 space-y-2"><BannerAlert message="New update available!" variant="info" /><BannerAlert message="Saved successfully." variant="success" /></div>; }