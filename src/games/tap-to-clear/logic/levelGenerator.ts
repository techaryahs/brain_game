import { Direction, Path, Position } from "../types";
import { solvePaths } from "./solver";

const getValidNeighbors = (
  pos: Position,
  validCells: boolean[][],
  occupiedCells: boolean[][]
): Position[] => {
  const neighbors: Position[] = [];
  const rows = validCells.length;
  const cols = validCells[0].length;

  const dirs = [
    { row: -1, col: 0 },
    { row: 1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
  ];

  for (const d of dirs) {
    const nr = pos.row + d.row;
    const nc = pos.col + d.col;
    if (
      nr >= 0 &&
      nr < rows &&
      nc >= 0 &&
      nc < cols &&
      validCells[nr][nc] &&
      !occupiedCells[nr][nc]
    ) {
      neighbors.push({ row: nr, col: nc });
    }
  }

  return neighbors;
};

const getDirectionFromSegments = (
  prev: Position,
  curr: Position
): Direction => {
  if (curr.row < prev.row) return "up";
  if (curr.row > prev.row) return "down";
  if (curr.col < prev.col) return "left";
  return "right";
};

export const generateLevel = (mask: string[]): { rows: number; cols: number; paths: Path[] } => {
  const rows = mask.length;
  const cols = mask[0].length;

  const validCells: boolean[][] = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c) => mask[r][c] !== " ")
  );

  let paths: Path[] = [];
  let occupiedCells: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  let pathIdCounter = 1;

  const fillSpace = () => {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (validCells[r][c] && !occupiedCells[r][c]) {
          // Try to start a path here
          const segments: Position[] = [{ row: r, col: c }];
          occupiedCells[r][c] = true;

          const targetLen = Math.floor(Math.random() * 6) + 2; // 2 to 7

          let curr = { row: r, col: c };
          for (let i = 1; i < targetLen; i++) {
            const neighbors = getValidNeighbors(curr, validCells, occupiedCells);
            if (neighbors.length === 0) break;

            const next = neighbors[Math.floor(Math.random() * neighbors.length)];
            segments.push(next);
            occupiedCells[next.row][next.col] = true;
            curr = next;
          }

          if (segments.length >= 2) {
            const direction = getDirectionFromSegments(
              segments[segments.length - 2],
              segments[segments.length - 1]
            );
            paths.push({
              id: `p-${pathIdCounter++}`,
              segments,
              direction,
              cleared: false,
            });
          } else {
            // Revert if length is 1, leave it as an empty gap for texture
            occupiedCells[r][c] = false;
          }
        }
      }
    }
  };

  const removeDeadlocks = () => {
    let result = solvePaths(paths, rows, cols);
    while (!result.solvable) {
      // Pick a random deadlocked path
      const stuckIds = result.remainingPathIds;
      if (stuckIds.length === 0) break; // Should not happen if not solvable

      const removeId = stuckIds[Math.floor(Math.random() * stuckIds.length)];
      
      // Remove it from paths
      const pathToRemove = paths.find((p) => p.id === removeId)!;
      paths = paths.filter((p) => p.id !== removeId);

      // Unoccupy its cells
      for (const seg of pathToRemove.segments) {
        occupiedCells[seg.row][seg.col] = false;
      }

      // Re-evaluate
      result = solvePaths(paths, rows, cols);
    }
  };

  // 3 iterations to pack it densely
  for (let iter = 0; iter < 3; iter++) {
    fillSpace();
    removeDeadlocks();
  }

  return { rows, cols, paths };
};
