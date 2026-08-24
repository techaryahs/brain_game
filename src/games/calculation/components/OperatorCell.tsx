import { MathOperator } from "../types";

interface Props {
  operator: MathOperator;
}

export default function OperatorCell({ operator }: Props) {
  return (
    <div className="aspect-square flex items-center justify-center rounded-xl bg-slate-800 border border-slate-700 text-white text-xl sm:text-2xl md:text-3xl font-bold">
      {operator}
    </div>
  );
}
