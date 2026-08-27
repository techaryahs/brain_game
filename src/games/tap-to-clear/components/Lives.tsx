"use client";

interface LivesProps {
  lives: number;
  maxLives: number;
}

export default function Lives({ lives, maxLives }: LivesProps) {
  return (
    <div
      className="mb-6 flex items-center gap-2"
      aria-label={`${lives} lives remaining`}
    >
      {Array.from({ length: maxLives }).map((_, index) => {
        const active = index < lives;

        return (
          <span
            key={index}
            className={`
              text-xl
              transition-all
              duration-300
              ${
                active
                  ? "opacity-100"
                  : "opacity-30 grayscale sepia"
              }
            `}
            style={{
              // Using a custom color filter or just rely on the emoji for now.
              // We'll use the water drop emoji and style its opacity.
              // For a true solid color, an SVG icon is better, but emoji is okay per requirements.
              filter: active ? "hue-rotate(-15deg) saturate(1.5)" : "grayscale(100%) opacity(30%)",
            }}
          >
            💧
          </span>
        );
      })}
    </div>
  );
}
