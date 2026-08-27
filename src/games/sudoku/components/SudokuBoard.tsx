import SudokuCell from "@/games/sudoku/components/SudokuCell";
import type { CellPosition, SudokuBoard as SudokuGrid } from "@/games/sudoku/types";

type SudokuBoardProps = {
  board: SudokuGrid;
  initialBoard: SudokuGrid;
  selectedCell: CellPosition | null;
  hintTargetCell: CellPosition | null;
  invalidCells: CellPosition[];
  onSelectCell: (row: number, col: number) => void;
};

export default function SudokuBoard({
  board,
  initialBoard,
  selectedCell,
  hintTargetCell,
  invalidCells,
  onSelectCell,
}: SudokuBoardProps) {
  const invalidSet = new Set(
    invalidCells.map((cell) => `${cell.row}:${cell.col}`),
  );

  return (
    <div className="grid w-full max-w-[min(92vw,540px)] grid-cols-9 overflow-hidden border-2 border-slate-500 bg-white">
      {board.map((row, rowIndex) =>
        row.map((value, colIndex) => {
          const fixed = initialBoard[rowIndex][colIndex] !== 0;
          const selected =
            selectedCell !== null && selectedCell.row === rowIndex && selectedCell.col === colIndex;
          const hintTarget =
            hintTargetCell !== null &&
            hintTargetCell.row === rowIndex &&
            hintTargetCell.col === colIndex;
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
              hintTarget={hintTarget}
              related={related}
              invalid={invalid}
              onClick={() => onSelectCell(rowIndex, colIndex)}
              row={rowIndex}
              col={colIndex}
            />
          );
        }),
      )}
    </div>
  );
}
