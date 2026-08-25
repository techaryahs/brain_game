type NumberPadProps = {
  onValueSelect: (value: number) => void;
  onClear: () => void;
};

export default function NumberPad({ onValueSelect, onClear }: NumberPadProps) {
  return (
    <div className="grid w-full max-w-md grid-cols-5 gap-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => onValueSelect(value)}
          className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-lg font-bold text-slate-100 transition hover:border-blue-500 hover:bg-slate-800"
        >
          {value}
        </button>
      ))}

      <button
        type="button"
        onClick={onClear}
        className="col-span-2 rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-sm font-semibold text-slate-200 transition hover:border-blue-500 hover:bg-slate-800"
      >
        Clear
      </button>
    </div>
  );
}
