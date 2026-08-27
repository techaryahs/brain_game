"use client";

interface HintButtonProps {
  hints: number;
  disabled?: boolean;
  onHint: () => void;
}

export default function HintButton({
  hints,
  disabled = false,
  onHint,
}: HintButtonProps) {
  const isDisabled = disabled || hints <= 0;

  return (
    <button
      type="button"
      onClick={onHint}
      disabled={isDisabled}
      className={`
        relative
        flex
        h-[72px]
        w-[72px]
        items-center
        justify-center
        rounded-full
        bg-white
        shadow-[0_10px_25px_rgba(0,0,0,0.05)]
        transition-all
        ${
          isDisabled
            ? "cursor-not-allowed opacity-70"
            : "hover:scale-105 active:scale-95"
        }
      `}
      aria-label={`Use hint, ${hints} remaining`}
    >
      <span className="text-3xl text-[#795548]">💡</span>

      {hints > 0 && (
        <span className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-sm ring-2 ring-white">
          {hints}
        </span>
      )}
    </button>
  );
}
