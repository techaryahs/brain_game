import { MathPuzzle, MathCell } from "../types";

import { validateEquation } from "./equationValidator";

export function isPuzzleComplete(puzzle: MathPuzzle): boolean {
  const playableCells = puzzle.cells.filter(
    (cell) => cell.type === "number" && !cell.fixed,
  );

  return playableCells.every((cell) => typeof cell.value === "number");
}

export function solvePuzzle(puzzle: MathPuzzle): boolean {
  return puzzle.equations.every((equation) => {
    const cells: MathCell[] = equation.cells
      .map((id) => puzzle.cells.find((cell) => cell.id === id))
      .filter((cell): cell is MathCell => Boolean(cell));

    return validateEquation(cells);
  });
}

export function getIncorrectCells(puzzle: MathPuzzle): string[] {
  const incorrect: string[] = [];

  puzzle.equations.forEach((equation) => {
    const cells = equation.cells
      .map((id) => puzzle.cells.find((cell) => cell.id === id))
      .filter((cell): cell is MathCell => Boolean(cell));

    if (!validateEquation(cells)) {
      cells.forEach((cell) => {
        if (!cell.fixed) {
          incorrect.push(cell.id);
        }
      });
    }
  });

  return [...new Set(incorrect)];
}
