"use client";

interface GameModeProps {
  onSelectMode: (mode: "friend" | "computer" | "online") => void;
}

export default function GameMode({ onSelectMode }: GameModeProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-4xl font-bold">Tic Tac Toe</h1>

      <p className="text-lg text-gray-600">
        Choose how you want to play
      </p>

      <div className="flex w-full max-w-md flex-col gap-4">
        <button
          onClick={() => onSelectMode("friend")}
          className="rounded-xl bg-blue-600 px-6 py-4 text-lg font-semibold text-white hover:bg-blue-700"
        >
          👥 Play with Friend
        </button>

        <button
          onClick={() => onSelectMode("computer")}
          className="rounded-xl bg-green-600 px-6 py-4 text-lg font-semibold text-white hover:bg-green-700"
        >
          🤖 Play with Computer
        </button>

        <button
          onClick={() => onSelectMode("online")}
          className="rounded-xl bg-purple-600 px-6 py-4 text-lg font-semibold text-white hover:bg-purple-700"
        >
          🌐 Play with Online Friend
        </button>
      </div>
    </div>
  );
}