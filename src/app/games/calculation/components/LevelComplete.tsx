"use client";

import { useSound } from "../audio/useSound";

type LevelCompleteProps = {
  level: number;
  mistakes: number;
  onNext: () => void;
  onLevels: () => void;
};

export default function LevelComplete({
  level,
  mistakes,
  onNext,
  onLevels,
}: LevelCompleteProps) {
  const { playButton } = useSound();
  const stars = mistakes === 0 ? 3 : mistakes <= 2 ? 2 : 1;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 animate-fade-in">
      <div className="w-full max-w-md rounded-[32px] bg-white p-8 text-center shadow-2xl animate-fade-in-up">
        <div className="text-6xl drop-shadow-md">🎉</div>

        <h1 className="mt-5 text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
          LEVEL COMPLETE!
        </h1>

        <p className="mt-2 text-slate-500 font-medium">You solved Level {level}</p>

        {/* Stars */}
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

        <div className="mb-8 rounded-2xl bg-slate-50 p-4 border border-slate-100">
          <p className="text-xs font-bold tracking-[0.2em] text-slate-400">MISTAKES</p>
          <p className="mt-1 text-3xl font-black text-slate-800">{mistakes}</p>
        </div>

        <button
          onClick={() => {
            playButton();
            onNext();
          }}
          className="w-full rounded-2xl bg-blue-600 py-4 text-lg font-black tracking-wide text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:-translate-y-1 active:scale-95 active:translate-y-0"
        >
          NEXT LEVEL →
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
