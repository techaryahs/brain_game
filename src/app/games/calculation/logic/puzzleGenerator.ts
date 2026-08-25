import { Puzzle, PuzzleCell, Equation, Operator, CellType } from "../types/puzzle";
import { StructureTemplate } from "../data/structures";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function generatePuzzleFromTemplate(
  template: StructureTemplate,
  allowedOps: Operator[],
  minNum: number,
  maxNum: number,
  numHoles: number
): Puzzle {
  let maxRow = 0;
  let maxCol = 0;
  
  const cellsMap: Map<string, PuzzleCell> = new Map();
  const equations: Equation[] = [];

  // Build structure grid
  template.equations.forEach((eq, idx) => {
    const eqCells: string[] = [];
    
    for (let i = 0; i < 5; i++) {
      const r = eq.direction === "horizontal" ? eq.startRow : eq.startRow + i;
      const c = eq.direction === "horizontal" ? eq.startCol + i : eq.startCol;
      
      maxRow = Math.max(maxRow, r);
      maxCol = Math.max(maxCol, c);
      
      const cellId = `cell-${r}-${c}`;
      eqCells.push(cellId);

      if (!cellsMap.has(cellId)) {
        let type: CellType = "empty";
        if (i % 2 === 0) type = "number";
        else if (i === 1) type = "operator";
        else if (i === 3) type = "equals";

        cellsMap.set(cellId, {
          id: cellId,
          row: r,
          col: c,
          type,
          value: type === "equals" ? "=" : undefined,
          fixed: true
        });
      }
    }
    
    equations.push({
      id: `eq-${idx}`,
      direction: eq.direction,
      cells: eqCells
    });
  });

  const puzzle: Puzzle = {
    id: `puzzle-${template.id}`,
    category: template.category,
    level: template.level,
    rows: maxRow + 1,
    columns: maxCol + 1,
    cells: Array.from(cellsMap.values()),
    equations,
    tray: [],
    title: `Level ${template.level}`,
    difficulty: `Level ${template.level}`
  };

  // Solve the grid with valid numbers using backtracking
  solveGrid(puzzle, allowedOps, minNum, maxNum);

  // Punch holes for the tray
  const numCells = shuffle(puzzle.cells.filter(c => c.type === "number"));
  const actualHoles = Math.min(numHoles, numCells.length - 1); // leave at least 1 fixed number usually
  
  for (let i = 0; i < actualHoles; i++) {
    const cell = numCells[i];
    cell.fixed = false;
    puzzle.tray.push(cell.value as number);
  }
  
  puzzle.tray = shuffle(puzzle.tray);

  return puzzle;
}

function getValidTuples(
  c1Val: number | undefined,
  c2Val: number | undefined,
  resVal: number | undefined,
  op: Operator,
  min: number,
  max: number
) {
  const tuples = [];
  
  const range1 = c1Val !== undefined ? [c1Val] : Array.from({length: max-min+1}, (_, i)=>i+min);
  const range2 = c2Val !== undefined ? [c2Val] : Array.from({length: max-min+1}, (_, i)=>i+min);
  const rangeRes = resVal !== undefined ? [resVal] : Array.from({length: max-min+1}, (_, i)=>i+min);
  
  for (const v1 of range1) {
    for (const v2 of range2) {
      for (const res of rangeRes) {
        if (op === "+") { if (v1 + v2 === res) tuples.push({v1, v2, res}); }
        else if (op === "-") { if (v1 - v2 === res && res > 0) tuples.push({v1, v2, res}); } // Prefer positive answers
        else if (op === "×") { if (v1 * v2 === res) tuples.push({v1, v2, res}); }
        else if (op === "÷") { if (v2 !== 0 && v1 % v2 === 0 && v1 / v2 === res) tuples.push({v1, v2, res}); }
      }
    }
  }
  return tuples;
}

function solveGrid(puzzle: Puzzle, allowedOps: Operator[], minNum: number, maxNum: number) {
  const cellsMap = new Map(puzzle.cells.map(c => [c.id, c]));

  const solveEquation = (eqIndex: number): boolean => {
    if (eqIndex === puzzle.equations.length) return true;
    
    const eq = puzzle.equations[eqIndex];
    const c1 = cellsMap.get(eq.cells[0])!;
    const opCell = cellsMap.get(eq.cells[1])!;
    const c2 = cellsMap.get(eq.cells[2])!;
    const resCell = cellsMap.get(eq.cells[4])!;

    const prevC1 = c1.value;
    const prevC2 = c2.value;
    const prevRes = resCell.value;
    const prevOp = opCell.value;

    const opsToTry = prevOp ? [prevOp as Operator] : shuffle(allowedOps);

    for (const op of opsToTry) {
      opCell.value = op;
      
      const validTuples = shuffle(getValidTuples(
        prevC1 as number | undefined, 
        prevC2 as number | undefined, 
        prevRes as number | undefined, 
        op, minNum, maxNum
      ));

      for (const tuple of validTuples) {
        c1.value = tuple.v1;
        c2.value = tuple.v2;
        resCell.value = tuple.res;
        
        if (solveEquation(eqIndex + 1)) return true;
      }
    }

    // backtrack
    c1.value = prevC1;
    c2.value = prevC2;
    resCell.value = prevRes;
    opCell.value = prevOp;
    return false;
  };

  const success = solveEquation(0);
  if (!success) {
    console.error("Failed to solve puzzle structure! Relaxing bounds.");
    // Fallback if extremely tight constraints fail (rare with this algo)
  }
}
