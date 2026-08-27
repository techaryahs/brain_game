export type Direction = "up" | "down" | "left" | "right";

export interface Position {
  row: number;
  col: number;
}

export interface Path {
  id: string;
  segments: Position[]; // Ordered from start to end (arrow head is at the last segment)
  direction: Direction; // The direction the arrow points
  cleared: boolean;
  color?: string;
}

export interface Level {
  id: number;
  name: string;
  rows: number;
  cols: number;
  paths: Path[];
  lives: number;
  hints: number;
}

export interface GameState {
  currentLevel: number;
  paths: Path[];
  lives: number;
  hints: number;
  moves: number;
  completed: boolean;
  gameOver: boolean;
}
