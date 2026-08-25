type SudokuCellProps = {
  value: number;
  fixed: boolean;
  selected: boolean;
  related: boolean;
  invalid: boolean;
  onClick: () => void;
};

export default function SudokuCell({
  value,
  fixed,
  selected,
  related,
  invalid,
  onClick,
}: SudokuCellProps) {
  const baseClasses =
    "flex aspect-square items-center justify-center border border-slate-300 bg-slate-900 text-lg font-bold transition sm:text-2xl";

  const stateClasses = selected
    ? "bg-blue-600 text-white ring-2 ring-blue-300"
    : invalid
      ? "bg-red-500/20 text-red-200"
      : related
        ? "bg-slate-800 text-slate-100"
        : "bg-slate-900 text-slate-100";

  return (
    <button
      type="button"
      aria-label={value === 0 ? "Empty cell" : `Cell value ${value}`}
      onClick={onClick}
      className={`${baseClasses} ${stateClasses} ${fixed ? "font-black text-cyan-300" : ""}`}
      disabled={fixed}
    >
      {value === 0 ? "" : value}
    </button>
  );
}
