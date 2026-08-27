"use client";

import { Path } from "../types";
import { useEffect, useRef } from "react";

interface PathPieceProps {
  path: Path;
  isClearing?: boolean;
  onTap: (path: Path) => void;
}

export default function PathPiece({ path, isClearing, onTap }: PathPieceProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const pathRenderRef = useRef<SVGPathElement>(null);
  const arrowGroupRef = useRef<SVGGElement>(null);
  const reqRef = useRef<number>();

  const points = path.segments.map((seg) => ({
    x: seg.col + 0.5,
    y: seg.row + 0.5,
  }));

  let d = "";
  if (points.length > 0) {
    d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      d += ` L ${points[i].x} ${points[i].y}`;
    }
  }

  const L = Math.max(1, points.length - 1);
  const lastPoint = points[points.length - 1];
  const extensionDist = 30; 
  let extX = lastPoint.x;
  let extY = lastPoint.y;
  let defaultRotation = 0;
  
  switch (path.direction) {
    case "up": defaultRotation = 270; extY -= extensionDist; break;
    case "down": defaultRotation = 90; extY += extensionDist; break;
    case "left": defaultRotation = 180; extX -= extensionDist; break;
    case "right": defaultRotation = 0; extX += extensionDist; break;
  }

  const extendedD = d + ` L ${extX} ${extY}`;

  useEffect(() => {
    if (isClearing && pathRef.current && arrowGroupRef.current && pathRenderRef.current) {
      const startTime = performance.now();
      const durSeconds = 0.5 + L * 0.25;
      const speed = L / durSeconds; 
      const totalUnits = L + extensionDist;
      const totalDurMs = (totalUnits / speed) * 1000;

      const baseElement = pathRef.current;

      const animate = (time: number) => {
        const elapsed = time - startTime;
        let p = elapsed / totalDurMs;
        if (p > 1) p = 1;
        
        const distance = p * totalUnits;
        
        if (pathRenderRef.current) {
          pathRenderRef.current.style.strokeDashoffset = `-${distance}`;
        }

        if (arrowGroupRef.current && baseElement) {
          let arrowPos = distance + L;
          if (arrowPos > totalUnits) arrowPos = totalUnits;
          
          try {
            const pt = baseElement.getPointAtLength(arrowPos);
            
            const p1 = baseElement.getPointAtLength(Math.max(0, arrowPos - 0.05));
            const p2 = baseElement.getPointAtLength(Math.min(totalUnits, arrowPos + 0.05));
            let angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);
            
            arrowGroupRef.current.setAttribute("transform", `translate(${pt.x}, ${pt.y}) rotate(${angle})`);
          } catch (e) {}
        }

        if (p < 1) {
          reqRef.current = requestAnimationFrame(animate);
        }
      };
      reqRef.current = requestAnimationFrame(animate);

      return () => {
        if (reqRef.current) cancelAnimationFrame(reqRef.current);
      };
    }
  }, [isClearing, L, extensionDist]);

  return (
    <g
      id={`path-${path.id}`}
      className={`cursor-pointer ${isClearing ? 'pointer-events-none' : ''}`}
      onClick={() => onTap(path)}
    >
      <path
        ref={pathRef}
        d={extendedD}
        fill="none"
        stroke="none"
      />
      
      <path
        d={d}
        fill="none"
        stroke="transparent"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      <path
        ref={pathRenderRef}
        d={extendedD}
        fill="none"
        stroke="#5D4037"
        strokeWidth="0.04"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: `${L} 1000`,
          strokeDashoffset: 0
        }}
      />
      
      <g 
        ref={arrowGroupRef}
        transform={`translate(${lastPoint.x}, ${lastPoint.y}) rotate(${defaultRotation})`}
      >
        <path
          d="M -0.1 -0.1 L 0.04 0 L -0.1 0.1"
          fill="none"
          stroke="#5D4037"
          strokeWidth="0.04"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  );
}
