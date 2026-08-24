"use client";

import { MathPuzzle } from "../types";
import MathCell from "./MathCell";

interface Props {
  puzzle: MathPuzzle;
  selectedNumber: number | null;
  incorrectCells: string[];
  onCellClick: (cellId: string) => void;
}

export default function MathGrid({
  puzzle,
  selectedNumber,
  incorrectCells,
  onCellClick,
}: Props) {
  const rows = Array.from({ length: puzzle.size }, (_, index) => index);

  const cols = Array.from({ length: puzzle.size }, (_, index) => index);

  return (
    <div
      className="w-full max-w-xl mx-auto grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${puzzle.size}, minmax(0, 1fr))`,
      }}
    >
      {rows.map((row) =>
        cols.map((col) => {
          const cell = puzzle.cells.find(
            (item) => item.row === row && item.col === col,
          );

          if (!cell) {
            return <div key={`${row}-${col}`} className="aspect-square" />;
          }

          return (
            <MathCell
              key={cell.id}
              cell={cell}
              selected={
                selectedNumber !== null && cell.value === selectedNumber
              }
              incorrect={incorrectCells.includes(cell.id)}
              onClick={() => onCellClick(cell.id)}
            />
          );
        }),
      )}
    </div>
  );
}
