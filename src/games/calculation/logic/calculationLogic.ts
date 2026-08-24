import { MathOperator } from "../types";

export function calculate(
  first: number,
  operator: MathOperator,
  second: number,
): number {
  switch (operator) {
    case "+":
      return first + second;

    case "-":
      return first - second;

    case "×":
      return first * second;

    case "÷":
      if (second === 0) {
        return NaN;
      }

      return first / second;

    default:
      return NaN;
  }
}

export function isValidCalculation(
  first: number,
  operator: MathOperator,
  second: number,
  result: number,
): boolean {
  const calculated = calculate(first, operator, second);

  return calculated === result;
}

export function getRandomOperator(): MathOperator {
  const operators: MathOperator[] = ["+", "-", "×", "÷"];

  return operators[Math.floor(Math.random() * operators.length)];
}

export function getScore(
  mistakes: number,
  hintsUsed: number,
  timeTaken: number,
): number {
  const baseScore = 1000;

  const mistakePenalty = mistakes * 100;

  const hintPenalty = hintsUsed * 150;

  const timePenalty = Math.floor(timeTaken / 10) * 5;

  return Math.max(100, baseScore - mistakePenalty - hintPenalty - timePenalty);
}
