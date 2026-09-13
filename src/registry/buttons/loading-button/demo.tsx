"use client";
import { useState } from "react";
import { LoadingButton } from "./component";
export function Demo() {
  const [loading, setLoading] = useState(false);
  const handleClick = () => { setLoading(true); setTimeout(() => setLoading(false), 2000); };
  return <LoadingButton loading={loading} onClick={handleClick}>Submit</LoadingButton>;
}