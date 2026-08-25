import type { HiddenWord, Position, WordSearchPuzzle } from "../types";

const SIZE = 10;
const FILLERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const placements: Array<[string, Position, Position]> = [
	["BRAIN", { row: 0, col: 0 }, { row: 0, col: 4 }],
	["FOCUS", { row: 2, col: 8 }, { row: 6, col: 8 }],
	["LOGIC", { row: 9, col: 0 }, { row: 5, col: 4 }],
	["MEMORY", { row: 1, col: 1 }, { row: 6, col: 6 }],
	["PUZZLE", { row: 3, col: 0 }, { row: 3, col: 5 }],
	["THINK", { row: 9, col: 9 }, { row: 5, col: 5 }],
	["SPEED", { row: 7, col: 0 }, { row: 7, col: 4 }],
];

function makeLine(start: Position, end: Position): Position[] {
	const rowStep = Math.sign(end.row - start.row);
	const colStep = Math.sign(end.col - start.col);
	const length = Math.max(Math.abs(end.row - start.row), Math.abs(end.col - start.col)) + 1;
	return Array.from({ length }, (_, index) => ({ row: start.row + rowStep * index, col: start.col + colStep * index }));
}

export function createPuzzle(): WordSearchPuzzle {
	const grid = Array.from({ length: SIZE }, () => Array.from({ length: SIZE }, () => ""));
	const words: HiddenWord[] = [];
	placements.forEach(([word, start, end]) => {
		makeLine(start, end).forEach((position, index) => { grid[position.row][position.col] = word[index]; });
		words.push({ word, start, end });
	});
	let fillerIndex = 0;
	grid.forEach((row) => row.forEach((letter, col) => {
		if (!letter) { row[col] = FILLERS[fillerIndex % FILLERS.length]; fillerIndex += 7; }
	}));
	return { grid, words };
}
