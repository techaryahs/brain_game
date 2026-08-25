export type Position = { row: number; col: number };

export type HiddenWord = {
	word: string;
	start: Position;
	end: Position;
};

export type WordSearchPuzzle = {
	grid: string[][];
	words: HiddenWord[];
};
