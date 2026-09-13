"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

export function TrailCursor({ children, color = "#8b5cf6", className }: { children: React.ReactNode; color?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [dots, setDots] = useState<{x:number;y:number}[]>(Array(6).fill({x:0,y:0}));
  const mouse = useRef({x:0,y:0});
  const dotsRef = useRef(dots); dotsRef.current = dots;
  const frameRef = useRef(0);
  const handleMove = useCallback((e: React.MouseEvent) => { if (!ref.current) return; const r = ref.current.getBoundingClientRect(); mouse.current = {x:e.clientX-r.left, y:e.clientY-r.top}; }, []);
  useEffect(() => {
    const go = () => { const nd = [...dotsRef.current]; nd[0] = mouse.current;
      for (let i=1;i<6;i++) nd[i]={x:nd[i].x+(nd[i-1].x-nd[i].x)*0.35, y:nd[i].y+(nd[i-1].y-nd[i].y)*0.35};
      setDots(nd); frameRef.current = requestAnimationFrame(go); };
    frameRef.current = requestAnimationFrame(go); return () => cancelAnimationFrame(frameRef.current);
  }, []);
  return (
    <div ref={ref} className={cn("relative overflow-hidden cursor-none", className)} onMouseMove={handleMove}>
      {dots.map((d,i) => <div key={i} className="absolute rounded-full pointer-events-none" style={{left:d.x,top:d.y,width:8-i,height:8-i,backgroundColor:color,opacity:1-i/6,transform:"translate(-50%,-50%)"}} />)}
      <div className="relative z-10">{children}</div>
    </div>
  );
}