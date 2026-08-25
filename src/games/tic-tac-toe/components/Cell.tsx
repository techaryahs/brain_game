"use client";

import { CellValue } from "../types";

interface CellProps {
  value: CellValue;
  onClick: () => void;
}

export default function Cell({ value, onClick }: CellProps) {
  return (
    <button
      onClick={onClick}
      className="h-24 w-24 border-2 border-gray-800 text-4xl font-bold"
    >
      {value}
    </button>
  );
}