"use client";
import { SocialButton } from "./component";
export function Demo() {
  return <div className="flex flex-col gap-2"><SocialButton provider="google">Google</SocialButton><SocialButton provider="github">GitHub</SocialButton><SocialButton provider="twitter">Twitter</SocialButton></div>;
}