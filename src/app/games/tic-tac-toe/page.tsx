"use client";

import { useState } from "react";
import Board from "@/games/tic-tac-toe/components/Board";
import GameMode from "@/games/tic-tac-toe/components/GameMode";

type GameModeType = "friend" | "computer" | "online";
type Difficulty = "basic" | "intermediate" | "hard";

export default function TicTacToePage() {
  const [mode, setMode] = useState<GameModeType | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  // Main menu
  if (!mode) {
    return <GameMode onSelectMode={setMode} />;
  }

  // Play with Friend
  if (mode === "friend") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6">
        <button
          onClick={() => setMode(null)}
          className="rounded-lg border px-4 py-2"
        >
          ← Back to Menu
        </button>

        <h2 className="text-2xl font-bold">
          👥 Play with Friend
        </h2>

        <Board />
      </main>
    );
  }

  // Computer difficulty selection
  if (mode === "computer" && !difficulty) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
        <button
          onClick={() => setMode(null)}
          className="rounded-lg border px-4 py-2"
        >
          ← Back to Menu
        </button>

        <h1 className="text-4xl font-bold">
          🤖 Play with Computer
        </h1>

        <p className="text-lg text-gray-500">
          Choose your difficulty
        </p>

        <div className="flex w-full max-w-md flex-col gap-4">

          <button
            onClick={() => setDifficulty("basic")}
            className="rounded-xl bg-green-500 px-6 py-5 text-xl font-bold text-white hover:bg-green-600"
          >
            🟢 Basic
            <span className="mt-1 block text-sm font-normal">
              Easy for beginners
            </span>
          </button>

          <button
            onClick={() => setDifficulty("intermediate")}
            className="rounded-xl bg-yellow-500 px-6 py-5 text-xl font-bold text-white hover:bg-yellow-600"
          >
            🟡 Intermediate
            <span className="mt-1 block text-sm font-normal">
              Computer can block your moves
            </span>
          </button>

          <button
            onClick={() => setDifficulty("hard")}
            className="rounded-xl bg-red-500 px-6 py-5 text-xl font-bold text-white hover:bg-red-600"
          >
            🔴 Hard
            <span className="mt-1 block text-sm font-normal">
              Very difficult to beat
            </span>
          </button>

        </div>
      </main>
    );
  }

  // Computer game
  if (mode === "computer" && difficulty) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center gap-6">
        <button
          onClick={() => setDifficulty(null)}
          className="rounded-lg border px-4 py-2"
        >
          ← Change Difficulty
        </button>

        <h2 className="text-2xl font-bold">
          🤖 Computer -{" "}
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </h2>

        <Board
        gameMode="computer"
        difficulty={difficulty}
        />
      </main>
    );
  }

  // Online mode
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <button
        onClick={() => setMode(null)}
        className="rounded-lg border px-4 py-2"
      >
        ← Back to Menu
      </button>

      <h2 className="text-2xl font-bold">
        🌐 Play with Online Friend
      </h2>

      <p>Online multiplayer will be added next.</p>
    </main>
  );
}