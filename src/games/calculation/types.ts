export type MathOperator = "+" | "-" | "×" | "÷";

export type Difficulty = "easy" | "medium" | "hard";

export type CellType = "number" | "operator" | "equals" | "empty";

export interface MathCell {
  id: string;
  row: number;
  col: number;
  type: CellType;
  value: number | MathOperator | "=" | null;
  answer?: number;
  fixed?: boolean;
}

export interface Equation {
  id: string;
  cells: string[];
  operator: MathOperator;
  answer: number;
}

export interface MathPuzzle {
  id: string;
  difficulty: Difficulty;
  size: number;
  cells: MathCell[];
  equations: Equation[];
  numberBank: number[];
}

export interface PuzzleStats {
  score: number;
  mistakes: number;
  hintsUsed: number;
  timeTaken: number;
}

export interface PuzzleResult {
  completed: boolean;
  score: number;
  mistakes: number;
  hintsUsed: number;
  timeTaken: number;
}
