"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import NumberPad from "@/games/sudoku/components/NumberPad";
import SudokuGridBoard from "@/games/sudoku/components/SudokuBoard";
import { generateSudokuPuzzle } from "@/games/sudoku/logic/sudokuGenerator";
import { isBoardSolved, isMoveAllowed } from "@/games/sudoku/logic/sudokuLogic";
import { DIGITS, getCandidates } from "@/games/sudoku/logic/sudokuSolver";
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

type HintResult = {
  targetCell: CellPosition;
  message: string;
};

const getEditableCells = (puzzle: SudokuPuzzle): CellPosition[] =>
  puzzle.currentBoard.flatMap((row, rowIndex) =>
    row.flatMap((value, colIndex) =>
      value === 0 && puzzle.initialBoard[rowIndex][colIndex] === 0
        ? [{ row: rowIndex, col: colIndex }]
        : [],
    ),
  );

const findLogicalHint = (puzzle: SudokuPuzzle): HintResult | null => {
  const { currentBoard: board } = puzzle;
  const editableCells = getEditableCells(puzzle);
  const candidatesByCell = new Map(
    editableCells.map((cell) => [
      `${cell.row}:${cell.col}`,
      getCandidates(board, cell.row, cell.col),
    ]),
  );

  const nakedSingle = editableCells.find(
    (cell) => candidatesByCell.get(`${cell.row}:${cell.col}`)?.length === 1,
  );
  if (nakedSingle) {
    return {
      targetCell: nakedSingle,
      message: "This cell has only one valid candidate. Check the highlighted row, column, and block.",
    };
  }

  const findHiddenSingle = (
    unitCells: CellPosition[],
    message: string,
  ): HintResult | null => {
    const missingValues = DIGITS.filter(
      (value) => !unitCells.some((cell) => board[cell.row][cell.col] === value),
    );

    for (const value of missingValues) {
      const positions = unitCells.filter((cell) =>
        candidatesByCell.get(`${cell.row}:${cell.col}`)?.includes(value),
      );
      if (positions.length === 1) {
        return { targetCell: positions[0], message };
      }
    }
    return null;
  };

  for (let row = 0; row < 9; row += 1) {
    const result = findHiddenSingle(
      editableCells.filter((cell) => cell.row === row),
      "Only one number is missing from this row. Look at the highlighted row and block.",
    );
    if (result) return result;
  }

  for (let col = 0; col < 9; col += 1) {
    const result = findHiddenSingle(
      editableCells.filter((cell) => cell.col === col),
      "The highlighted column can only place one number in this position. Compare its row and block.",
    );
    if (result) return result;
  }

  for (let boxRow = 0; boxRow < 3; boxRow += 1) {
    for (let boxCol = 0; boxCol < 3; boxCol += 1) {
      const result = findHiddenSingle(
        editableCells.filter(
          (cell) =>
            Math.floor(cell.row / 3) === boxRow && Math.floor(cell.col / 3) === boxCol,
        ),
        "The highlighted block can place a missing number in only one position. Check the crossing row and column.",
      );
      if (result) return result;
    }
  }

  const mostConstrained = [...editableCells].sort(
    (first, second) =>
      (candidatesByCell.get(`${first.row}:${first.col}`)?.length ?? 9) -
      (candidatesByCell.get(`${second.row}:${second.col}`)?.length ?? 9),
  )[0];

  return mostConstrained
    ? {
        targetCell: mostConstrained,
        message: "This cell has the fewest options. Compare the highlighted row, column, and block.",
      }
    : null;
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
  const [hintTargetCell, setHintTargetCell] = useState<CellPosition | null>(null);
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
      setHintTargetCell(null);
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

  const handleSelectCell = useCallback((row: number, col: number) => {
    setSelectedCell({ row, col });
    setHintTargetCell(null);
    setFeedback(`Selected row ${row + 1}, column ${col + 1}.`);
  }, []);

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

    const hint = findLogicalHint(puzzle);
    if (!hint) {
      setFeedback("No editable cell is available for a hint.");
      return;
    }

    setSelectedCell(hint.targetCell);
    setHintTargetCell(hint.targetCell);
    setHintsUsed((previous) => previous + 1);
    setFeedback(hint.message);
  }, [isComplete, puzzle]);

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
      <main className="flex min-h-screen items-center justify-center bg-slate-100 p-6 text-slate-900">
        <div className="w-full max-w-md border border-slate-300 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Brain Game</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight">Sudoku</h1>
            <p className="mt-2 text-slate-500">Choose a difficulty to begin.</p>
          </div>

          <div className="grid gap-2">
            {(Object.keys(difficultyLabels) as SudokuDifficulty[]).map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => handleDifficultyChange(level)}
                className={`rounded-2xl border px-4 py-4 text-lg font-bold transition ${
                  difficulty === level
                    ? "border-sky-600 bg-sky-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-sky-500"
                }`}
              >
                {difficultyLabels[level]}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => startGame(difficulty)}
            className="mt-6 w-full bg-sky-600 px-5 py-4 text-lg font-bold text-white transition hover:bg-sky-500"
          >
            Start Game
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-6 text-slate-900 md:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-col gap-4 border-b border-slate-300 pb-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-sky-700">Sudoku</p>
            <h1 className="mt-2 text-2xl font-black md:text-3xl">{difficultyLabels[difficulty]}</h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-2 py-1 text-sm text-slate-500">
              Time <span className="font-bold text-slate-900">{formatTime(timeElapsed)}</span>
            </div>
            <div className="px-2 py-1 text-sm text-slate-500">
              Mistakes <span className="font-bold text-slate-900">{mistakes}</span>
            </div>
            <div className="px-2 py-1 text-sm text-slate-500">
              Hints <span className="font-bold text-slate-900">{hintsUsed}</span>
            </div>
          </div>
        </header>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,540px)_280px] lg:justify-center">
          <section>
            <SudokuGridBoard
              board={puzzle.currentBoard}
              initialBoard={puzzle.initialBoard}
              selectedCell={selectedCell}
              hintTargetCell={hintTargetCell}
              invalidCells={invalidCells}
              onSelectCell={handleSelectCell}
            />
          </section>

          <aside className="space-y-5">
            <div className="border-b border-slate-300 pb-4">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Status</p>
              <p
                className={`mt-2 text-base font-medium ${
                  feedback && !isComplete ? "text-sky-800" : "text-slate-700"
                }`}
              >
                {activeStatusText}
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Difficulty</div>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(difficultyLabels) as SudokuDifficulty[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => handleDifficultyChange(level)}
                    className={`rounded-xl px-3 py-2 text-sm font-bold transition ${
                      difficulty === level
                        ? "bg-sky-600 text-white"
                        : "border border-slate-300 bg-white text-slate-700 hover:border-sky-500"
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
                className="border border-sky-600 bg-sky-50 px-4 py-3 text-sm font-bold text-sky-800 transition hover:bg-sky-100"
              >
                Hint
              </button>
              <button
                type="button"
                onClick={() => startGame(difficulty)}
                className="border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-500"
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
                    setHintTargetCell(null);
                  }
                }}
                className="border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-500 sm:col-span-2"
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
