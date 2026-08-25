export type SudokuDifficulty = "easy" | "medium" | "hard";

export type SudokuBoard = number[][];

export type CellPosition = {
  row: number;
  col: number;
};

export type SudokuPuzzle = {
  difficulty: SudokuDifficulty;
  initialBoard: SudokuBoard;
  currentBoard: SudokuBoard;
  solution: SudokuBoard;
};
