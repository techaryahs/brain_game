import { Direction, Position, Path } from "../types";

export const getDirectionOffset = (direction: Direction): Position => {
  switch (direction) {
    case "up":
      return { row: -1, col: 0 };
    case "down":
      return { row: 1, col: 0 };
    case "left":
      return { row: 0, col: -1 };
    case "right":
      return { row: 0, col: 1 };
    default:
      return { row: 0, col: 0 };
  }
};

export const getNextPosition = (
  position: Position,
  direction: Direction,
): Position => {
  const offset = getDirectionOffset(direction);
  return {
    row: position.row + offset.row,
    col: position.col + offset.col,
  };
};

export const isInsideBoard = (
  position: Position,
  rows: number,
  cols: number,
): boolean => {
  return (
    position.row >= 0 &&
    position.row < rows &&
    position.col >= 0 &&
    position.col < cols
  );
};

export const getPathAtPosition = (
  paths: Path[],
  position: Position,
): Path | undefined => {
  return paths.find(
    (path) =>
      !path.cleared &&
      path.segments.some(
        (segment) =>
          segment.row === position.row && segment.col === position.col,
      ),
  );
};

export const canPathClear = (
  path: Path,
  paths: Path[],
  rows: number,
  cols: number,
): boolean => {
  if (path.segments.length === 0) return true;

  const head = path.segments[path.segments.length - 1];
  const nextPosition = getNextPosition(head, path.direction);

  // If the arrow points outside the board, it can clear
  if (!isInsideBoard(nextPosition, rows, cols)) {
    return true;
  }

  // If the next position is occupied by ANY segment of ANY OTHER uncleared path, it's blocked.
  // Note: we must also check that the blocking path isn't the path itself (e.g. self-intersecting U-turn), 
  // though paths shouldn't self-intersect in this game design usually.
  const blockingPath = paths.find(
    (p) =>
      !p.cleared &&
      p.id !== path.id &&
      p.segments.some(
        (segment) =>
          segment.row === nextPosition.row && segment.col === nextPosition.col,
      ),
  );

  return !blockingPath;
};

export const clearPath = (paths: Path[], pathId: string): Path[] => {
  return paths.map((path) =>
    path.id === pathId
      ? {
          ...path,
          cleared: true,
        }
      : path,
  );
};

export const getRemainingPaths = (paths: Path[]): Path[] => {
  return paths.filter((path) => !path.cleared);
};

export const isLevelComplete = (paths: Path[]): boolean => {
  return paths.every((path) => path.cleared);
};

export const isGameOver = (lives: number): boolean => {
  return lives <= 0;
};

export const findFirstClearablePath = (
  paths: Path[],
  rows: number,
  cols: number,
): Path | undefined => {
  return paths.find(
    (path) => !path.cleared && canPathClear(path, paths, rows, cols),
  );
};

export const getClearablePaths = (
  paths: Path[],
  rows: number,
  cols: number,
): Path[] => {
  return paths.filter(
    (path) => !path.cleared && canPathClear(path, paths, rows, cols),
  );
};
