"use client";

import { useSound } from "../audio/useSound";

type LevelCompleteProps = {
  isGameOver?: boolean;
  level: number;
  mistakes: number;
  finalScore?: number;
  bestCombo?: number;
  accuracy?: number;
  fastestPuzzle?: number;
  livesUsed?: number;
  onNext: () => void;
  onLevels: () => void;
};

export default function LevelComplete({
  isGameOver = false,
  level,
  mistakes,
  finalScore,
  bestCombo,
  accuracy,
  fastestPuzzle,
  livesUsed,
  onNext,
  onLevels,
}: LevelCompleteProps) {
  const { playButton } = useSound();
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 animate-fade-in">
      <div className="w-full max-w-md rounded-[32px] bg-white p-8 text-center shadow-2xl animate-fade-in-up">
        <div className="text-6xl drop-shadow-md">{isGameOver ? "💀" : "🎉"}</div>

        <h1 className="mt-5 text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
          {isGameOver ? "GAME OVER" : "LEVEL COMPLETE!"}
        </h1>

        <p className="mt-2 text-slate-500 font-medium">
          {isGameOver ? "Better luck next time" : `You solved Level ${level}`}
        </p>

        {!isGameOver && (
          <div className="my-8 flex justify-center gap-2 text-5xl sm:text-6xl">
            {Array.from({ length: 3 }).map((_, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 150}ms` }}
                className={`
                  animate-star-bounce
                  ${index < stars ? "drop-shadow-lg" : "grayscale opacity-20"}
                `}
              >
                ⭐
              </span>
            ))}
          </div>
        )}

        <div className={`mt-8 mb-8 grid ${isGameOver ? 'grid-cols-2' : 'grid-cols-1'} gap-3 text-left`}>
          {finalScore !== undefined && (
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 col-span-2 text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-slate-400">FINAL SCORE</p>
              <p className="mt-1 text-4xl font-black text-blue-600">{finalScore}</p>
            </div>
          )}
          {bestCombo !== undefined && (
            <div className="rounded-2xl bg-orange-50 p-4 border border-orange-100 text-center">
              <p className="text-[10px] font-bold tracking-[0.2em] text-orange-400">🔥 BEST COMBO</p>
              <p className="mt-1 text-2xl font-black text-orange-600">{bestCombo}</p>
            </div>
          )}
          {fastestPuzzle !== undefined && (
            <div className="rounded-2xl bg-yellow-50 p-4 border border-yellow-100 text-center">
              <p className="text-[10px] font-bold tracking-[0.2em] text-yellow-500">⚡ FASTEST</p>
              <p className="mt-1 text-2xl font-black text-yellow-600">{fastestPuzzle.toFixed(1)}s</p>
            </div>
          )}
          {accuracy !== undefined && (
            <div className="rounded-2xl bg-green-50 p-4 border border-green-100 text-center">
              <p className="text-[10px] font-bold tracking-[0.2em] text-green-500">🎯 ACCURACY</p>
              <p className="mt-1 text-2xl font-black text-green-600">{accuracy.toFixed(0)}%</p>
            </div>
          )}
          {livesUsed !== undefined && (
            <div className="rounded-2xl bg-red-50 p-4 border border-red-100 text-center">
              <p className="text-[10px] font-bold tracking-[0.2em] text-red-400">❤️ LIVES USED</p>
              <p className="mt-1 text-2xl font-black text-red-600">{livesUsed}/3</p>
            </div>
          )}
          
          {!isGameOver && (
            <div className="rounded-2xl bg-slate-50 p-4 border border-slate-100 text-center">
              <p className="text-xs font-bold tracking-[0.2em] text-slate-400">MISTAKES</p>
              <p className="mt-1 text-3xl font-black text-slate-800">{mistakes}</p>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            playButton();
            onNext();
          }}
          className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-black tracking-wide text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:-translate-y-1 active:scale-95 active:translate-y-0"
        >
          {isGameOver ? "PLAY AGAIN" : "NEXT LEVEL →"}
        </button>

        <button
          onClick={() => {
            playButton();
            onLevels();
          }}
          className="mt-3 w-full rounded-2xl bg-slate-100 py-4 font-bold tracking-wide text-slate-500 transition-all hover:bg-slate-200 hover:text-slate-700 active:scale-95"
        >
          LEVEL SELECT
        </button>
      </div>
    </div>
  );
}
