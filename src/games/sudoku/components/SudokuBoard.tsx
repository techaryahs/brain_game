import SudokuCell from "@/games/sudoku/components/SudokuCell";
import type { CellPosition, SudokuBoard as SudokuGrid } from "@/games/sudoku/types";

type SudokuBoardProps = {
  board: SudokuGrid;
  initialBoard: SudokuGrid;
  selectedCell: CellPosition | null;
  invalidCells: CellPosition[];
  onSelectCell: (row: number, col: number) => void;
};

export default function SudokuBoard({
  board,
  initialBoard,
  selectedCell,
  invalidCells,
  onSelectCell,
}: SudokuBoardProps) {
  const invalidSet = new Set(
    invalidCells.map((cell) => `${cell.row}:${cell.col}`),
  );

  return (
    <div className="grid w-full max-w-[min(90vw,440px)] grid-cols-9 overflow-hidden rounded-2xl border-2 border-slate-700 bg-slate-950 shadow-2xl shadow-slate-950/30">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          const fixed = initialBoard[rowIndex][colIndex] !== 0;
          const selected =
            selectedCell !== null && selectedCell.row === rowIndex && selectedCell.col === colIndex;
          const related =
            selectedCell !== null &&
            (selectedCell.row === rowIndex ||
              selectedCell.col === colIndex ||
              (Math.floor(selectedCell.row / 3) === Math.floor(rowIndex / 3) &&
                Math.floor(selectedCell.col / 3) === Math.floor(colIndex / 3)));
          const invalid = invalidSet.has(`${rowIndex}:${colIndex}`);

          return (
            <SudokuCell
              key={`${rowIndex}-${colIndex}`}
              value={value}
              fixed={fixed}
              selected={selected}
              related={related}
              invalid={invalid}
              onClick={() => onSelectCell(rowIndex, colIndex)}
            />
          );
        }),
      )}
    </div>
  );
}
