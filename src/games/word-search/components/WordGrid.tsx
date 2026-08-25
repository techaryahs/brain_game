"use client";

import { useState } from "react";
import type { Position, WordSearchPuzzle } from "../types";
import { positionsBetween, samePositions } from "../logic/wordSearchLogic";

type WordGridProps = { puzzle: WordSearchPuzzle; foundWords: string[]; onWordFound: (word: string) => void };

export default function WordGrid({ puzzle, foundWords, onWordFound }: WordGridProps) {
	const [start, setStart] = useState<Position | null>(null);
	const [selection, setSelection] = useState<Position[]>([]);

	function selectCell(position: Position) {
		if (!start) { setStart(position); setSelection([position]); return; }
		const line = positionsBetween(start, position);
		setSelection(line);
		const match = puzzle.words.find((item) => {
			const expected = positionsBetween(item.start, item.end);
			return samePositions(line, expected) || samePositions(line, [...expected].reverse());
		});
		if (match && !foundWords.includes(match.word)) onWordFound(match.word);
		setStart(null);
		setSelection([]);
	}

	return (
		<div className="grid w-full max-w-[560px] grid-cols-10 gap-1 rounded-2xl border border-slate-200 bg-slate-100 p-2 shadow-inner sm:gap-2 sm:p-3">
			{puzzle.grid.map((row, rowIndex) => row.map((letter, colIndex) => {
				const position = { row: rowIndex, col: colIndex };
				const isSelected = selection.some((item) => samePositions([item], [position]));
				const isFound = foundWords.some((word) => {
					const item = puzzle.words.find((entry) => entry.word === word);
					return item ? positionsBetween(item.start, item.end).some((cell) => samePositions([cell], [position])) : false;
				});
				return <button key={`${rowIndex}-${colIndex}`} type="button" aria-label={`Row ${rowIndex + 1}, column ${colIndex + 1}, letter ${letter}`} onClick={() => selectCell(position)} className={`aspect-square rounded-lg text-sm font-bold transition sm:text-lg ${isFound ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/25" : isSelected ? "bg-orange-400 text-white" : "bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600"}`}>{letter}</button>;
			}))}
		</div>
	);
}
