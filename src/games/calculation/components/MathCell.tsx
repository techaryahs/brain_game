"use client";

import { MathCell as MathCellType } from "../types";

interface Props {
  cell: MathCellType;
  selected: boolean;
  incorrect: boolean;
  onClick: () => void;
}

export default function MathCell({
  cell,
  selected,
  incorrect,
  onClick,
}: Props) {
  if (cell.type === "empty") {
    return <div className="aspect-square" />;
  }

  const isNumber = cell.type === "number";

  return (
    <button
      onClick={onClick}
      disabled={cell.fixed}
      className={`
        aspect-square
        flex
        items-center
        justify-center
        rounded-xl
        border
        text-xl
        sm:text-2xl
        md:text-3xl
        font-bold
        transition-all
        select-none

        ${
          isNumber
            ? "bg-white text-slate-900 border-slate-300"
            : "bg-slate-800 text-white border-slate-700"
        }

        ${selected ? "ring-4 ring-blue-400 scale-105" : ""}

        ${incorrect ? "bg-red-100 border-red-500 text-red-600" : ""}

        ${!cell.fixed ? "cursor-pointer hover:scale-105" : ""}
      `}
    >
      {cell.value ?? ""}
    </button>
  );
}
