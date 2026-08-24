"use client";

interface Props {
  disabled: boolean;
  onClick: () => void;
}

export default function HintButton({ disabled, onClick }: Props) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="px-5 py-3 rounded-xl bg-yellow-500 hover:bg-yellow-400 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold transition"
    >
      💡 Use Hint
    </button>
  );
}
