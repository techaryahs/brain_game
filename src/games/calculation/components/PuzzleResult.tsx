"use client";

interface Props {
  score: number;
  mistakes: number;
  hints: number;
  onPlayAgain: () => void;
}

export default function PuzzleResult({
  score,
  mistakes,
  hints,
  onPlayAgain,
}: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="w-full max-w-lg text-center">
        <div className="text-7xl mb-5">🧠</div>

        <h1 className="text-4xl font-bold">Puzzle Complete!</h1>

        <p className="text-slate-400 mt-3">
          Great work. Your brain got a workout.
        </p>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mt-8">
          <div className="text-slate-400">Your Score</div>

          <div className="text-6xl font-black text-blue-400 mt-2">{score}</div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-slate-800 rounded-xl p-4">
              <div className="text-slate-400 text-sm">Mistakes</div>

              <div className="text-xl font-bold">{mistakes}</div>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <div className="text-slate-400 text-sm">Hints Used</div>

              <div className="text-xl font-bold">{hints}</div>
            </div>
          </div>
        </div>

        <button
          onClick={onPlayAgain}
          className="w-full mt-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-lg transition"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
