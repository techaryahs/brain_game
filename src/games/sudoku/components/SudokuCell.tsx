type SudokuCellProps = {
  value: number;
  fixed: boolean;
  selected: boolean;
  hintTarget: boolean;
  related: boolean;
  invalid: boolean;
  row: number;
  col: number;
  onClick: () => void;
};

export default function SudokuCell({
  value,
  fixed,
  selected,
  hintTarget,
  related,
  invalid,
  row,
  col,
  onClick,
}: SudokuCellProps) {
  const baseClasses =
    "flex aspect-square items-center justify-center border border-slate-300 text-lg font-bold transition-colors sm:text-2xl";

  const boxBorderClasses = `${col % 3 === 0 && col !== 0 ? "border-l-2 border-l-slate-500" : ""} ${row % 3 === 0 && row !== 0 ? "border-t-2 border-t-slate-500" : ""}`;

  const stateClasses = selected && hintTarget
    ? "relative z-10 bg-amber-400 text-slate-950 ring-2 ring-amber-600"
    : selected
    ? "relative z-10 bg-sky-500 text-white ring-2 ring-sky-700"
    : invalid
      ? "bg-red-100 text-red-700"
      : related
        ? "bg-sky-100 text-slate-900"
        : "bg-white text-slate-800 hover:bg-sky-50";

  return (
    <button
      type="button"
      aria-label={value === 0 ? "Empty cell" : `Cell value ${value}`}
      onClick={onClick}
      className={`${baseClasses} ${boxBorderClasses} ${stateClasses} ${fixed ? "font-black text-slate-900" : "text-sky-700"}`}
    >
      {value === 0 ? "" : value}
    </button>
  );
}
