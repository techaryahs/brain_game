"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import NumberPad from "@/games/sudoku/components/NumberPad";
import SudokuGridBoard from "@/games/sudoku/components/SudokuBoard";
import { generateSudokuPuzzle } from "@/games/sudoku/logic/sudokuGenerator";
import { isBoardSolved, isMoveAllowed } from "@/games/sudoku/logic/sudokuLogic";
import type {
  CellPosition,
  SudokuBoard as SudokuGrid,
  SudokuDifficulty,
  SudokuPuzzle,
} from "@/games/sudoku/types";

const difficultyLabels: Record<SudokuDifficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const cloneBoard = (board: SudokuGrid): SudokuGrid =>
  board.map((row) => [...row]);

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  return `${mins}:${secs}`;
};

export default function SudokuPage() {
  const [difficulty, setDifficulty] = useState<SudokuDifficulty>("easy");
  const [puzzle, setPuzzle] = useState<SudokuPuzzle | null>(null);
  const [selectedCell, setSelectedCell] = useState<CellPosition | null>(null);
  const [mistakes, setMistakes] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [invalidCells, setInvalidCells] = useState<CellPosition[]>([]);
  const [feedback, setFeedback] = useState<string>("Select a square to begin.");

  const startGame = useCallback(
    (nextDifficulty: SudokuDifficulty = difficulty) => {
      setDifficulty(nextDifficulty);
      const generated = generateSudokuPuzzle(nextDifficulty);

      setPuzzle(generated);
      setSelectedCell(null);
      setMistakes(0);
      setHintsUsed(0);
      setTimeElapsed(0);
      setIsComplete(false);
      setInvalidCells([]);
      setFeedback(`New ${difficultyLabels[nextDifficulty].toLowerCase()} puzzle ready.`);
      setIsStarted(true);
    },
    [difficulty],
  );

  const handleDifficultyChange = useCallback(
    (nextDifficulty: SudokuDifficulty) => {
      setDifficulty(nextDifficulty);

      if (isStarted) {
        startGame(nextDifficulty);
      }
    },
    [isStarted, startGame],
  );

  useEffect(() => {
    if (!isStarted || !puzzle || isComplete) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setTimeElapsed((previous) => previous + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isStarted, puzzle, isComplete]);

  useEffect(() => {
    if (!selectedCell || !puzzle || isComplete) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (/^[1-9]$/.test(event.key)) {
        event.preventDefault();
        applyValue(Number(event.key));
        return;
      }

      if (event.key === "Backspace" || event.key === "Delete" || event.key === "0") {
        event.preventDefault();
        clearSelectedCell();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCell, puzzle, isComplete]);

  const applyValue = useCallback(
    (value: number) => {
      if (!puzzle || !selectedCell || isComplete) {
        return;
      }

      const { row, col } = selectedCell;

      if (puzzle.initialBoard[row][col] !== 0) {
        setFeedback("That cell is fixed. Choose an empty square.");
        return;
      }

      if (puzzle.currentBoard[row][col] === value) {
        setFeedback("That value is already in the selected square.");
        return;
      }

      if (!isMoveAllowed(puzzle.currentBoard, value, row, col)) {
        setMistakes((previous) => previous + 1);
        setInvalidCells([{ row, col }]);
        setFeedback(`Invalid move: ${value} conflicts with the Sudoku rules.`);
        window.setTimeout(() => {
          setInvalidCells([]);
        }, 350);
        return;
      }

      const nextBoard = cloneBoard(puzzle.currentBoard);
      nextBoard[row][col] = value;

      const nextPuzzle = {
        ...puzzle,
        currentBoard: nextBoard,
      };

      setPuzzle(nextPuzzle);
      setInvalidCells([]);

      if (puzzle.solution[row][col] === value) {
        setFeedback("Correct move.");
      } else {
        setFeedback(`Not quite — ${value} is not the correct value for this cell.`);
      }

      if (isBoardSolved(nextBoard, puzzle.solution)) {
        setIsComplete(true);
        setFeedback("Puzzle solved!");
      }
    },
    [isComplete, puzzle, selectedCell],
  );

  const clearSelectedCell = useCallback(() => {
    if (!puzzle || !selectedCell || isComplete) {
      return;
    }

    const { row, col } = selectedCell;

    if (puzzle.initialBoard[row][col] !== 0) {
      setFeedback("That cell is fixed. Choose an empty square.");
      return;
    }

    const nextBoard = cloneBoard(puzzle.currentBoard);
    nextBoard[row][col] = 0;

    setPuzzle({
      ...puzzle,
      currentBoard: nextBoard,
    });
    setFeedback("Cell cleared.");
  }, [isComplete, puzzle, selectedCell]);

  const handleHint = useCallback(() => {
    if (!puzzle || isComplete) {
      return;
    }

    const targetCell =
      selectedCell ??
      (() => {
        for (let row = 0; row < 9; row += 1) {
          for (let col = 0; col < 9; col += 1) {
            if (puzzle.currentBoard[row][col] === 0) {
              return { row, col };
            }
          }
        }

        return null;
      })();

    if (!targetCell || puzzle.initialBoard[targetCell.row][targetCell.col] !== 0) {
      setFeedback("No editable cell is available for a hint.");
      return;
    }

    const nextBoard = cloneBoard(puzzle.currentBoard);
    nextBoard[targetCell.row][targetCell.col] = puzzle.solution[targetCell.row][targetCell.col];

    setPuzzle({
      ...puzzle,
      currentBoard: nextBoard,
    });
    setSelectedCell(targetCell);
    setHintsUsed((previous) => previous + 1);
    setFeedback(`Hint used: row ${targetCell.row + 1}, column ${targetCell.col + 1}.`);

    if (isBoardSolved(nextBoard, puzzle.solution)) {
      setIsComplete(true);
      setFeedback("Puzzle solved!");
    }
  }, [isComplete, puzzle, selectedCell]);

  const statusText = useMemo(() => {
    if (!puzzle) {
      return "Choose a difficulty and begin.";
    }

    if (isComplete) {
      return "Puzzle solved!";
    }

    return selectedCell
      ? `Selected row ${selectedCell.row + 1}, column ${selectedCell.col + 1}`
      : "Select a square to begin.";
  }, [isComplete, puzzle, selectedCell]);

  const activeStatusText = feedback && !isComplete ? feedback : statusText;

  if (!isStarted || !puzzle) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">
        <div className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/40 md:p-8">
          <div className="mb-8 text-center">
            <div className="mb-4 text-6xl">🧩</div>
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">Sudoku</h1>
            <p className="mt-3 text-slate-400">Logic, focus, and a sharp eye for patterns.</p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {(Object.keys(difficultyLabels) as SudokuDifficulty[]).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => handleDifficultyChange(level)}
                className={`rounded-2xl border px-4 py-4 text-lg font-bold transition ${
                  difficulty === level
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-slate-700 bg-slate-800 text-slate-200 hover:border-slate-500"
                }`}
              >
                {difficultyLabels[level]}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
              <div className="text-2xl">🧠</div>
              <div className="mt-2 text-sm text-slate-400">Logic</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
              <div className="text-2xl">⏱️</div>
              <div className="mt-2 text-sm text-slate-400">Timer</div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-center">
              <div className="text-2xl">🎯</div>
              <div className="mt-2 text-sm text-slate-400">Focus</div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => startGame(difficulty)}
            className="mt-8 w-full rounded-2xl bg-blue-600 px-5 py-4 text-lg font-bold text-white transition hover:bg-blue-500"
          >
            Start Game
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white md:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/90 p-4 shadow-xl shadow-slate-950/30 md:flex-row md:items-center md:justify-between md:p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Sudoku</p>
            <h1 className="mt-2 text-2xl font-black md:text-3xl">{difficultyLabels[difficulty]}</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300">
              Time: <span className="font-bold text-white">{formatTime(timeElapsed)}</span>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300">
              Mistakes: <span className="font-bold text-white">{mistakes}</span>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300">
              Hints: <span className="font-bold text-white">{hintsUsed}</span>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/90 p-3 md:p-5">
            <SudokuGridBoard
              board={puzzle.currentBoard}
              initialBoard={puzzle.initialBoard}
              selectedCell={selectedCell}
              invalidCells={invalidCells}
              onSelectCell={(row, col) => setSelectedCell({ row, col })}
            />
          </section>

          <aside className="space-y-4 rounded-3xl border border-slate-800 bg-slate-900/90 p-4 md:p-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Status</p>
              <p
                className={`mt-2 text-base font-medium ${
                  feedback && !isComplete ? "text-amber-200" : "text-slate-100"
                }`}
              >
                {activeStatusText}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Difficulty</div>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(difficultyLabels) as SudokuDifficulty[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => handleDifficultyChange(level)}
                    className={`rounded-xl px-3 py-2 text-sm font-bold transition ${
                      difficulty === level
                        ? "bg-blue-600 text-white"
                        : "border border-slate-700 bg-slate-950 text-slate-200 hover:border-slate-500"
                    }`}
                  >
                    {difficultyLabels[level]}
                  </button>
                ))}
              </div>
            </div>

            <NumberPad onValueSelect={applyValue} onClear={clearSelectedCell} />

            <div className="grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleHint}
                className="rounded-xl border border-blue-500 bg-blue-600/20 px-4 py-3 text-sm font-bold text-blue-100 transition hover:bg-blue-600/30"
              >
                Hint
              </button>
              <button
                type="button"
                onClick={() => startGame(difficulty)}
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-bold text-slate-100 transition hover:border-slate-500"
              >
                New Puzzle
              </button>
              <button
                type="button"
                onClick={() => {
                  if (puzzle) {
                    setPuzzle({
                      ...puzzle,
                      currentBoard: cloneBoard(puzzle.initialBoard),
                    });
                    setSelectedCell(null);
                    setMistakes(0);
                    setHintsUsed(0);
                    setTimeElapsed(0);
                    setIsComplete(false);
                  }
                }}
                className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm font-bold text-slate-100 transition hover:border-slate-500 sm:col-span-2"
              >
                Restart
              </button>
            </div>
          </aside>
        </div>
      </div>

      {isComplete && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-950/80 p-4">
          <div className="w-full max-w-md rounded-3xl border border-blue-500/40 bg-slate-900 p-6 text-center shadow-2xl shadow-slate-950/60">
            <div className="mb-4 text-5xl">✅</div>
            <h2 className="text-3xl font-black text-white">Puzzle Complete</h2>
            <p className="mt-2 text-slate-300">
              You solved the {difficultyLabels[difficulty].toLowerCase()} puzzle in {formatTime(timeElapsed)}.
            </p>
            <div className="mt-5 grid grid-cols-3 gap-3 text-left text-sm text-slate-300">
              <div className="rounded-xl bg-slate-950 p-3">
                <div className="text-slate-400">Time</div>
                <div className="mt-1 font-bold text-white">{formatTime(timeElapsed)}</div>
              </div>
              <div className="rounded-xl bg-slate-950 p-3">
                <div className="text-slate-400">Mistakes</div>
                <div className="mt-1 font-bold text-white">{mistakes}</div>
              </div>
              <div className="rounded-xl bg-slate-950 p-3">
                <div className="text-slate-400">Hints</div>
                <div className="mt-1 font-bold text-white">{hintsUsed}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => startGame(difficulty)}
              className="mt-6 w-full rounded-2xl bg-blue-600 px-5 py-3 text-lg font-bold text-white transition hover:bg-blue-500"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
