import type { SudokuBoard, SudokuDifficulty, SudokuPuzzle } from "@/games/sudoku/types";

import { DIGITS, EMPTY_CELL, solveBoard } from "@/games/sudoku/logic/sudokuSolver";
import { validatePuzzleConsistency } from "@/games/sudoku/logic/sudokuLogic";

const CLUES_BY_DIFFICULTY: Record<SudokuDifficulty, number> = {
  easy: 45,
  medium: 36,
  hard: 27,
};

function cloneBoard(board: SudokuBoard): SudokuBoard {
  return board.map((row) => [...row]);
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function fillDiagonalBoxes(board: SudokuBoard): void {
  const diagonalIndices = [0, 3, 6];

  for (const startIndex of diagonalIndices) {
    const values = shuffle([...DIGITS]);
    let valueIndex = 0;

    for (let row = 0; row < 3; row += 1) {
      for (let col = 0; col < 3; col += 1) {
        board[startIndex + row][startIndex + col] = values[valueIndex];
        valueIndex += 1;
      }
    }
  }
}

function createSolvedBoard(): SudokuBoard {
  const board: SudokuBoard = Array.from({ length: 9 }, () => Array(9).fill(EMPTY_CELL));

  fillDiagonalBoxes(board);

  if (!solveBoard(board)) {
    throw new Error("Could not generate a valid Sudoku board.");
  }

  return board;
}

export function generateSudokuPuzzle(difficulty: SudokuDifficulty): SudokuPuzzle {
  const solution = createSolvedBoard();
  const initialBoard = cloneBoard(solution);
  const cellsToRemove = 81 - CLUES_BY_DIFFICULTY[difficulty];
  const positions = shuffle(Array.from({ length: 81 }, (_, index) => index));

  for (let index = 0; index < cellsToRemove; index += 1) {
    const position = positions[index];
    const row = Math.floor(position / 9);
    const col = position % 9;
    initialBoard[row][col] = EMPTY_CELL;
  }

  const generatedPuzzle = {
    difficulty,
    initialBoard,
    currentBoard: cloneBoard(initialBoard),
    solution,
  };

  if (!validatePuzzleConsistency(generatedPuzzle)) {
    throw new Error(`Generated ${difficulty} puzzle is inconsistent with its solution.`);
  }

  return generatedPuzzle;
}
