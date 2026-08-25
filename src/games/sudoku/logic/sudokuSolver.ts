import type { CellPosition, SudokuBoard } from "@/games/sudoku/types";

export const EMPTY_CELL = 0;
export const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

export function findEmptyCell(board: SudokuBoard): CellPosition | null {
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      if (board[row][col] === EMPTY_CELL) {
        return { row, col };
      }
    }
  }

  return null;
}

export function isPlacementValid(
  board: SudokuBoard,
  value: number,
  row: number,
  col: number,
): boolean {
  if (value === EMPTY_CELL) {
    return true;
  }

  for (let index = 0; index < 9; index += 1) {
    if (index !== col && board[row][index] === value) {
      return false;
    }

    if (index !== row && board[index][col] === value) {
      return false;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;

  for (let rowIndex = startRow; rowIndex < startRow + 3; rowIndex += 1) {
    for (let colIndex = startCol; colIndex < startCol + 3; colIndex += 1) {
      if ((rowIndex !== row || colIndex !== col) && board[rowIndex][colIndex] === value) {
        return false;
      }
    }
  }

  return true;
}

export function getCandidates(board: SudokuBoard, row: number, col: number): number[] {
  return DIGITS.filter((value) => isPlacementValid(board, value, row, col));
}

export function solveBoard(board: SudokuBoard): boolean {
  const emptyCell = findEmptyCell(board);

  if (!emptyCell) {
    return true;
  }

  for (const value of shuffle([...DIGITS])) {
    if (!isPlacementValid(board, value, emptyCell.row, emptyCell.col)) {
      continue;
    }

    board[emptyCell.row][emptyCell.col] = value;

    if (solveBoard(board)) {
      return true;
    }

    board[emptyCell.row][emptyCell.col] = EMPTY_CELL;
  }

  return false;
}
