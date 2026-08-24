import { MathCell, MathOperator } from "../types";

import { isValidCalculation } from "./calculationLogic";

export function validateEquation(cells: MathCell[]): boolean {
  if (cells.length < 5) {
    return false;
  }

  const number1 = cells[0].value;
  const operator = cells[1].value;
  const number2 = cells[2].value;
  const equals = cells[3].value;
  const result = cells[4].value;

  if (
    typeof number1 !== "number" ||
    typeof number2 !== "number" ||
    typeof result !== "number"
  ) {
    return false;
  }

  if (
    operator !== "+" &&
    operator !== "-" &&
    operator !== "×" &&
    operator !== "÷"
  ) {
    return false;
  }

  if (equals !== "=") {
    return false;
  }

  return isValidCalculation(number1, operator as MathOperator, number2, result);
}

export function validateAllEquations(equations: MathCell[][]): boolean {
  return equations.every((equation) => validateEquation(equation));
}
