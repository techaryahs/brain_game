"use client";

interface LevelCompleteProps {
  level: number;
  onNextLevel: () => void;
  onReplay: () => void;
}

export default function LevelComplete({
  level,
  onNextLevel,
  onReplay,
}: LevelCompleteProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-5 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-[28px] bg-white p-7 text-center shadow-2xl border border-[#DBCAB3]/30">
        {/* Success icon */}
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#FDF7E5]">
          <span className="text-4xl text-[#C59B5F]">✓</span>
        </div>

        {/* Title */}
        <p className="mb-1 text-sm font-bold uppercase tracking-widest text-[#C59B5F]">
          Puzzle Cleared
        </p>

        <h2 className="text-3xl font-black text-[#795548]">Level {level}</h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Great job! You cleared every path on the board.
        </p>

        {/* Actions */}
        <div className="mt-7 flex flex-col gap-3">
          <button
            type="button"
            onClick={onNextLevel}
            className="
              w-full
              rounded-2xl
              bg-[#795548]
              px-5
              py-3.5
              text-sm
              font-bold
              text-white
              transition-all
              hover:scale-[1.02]
              hover:bg-[#5D4037]
              active:scale-[0.98]
            "
          >
            Next Level
          </button>

          <button
            type="button"
            onClick={onReplay}
            className="
              w-full
              rounded-2xl
              border
              border-[#DBCAB3]
              bg-white
              px-5
              py-3.5
              text-sm
              font-bold
              text-[#795548]
              transition-all
              hover:bg-[#FDF7E5]
              active:scale-[0.98]
            "
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}
