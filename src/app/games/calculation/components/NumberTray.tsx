"use client";

import { NumberTile } from "./PuzzleBoard";

type NumberTrayProps = {
  tiles: NumberTile[];
  usedTileIds: Set<string>;
  onNumberClick: (tile: NumberTile) => void;
};

export default function NumberTray({
  tiles,
  usedTileIds,
  onNumberClick,
}: NumberTrayProps) {
  return (
    <div className="mx-auto mt-6 max-w-[440px]">
      <p className="mb-3 text-center text-xs font-bold tracking-[0.2em] text-slate-400">
        NUMBER TILES
      </p>

      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {tiles.map((tile) => {
          const used = usedTileIds.has(tile.id);

          return (
            <div key={tile.id} className="relative aspect-square">
              {/* Ghost shadow/placeholder to maintain layout when tile moves out */}
              <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-slate-200/50" />
              
              <button
                disabled={used}
                onClick={() => onNumberClick(tile)}
                className={`
                  absolute inset-0 w-full h-full
                  rounded-2xl border-2 border-b-4
                  flex items-center justify-center
                  text-2xl sm:text-3xl font-black
                  transition-all duration-200
                  ${
                    used
                      ? "opacity-0 scale-75 translate-y-2 pointer-events-none"
                      : "opacity-100 scale-100 border-blue-200 border-b-blue-300 bg-white text-blue-700 shadow-sm hover:-translate-y-1 hover:shadow-md active:scale-95 active:translate-y-0 active:border-b-2"
                  }
                `}
              >
                {tile.value}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
