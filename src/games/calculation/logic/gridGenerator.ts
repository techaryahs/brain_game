import { MathCell, MathOperator } from "../types";

export function createCell(
  row: number,
  col: number,
  value: number | MathOperator | "=" | null,
  type: MathCell["type"],
  fixed = false,
): MathCell {
  return {
    id: `${row}-${col}`,
    row,
    col,
    value,
    type,
    fixed,
  };
}

export function createEmptyGrid(size: number): MathCell[] {
  const cells: MathCell[] = [];

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      cells.push(createCell(row, col, null, "empty"));
    }
  }

  return cells;
}

export function getCell(
  cells: MathCell[],
  row: number,
  col: number,
): MathCell | undefined {
  return cells.find((cell) => cell.row === row && cell.col === col);
}

export function updateCell(
  cells: MathCell[],
  row: number,
  col: number,
  value: number | null,
): MathCell[] {
  return cells.map((cell) => {
    if (cell.row === row && cell.col === col && !cell.fixed) {
      return {
        ...cell,
        value,
      };
    }

    return cell;
  });
}
