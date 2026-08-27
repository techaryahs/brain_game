import { Path } from "../types";
import { canPathClear } from "./gameLogic";

/**
 * Simulates clearing the board.
 * Returns { solvable: true } if all paths can be cleared.
 * Returns { solvable: false, remainingPathIds: string[] } if deadlocked.
 */
export const solvePaths = (
  paths: Path[],
  rows: number,
  cols: number
): { solvable: boolean; remainingPathIds: string[] } => {
  let currentPaths = paths.map(p => ({ ...p, cleared: false }));
  
  let madeProgress = true;
  
  while (madeProgress) {
    madeProgress = false;
    
    // Find all paths that can clear in the current state
    const clearableIds: string[] = [];
    
    for (const path of currentPaths) {
      if (!path.cleared && canPathClear(path, currentPaths, rows, cols)) {
        clearableIds.push(path.id);
      }
    }
    
    if (clearableIds.length > 0) {
      madeProgress = true;
      // Mark them as cleared
      currentPaths = currentPaths.map(p => 
        clearableIds.includes(p.id) ? { ...p, cleared: true } : p
      );
    }
  }
  
  const remainingPaths = currentPaths.filter(p => !p.cleared);
  
  return {
    solvable: remainingPaths.length === 0,
    remainingPathIds: remainingPaths.map(p => p.id)
  };
};
