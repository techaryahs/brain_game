"use client";

import { useEffect, useState } from "react";

import MathGrid from "@/games/calculation/components/MathGrid";
import NumberBank from "@/games/calculation/components/NumberBank";
import PuzzleHeader from "@/games/calculation/components/PuzzleHeader";
import HintButton from "@/games/calculation/components/HintButton";
import PuzzleResult from "@/games/calculation/components/PuzzleResult";

import { Difficulty, MathPuzzle } from "@/games/calculation/types";

import { generatePuzzle } from "@/games/calculation/logic/puzzleGenerator";

import { getScore } from "@/games/calculation/logic/calculationLogic";

export default function CalculationPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>("easy");

  const [puzzle, setPuzzle] = useState<MathPuzzle | null>(null);

  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const [mistakes, setMistakes] = useState(0);

  const [hints, setHints] = useState(0);

  const [time, setTime] = useState(0);

  const [gameStarted, setGameStarted] = useState(false);

  const [completed, setCompleted] = useState(false);

  const [incorrectCells, setIncorrectCells] = useState<string[]>([]);

  function startGame() {
    const newPuzzle = generatePuzzle(difficulty);

    setPuzzle(newPuzzle);
    setSelectedNumber(null);
    setMistakes(0);
    setHints(0);
    setTime(0);
    setCompleted(false);
    setIncorrectCells([]);
    setGameStarted(true);
  }

  useEffect(() => {
    if (!gameStarted || completed) {
      return;
    }

    const timer = setInterval(() => {
      setTime((previous) => previous + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, completed]);

  function handleCellClick(cellId: string) {
    if (!puzzle || selectedNumber === null) {
      return;
    }

    const cell = puzzle.cells.find((item) => item.id === cellId);

    if (!cell || cell.fixed || cell.type !== "number") {
      return;
    }

    const updatedCells = puzzle.cells.map((item) => {
      if (item.id === cellId) {
        return {
          ...item,
          value: selectedNumber,
        };
      }

      return item;
    });

    setPuzzle({
      ...puzzle,
      cells: updatedCells,
    });

    setSelectedNumber(null);

    /*
      For this first version,
      check completion when all
      number cells are filled.
    */

    const numberCells = updatedCells.filter((item) => item.type === "number");

    const filled = numberCells.every((item) => typeof item.value === "number");

    if (filled) {
      setCompleted(true);
    }
  }

  function handleHint() {
    if (!puzzle) {
      return;
    }

    const emptyCell = puzzle.cells.find(
      (cell) => cell.type === "number" && !cell.fixed && cell.value === null,
    );

    if (!emptyCell) {
      return;
    }

    setHints((previous) => previous + 1);

    setPuzzle({
      ...puzzle,
      cells: puzzle.cells.map((cell) => {
        if (cell.id === emptyCell.id) {
          return {
            ...cell,
            value: cell.answer ?? puzzle.numberBank[0],
          };
        }

        return cell;
      }),
    });
  }

  function changeDifficulty(level: Difficulty) {
    setDifficulty(level);
  }

  if (!gameStarted) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
        <div className="w-full max-w-xl">
          <div className="text-center mb-10">
            <div className="text-7xl mb-5">🧮</div>

            <h1 className="text-4xl md:text-5xl font-black">Crossmath</h1>

            <p className="text-slate-400 mt-3">Relax. Think. Feel Sharper.</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7">
            <h2 className="text-xl font-bold mb-5">Choose Difficulty</h2>

            <div className="grid grid-cols-3 gap-3">
              {(["easy", "medium", "hard"] as Difficulty[]).map((level) => (
                <button
                  key={level}
                  onClick={() => changeDifficulty(level)}
                  className={`
                      py-4
                      rounded-xl
                      font-bold
                      capitalize
                      transition

                      ${
                        difficulty === level
                          ? "bg-blue-600 text-white"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }
                    `}
                >
                  {level}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl">🧠</div>
                <div className="text-sm text-slate-400 mt-2">Logic</div>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl">🔢</div>
                <div className="text-sm text-slate-400 mt-2">Math</div>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl">🎯</div>
                <div className="text-sm text-slate-400 mt-2">Focus</div>
              </div>
            </div>

            <button
              onClick={startGame}
              className="w-full mt-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-lg transition"
            >
              Start Puzzle
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (completed && puzzle) {
    const score = getScore(mistakes, hints, time);

    return (
      <PuzzleResult
        score={score}
        mistakes={mistakes}
        hints={hints}
        onPlayAgain={startGame}
      />
    );
  }

  if (!puzzle) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-black">Crossmath</h1>

          <p className="text-slate-400 mt-1">
            Fill the puzzle using the numbers
          </p>
        </div>

        <PuzzleHeader
          difficulty={difficulty}
          mistakes={mistakes}
          hints={hints}
          time={time}
        />

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-8">
          <MathGrid
            puzzle={puzzle}
            selectedNumber={selectedNumber}
            incorrectCells={incorrectCells}
            onCellClick={handleCellClick}
          />

          <NumberBank
            numbers={puzzle.numberBank}
            selectedNumber={selectedNumber}
            onSelect={setSelectedNumber}
          />

          <div className="flex justify-center mt-7">
            <HintButton disabled={hints >= 3} onClick={handleHint} />
          </div>
        </div>
      </div>
    </main>
  );
}
