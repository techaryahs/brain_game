import type { Position } from "../types";

export function positionsBetween(start: Position, end: Position): Position[] {
	const rowDistance = Math.abs(end.row - start.row);
	const colDistance = Math.abs(end.col - start.col);
	if (rowDistance !== colDistance && rowDistance !== 0 && colDistance !== 0) return [];
	const length = Math.max(rowDistance, colDistance) + 1;
	return Array.from({ length }, (_, index) => ({
		row: start.row + Math.sign(end.row - start.row) * index,
		col: start.col + Math.sign(end.col - start.col) * index,
	}));
}

export function samePositions(first: Position[], second: Position[]): boolean {
	return first.length === second.length && first.every((position, index) => position.row === second[index].row && position.col === second[index].col);
}
