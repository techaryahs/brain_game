import { Puzzle, Operator, DifficultyCategory } from "../types/puzzle";
import { generatePuzzleFromTemplate } from "../logic/puzzleGenerator";
import { STRUCTURE_TEMPLATES } from "./structures";

export function generateLevelPuzzles(category: DifficultyCategory, level: number): Puzzle[] {
  const templates = STRUCTURE_TEMPLATES.filter(t => t.category === category && t.level === level);

  const puzzles: Puzzle[] = [];

  let allowedOps: Operator[] = ["+"];
  let minNum = 1;
  let maxNum = 9;
  let numHoles = 2;

  if (category === "basic") {
    if (level === 1) { allowedOps = ["+"]; maxNum = 9; numHoles = 2; }
    else if (level === 2) { allowedOps = ["+"]; maxNum = 12; numHoles = 3; }
    else if (level === 3) { allowedOps = ["+", "-"]; maxNum = 12; numHoles = 3; }
    else if (level === 4) { allowedOps = ["+", "-"]; maxNum = 15; numHoles = 4; }
    else if (level === 5) { allowedOps = ["+", "-"]; maxNum = 15; numHoles = 5; }
    else if (level === 6) { allowedOps = ["+", "×"]; maxNum = 15; numHoles = 5; }
    else if (level === 7) { allowedOps = ["+", "×"]; maxNum = 20; numHoles = 6; }
    else if (level === 8) { allowedOps = ["+", "×"]; maxNum = 20; numHoles = 6; }
    else if (level === 9) { allowedOps = ["+", "-", "×"]; maxNum = 20; numHoles = 7; }
    else { allowedOps = ["+", "-", "×"]; maxNum = 25; numHoles = 7; }
  } else if (category === "intermediate") {
    if (level === 1) { allowedOps = ["+", "-", "×"]; maxNum = 20; numHoles = 6; }
    else if (level === 2) { allowedOps = ["+", "-", "×"]; maxNum = 30; numHoles = 7; }
    else if (level === 3) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 30; numHoles = 7; }
    else if (level === 4) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 35; numHoles = 8; }
    else if (level === 5) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 40; numHoles = 8; }
    else if (level === 6) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 50; numHoles = 9; }
    else if (level === 7) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 50; numHoles = 9; }
    else if (level === 8) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 60; numHoles = 10; }
    else if (level === 9) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 70; numHoles = 10; }
    else { allowedOps = ["+", "-", "×", "÷"]; maxNum = 75; numHoles = 11; }
  } else {
    // Hard
    if (level === 1) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 50; numHoles = 8; }
    else if (level === 2) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 70; numHoles = 9; }
    else if (level === 3) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 75; numHoles = 10; }
    else if (level === 4) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 80; numHoles = 11; }
    else if (level === 5) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 85; numHoles = 12; }
    else if (level === 6) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 90; numHoles = 13; }
    else if (level === 7) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 100; numHoles = 14; }
    else if (level === 8) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 120; numHoles = 15; }
    else if (level === 9) { allowedOps = ["+", "-", "×", "÷"]; maxNum = 150; numHoles = 16; }
    else { allowedOps = ["+", "-", "×", "÷"]; maxNum = 200; numHoles = 18; }
  }

  templates.forEach(template => {
    const puzzle = generatePuzzleFromTemplate(
      template,
      allowedOps,
      minNum,
      maxNum,
      numHoles
    );
    puzzles.push(puzzle);
  });

  while (puzzles.length < 10) {
    const template = templates[puzzles.length % templates.length] || STRUCTURE_TEMPLATES[0];
    const puzzle = generatePuzzleFromTemplate(
      template,
      allowedOps,
      minNum,
      maxNum,
      numHoles
    );
    puzzles.push(puzzle);
  }

  return puzzles;
}
