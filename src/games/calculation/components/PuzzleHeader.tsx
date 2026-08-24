interface Props {
  difficulty: string;
  mistakes: number;
  hints: number;
  time: number;
}

export default function PuzzleHeader({
  difficulty,
  mistakes,
  hints,
  time,
}: Props) {
  return (
    <div className="grid grid-cols-4 gap-2 mb-6">
      <div className="bg-slate-900 rounded-xl p-3 text-center">
        <div className="text-xs text-slate-500">LEVEL</div>

        <div className="font-bold capitalize">{difficulty}</div>
      </div>

      <div className="bg-slate-900 rounded-xl p-3 text-center">
        <div className="text-xs text-slate-500">TIME</div>

        <div className="font-bold">{time}s</div>
      </div>

      <div className="bg-slate-900 rounded-xl p-3 text-center">
        <div className="text-xs text-slate-500">MISTAKES</div>

        <div className="font-bold text-red-400">{mistakes}</div>
      </div>

      <div className="bg-slate-900 rounded-xl p-3 text-center">
        <div className="text-xs text-slate-500">HINTS</div>

        <div className="font-bold text-yellow-400">{hints}</div>
      </div>
    </div>
  );
}
