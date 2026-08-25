"use client";

import { Puzzle, PuzzleCell, CellType } from "../types/puzzle";

export type NumberTile = {
  id: string;
  value: number;
};

type PuzzleBoardProps = {
  puzzle: Puzzle;
  placed: Record<string, NumberTile>;
  selectedCellId: string | null;
  removingCellId: string | null;
  isError: boolean;
  isSuccess: boolean;
  onCellClick: (id: string) => void;
};

export default function PuzzleBoard({
  puzzle,
  placed,
  selectedCellId,
  removingCellId,
  isError,
  isSuccess,
  onCellClick,
}: PuzzleBoardProps) {
  
  return (
    <div
      className={`mx-auto w-full h-full flex flex-col justify-center items-center rounded-[32px] bg-transparent lg:bg-white transition-all duration-300
        ${isError ? "animate-shake ring-4 ring-red-500/20" : ""} 
        ${isSuccess ? "animate-success-pulse ring-4 ring-emerald-400/30" : ""}
      `}
      style={{ containerType: 'size' }}
    >
      <div 
        className="grid mx-auto"
        style={{ 
          '--gap': '4px',
          gap: 'var(--gap)',
          '--available-w': 'calc(100cqw - 16px)',
          '--available-h': 'calc(100cqh - 16px)',
          '--cell-w': `calc((var(--available-w) - (${puzzle.columns - 1} * var(--gap))) / ${puzzle.columns})`,
          '--cell-h': `calc((var(--available-h) - (${puzzle.rows - 1} * var(--gap))) / ${puzzle.rows})`,
          '--cell-size': `min(var(--cell-w), var(--cell-h))`,
          gridTemplateColumns: `repeat(${puzzle.columns}, var(--cell-size))`,
          gridTemplateRows: `repeat(${puzzle.rows}, var(--cell-size))`,
        } as React.CSSProperties}
      >
        {Array.from({ length: puzzle.rows }).map((_, row) =>
          Array.from({ length: puzzle.columns }).map((_, col) => {
            
            const cell = puzzle.cells.find(c => c.row === row && c.col === col);

            if (!cell || cell.type === "empty") {
              return (
                <div
                  key={`empty-${row}-${col}`}
                  className="w-full h-full"
                />
              );
            }

            const isNumber = cell.type === "number";
            const hasPlacedValue = isNumber && placed[cell.id] !== undefined;
            const value = isNumber 
              ? (cell.fixed ? cell.value : (hasPlacedValue ? placed[cell.id].value : null))
              : cell.value;

            const hasValue = value !== null && value !== undefined;
            const isSelected = selectedCellId === cell.id;
            const isRemoving = removingCellId === cell.id;

            let cellStyle = "border border-slate-400 bg-[#fffdf0] text-slate-800"; // default tile look
            
            if (isNumber) {
              if (cell.fixed) {
                cellStyle = "border border-slate-400 bg-[#fffdf0] text-slate-900";
              } else if (isSelected) {
                cellStyle = "border-2 border-blue-500 bg-blue-50 text-transparent shadow-inner z-10";
              } else if (hasValue) {
                cellStyle = "border border-slate-400 bg-[#fffdf0] text-slate-800 hover:bg-[#fef9de] cursor-pointer";
              } else {
                // empty editable
                cellStyle = "border border-slate-400 bg-white text-transparent hover:bg-slate-50 cursor-pointer";
              }
            } else {
              // operator or equals
              cellStyle = "border border-slate-400 bg-[#fffdf0] text-slate-700";
            }

            if (isNumber) {
              return (
                <button
                  key={cell.id}
                  disabled={cell.fixed}
                  onClick={() => onCellClick(cell.id)}
                  className={`
                    relative w-full h-full flex items-center justify-center 
                    font-black transition-colors duration-200
                    ${cellStyle}
                  `}
                  style={{ fontSize: 'calc(var(--cell-size) * 0.45)' }}
                >
                  {!cell.fixed && !hasValue && !isSelected ? (
                    <span className="text-slate-300 font-medium text-lg">?</span>
                  ) : null}

                  {hasValue && (
                    <span className={!cell.fixed && !isRemoving ? "animate-pop-in block" : isRemoving ? "animate-pop-out block" : ""}>
                      {value}
                    </span>
                  )}
                </button>
              );
            }

            return (
              <div
                key={cell.id}
                className={`
                  relative w-full h-full flex items-center justify-center 
                  font-black
                  ${cellStyle}
                `}
                style={{ fontSize: 'calc(var(--cell-size) * 0.45)' }}
              >
                {cell.value}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}