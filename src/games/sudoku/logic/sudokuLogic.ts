import type { SudokuBoard, SudokuPuzzle } from "@/games/sudoku/types";

import { EMPTY_CELL, isPlacementValid } from "@/games/sudoku/logic/sudokuSolver";

export function isMoveAllowed(
  board: SudokuBoard,
  value: number,
  row: number,
  col: number,
): boolean {
  if (value === EMPTY_CELL) {
    return true;
  }

  return isPlacementValid(board, value, row, col);
}

export function isBoardSolved(board: SudokuBoard, solution: SudokuBoard): boolean {
  return board.every((row, rowIndex) =>
    row.every((value, colIndex) => value !== EMPTY_CELL && value === solution[rowIndex][colIndex]),
  );
}

export function isBoardComplete(board: SudokuBoard): boolean {
  return board.every((row) => row.every((value) => value !== EMPTY_CELL));
}

export function validatePuzzleConsistency(puzzle: SudokuPuzzle): boolean {
  if (puzzle.initialBoard.length !== 9 || puzzle.solution.length !== 9) {
    return false;
  }

  for (let row = 0; row < 9; row += 1) {
    if (puzzle.initialBoard[row].length !== 9 || puzzle.solution[row].length !== 9) {
      return false;
    }

    for (let col = 0; col < 9; col += 1) {
      const startingValue = puzzle.initialBoard[row][col];
      const solutionValue = puzzle.solution[row][col];

      if (startingValue !== 0 && startingValue !== solutionValue) {
        return false;
      }

      if (solutionValue === 0 || !isPlacementValid(puzzle.solution, solutionValue, row, col)) {
        return false;
      }
    }
  }

  return true;
}

export function isCorrectCellValue(puzzle: SudokuPuzzle, row: number, col: number, value: number): boolean {
  return puzzle.solution[row][col] === value;
}
