"use client";

import { Path } from "../types";
import PathPiece from "./PathPiece";

interface GameBoardProps {
  rows: number;
  cols: number;
  paths: Path[];
  clearingPathIds: string[];
  onPathTap: (path: Path) => void;
}

export default function GameBoard({
  rows,
  cols,
  paths,
  clearingPathIds,
  onPathTap,
}: GameBoardProps) {
  return (
    <div className="flex w-full flex-grow items-center justify-center p-2">
      <div 
        className="relative w-full max-w-[85vh] aspect-square flex items-center justify-center"
        style={{ aspectRatio: `${cols} / ${rows}` }}
      >
        <svg
          viewBox={`0 0 ${cols} ${rows}`}
          className="w-full h-full drop-shadow-[0_8px_16px_rgba(93,64,55,0.15)]"
          style={{ overflow: "visible" }}
        >
          {paths.filter(p => !p.cleared || clearingPathIds.includes(p.id)).map((path) => (
            <PathPiece
              key={path.id}
              path={path}
              isClearing={clearingPathIds.includes(path.id)}
              onTap={() => onPathTap(path)}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}
