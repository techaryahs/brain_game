"use client";

interface Props {
  numbers: number[];
  selectedNumber: number | null;
  onSelect: (number: number) => void;
}

export default function NumberBank({
  numbers,
  selectedNumber,
  onSelect,
}: Props) {
  return (
    <div className="mt-8">
      <h3 className="text-center text-slate-400 text-sm uppercase tracking-widest mb-4">
        Choose a Number
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        {numbers.map((number, index) => (
          <button
            key={`${number}-${index}`}
            onClick={() => onSelect(number)}
            className={`
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-xl
                font-bold
                text-xl
                transition-all

                ${
                  selectedNumber === number
                    ? "bg-blue-600 text-white scale-110 ring-4 ring-blue-300"
                    : "bg-white text-slate-900 hover:bg-blue-50"
                }
              `}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}
