import { Difficulty, MathPuzzle, MathCell } from "../types";

import { createCell } from "./gridGenerator";

function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

function generateEquation(difficulty: Difficulty) {
  let max = 10;

  if (difficulty === "medium") {
    max = 20;
  }

  if (difficulty === "hard") {
    max = 50;
  }

  const operators = ["+", "-", "×"] as const;

  const operator = operators[randomNumber(0, operators.length - 1)];

  let first = randomNumber(1, max);
  let second = randomNumber(1, max);

  if (operator === "-" && second > first) {
    [first, second] = [second, first];
  }

  let answer = 0;

  if (operator === "+") {
    answer = first + second;
  }

  if (operator === "-") {
    answer = first - second;
  }

  if (operator === "×") {
    first = randomNumber(1, difficulty === "hard" ? 15 : 10);

    second = randomNumber(1, difficulty === "hard" ? 15 : 10);

    answer = first * second;
  }

  return {
    first,
    second,
    operator,
    answer,
  };
}

export function generatePuzzle(difficulty: Difficulty = "easy"): MathPuzzle {
  const size = 7;

  const cells: MathCell[] = [];

  const equations = [];

  /*
    Horizontal equations:

    N O N = N
    N O N = N
    N O N = N
  */

  const rows = [1, 3, 5];

  rows.forEach((row, index) => {
    const equation = generateEquation(difficulty);

    const ids = [`${row}-1`, `${row}-2`, `${row}-3`, `${row}-4`, `${row}-5`];

    cells.push(createCell(row, 1, null, "number"));

    cells.push(createCell(row, 2, equation.operator, "operator", true));

    cells.push(createCell(row, 3, null, "number"));

    cells.push(createCell(row, 4, "=", "equals", true));

    cells.push(createCell(row, 5, null, "number"));

    equations.push({
      id: `equation-${index}`,
      cells: ids,
      operator: equation.operator,
      answer: equation.answer,
    });
  });

  /*
    Give players all numbers needed
    to solve the puzzle.
  */

  const numberBank = shuffle(
    cells
      .filter((cell) => cell.type === "number")
      .map((cell) => {
        const equationIndex = rows.indexOf(cell.row);

        const equation = equations[equationIndex];

        if (cell.col === 1) {
          return generateEquation(difficulty).first;
        }

        if (cell.col === 3) {
          return generateEquation(difficulty).second;
        }

        return equation.answer;
      }),
  );

  /*
    Rebuild numbers correctly
    based on equations.
  */

  const correctNumbers: number[] = [];

  equations.forEach((equation) => {
    const generated = generateEquation(difficulty);

    correctNumbers.push(generated.first, generated.second, generated.answer);
  });

  return {
    id: `math-${Date.now()}`,
    difficulty,
    size,
    cells,
    equations,
    numberBank: shuffle(correctNumbers),
  };
}
