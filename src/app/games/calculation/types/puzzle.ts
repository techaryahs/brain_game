export type Operator = "+" | "-" | "×" | "÷" | "=";

export type CellType = "number" | "operator" | "equals" | "empty";

export type PuzzleCell = {
  id: string; // e.g., 'cell-0-2'
  row: number;
  col: number;
  type: CellType;
  value?: number | Operator;
  fixed?: boolean; // True if the number/operator is given and unchangeable
};

export type Equation = {
  id: string;
  direction: "horizontal" | "vertical";
  cells: string[]; // 5 IDs forming the equation (number, operator, number, equals, number)
};

export type DifficultyCategory = "basic" | "intermediate" | "hard";

export type Puzzle = {
  id: string;
  category: DifficultyCategory;
  level: number;
  
  rows: number;
  columns: number;
  
  cells: PuzzleCell[];
  equations: Equation[];

  tray: number[];

  title: string;
  difficulty: string;
};
